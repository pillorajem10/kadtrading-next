import React, { Fragment, useState } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, IconButton } from '@material-ui/core';

// MUI Icons
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { favourite, updateThreeDProductId } from 'redux/actions';

// Styling
import styles from './style';

const FavIcon = ({ classes, productId, optionBar, isBlack }) => {
  const dispatch = useDispatch();
  const {
    user: { authenticated },
  } = useSelector((state) => state);

  const [isSelected, setIsSelected] = useState(false);

  const redirectToLogin = () => {
    Router.push('/login');
    dispatch(updateThreeDProductId(''));
  };

  const handleAddFavoriteItem = async () => {
    const paylaod = { productId };

    const res = await dispatch(favourite.addFavouriteItem(paylaod));
    const { success } = res;

    if (success) {
      setIsSelected(true);

      dispatch(favourite.toggleFavouriteModal(true));

      setTimeout(() => {
        setIsSelected(false);
      }, 2500);
    }
  };

  const favIconClassName = () => {
    let className = '';

    if (optionBar) {
      className = isSelected ? classes.optionIconButton : className;
    } else {
      className = classes.iconButton;
    }

    return className;
  };

  let renderer = (
    <IconButton
      className={optionBar ? classes.whiteFavIcon : classes.iconButton}
      onClick={redirectToLogin}
    >
      {optionBar ? (
        <FavoriteBorderIcon />
      ) : (
        <div className={`${classes.heart} ${isBlack ? classes.isBlackSvg : ''}`} />
      )}
    </IconButton>
  );

  if (authenticated) {
    renderer = (
      <div
        className={`${favIconClassName()} ${isBlack ? classes.isBlackSvg : ''}`}
        onClick={handleAddFavoriteItem}
      >
        {optionBar ? (
          <Fragment>
            <IconButton
              className={classes.whiteFavIcon}
              style={{
                opacity: isSelected ? 0 : 1,
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <div
              className={`${classes.heart} ${isSelected ? classes.heartActive : ''}  ${
                isBlack ? classes.isBlackSvg : ''
              }`}
              style={{ opacity: isSelected ? 1 : 0 }}
            />
          </Fragment>
        ) : (
          <div
            className={`${classes.heart} ${isSelected ? classes.heartActive : ''} ${
              isBlack ? classes.isBlackSvg : ''
            }`}
          />
        )}
      </div>
    );
  }

  return renderer;
};

export default withStyles(styles)(FavIcon);
