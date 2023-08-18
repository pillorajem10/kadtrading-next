import React from 'react';

// MUI Stuff
import { withStyles, Dialog, Typography, Button } from '@material-ui/core';

// Styling
import styles from './style';

const DeleteImageModal = ({ classes, open, onClose, deleteImage }) => {
  return (
    <Dialog onClose={onClose} open={open} classes={{ paper: classes.paper }}>
      <div className={classes.container}>
        <Typography className={classes.header}>Are you sure you want to delete this?</Typography>

        <div className={classes.btnGroup}>
          <Button className={classes.noBtn} onClick={onClose}>
            NO
          </Button>

          <Button
            color="primary"
            variant="contained"
            className={classes.okBtn}
            onClick={deleteImage}
          >
            YES
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(DeleteImageModal);
