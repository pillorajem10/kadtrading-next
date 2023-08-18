import React from 'react';

// MUI Stuff
import { withStyles, Modal, Typography, Button } from '@material-ui/core';

// Styling
import styles from './style';

const UpdateAddressModal = ({ classes, open, onClose, updateAddress }) => {
  return (
    <Modal
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={onClose}
    >
      <div className={classes.wrapper}>
        <div className={classes.modalInnerWrapper}>
          <Typography className={classes.title}>Existing address was changed.</Typography>

          <Typography className={classes.content}>
            Your current delivery address is different from your saved address. Do you want to
            overwrite this to your saved address?
          </Typography>

          <div className={classes.buttonGroup}>
            <Button
              className={classes.button}
              color="primary"
              onClick={() => updateAddress('create')}
              variant="contained"
            >
              Create New
            </Button>

            <Button
              className={classes.button}
              color="primary"
              onClick={() => updateAddress('update')}
              variant="contained"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(UpdateAddressModal);
