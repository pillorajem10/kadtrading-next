import React, { useEffect, useState } from 'react';
// import Router from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// MUI Stuff
import { withStyles, Modal, Typography } from '@material-ui/core';

// Picture
import closeIcon from 'public/assets/icons/black-clear.svg';
import splashScreen from 'public/assets/jumbo/splash.jpg';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { ui } from 'redux/actions';

// Styling
import styles from './style';

const SplashScreenModal = ({ classes }) => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.user);

  const [hideModal, setHideModal] = useState(false);
  const [showNotDisplay, setShowNotDisplay] = useState(false);

  useEffect(() => {
    const hideEventModal = localStorage.getItem('hideEventModal');
    const hideSplashScreenModal = localStorage.getItem('splashScreenModal');

    if (hideEventModal) {
      localStorage.removeItem('hideEventModal');
    }

    if (hideSplashScreenModal) {
      setHideModal(true);
    }

    setTimeout(() => {
      setShowNotDisplay(true);
    }, 100);
  }, []);

  const handleCloseModal = () => setHideModal(true);

  const handleDontShowEgssModalAgain = () => {
    setHideModal(true);
    localStorage.setItem('splashScreenModal', true);
  };

  const handleGoSignUp = () => {
    setHideModal(true);
    // Router.push('/register/form');
  };

  if (hideModal) return null;

  return (
    <>
{/*    <Modal open={!hideModal && !authenticated} onClose={handleCloseModal} className={classes.modal}>
      <div className={classes.modalContainer}>
        <img
          src={closeIcon}
          alt="close icon"
          className={classes.closeIcon}
          onClick={handleCloseModal}
        />

        <img src={splashScreen} alt="" className={classes.eventPicture} />

        <div className={classes.modalContent}>
          <div className={classes.modalContentText} style={{ marginBottom: 1 }}>
            今日部屋を予約して使用する{' '}
            <CopyToClipboard
              text="CHARLENE1"
              onCopy={() =>
                dispatch(
                  ui.successNotification({
                    message: 'プロモーションコードが正常にコピーされました.',
                  }),
                )
              }
            >
              <b>CHARLENE1</b>
            </CopyToClipboard>{' '}
            のために<b>5%</b> ディスカウント! <span>*最低費用なし</span>
          </div>

          <div className={classes.signUpButton} onClick={handleGoSignUp}>
            <Typography>今予約する!</Typography>
          </div>
        </div>

        {showNotDisplay && (
          <div className={classes.modalFooter}>
            <Typography onClick={handleDontShowEgssModalAgain}>二度と表示しない</Typography>
          </div>
        )}
      </div>
    </Modal>*/}
    </>
  );
};

export default withStyles(styles)(SplashScreenModal);
