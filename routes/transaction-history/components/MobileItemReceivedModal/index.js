import React from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Dialog, Typography, Button } from '@material-ui/core';

// Styling
import styles from './style';

const MobileItemReceivedModal = ({ classes, open, onClose, transactionId, orderId, itemId }) => {
  return (
    <Dialog onClose={onClose} open={open} classes={{ paper: classes.paper }}>
      <div className={classes.container}>
        <Typography className={classes.header}>Confirm item received?</Typography>

        <div className={classes.btnGroup}>
          <Button className={classes.noBtn} onClick={onClose}>
            NO
          </Button>

          <Button
            color="primary"
            variant="contained"
            className={classes.okBtn}
            onClick={() =>
              Router.push(
                `/rating?transactionId=${transactionId}&orderId=${orderId}&itemId=${itemId}`,
              )
            }
          >
            YES
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(MobileItemReceivedModal);
