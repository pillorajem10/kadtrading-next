import React, { useEffect, useState } from 'react';
import axios from 'axios';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// hooks
import useDisclosure from 'hooks/useDisclosure';

// utils
import { useDebounce } from 'utils/methods';

// Component
import ErrorModal from './ErrorModal';
import ThreeComponent from '../ThreeComponent';
import BackgroundSwitch from './BackgroundSwitch';

// Styling
import styles from './style';

const ThreeDViewer = ({ classes, productId }) => {
  const { isOpen, toggleOpen } = useDisclosure();
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
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
      } else {
        toggleOpen();
      }
      setDataLoaded(true);
    } catch (e) {
      toggleOpen();
      setDataLoaded(true);
      console.log('Unable to retrieved data', e);
    }
  };

  useEffect(() => {
    loadProductData();
  }, []);

  const handleChangeBg = useDebounce((evt, c) => {
    setSceneBackground(c);
  }, 500);

  const handleAgree = () => {
    toggleOpen();
    loadProductData();
    setFinishedLoading(false);
  };

  if (!dataLoaded) return null;

  return (
    <>
      <div className={classes.layout}>
        <ErrorModal
          open={isOpen}
          onTryAgain={handleAgree}
          />

        <ThreeComponent
          product={product}
          backgroundColor={sceneBackground}
          onError={() => toggleOpen()} />

        <div style={{ zIndex: 0 }} className={classes.body}>
          {finishedLoading && (
            <BackgroundSwitch
              product={product}
              handleChangeBg={handleChangeBg}
            />
          )}
        </div>

        {/* Options */}
        <div className={classes.optionUnit}>
          <div className={classes.grow} style={{ flex: 1 }} />
          <div className={classes.grow} style={{ flex: 1 }} />
        </div>

        <div className={classes.marginWide} />
        <div className={classes.marginWide} />

      </div>
    </>
  );
};

export default withStyles(styles)(ThreeDViewer);
