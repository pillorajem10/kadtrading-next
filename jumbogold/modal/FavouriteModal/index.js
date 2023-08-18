import React, { useState } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';

// MUI Stuff
import { withStyles, Dialog, Typography, Button, Checkbox, Hidden } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { favourite } from 'redux/actions';

// Picture
import wizzo from 'public/assets/images/wizzo/fav.png';
import topPattern from 'public/assets/images/patterns/pattern5.svg';
import bottomPattern from 'public/assets/images/patterns/pattern6.svg';

// Styling
import styles from './style';

const FavouriteModal = ({ classes }) => {
  const dispatch = useDispatch();
  const { showFavouriteModal } = useSelector((state) => state.favourite);

  const [isChecked, setIsChecked] = useState(false);

  const handleCloseFavouriteModal = () => dispatch(favourite.toggleFavouriteModal(false));

  const handleChangeCheckbox = () => setIsChecked((prevValue) => !prevValue);

  const handleOKButton = () => {
    Cookies.set('favourite_modal', isChecked);
    handleCloseFavouriteModal();
  };

  const handleGoToFavouritesPage = () => {
    handleCloseFavouriteModal();
    Router.push('/user/favourites');
  };

  const doNotShowAgain = Cookies.get('favourite_modal');

  return (
    <Dialog
      onClose={handleCloseFavouriteModal}
      open={showFavouriteModal && (doNotShowAgain === undefined || doNotShowAgain === 'false')}
      classes={{ paper: classes.paper }}
    >
      <div className={classes.container}>
        <Typography className={classes.header}>
          You have added this item to <span>Favourites</span>
        </Typography>

        <Typography className={classes.text}>
          Items can be added to Favourites multiple times and later arranged into your preferred
          groups.
        </Typography>

        <br />

        <Typography className={classes.text}>
          Click <span onClick={handleGoToFavouritesPage}>here</span> to go to{' '}
          <span>Favourites</span>.
        </Typography>

        <Button
          color="primary"
          variant="contained"
          className={classes.okBtn}
          onClick={handleOKButton}
        >
          OK
        </Button>

        <div className={classes.checkboxContainer}>
          <Checkbox
            color="primary"
            checked={isChecked}
            className={classes.checkbox}
            onChange={handleChangeCheckbox}
          />
          <Typography>Do not show this message again.</Typography>
        </div>

        <Hidden smUp>
          <img src={topPattern} alt="" className={classes.topPattern} />
          <img src={bottomPattern} alt="" className={classes.bottomPattern} />
        </Hidden>

        <Hidden xsDown>
          <img src={wizzo} alt="" className={classes.wizzo} />
        </Hidden>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(FavouriteModal);
