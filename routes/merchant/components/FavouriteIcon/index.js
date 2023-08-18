import React from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, IconButton } from '@material-ui/core';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { favourite } from 'redux/actions';

// Styling
import styles from './style';

const FavouriteIcon = ({ classes, setIsSelected, isSelected, favourited }) => {
  const dispatch = useDispatch();
  const {
    user: { authenticated },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query } = router;

  const handleUnfavouriteMerchant = () => {
    const { merchantIds } = query;

    setIsSelected(true);

    dispatch(favourite.removeFavouriteMerchant(merchantIds));
  };

  const handleFavouriteMerchant = () => {
    const { merchantIds } = query;

    const payload = { merchantId: merchantIds };

    setIsSelected(true);

    dispatch(favourite.addFavouriteMerchant(payload));
  };

  if (authenticated) {
    if (favourited) {
      return (
        <IconButton className={classes.iconButton} onClick={handleUnfavouriteMerchant}>
          <div className={`${classes.unheart} ${isSelected ? classes.unheartActive : ''}`} />
        </IconButton>
      );
    }

    return (
      <IconButton className={classes.iconButton} onClick={handleFavouriteMerchant}>
        <div className={`${classes.heart} ${isSelected ? classes.heartActive : ''}`} />
      </IconButton>
    );
  }

  return (
    <IconButton className={classes.iconButton} onClick={() => router.push('/login')}>
      <div className={`${classes.heart}`} />
    </IconButton>
  );
};

export default withStyles(styles)(FavouriteIcon);
