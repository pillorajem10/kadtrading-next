import React, { useCallback, useEffect, useState } from 'react';
import * as JSZip from 'jszip';

// Three js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// constant
import { environment, targetEnv } from 'constant/environmentConfig';

// 3D Environment
import px from 'public/assets/images/environment/px.png';
import nx from 'public/assets/images/environment/nx.png';
import py from 'public/assets/images/environment/py.png';
import ny from 'public/assets/images/environment/ny.png';
import pz from 'public/assets/images/environment/pz.png';
import nz from 'public/assets/images/environment/nz.png';

// Images
import LongLoad from 'public/assets/images/longload.gif';

import {
  MAP_NAMES,
  getHeight,
  getWidth,
  getModelWidth,
  product3D,
  initialBackground,
  knownProps,
} from './constants';

// Styling
import styles from './style';

let camera;
let content;
let controls;
let el;
let envMap;
let threeD;
let renderer;
let requestID;
let scene;

const ThreeComponent = ({ classes, backgroundColor = 0xffffff, product, onError }) => {
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Preparing model..');
  const [variantId, setVariantId] = useState('');
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [zipFile, setZipfile] = useState(null);

  // function that sets 3d model in position
  const frameArea = (sizeToFitOnScreen, boxSize, boxCenter) => {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * 0.5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);

    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = new THREE.Vector3()
      .subVectors(camera.position, boxCenter)
      .multiply(new THREE.Vector3(1, 0, 1))
      .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  };

  // setting up node material that will be used on texture encoding
  const mutateNodeMaterial = (material) => {
    return new THREE.MeshStandardMaterial({
      name: material.name,
      envMap,
    });
  };

  // main traverse loop for texture encoding extracted from zip file
  const traverseMaterials = (object, callback) => {
    object.traverse((node) => {
      if (!node.isMesh) {
        return;
      }
      if (Array.isArray(node.material)) {
        node.materials = node.material.map((mat) => mutateNodeMaterial(mat));
      } else {
        node.material = mutateNodeMaterial(node.material);
      }

      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach(callback);

      setTimeout(() => {
        setFinishedLoading(true);
      }, 5000);
    });
  };

  // main texture encoding of extracted texture files
  const updateTextureEncoding = async () => {
    const encoding = THREE.sRGBEncoding;
    const manager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(manager);
    const budgetStash = [];
    setLoadingText('Mapping textures..');

    await Promise.all(
      Object.keys(threeD.textures).map((texture) => {
        return Promise.all(
          threeD.textures[texture].map(async (t) => {
            const txtre = await textureLoader.load(t.url);
            budgetStash.push({
              material: texture,
              fileName: t.name,
              texture: txtre,
            });
          }),
        );
      }),
    );

    traverseMaterials(content, (material) => {
      const textureSet = budgetStash.filter((v) => v.material === material.name);
      material.envMapIntensity = 1.7;
      textureSet.forEach((b) => {
        if (b.material === material.name) {
          if (b.fileName.includes('albedo')) {
            material.map = b.texture;
          }
          if (b.fileName.includes('emissive')) {
            material.emissive = new THREE.Color(0xffce8c);
            material.emissiveMap = b.texture;
            material.emissiveIntensity = 1.4;
          }
          if (b.fileName.toLowerCase().includes('_ao')) {
            material.lightMap = b.texture;
            material.lightMapIntensity = 1;
          }
          if (b.fileName.includes('normal')) {
            material.normalMap = b.texture;
          }
          if (b.fileName.includes('roughness')) {
            material.roughnessMap = b.texture;
            material.roughness = 1;
          }
          if (b.fileName.includes('metallic')) {
            material.metalnessMap = b.texture;
            material.metalness = 1;
          }
          if (b.fileName.includes('opacity')) {
            material.alphaMap = b.texture;
            material.alphaTest = 0.25;
            material.transparent = false;
          }
        }
      });

      if (material.map) {
        material.map.encoding = encoding;
      }
      if (material.emissiveMap) {
        material.emissiveMap.encoding = encoding;
      }
      if (material.lightMap) {
        material.lightMap.encoding = encoding;
      }
      if (material.metalnessMap) {
        material.metalnessMap.encoding = encoding;
      }
      if (material.normalMap) {
        material.normalMap.encoding = encoding;
      }
      if (material.roughnessMap) {
        material.roughnessMap.encoding = encoding;
      }
      if (material.alphaMap) {
        material.alphaMap.encoding = encoding;
      }

      if (
        material.map ||
        material.aoMap ||
        material.lightMap ||
        material.emissiveMap ||
        material.metalnessMap ||
        material.normalMap ||
        material.roughnessMap ||
        material.alphaMap
      ) {
        material.needsUpdate = true;
      }
    });
  };

  // initialize environment map that will be used by the 3d model
  const loadBackground = (bg) => {
    const urls = bg.list;
    const loader = new THREE.CubeTextureLoader();
    loader.load(urls, (texture) => {
      envMap = texture;
      envMap.format = THREE.RGBFormat;
      updateTextureEncoding();
    });
  };

  // using industrial room set as background
  const updateEnvironmentx = () => {
    const background = {
      path: '/static/media/',
      list: [px, nx, py, ny, pz, nz],
    };
    loadBackground(background);
  };

  // clean up of existing scene and node object, traversing into MAP_NAMES
  const clear = () => {
    if (!content) return;
    scene.remove(content);
    // dispose geometry
    content.traverse((node) => {
      if (!node.isMesh) return;
      node.geometry.dispose();
    });

    traverseMaterials(content, (material) => {
      MAP_NAMES.forEach((map) => {
        if (material[map]) material[map].dispose();
      });
    });
  };

  // setting up default lights, that is used to light up the 3d model
  const setContent = (object) => {
    clear();
    object.updateMatrixWorld();

    const ambientIntensity = 0.3;
    const ambientColor = 0xffffff;
    const directIntensity = 0.8 * Math.PI; // TODO(#116)
    const directColor = 0xffffff;

    const hemiLight = new THREE.HemisphereLight();
    hemiLight.name = 'hemi_light';
    scene.add(hemiLight);

    const light1 = new THREE.AmbientLight(ambientColor, ambientIntensity);
    light1.name = 'ambient_light';
    camera.add(light1);

    const light2 = new THREE.DirectionalLight(directColor, directIntensity);
    light2.position.set(0.5, 0, 0.866); // ~60º
    light2.name = 'main_light';
    camera.add(light2);
    content = object;
  };

  // initialization of scene object; loading of DAE file using DAELoader
  const sceneSetup = () => {
    const { background3D } = product;
    scene = new THREE.Scene();

    scene.background = new THREE.Color(
      background3D ? initialBackground[background3D] : initialBackground.WHITE,
    );

    camera = new THREE.PerspectiveCamera(
      45, // fov = field of view
      width / height, // aspect ratio
      0.01, // near plane
      1000, // far plane
    );

    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    if (!el || el === null) return;

    controls = new OrbitControls(camera, el);
    controls.autoRotate = false;
    controls.autoRotateSpeed = -10;
    controls.screenSpacePanning = true;
    controls.noPan = true;
    controls.update();

    el.appendChild(renderer.domElement);
    const daeLoader = new ColladaLoader();
    daeLoader.load(
      threeD.dae,
      (obj) => {
        updateEnvironmentx();
        setContent(obj.scene);
        camera.position.copy(product3D.cameraPosition);
        scene.add(obj.scene);

        const box = new THREE.Box3().setFromObject(obj.scene);
        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());
        const modelWidth = getModelWidth(width, height);
        frameArea(modelWidth * 0.5, boxSize, boxCenter);

        controls.target.copy(boxCenter);
        controls.minDistance = 0;
        controls.maxDistance = Infinity;
        controls.update();
      },
      () => {},
      () => onError(),
    );
  };

  // trigger to execute TLougLLMOhLD_fQQc26v0wuM3QP9C54MdO4vsl3x31g
  const startAnimationLoop = () => {
    if (scene) {
      renderer.render(scene, camera);
      requestID = window.requestAnimationFrame(startAnimationLoop);
    }
  };

  // setting existing materials into main texture object
  const getMaterials = (fname, mat) => {
    let materialName;
    knownProps
      .filter((kprops) => fname.indexOf(kprops) > -1)
      .map((kprops) => {
        const length = fname.indexOf(kprops);
        materialName = fname.substr(0, length);
        if (!mat.includes(materialName)) {
          threeD.textures[materialName] = [];
          mat.push(materialName);
        }
        return kprops;
      });
    return { materialName };
  };

  // checking if zip file content is a directory or file
  const isValidFile = ({ newZip, file }) => {
    return (
      !newZip.file(file).dir &&
      newZip.file(file).name.indexOf('__MACOSX') === -1 &&
      newZip.file(file).name.indexOf('DS_Store') === -1
    );
  };

  // checking if zip file content is a dae file
  const isValidDaeFile = ({ newZip, file }) => {
    return (
      newZip.file(file).name.toLowerCase().indexOf('.dae') > -1 &&
      newZip.file(file).name.indexOf('model/textures/') === -1
    );
  };

  // checking if zip file content is a valid texture file
  const isValidTextureFile = ({ newZip, file }) => {
    return !newZip.file(file).dir && newZip.file(file).name.indexOf('model/textures/') > -1;
  };

  // function that loops into the textures and set it on main texture/dae object
  const processTextureFiles = async ({ newZip, file }, materials) => {
    const fileName = newZip.file(file).name.substr('model/textures/'.length);
    const { materialName } = getMaterials(fileName, materials);
    const textureFile = await newZip.file(file).async('blob');
    if (threeD.textures[materialName]) {
      threeD.textures[materialName].push({
        name: fileName,
        url: window.URL.createObjectURL(textureFile),
      });
    }
  };

  // function that counts number of textures included in the zip file
  const getTextureCount = (newZip, zip) => {
    let count = 0;
    Object.keys(zip.files)
      .filter((file) => newZip.file(file) !== null)
      .map((file) => {
        if (isValidFile({ newZip, file })) {
          count += 1;
        }
        return file;
      });
    return count;
  };

  // function to extract downloaded zip file
  const extractZipFile = async (f) => {
    const newZip = new JSZip();
    setLoadingText('Extracting assets..');
    setFinishedLoading(false);

    await newZip.loadAsync(f).then(async (zip) => {
      const materials = [];
      const textureCount = getTextureCount(newZip, zip);

      let ctr = 0;
      Object.keys(zip.files)
        .filter((file) => newZip.file(file) !== null)
        .map(async (file) => {
          const params = { newZip, file };
          if (isValidFile(params)) {
            if (isValidDaeFile(params)) {
              await newZip
                .file(file)
                .async('blob')
                .then((v) => {
                  threeD.dae = window.URL.createObjectURL(v);
                });
              ctr += 1;
            }

            if (isValidTextureFile(params)) {
              await processTextureFiles(params, materials);
              ctr += 1;
            }

            if (textureCount === ctr) {
              setLoadingText('Preparing assets..');
              sceneSetup();
              startAnimationLoop();
            }
          }
        });
    });
  };

  // fetching zip file from API
  const fetchZipfile = useCallback(
    async (id, vId) => {
      const xhr = new XMLHttpRequest();
      const modelZip = `${environment.BASE_URL}/${
        targetEnv[environment.BASE_URL]
      }/products/${id}/${vId}-W-M`;

      xhr.open('GET', modelZip, true);
      xhr.responseType = 'blob';
      xhr.onload = (evt) => {
        if (evt.target.response.type === 'text/html') {
          setVariantId('');
          onError();
        } else {
          if (scene) scene = null;
          setZipfile(new File([evt.target.response], 'model.zip', { type: 'application/zip' }));
        }
      };
      xhr.send();
    },
    [onError],
  );

  // inital effect to initialize 3d main object; initialization of height/width, and clean up function
  useEffect(() => {
    threeD = {};
    threeD.textures = {};
    setHeight(getHeight());
    setWidth(getWidth());

    // timeoutId for debounce mechanism
    let timeoutId = null;

    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => {
        if (renderer) renderer.setSize(getWidth(), getHeight());
        if (camera) {
          camera.aspect = getWidth() / getHeight();
          camera.updateProjectionMatrix();
        }
        setHeight(getHeight());
        setWidth(getWidth());
      }, 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      threeD = {};
      threeD.textures = {};
      setVariantId('');
      setZipfile(null);
      window.removeEventListener('resize', resizeListener);
      window.cancelAnimationFrame(requestID);
      if (controls) controls.dispose();
      if (renderer) renderer.dispose();
      scene = null;
    };
  }, []);

  // effect that executes fetchZipfile when variantId is obtained
  useEffect(() => {
    if (variantId !== '') fetchZipfile(product.id, variantId);
    return () => {};
  }, [product, variantId]);

  // effect that triggers to set variantId when product object is available/updated
  useEffect(() => {
    if (product) {
      const variant = product.variants.find((v) => v.hero === true);
      if (variant) {
        setVariantId(variant.id);
      }
    }
  }, [product]);

  // effect to update background color
  useEffect(() => {
    if (scene) {
      scene.background = new THREE.Color(backgroundColor);
    }
  }, [backgroundColor]);

  // effect to trigger extraction of zipfile after being successfully fetched from API
  useEffect(() => {
    if (zipFile !== null) {
      extractZipFile(zipFile);
    }
  }, [zipFile]);

  return (
    <>
      {!finishedLoading && (
        <div className={classes.loading}>
          <img src={LongLoad} className={classes.longLoad} alt="" />
          <p>{loadingText}</p>
        </div>
      )}

      <div
        className={classes.modelContainer}
        style={{ opacity: finishedLoading ? 1 : 0 }}
        ref={(ref) => {
          el = ref;
        }}
      />
    </>
  );
};

export default withStyles(styles)(ThreeComponent);
