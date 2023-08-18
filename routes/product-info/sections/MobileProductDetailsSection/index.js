import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe'

// MUI Stuff
import { withStyles, IconButton, Typography } from '@material-ui/core';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { updateThreeDProductId } from 'redux/actions';

// picture
import productCardSkeleton from 'public/assets/jumbo/about2.png';

// utils
import regExp from 'utils/regExp';
import { getExtension } from 'utils/methods';

// components
import { ThreeDButton } from 'jumbogold/button';
import { ProductLabel } from 'jumbogold/product';
import { Image } from 'jumbogold/common';
import ProductImageSlider from '../../components/ProductImageSlider';
import ProductRatings from '../../components/ProductRatings';
import ProductPrice from '../../components/ProductPrice';
import ProductInfoTabs from '../../components/ProductInfoTabs';
import ProductVariants from '../../components/ProductVariants';
import MobileProductVariantsOptions from '../../components/MobileProductVariantsOptions';
import AddToCart from '../../components/AddToCart';
import DeliveryReturnPolicy from '../../components/DeliveryReturnPolicy';
import ProductIntroFooter from '../../components/ProductIntroFooter';
import MobileOptionsBar from '../../components/MobileOptionsBar';
import BuildRing from '../../components/BuildRing';
import CompareProduct from '../../components/CompareProduct';

// styling
import styles from './style';

const MobileProductDetailsSection = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    productDetails,
    variant: { id },
    reviewSummary,
  } = useSelector((state) => state.product);
  const {
    merchant: { profile },
  } = useSelector((state) => state);

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
            // setImageList(filteredList.length === 0 ? [productCardSkeleton] : filteredList);
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
            <div className={classes.productImage}>
              <ReactPlayer
                controls
                url={imageList[currentIndex]}
                playing
                loop
                height={331}
                width="100%"
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
    <>
      <div className={classes.MobileProductDetailsSection}>
        <div className={classes.productLabelWrapper}>
          {/* Featured Tag */}
          {productDetails.featured && <ProductLabel label="FEATURED" color="WHITE" />}

          {/* Product Label */}
          {productDetails.labels?.map(({ name, colorTheme }) => (
            <ProductLabel label={name} color={colorTheme} key={name} />
          ))}
        </div>

        {/* Product Image / Video */}
        {renderImageViewer()}

        {/* Image List */}
        {imageList.length > 1 && (
          <ProductImageSlider
            imageList={imageList}
            currentIndex={currentIndex}
            changeImage={handleChangeCurrentImage}
          />
        )}

        {/* Product Ratings */}
        <ProductRatings />

        <div
          className={classes.productNameInfoWrapper}
          style={{ paddingTop: reviewSummary.overallRating === null ? 39 : 0 }}
        >
          <div className={classes.productInfoWrapper}>
            {/* Product Name */}
            <Typography className={classes.productName}>{productDetails.name}</Typography>

            {/* Merchant Name */}
            <div className={classes.merchantInfoWrapper}>
              <Typography className={classes.merchantLabel}>From</Typography>

              {/*
              <Link href={`/merchant?merchantIds=${profile._id}`}>              
              */}
              <a>
                <Typography className={classes.merchantText}>
                  {profile.displayName}
                </Typography>
              </a>
            </div>

            {/* Brand, if no brand, then no need show */}
            {!regExp.isEmpty(productDetails.brand) && (
              <div className={classes.merchantInfoWrapper}>
                <Typography className={classes.merchantLabel}>Brand</Typography>

                <Link href={`/listing?brands=${encodeURIComponent(productDetails.brand)}`}>
                  <a>
                    <Typography className={classes.merchantText}>{productDetails.brand}</Typography>
                  </a>
                </Link>
              </div>
            )}
          </div>

          {/* 3D Icon */}
          <div className={classes.threeDIconWrapper}>
            {productDetails.enable3D && (
              <IconButton
                className={classes.threeDIcon}
                aria-label="view 3d"
                disableRipple
                onClick={handleOpen3dDialog}
              >
                <ThreeDButton size={29} />
              </IconButton>
            )}
          </div>
        </div>

        {/* Product Price */}
        <ProductPrice />

        {/* Product Info Tabs */}
        <ProductInfoTabs />

        <div className={classes.productVariantsWrapper}>
          {/* Product Variants */}
          <ProductVariants />

          {/* Product Variants Option */}
          {productDetails.options?.length !== 0 && <MobileProductVariantsOptions />}
        </div>

        {/* Add To Cart */}
        <AddToCart />

        {/* Build a ring */}
        <BuildRing />

        <CompareProduct />

        {/* Delivery Return Policy */}
        <DeliveryReturnPolicy />

        {/* Product Intro Footer */}
        <ProductIntroFooter />
      </div>

      {/* Options Bar */}
      <MobileOptionsBar />
    </>
  );
};

export default withStyles(styles)(MobileProductDetailsSection);
