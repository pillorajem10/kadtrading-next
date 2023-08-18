import React, { Fragment, useMemo, useCallback } from 'react';
import Slider from 'react-slick';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// components
import { Image } from 'jumbogold/common';

// Redux
import { useSelector } from 'react-redux';

// Picture
import prevIcon from 'public/assets/icons/chevron-left.svg';
import nextIcon from 'public/assets/icons/chevron-right.svg';
import playIcon from 'public/assets/icons/play-arrow.svg';
import loadingIcon from 'public/assets/images/longload.gif';

// Utils
import regExp from 'utils/regExp';
import { getExtension } from 'utils/methods';

// Styling
import styles from './style';

const ProductImageSlider = ({ classes, currentIndex, imageList, changeImage }) => {
  const { productDetails } = useSelector((state) => state.product);

  const CustomNextArrow = useCallback(
    (props) => {
      const { style, onClick, className } = props;

      return (
        <div
          className={`${className} ${classes.productImageListIcon}`}
          style={{ ...style }}
          onClick={onClick}
        >
          <img src={nextIcon} alt="next icon" />
        </div>
      );
    },
    [classes.productImageListIcon],
  );

  const CustomPrevArrow = useCallback(
    (props) => {
      const { style, onClick, className } = props;

      return (
        <div
          className={`${className} ${classes.productImageListIcon}`}
          style={{ ...style }}
          onClick={onClick}
        >
          <img src={prevIcon} alt="prev icon" />
        </div>
      );
    },
    [classes.productImageListIcon],
  );

  const mdSettings = useMemo(() => {
    return {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
    };
  }, []);

  const smSettings = useMemo(() => {
    return {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
    };
  }, []);

  const renderImageListWithVideo = () => {
    return imageList.map((image, index) => (
      <div
        key={index}
        className={currentIndex === index ? classes.selectedListItem : classes.listItem}
        onClick={() => changeImage(index)}
      >
        {/* Video Thumbnail */}        
        {image.type === 'link' || (getExtension(image.url) === 'mp4' || image.url.indexOf('cutwise') > -1) ? (
          <>
            <Image src={loadingIcon} alt="product slide" />
            <img src={playIcon} alt="play icon" className={classes.playIcon} />
          </>
        ) : (
          <img src={image.url} alt="product slide" />
        )}
      </div>
    ));
  };

  const renderImageListWithoutVideo = () => {
    return imageList.map((image, index) => (
      <div
        key={index}
        className={currentIndex === index ? classes.selectedListItem : classes.listItem}
        onClick={() => changeImage(index)}
      >
        <Image src={image.url} alt="product slide" />
      </div>
    ));
  };


  const renderImageList = () => {
    return imageList.map((image, index) => (
      <div
        key={index}
        className={currentIndex === index ? classes.selectedListItem : classes.listItem}
        onClick={() => changeImage(index)}
      >
        {/* Video Thumbnail */}        
        {image.type === 'link' || (getExtension(image.url) === 'mp4' || image.url.indexOf('cutwise') > -1) ? (
          <>
            <Image src={loadingIcon} alt="product slide" />
            <img src={playIcon} alt="play icon" className={classes.playIcon} />
          </>
        ) : (
          <img src={image.url} alt="product slide" />
        )}
      </div>
    ));
  };

  return (
    <>
      <Hidden smDown>
        <div className={classes.productImageList}>
          <Slider {...mdSettings}>{renderImageList()}</Slider>
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className={classes.productImageList}>
          <Slider {...smSettings}>{renderImageList()}</Slider>
        </div>
      </Hidden>
    </>
  );

  /*
  return (
    <>
      <Hidden smDown>
        <div className={classes.productImageList}>
          {!regExp.isEmpty(productDetails.video) ? (
            <Slider {...mdSettings}>{renderImageListWithVideo()}</Slider>
          ) : (
            <Slider {...mdSettings}>{renderImageListWithoutVideo()}</Slider>
          )}
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className={classes.productImageList}>
          {!regExp.isEmpty(productDetails.video) ? (
            <Slider {...smSettings}>{renderImageListWithVideo()}</Slider>
          ) : (
            <Slider {...smSettings}>{renderImageListWithoutVideo()}</Slider>
          )}
        </div>
      </Hidden>
    </>
  );
  */
};

export default withStyles(styles)(ProductImageSlider);
