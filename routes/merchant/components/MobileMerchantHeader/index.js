import React, { useEffect, useState, useCallback } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { favourite } from 'redux/actions';

// components
import FavouriteIcon from '../FavouriteIcon';

// Styling
import styles from './style';

const MobileMerchantHeader = ({ classes, tabIndex, setTabIndex }) => {
  const dispatch = useDispatch();
  const {
    merchant: { profile },
    user: { authenticated },
  } = useSelector((state) => state);

  const [isSelected, setIsSelected] = useState(false);
  const [favourited, setFavourited] = useState(false);

  const handleCheckMerchantFavourite = useCallback(async () => {
    if (authenticated && profile.displayName) {
      const params = { name: profile.displayName };
      const res = await dispatch(favourite.getFavouriteMerchants(params));
      const { success, data } = res;

      if (success) {
        setIsSelected(false);

        if (data.length > 0) {
          setFavourited(true);
        } else {
          setFavourited(false);
        }
      }
    }
  }, [dispatch, authenticated, profile]);

  useEffect(() => {
    handleCheckMerchantFavourite();
  }, [handleCheckMerchantFavourite]);

  return (
    <div className={classes.mobileMerchantHeader}>
      <div className={classes.headerContainer}>
        <div className={classes.logoContainer}>
          <img src={profile.logo} alt={profile.displayName} height={80} />
        </div>

        <div className={classes.favIcon}>
          <FavouriteIcon
            setIsSelected={setIsSelected}
            isSelected={isSelected}
            favourited={favourited}
          />
        </div>
      </div>

      <div className={classes.tabContainer}>
        <div
          className={tabIndex === 0 ? classes.activeTab : classes.normalTab}
          onClick={() => setTabIndex(0)}
        >
          <Typography>SHOP</Typography>
        </div>

        <div
          className={tabIndex === 1 ? classes.activeTab : classes.normalTab}
          onClick={() => setTabIndex(1)}
        >
          <Typography>ABOUT</Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(MobileMerchantHeader);
