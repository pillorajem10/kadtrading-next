import React, { useState, useRef } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography, Button } from '@material-ui/core';

// MUI Icons
import EditIcon from '@material-ui/icons/Edit';

// layout
import PatternLayout from 'layout/PatternLayout';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { user } from 'redux/actions';

// Utils
// import { avatarList } from 'routes/choosewizzo/utils';

// Styling
import styles from 'routes/choosewizzo/style';

const UploadForm = ({ classes }) => {
  const dispatch = useDispatch();
  const { account, registerUser } = useSelector((state) => state.user);

  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const uploader = useRef();

  /* const handleSelectAvatar = (event) => {
    const { src } = event.target;

    fetch(src)
      .then((res) => {
        return res.blob();
      })
      .then((blobFile) => {
        const file = new File([blobFile], 'avatar.png', { type: 'image/png' });

        setSelectedAvatar(src);
        setSelectedFile(file);
      });
  }; */

  const handleTriggerUploader = () => {
    uploader.current.click();
  };

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        setSelectedAvatar(reader.result);
      }
    };
    reader.readAsDataURL(file);
    setSelectedFile(file);
  };

  const handleUpdateAvatar = async (payload) => {
    const { _id } = account;

    const res = await dispatch(user.updateAvatar(payload));
    const { data, success } = res;

    if (success) {
      const params = { _id, profilePic: data.data.Location };
      const response = await dispatch(user.updateUserDetails(params));

      if (response.success) {
        Router.push('/user/profile');
      }
    }
  };

  const handleAddNewAvatar = async (file) => {
    const { _id } = account;

    const res = await dispatch(user.newAvatar(file));
    const { data, success } = res;

    if (success) {
      const payload = { _id, profilePic: data };
      const response = await dispatch(user.updateUserDetails(payload));

      if (response.success) {
        if (Object.keys(registerUser).length > 0) {
          dispatch(user.setRegisterUserDetails({}));

          Router.push('/success');
        } else {
          Router.push('/user/profile');
        }
      }
    }
  };

  const handleSubmit = () => {
    const { profilePic } = account;
    let userAvatar = '';

    const file = new FormData();
    file.append('file', selectedFile);

    if (profilePic !== null && profilePic?.indexOf('storage-api') === -1) {
      userAvatar = profilePic;
    }

    if (userAvatar !== '') {
      const payload = { profilePic: userAvatar, file };
      handleUpdateAvatar(payload);
    } else {
      handleAddNewAvatar(file);
    }
  };

  return (
    <PatternLayout>
      <div className={classes.chooseWizzo}>
        <Typography className={classes.headerOne}>Choose an avatar</Typography>
        <Typography className={classes.headerTwo}>
          Let people put a face to your name, you cool, <br />
          cool dude.
        </Typography>

        <div className={classes.container}>
          <div className={classes.innerContainer}>
            <div className={classes.uploadContainer}>
              {selectedAvatar === '' ? (
                <Typography>upload profile picture</Typography>
              ) : (
                <img src={selectedAvatar} alt="selected avatar" className={classes.avatarImage} />
              )}

              <div className={classes.editButton} onClick={handleTriggerUploader}>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={uploader}
                  onChange={handleUploadImage}
                />
                <EditIcon />
              </div>
            </div>

          </div>

          <Button
            color="primary"
            variant="contained"
            className={classes.submitButton}
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </PatternLayout>
  );
};

export default withStyles(styles)(UploadForm);
