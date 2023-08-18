import React from 'react';

// MUI Stuff
import { withStyles, Typography, Button } from '@material-ui/core';

// Styling
import styles from './style';

const OrderItemReceived = ({ classes, item, onClose, showReviewOrderItem }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Item Received</div>

      <div className={classes.productContainer}>
        <img src={item.image} alt={item.productName} className={classes.productImage} />

        <div className={classes.productDetails}>
          <Typography className={classes.productName}>{item.productName}</Typography>

          <Typography className={classes.confirmText}>Confirm item received?</Typography>

          <div className={classes.btnGroup}>
            <Button className={classes.cancelBtn} onClick={onClose}>
              Cancel
            </Button>

            <Button
              color="primary"
              variant="contained"
              className={classes.confirmBtn}
              onClick={showReviewOrderItem}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(OrderItemReceived);
