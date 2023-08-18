import React, { useState, useEffect, useRef } from 'react';
// import Router from 'next/router';

// MUI Stuff
import { withStyles, Button, Typography } from '@material-ui/core';

// layout
import UserLayout from 'layout/UserLayout';

// sections
import UserInfoSection from 'routes/user-profile/sections/UserInfoSection';
import UploadSection from 'routes/user-profile/sections/UploadSection';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { user, ui } from 'redux/actions';

// Utils
import { formValidationCheck } from 'utils/CheckFormValidation';
import { formRules, /* passwordRules */ } from 'routes/user-profile/utils/rules';

// Styling
import styles from 'routes/user-profile/style';

const Profile = ({ classes }) => {
  const dispatch = useDispatch();
  const uploader = useRef();
  const { authenticated, account } = useSelector((state) => state.user);

  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    tel: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showForgotPassNotif, setShowForgotPassNotif] = useState(false);
  /* const [passwordForm, setPasswordForm] = useState({
    password: '',
    newPassword: '',
    repeatPassword: '',
  });
  const [passwordErrors, setPasswordErrors] = useState({});
  const [strongPassword, setStrongPassword] = useState(false); */

  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState('');

  const handleUpdateAvatar = async (payload) => {
    const res = await dispatch(user.updateAvatar(payload));
    const { data, success } = res;

    if (success) {
     /*
      const params = { _id, profilePic: data.url };
      const response = await dispatch(user.updateUserDetails(params));

      if (response.success) {
        Router.push('/user/profile');
      } */
      setProfilePicture(data.url);
    }
  };

  const handleUpload = () => {
    let userAvatar = '';
    const file = new FormData();
    if(selectedAvatar !== null && selectedFile !== null) {
      const { profilePic } = account;
      const payload = { ...formValues, profilePic: userAvatar, file };
      file.append('file', selectedFile);

      if (profilePic !== null && profilePic?.indexOf('storage-api') === -1) {
        userAvatar = profilePic;
      }
      handleUpdateAvatar(payload);
    }
  }

  useEffect(() => {
    if (authenticated) {
      const { fname, lname, tel } = account;

      setFormValues({ fname, lname, tel });
    };
  }, [authenticated, account]);

  useEffect(() => {
    if(selectedAvatar !== null && selectedFile !== null) {
      handleUpload();
    }
  }, [selectedAvatar && selectedFile]);

  const handleSetFormValues = (event) => {
    event.persist();

    const { value, name } = event.target;

    setFormValues((currentValues) => {
      return { ...currentValues, [name]: value };
    });

    const filterFormRules = formRules.find((item) => item.fieldName === name);

    const valid = formValidationCheck(filterFormRules.rule, value);

    if (!valid) {
      setFormErrors((currentValues) => {
        return {
          ...currentValues,
          [filterFormRules.fieldName]: filterFormRules.message,
        };
      });
    } else {
      const errorMessage = formErrors;

      if (errorMessage[filterFormRules.fieldName]) {
        delete errorMessage[filterFormRules.fieldName];
      }

      setFormErrors(errorMessage);
    }
  };

  /* const handleSetPasswordFormValues = (event) => {
    event.persist();

    const { value, name } = event.target;

    setPasswordForm((currentValues) => {
      return { ...currentValues, [name]: value };
    });

    if (name === 'newPassword') {
      setStrongPassword(formValidationCheck('password', value));
    }

    const filterFormRules = passwordRules.find((item) => item.fieldName === name);

    const valid = formValidationCheck(filterFormRules.rule, value);

    if (!valid) {
      setPasswordErrors((currentValues) => {
        return {
          ...currentValues,
          [filterFormRules.fieldName]: filterFormRules.message,
        };
      });
    } else {
      const errorMessage = passwordErrors;

      if (errorMessage[filterFormRules.fieldName]) {
        delete errorMessage[filterFormRules.fieldName];
      }

      setPasswordErrors(errorMessage);
    }

    if (name === 'confirmPassword') {
      if (value !== passwordForm.newPassword) {
        setPasswordErrors((currentValues) => {
          return {
            ...currentValues,
            confirmPassword: 'Password incorrect.',
          };
        });
      }
    }

    if (name === 'newPassword') {
      if (value !== passwordForm.confirmPassword) {
        setPasswordErrors((currentValues) => {
          return {
            ...currentValues,
            confirmPassword: 'Password incorrect.',
          };
        });
      } else {
        setPasswordErrors((currentValues) => {
          return {
            ...currentValues,
            confirmPassword: '',
          };
        });
      }
    }
  }; */

  const handleTriggerUploader = () => {
    uploader.current.click();
  };


  const handleForgetPassword = () => {
    const payload = {
      email: account.email,
    };
    dispatch(user.userForgetPassword(payload));
    setShowForgotPassNotif((currentValues) => {
      return !currentValues;
    });
  };

  const handleUpdateUserDetails = async (payload) => {
    const { _id } = account;
    if(profilePicture !== '') {
      const params = { _id, profilePic: profilePicture, ...payload };
      const res = await dispatch(user.updateUserDetails(params));
      const { success } = res;

      if (success) {
        dispatch(ui.successNotification({ message: 'Profile changes saved.' }));
      }
    } else {
      const params = { _id, ...payload };
      const res = await dispatch(user.updateUserDetails(params));
      const { success } = res;

      if (success) {
        dispatch(ui.successNotification({ message: 'Profile changes saved.' }));
      }
    }
  };

  const handleSubmitChanges = () => {
    let errors = {};
     formRules.forEach((item) => {
      const valid = formValidationCheck(item.rule, formValues[item.fieldName]);
      if (!valid && errors[item.fieldName] === undefined) {
        errors = { ...errors, [item.fieldName]: item.message };
      };
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const payload = { ...formValues };
      handleUpdateUserDetails(payload);
    }
  };

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.onload = () => {
        if (reader.result) {
          setSelectedAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
    return null
  };

  if (!authenticated) return null;

  return (
    <UserLayout>
      <div className={classes.profile}>
        <UploadSection
          uploader={uploader}
          selectedFile={selectedFile}
          selectedAvatar={selectedAvatar}
          image={account.profilePic}
          trigger={handleTriggerUploader}
          uploadImage={handleUploadImage}
        />

        <UserInfoSection
          formValues={formValues}
          formErrors={formErrors}
          setForm={handleSetFormValues}
        />

        {showForgotPassNotif && (
          <Typography className={classes.resetPassSentence}>Check your email for reset password instructions.</Typography>
        )}

        <div className={classes.buttonContainer}>
          <Button
            className={classes.changePasswordButton}
            onClick={handleForgetPassword}
            variant="contained"
          >
            Reset Password
          </Button>


          <Button
            color="primary"
            variant="contained"
            className={classes.saveButton}
            onClick={handleSubmitChanges}
          >
            Save Changes
          </Button>

        </div>
      </div>
    </UserLayout>
  );
};

export default withStyles(styles)(Profile);
