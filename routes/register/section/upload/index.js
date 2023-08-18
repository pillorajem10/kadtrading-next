import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// MUI Icons
import EditIcon from '@material-ui/icons/Edit';

// Styling
import styles from './style.js';

const UploadSection = ({
  classes,
  selectedAvatar,
  trigger,
  uploader,
  uploadImage }) => {

  return (
    <div className={classes.chooseWizzo}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div className={classes.uploadContainer}>
            {selectedAvatar === '' ? (
              <Typography>upload profile picture</Typography>
            ) : (
              <img src={selectedAvatar} alt="selected avatar" className={classes.avatarImage} />
            )}

            <div className={classes.editButton} onClick={trigger}>
              <input
                type="file"
                style={{ display: 'none' }}
                ref={uploader}
                onChange={uploadImage}
              />
              <EditIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(UploadSection);
