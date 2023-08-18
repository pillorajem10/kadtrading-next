import React, { useMemo } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Picture
import warrantyIcon from 'public/assets/icons/warranty.svg';
import secureIcon from 'public/assets/icons/secure.svg';
import stripeIcon from 'public/assets/icons/stripe-white.svg';
import returnIcon from 'public/assets/icons/return.svg';

// Styling
import styles from './style';

const ProductIntroFooter = ({ classes }) => {
  const { productDetails } = useSelector((state) => state.product);

  const isWarranty = useMemo(() => {
    return productDetails.attributes?.find((item) => item.name.toLowerCase().trim() === 'warranty');
  }, [productDetails.attributes]);

  return (
    <div
      className={classes.productIntroFooter}
      style={{ gridTemplateColumns: `repeat(${isWarranty ? '2' : '1'}, 1fr)` }}
    >
      {isWarranty && (
        <div className={classes.introWrapper}>
          <img src={warrantyIcon} alt="warranty icon" className={classes.introIcon} />
          <div className={classes.introTextWrapper}>
            <Typography>{isWarranty.value}</Typography>
          </div>
        </div>
      )}

      <div className={classes.introWrapper}>
        <div className={classes.stripeIntroWrapper}>
          <Typography>Guaranteed Payment Processing</Typography>
          <img src={stripeIcon} alt="stripe icon" />
        </div>
      </div>

      {/* 
      <div className={classes.introWrapper}>
        <img src={secureIcon} alt="secure icon" className={classes.introIcon} />
        <div className={classes.stripeIntroWrapper}>
          <Typography>Secured Payment</Typography>
          <img src={stripeIcon} alt="stripe icon" />
        </div>
      </div>

      
      <div className={classes.introWrapper}>
        <img src={returnIcon} alt='return icon' className={classes.introIcon} />
        <div className={classes.introTextWrapper}>
          <Typography>7 days Returns</Typography>
        </div>
      </div> */}
    </div>
  );
};

export default withStyles(styles)(ProductIntroFooter);
