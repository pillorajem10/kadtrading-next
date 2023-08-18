import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// MUI Stuff
import { withStyles, Modal, Typography, Button } from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { ui } from 'redux/actions';

// Picture
import splashScreen from 'public/assets/images/event/event-splash-screen.png';
import closeIcon from 'public/assets/icons/black-clear.svg';

// Styling
import styles from './style';

const EventSplashScreenModal = ({ classes }) => {
  const dispatch = useDispatch();

  const [hideModal, setHideModal] = useState(false);
  const [showNotDisplay, setShowNotDisplay] = useState(false);

  useEffect(() => {
    const hideSplashScreenModal = localStorage.getItem('splashScreenModal');
    const hideEventModal = localStorage.getItem('hideEventModal');

    if (hideSplashScreenModal) {
      localStorage.removeItem('splashScreenModal');
    }

    if (hideEventModal) {
      setHideModal(true);
    }

    setTimeout(() => {
      setShowNotDisplay(true);
    }, 100);
  }, []);

  const handleCloseModal = () => setHideModal(true);

  const handleDontShowEgssModalAgain = () => {
    setHideModal(true);
    localStorage.setItem('hideEventModal', true);
  };

  if (hideModal) return null;

  return (
    <Modal open={!hideModal} onClose={handleCloseModal} className={classes.modal}>
      <div className={classes.modalContainer}>
        <img
          src={closeIcon}
          alt="close icon"
          className={classes.closeIcon}
          onClick={handleCloseModal}
        />

        <img src={splashScreen} alt="" className={classes.eventPicture} />

        <div className={classes.modalContent}>
          Get an additional 5% off your first purchase with promo code{' '}
          <CopyToClipboard
            text="WIZMAS5"
            onCopy={() =>
              dispatch(
                ui.successNotification({
                  message: 'Promotion code copied successfully.',
                }),
              )
            }
          >
            <span>WIZMAS5</span>
          </CopyToClipboard>{' '}
          when you sign up for a new account! <span>*no min spend</span>
        </div>

        <a href="/register" target="_blank" without rel="noreferrer">
          <Button className={classes.button}>SIGN UP NOW!</Button>
        </a>

        {showNotDisplay && (
          <div className={classes.modalFooter}>
            <Typography onClick={handleDontShowEgssModalAgain}>Do not display again</Typography>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default withStyles(styles)(EventSplashScreenModal);
