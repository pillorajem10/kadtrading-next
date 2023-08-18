import React from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Dialog, Typography, Button, Hidden } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { user, transaction } from 'redux/actions';

// Picture
import wizzo from 'public/assets/images/wizzo/shi.png';
import topPattern from 'public/assets/images/patterns/pattern5.svg';
import bottomPattern from 'public/assets/images/patterns/pattern6.svg';

// Styling
import styles from './style';

const RequestRoleModal = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    user: { requestRole },
    common: { savedUrl },
  } = useSelector((state) => state);

  const handleCloseRequestRoleModal = () => dispatch(user.setRequestRoleDetails({}));

  const handleMergeCart = async () => {
    const res = await dispatch(transaction.mergeTransactionCart());
    const { success } = res;

    if (success) {
      if (savedUrl) {
        Router.push(savedUrl);
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = requestRole;
    const payload = { email, password, platform: '', channel: '' };

    const res = await dispatch(user.userLogin(payload));
    const { success, code } = res;

    if (success) {
      handleMergeCart();
    }

    if (code === 10033) {
      dispatch(user.setRequestRoleDetails({ email, password }));
    }
  };

  const handleRequestRole = async () => {
    const { email } = requestRole;
    const payload = { email, newRole: 'ROLE_BUYER' };

    const res = await dispatch(user.updateUserRoleDetails(payload));
    const { success } = res;

    if (success) {
      handleCloseRequestRoleModal();
      handleLogin();
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      onClose={handleCloseRequestRoleModal}
      open={Object.keys(requestRole).length > 0}
      classes={{ paper: classes.paper }}
    >
      <div className={classes.container}>
        <Typography className={classes.header}>Welcome to Jumbo Gold and Diamonds!</Typography>
        <Typography className={classes.text}>
          Welcome to Jumbo Gold and Diamonds! By tapping “I agree”, you confirm to the Jumbo Gold and Diamonds with
          your existing Wiz3D or Wiz3D Pro account.
        </Typography>

        <div className={classes.buttonGroup}>
          <Button className={classes.dontAgreeBtn} onClick={handleCloseRequestRoleModal}>
            I don&apos;t agree
          </Button>

          <Button
            color="primary"
            variant="contained"
            className={classes.agreeBtn}
            onClick={handleRequestRole}
          >
            I agree
          </Button>
        </div>

        <img src={topPattern} alt="" className={classes.topPattern} />
        <img src={bottomPattern} alt="" className={classes.bottomPattern} />

        <Hidden xsDown>
          <img src={wizzo} alt="" className={classes.wizzo} />
        </Hidden>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(RequestRoleModal);
