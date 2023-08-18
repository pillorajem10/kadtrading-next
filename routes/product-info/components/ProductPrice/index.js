import React, { useState } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography, Button, Collapse, Hidden } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { common } from 'redux/actions';

// Utils
import { formatPrice } from 'utils/methods.js';

// components
import Promotion from '../Promotion';
import EnquiryForm from '../EnquiryForm';

// Styling
import styles from './style';

const ProductPrice = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    user: { authenticated },
    common: { currency },
    product: {
      productDetails,
      variant,
      optionPrice,
      isDiscount,
      optionOriginalPrice,
      discountPercent,
    }
  } = useSelector((state) => state);

  const [showProductEnquiry, setShowProductEnquiry] = useState(false);

  const handleShowProductEnquiry = () => {
    if (authenticated) {
      setShowProductEnquiry((currentValue) => {
        return !currentValue;
      });
    } else {
      dispatch(common.setSavedURL(`/product/${productDetails.id}`));
      Router.push('/login');
    }
  };

  const handleCloseProductEnquiry = () => setShowProductEnquiry(false);

  const renderProductPrice = () => {
    let productPrice = null;

    if (isDiscount) {
      productPrice = (
        <>
          {/* Sale Price */}
          <Typography className={classes.salePriceText}>
            {currency === 'SGD'
              ? formatPrice(productDetails.sgdPrice)
              : formatPrice(productDetails.usdPrice)}
          </Typography>

          {/*
          <Typography className={classes.originalPriceText}>
            {productDetails.price === 0
              ? `$ -`
              : formatPrice(productDetails.price + variant.price + optionOriginalPrice)} HHHH
          </Typography>          
          */}


          {/* Discount Percentage 
          <div className={classes.discountWrapper}>-{discountPercent}% OFF</div>          
          */}

        </>
      );
    } else {
      productPrice = (
        // Original Price
        <Typography className={classes.priceText}>
          {currency === 'SGD'
            ? formatPrice(productDetails.sgdPrice)
            : formatPrice(productDetails.usdPrice)}
        </Typography>
      );
    }

    return productPrice;
  };

  // console.log('[PRODUCT PRICE currency] ', currency);
  
  return (
    <div className={classes.productPrice}>
      {/* Price From */}
      {productDetails.priceRange && (
        <Typography className={classes.priceFrom}>Price from</Typography>
      )}

      <div className={classes.productPriceWrapper}>
        {renderProductPrice()}

        <Hidden xsDown>
          <Button
            className={classes.productEnquiryButton}
            color="default"
            onClick={handleShowProductEnquiry}
            variant="outlined"
          >
            Product Enquiry
          </Button>
        </Hidden>
      </div>

      {/* Enquiry */}
      <Collapse in={showProductEnquiry} timeout={500}>
        <EnquiryForm closeProductEnquiry={handleCloseProductEnquiry} />
      </Collapse>

      {/* GST */}
      {/* productDetails.gst && <Typography className={classes.gstLabel}>(GST Included)</Typography> */}
      <Typography className={classes.gstLabel}>(GST Included)</Typography>

      {/* Promotion */}
      <Promotion />

      {/* Price Remark */}
      {productDetails.priceRemark && (
        <Typography className={classes.priceRemark}>{productDetails.priceRemark}</Typography>
      )}
    </div>
  );
};

export default withStyles(styles)(ProductPrice);
