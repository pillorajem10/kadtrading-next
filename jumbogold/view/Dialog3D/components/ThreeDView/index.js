import React, { useEffect, useState } from 'react';
import axios from 'axios';

// MUI Stuff
import { withStyles, IconButton } from '@material-ui/core';

// MUI Icons
import CloseIcon from '@material-ui/icons/Close';

// hooks
import useDisclosure from 'hooks/useDisclosure';

// Images
import PatternTop from 'public/assets/images/patterns/pattern1.png';
import PatternBottom from 'public/assets/images/patterns/pattern2.png';

// Component
import ErrorModal from 'jumbogold/modal/ErrorModal';
import ThreeComponent from '../ThreeComponent';
import ProductInfo from '../ProductInfo';
import MobileShareOptions from '../MobileShareOptions';

// Styling
import styles from './style';

const useDebounce = (func, wait) => {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(this, args);
    }, wait);
  };
};

const ThreeDView = ({ classes, handleClose, productId }) => {
  const { isOpen, toggleOpen } = useDisclosure();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [sceneBackground, setSceneBackground] = useState(0xffffff);
  const [product, setProduct] = useState(null);

  const loadProductData = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `/product-api-v2/products/${productId}`,
      });

      if (response.data.success) {
        setProduct(response.data.data);
      }
    } catch {
      toggleOpen();
    } finally {
      setDataLoaded(true);
    }
  };

  useEffect(() => {
    loadProductData();
  }, []);

  const handleOpenShare = (v) => {
    setOpenShare(v);
  };

  const handleAgree = () => {
    toggleOpen();
    loadProductData();
  };

  const handleChangeBg = useDebounce((evt, c) => {
    setSceneBackground(c);
  }, 500);

  if (!dataLoaded) return null;

  return (
    <>
      <div className={classes.layout}>
        <ErrorModal open={isOpen} onClose={handleClose} onTryAgain={handleAgree} />

        <ThreeComponent
          product={product}
          backgroundColor={sceneBackground}
          onError={() => toggleOpen()}
        />

        <div className={classes.backgroundTopUnit}>
          <img className={classes.background} src={PatternTop} alt="" />
        </div>

        <div className={classes.iconButtonUnit}>
          <IconButton
            aria-label="close 3d dialog"
            className={classes.iconButton}
            disableRipple
            onClick={handleClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        </div>

        <div style={{ zIndex: 0 }} className={classes.body}>
          <ProductInfo
            product={product}
            handleOpenShare={handleOpenShare}
            handleChangeBg={handleChangeBg}
            handleClose={handleClose}
          />
        </div>

        {/* Options */}
        <div className={classes.optionUnit}>
          <div className={classes.grow} style={{ flex: 1 }} />
          <div className={classes.grow} style={{ flex: 1 }} />
        </div>

        <div className={classes.marginWide} />
        <div className={classes.marginWide} />

        <div className={classes.backgroundBottomUnit}>
          <img className={classes.background} src={PatternBottom} alt="" />
          {openShare && (
            <MobileShareOptions
              product={product}
              isBlack={sceneBackground === 0x000000}
              isGray={sceneBackground === 0x909090}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(ThreeDView);
