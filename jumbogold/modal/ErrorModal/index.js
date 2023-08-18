import React from 'react';

// MUI Stuff
import { withStyles, Dialog, Typography, Button, Hidden } from '@material-ui/core';

// Picture
import wizzo from 'public/assets/images/wizzo/expiry-error.png';
import topPattern from 'public/assets/images/patterns/pattern5.svg';
import bottomPattern from 'public/assets/images/patterns/pattern6.svg';

// Styling
import styles from './style';

const ErrorModal = ({ classes, open, onClose, onTryAgain }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      onClose={onClose}
      open={open}
      classes={{ paper: classes.paper }}
    >
      <div className={classes.container}>
        <Typography className={classes.header}>Something went wrong!</Typography>
        <Typography className={classes.text}>
          We’re sorry, we will fix this shortly..
        </Typography>

        <div className={classes.buttonGroup}>
          <Button className={classes.cancelButton} onClick={onClose}>
            Cancel
          </Button>

          <Button
            color="primary"
            variant="contained"
            className={classes.tryAagainButton}
            onClick={onTryAgain}
          >
            Try Again
          </Button>
        </div>


        <Hidden xsDown>
          <img src="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/account/defaultPic/1627493794133_jumbo_gold.jpg" alt="" className={classes.wizzo} />
        </Hidden>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(ErrorModal);
