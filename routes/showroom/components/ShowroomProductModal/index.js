import React from 'react';

// MUI Stuff
import { withStyles, Modal } from '@material-ui/core';

// picture
import shopNow from 'public/assets/icons/shop-now.svg';

// styling
import styles from 'routes/showroom/style';

const ShowroomProductModal = ({ classes, open, product, onClose }) => {
  const isIFrame = () => window.location !== window.parent.location;

  const redirectToModelPage = (evt, productUrl) => {
    window.open(`https://hapichair.com${productUrl}`, '_self');
  };

  return (
    <Modal
      className={classes.showroomModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={onClose}
      onClick={onClose}
    >
      <div
        style={{ outline: 'none' }}
        className={`${classes.layoutx} ${isIFrame() ? classes.iFrame : ''}`}
      >
        <div className={classes.modalHeader}>
          <p className={classes.productTitle}>{product.productTitle}</p>
          <img
            onClick={(evt) => redirectToModelPage(evt, product.productUrl)}
            className={classes.shopNow}
            src={shopNow}
            alt="View Product"
          />
        </div>

        <div className={classes.modalImage}>
          <img
            className={classes.productImage}
            src={product.productImage}
            alt={product.productTitle}
          />
        </div>

        {product.productBrand !== '' && (
          <div className={classes.attribContainer}>
            <p className={classes.attribLabel}>Brand:</p>
            <p className={classes.attribValue}>{product.productBrand}</p>
          </div>
        )}

        {product.productMerchant !== '' && (
          <div className={classes.attribContainer}>
            <p className={classes.attribLabel}>Sold By:</p>
            <p className={classes.attribValue}>{product.productMerchant}</p>
          </div>
        )}

        <div style={{ padding: '0px 10px', width: '100%' }}>
          <p className={classes.dimension}>Dimensions:</p>
        </div>

        {product.productWidth !== '' && (
          <div className={classes.attribContainer}>
            <p className={classes.attribLabel}>Width:</p>
            <p className={classes.attribValue}>{product.productWidth}</p>
          </div>
        )}

        {product.productHeight !== '' && (
          <div className={classes.attribContainer}>
            <p className={classes.attribLabel}>Height:</p>
            <p className={classes.attribValue}>{product.productHeight}</p>
          </div>
        )}

        {product.productDepth !== '' && (
          <div className={classes.attribContainer}>
            <p className={classes.attribLabel}>Depth:</p>
            <p className={classes.attribValue}>{product.productDepth}</p>
          </div>
        )}

        <div className={classes.marginWide} />
        <div className={classes.marginWide} />
      </div>
    </Modal>
  );
};

export default withStyles(styles)(ShowroomProductModal);
