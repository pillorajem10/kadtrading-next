import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, IconButton, Paper, Typography } from '@material-ui/core';

// MUI Icons
import EmailIcon from 'mdi-react/EmailIcon';
import ShareIcon from '@material-ui/icons/Share';

// Redux
import { useSelector } from 'react-redux';

// Utils
import { formatPrice } from 'utils/methods.js';

// components
import { FavIcon } from 'jumbogold/product';
import MobileShareOptions from '../MobileShareOptions';
import MobileEnquiryForm from '../MobileEnquiryForm';

// Styling
import styles from './style';

const MobileOptionsBar = ({ classes }) => {
  const {
    product: { productDetails, variant, optionPrice },
    user: { authenticated },
  } = useSelector((state) => state);

  const router = useRouter();

  const [showOptionsBar, setShowOptionsBar] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  useEffect(() => {
    return () => {
      setShowShareOptions(false);
      setShowEnquiryForm(false);
    };
  }, [router.asPath]);

  useEffect(() => {
    const toggleOptionBar = () => {
      const scrolledPx = document.documentElement.scrollTop;
      const scrollAllowance =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPerc = scrolledPx / scrollAllowance;

      if (scrolledPerc > 0.05) {
        setShowOptionsBar(true);
      } else {
        setShowOptionsBar(false);
      }
    };

    window.addEventListener('scroll', toggleOptionBar);

    return () => {
      window.removeEventListener('scroll', toggleOptionBar);
    };
  }, []);

  const handleShowEnquiryForm = () => {
    setShowEnquiryForm((currentValue) => {
      return !currentValue;
    });
    setShowShareOptions(false);
  };

  const handleCloseEnquiryForm = useCallback(() => setShowEnquiryForm(false), []);

  const handleShowShareOptions = () => {
    setShowShareOptions((currentValue) => {
      return !currentValue;
    });
    setShowEnquiryForm(false);
  };

  const handleCloseShareOptions = useCallback(() => setShowShareOptions(false), []);

  if (!showOptionsBar) return null;

  return (
    <Paper className={classes.MobileOptionsBar} elevation={3}>
      <div className={classes.mainWrapper}>
        <div className={classes.productInfoWrapper}>
          {/* Product Name */}
          <Typography className={classes.productName}>{productDetails.name}</Typography>

          {/* Product Price */}
          <Typography className={classes.priceText}>
            {/*formatPrice(productDetails.price + variant.variantPrice + optionPrice)*/}
            {formatPrice(productDetails.retailPrice)}
          </Typography>
        </div>

        <div className={classes.iconGroup}>
          {/* Email Icon */}
          {authenticated && (
            <IconButton
              className={classes.iconButton}
              aria-label="open enquiry"
              onClick={handleShowEnquiryForm}
            >
              <EmailIcon />
            </IconButton>
          )}

          {/* Fav Icon */}
          <div className={classes.favItem}>
            <FavIcon productId={productDetails.id} optionBar />
          </div>

          {/* Share Icon */}
          <IconButton
            className={classes.iconButton}
            aria-controls="menu-list-grow"
            aria-label="share"
            aria-haspopup="true"
            onClick={handleShowShareOptions}
          >
            <ShareIcon />
          </IconButton>
        </div>
      </div>

      {/* Share Options */}
      {showShareOptions && <MobileShareOptions closeShareOptions={handleCloseShareOptions} />}

      {/* Enquiry Form */}
      {showEnquiryForm && <MobileEnquiryForm closeProductEnquiry={handleCloseEnquiryForm} />}
    </Paper>
  );
};

export default withStyles(styles)(MobileOptionsBar);
