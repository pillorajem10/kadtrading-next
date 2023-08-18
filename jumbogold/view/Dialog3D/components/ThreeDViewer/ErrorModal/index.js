import React from 'react';

// MUI Stuff
import { withStyles, Button, Hidden, Modal, Typography } from '@material-ui/core';

// Images
import Mascot from 'public/assets/images/wizzo/expiry-error.png';
import PatternTop1 from 'public/assets/images/patterns/pattern3.png';
import PatternBottom1 from 'public/assets/images/patterns/pattern4.png';

// Styling
import styles from '../style';

const ErrorModal = ({ classes, open, onTryAgain }) => {
  return (
    <Modal
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
    >
      <div style={{ outline: 'none' }} className={classes.layout1}>
        <div className={classes.backgroundTopUnit1}>
          <img className={classes.background1} src={PatternTop1} alt="" />
        </div>

        <img className={classes.image} src={Mascot} alt="" />

        <div className={classes.formContainer}>
          <div className={classes.marginWide} />
          <Typography className={classes.text}>3D Preview</Typography>
          <Typography className={classes.subText}>
            Cannot preview 3D model right now. Please try again later.
          </Typography>
          <div className={classes.marginWide} />

          <div className={classes.cta}>
            <Button
              className={classes.button2}
              color="primary"
              onClick={onTryAgain}
              variant="contained"
            >
              RETRY
            </Button>
          </div>
          <div className={classes.marginWide} />
        </div>
        <Hidden xsDown>
          <div className={classes.backgroundBottomUnit1}>
            <img className={classes.background1} src={PatternBottom1} alt="" />
          </div>
        </Hidden>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(ErrorModal);
