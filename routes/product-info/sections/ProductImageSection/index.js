import React, { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe'

// MUI Stuff
import { withStyles, IconButton } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateThreeDProductId } from 'redux/actions';

// Picture
import productCardSkeleton from 'public/assets/jumbo/about2.png';

// Utils
import regExp from 'utils/regExp';
import { getExtension } from 'utils/methods';

// components
import { ThreeDButton } from 'jumbogold/button';
import { Image } from 'jumbogold/common';
import ProductImageSlider from '../../components/ProductImageSlider';

// Styling
import styles from './style';

const ProductImageSection = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    variant: { id },
    productDetails,
  } = useSelector((state) => state.product);

  const router = useRouter();

  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    return () => {
      setCurrentIndex(0);
    };
  }, [router.asPath, id]);

  useEffect(() => {
    if (Object.keys(productDetails).length > 0) {
      if (productDetails.represent === 'setting') {
        if (productDetails.variants) {
          let filteredList = productDetails.variants.find((variant) => variant.id === id)?.images;
          if (filteredList) {
            if (!regExp.isEmpty(productDetails.video)) {
              filteredList = [productDetails.video, ...filteredList];
            }
            if (filteredList.length === 0) {
              filteredList = [productCardSkeleton];
            }
            setImageList(filteredList);
          }
        }
      } else {
        let filteredList = [];
           {/*
            rep: setting
            type: product
            
            rep: globald
            type: diamond

            rep: inhouse
            type: gemstone

            rep: inhouse
            type: diamond
          */}

          // global diamond
          if (productDetails.represent === 'globald' && productDetails.type === 'diamond') {
            if (productDetails.imagefile_url !== '') filteredList.push({ type: 'image', url: productDetails.imagefile_url });
            if (productDetails.video_url !== '') filteredList.push({ type: 'link', url: productDetails.video_url });
          }

          // inhouse and gemstone
          if (productDetails.represent === 'inhouse') {
            if (productDetails.images.length > 0) {
              productDetails.images.map(img => {
                filteredList.push({ type: 'image', url: img });
              });
            }
            if (productDetails.videos.length > 0) {
              productDetails.videos.map(vd => {
                filteredList.push({ type: 'link', url: vd });
              });
            }
          } 
          /*
          else {
            if (productDetails.image && productDetails.image !== '') filteredList.push({ url: productDetails.image });
            if (productDetails.video && productDetails.video !== '') filteredList.push({ url: productDetails.video });   
          }     
          */

        setImageList(filteredList);
      }
    }
  }, [productDetails, id]);

  const handleOpen3dDialog = () => {
    dispatch(updateThreeDProductId(productDetails.id));
  };

  const handleChangeCurrentImage = (index) => setCurrentIndex(index);

  const handleChangeVideoHeight = () => {
    if (window.innerWidth > 1024) {
      return 490;
    }

    if (window.innerWidth >= 1024 && window.innerWidth > 768) {
      return 395;
    }

    return 315;
  };

  const renderImageViewer = () => {    
    if (!regExp.isEmptyObject(productDetails) && imageList[currentIndex]) {
      if (imageList.length > 0) {
        if (imageList[currentIndex].type === 'link') {
          return (
            <Iframe url={imageList[currentIndex].url}
              width="100%"
              height="450px"
              display="initial"
            />
          );    
        }
  
        if (getExtension(imageList[currentIndex].url) === 'mp4' && !regExp.isEmpty(productDetails.video)) {
          return (
            <div className={classes.productVideo}>
              <ReactPlayer
                controls={false}
                url={imageList[currentIndex].url}
                playing
                loop
                width="100%"
                height={handleChangeVideoHeight()}
                muted
              />
            </div>
          );
        }

        if (imageList[currentIndex].type === 'image') {
          return <Image src={imageList[currentIndex].url} alt="current" className={classes.productImage} />;                
        }

        if (productDetails.represent === 'setting') {
          return <Image src={imageList[currentIndex].url} alt="current" className={classes.productImage} />;        
        } else {
          return <Image src={imageList[currentIndex].url} alt="current" className={classes.productImage} />;
        }
      }
    }

    return <Image src={productCardSkeleton} alt="current" className={classes.productImage} />;
  };

  if (Object.keys(productDetails).length === 0) return null;

  return (
    <Fragment>
      <div className={classes.productImageSection}>
        <div className={classes.productImageWrapper}>
          {/* Product Image / Player */}
          {renderImageViewer()}

          {/* 3D Model Icon */}
          {productDetails.enable3D && (
            <IconButton
              className={classes.threeDIcon}
              aria-label="view 3d"
              disableRipple
              onClick={handleOpen3dDialog}
            >
              <ThreeDButton size={50} />
            </IconButton>
          )}
        </div>

        {/* Image List */}
        {imageList.length > 1 && (
          <ProductImageSlider
            imageList={imageList}
            currentIndex={currentIndex}
            changeImage={handleChangeCurrentImage}
          />
        )}
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(ProductImageSection);
