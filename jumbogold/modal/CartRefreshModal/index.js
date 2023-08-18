import React from 'react';

// MUI Stuff
import { withStyles, Typography, Modal, Button } from '@material-ui/core';

// Styling
import styles from './style';

const CartRefreshModal = ({ classes, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <div className={classes.wrapper}>
        <Typography className={classes.title}>Important Notice</Typography>

        <Typography className={classes.content}>
          Please note that there has been an update to the prices of items in your Shopping Cart.
          Items in your cart will always reflect the most recent price displayed on the product
          detail pages.
        </Typography>
        <br />
        <Typography className={classes.content}>
          Please check on the items again before proceeding to make payment.
        </Typography>

        <Button
          color="primary"
          variant="contained"
          className={classes.closeButton}
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(CartRefreshModal);
