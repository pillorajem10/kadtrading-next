import React, { Fragment } from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// components
import SelectedDeliveryOption from '../SelectedDeliveryOption';

// Styling
import styles from './style';

const DeliveryOptions = ({ classes, deliveryOption, shippingFee }) => {
  
  return (
    <>
      <Hidden xsDown>
        <div className={classes.deliveryOptions}>
          <Typography>Delivery Options</Typography>

          <SelectedDeliveryOption option={deliveryOption[0]} shippingFee={shippingFee} />
        </div>
      </Hidden>

      <Hidden smUp>
        <div className={classes.mobileDeliveryOptions}>
          <div className={classes.innerContainer}>
            <Typography>Delivery Options</Typography>

            <SelectedDeliveryOption option={deliveryOption[0]} shippingFee={shippingFee} />
          </div>
        </div>
      </Hidden>
    </>
  );
};

export default withStyles(styles)(DeliveryOptions);
