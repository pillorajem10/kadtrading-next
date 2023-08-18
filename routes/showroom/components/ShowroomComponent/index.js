import React, { useCallback, useEffect, useState } from 'react';
import * as THREE from 'three';
import * as PANOLENS from 'panolens';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// picture
import imageStand from 'public/assets/images/showroom/shi.png';
import imageProduct from 'public/assets/images/showroom/shi.png';
import imagePortal from 'public/assets/images/showroom/shi.png';

// styling
import styles from './style';

let viewer;

const getHeight = () =>
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const getWidth = () =>
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const ShowroomComponent = (props) => {
  const { classes, productSet, onSelect } = props;
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState(undefined);
  const [image1Loaded, setImage1Loaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);
  const [image3Loaded, setImage3Loaded] = useState(false);

  // when clicking an infospot, doing lookup on productSet then setting as selected product
  const onClickStart = (evt) => {
    for (let i = 0; i < productSet.showRooms.length; i += 1) {
      for (let j = 0; j < productSet.showRooms[i].infoSpots.length; j += 1) {
        if (
          productSet.showRooms[i].infoSpots[j].x === evt.target.position.x &&
          productSet.showRooms[i].infoSpots[j].y === evt.target.position.y
        ) {
          setSelected(productSet.showRooms[i].infoSpots[j]);
          onSelect(productSet.showRooms[i].infoSpots[j]);
        }
        if (selected && selected.productTitle !== '') {
          break;
        }
      }
    }

    if (selected && selected.type === 'product') {
      setSelected(selected);
      onSelect(selected);
    }
  };

  // this function sets the panolens viewer object
  const initialSetup = useCallback(() => {
    const baseScale = 300;
    const radius = 10000 / 2;
    let position;
    let infospot;

    const panorama = productSet.showRoomImage.map((showRoomImage) => {
      return new PANOLENS.ImagePanorama(showRoomImage);
    });

    viewer = new PANOLENS.Viewer({
      container: document.querySelector('#pcontainer'), // A DOM Element container
      controlBar: false, // Vsibility of bottom control bar
      autoHideInfospot: false, // Auto hide infospots
      horizontalView: false, // Allow only horizontal camera control
      cameraFov: 65, // Camera field of view in degree
      reverseDragging: false, // Reverse orbit control direction
      enableReticle: false, // Enable reticle for mouseless interaction
      dwellTime: 1000, // Dwell time for reticle selection in millisecond
      autoReticleSelect: true, // Auto select a clickable target after dwellTime
      viewIndicator: false, // Adds an angle view indicator in upper left corner
    });

    for (let i = 0; i < productSet.showRooms.length; i += 1) {
      for (let k = 0; k < productSet.showRooms[i].infoSpots.length; k += 1) {
        if (productSet.showRooms[i].infoSpots[k].type === 'stand') {
          const pos = new THREE.Vector3(
            productSet.showRooms[i].infoSpots[k].x,
            productSet.showRooms[i].infoSpots[k].y,
            productSet.showRooms[i].infoSpots[k].z,
          );
          panorama[i].link(
            panorama.find((p) => p.src === productSet.showRooms[i].infoSpots[k].link),
            pos,
            (baseScale * pos.length()) / radius,
            imageStand,
          );
        }

        if (productSet.showRooms[i].infoSpots[k].type === 'portal') {
          const pos = new THREE.Vector3(
            productSet.showRooms[i].infoSpots[k].x,
            productSet.showRooms[i].infoSpots[k].y,
            productSet.showRooms[i].infoSpots[k].z,
          );
          panorama[i].link(
            panorama.find((p) => p.src === productSet.showRooms[i].infoSpots[k].link),
            pos,
            (baseScale * pos.length()) / radius,
            imagePortal,
          );
        }

        if (productSet.showRooms[i].infoSpots[k].type === 'product') {
          position = new THREE.Vector3(
            productSet.showRooms[i].infoSpots[k].x,
            productSet.showRooms[i].infoSpots[k].y,
            productSet.showRooms[i].infoSpots[k].z,
          );
          infospot = new PANOLENS.Infospot((baseScale * position.length()) / radius, imageProduct);

          infospot.position.copy(position);
          infospot.addEventListener('click', onClickStart);
          panorama[i].add(infospot);
        }
      }
    }

    for (let z = 0; z < panorama.length; z += 1) {
      viewer.add(panorama[z]);
    }

    viewer.renderer.sortObjects = true;
    const cam = viewer.getCamera();
    cam.target = new THREE.Vector3(0, 0, 0);
    cam.updateProjectionMatrix();

    const control = viewer.getControl();
    control.maxFov = 75;

    control.panUp(productSet.panUp);
    control.panLeft(productSet.panLeft);
    control.rotateLeft(productSet.rotateLeft);
  }, []);

  // effect to initialize loaders, height, and width
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);

    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => {
        setHeight(getHeight());
        setWidth(getWidth());
        viewer.onWindowResize(window.innerWidth, window.innerHeight);
      }, 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // function that uses TextureLoader to load icon used in infospots
    async function loadInitialTexture() {
      await PANOLENS.TextureLoader.load(imageStand, () => setImage1Loaded(true));
      await PANOLENS.TextureLoader.load(imagePortal, () => setImage2Loaded(true));
      await PANOLENS.TextureLoader.load(imageProduct, () => setImage3Loaded(true));
    }
    loadInitialTexture();

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  // effect that executes initialSetup once icons are loaded using TextureLoader
  useEffect(() => {
    if (image1Loaded && image2Loaded && image3Loaded) {
      initialSetup();
    }
  }, [initialSetup, image1Loaded, image2Loaded, image3Loaded]);

  return (
    <>
      <div
        className={classes.pcontainer}
        id="pcontainer"
        style={{
          width,
          height,
        }}
      />
      <div className={classes.copyright}>© 2021 JUMBO GOLD & DIAMONDS. ALL RIGHTS RESERVED.</div>
    </>
  );
};

export default withStyles(styles)(ShowroomComponent);
