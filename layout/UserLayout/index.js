import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// MUI Icons
import EditIcon from '@material-ui/icons/Edit';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { favourite, user } from 'redux/actions';

// Picture
// import bottomPattern from 'public/assets/images/patterns/pattern2.png';
// import topPattern from 'public/assets/images/patterns/pattern1.png';
import guestIcon from 'public/assets/icons/profile.svg';

// components
import FilterPeriod from './components/FilterPeriod';
import FilterPageSize from './components/FilterPageSize';

// Styling
import styles from './style';

const UserLayout = ({ children, classes }) => {
  const dispatch = useDispatch();
  const {
    user: { authenticated, account },
    favourite: { totalFavouriteItem },
  } = useSelector((state) => state);

  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    if (authenticated) {
      dispatch(favourite.getFavouriteItems());
    }
  }, [dispatch, authenticated]);

  const handleShowWelcomeBackContainer = () => {
    const width = window.innerWidth < 768;

    if (width && asPath.includes('/user/transaction')) {
      return false;
    }

    if (asPath.includes('/user/favourites')) {
      return false;
    }

    return true;
  };

  const handleShowTransacitonFilter = () => {
    return asPath === '/user/transaction';
  };

  const handleShowFavouriteContainer = () => {
    return asPath === '/user/favourites';
  };

  if (!authenticated) return null;

  return (
    <div className={classes.layout}>
      <div className={classes.container}>
        {handleShowWelcomeBackContainer() && (
          <div className={classes.headerContainer}>
            <div>
              <Typography className={classes.header}>
                Welcome back, {account.fname} {account.lname}!
              </Typography>

              {/* <div className={classes.avatarContainer}>
                <img
                  src={account.profilePic || guestIcon}
                  alt={`${account.fname} ${account.lname}`}
                  className={classes.avatar}
                />
              </div> */}
            </div>

            {handleShowTransacitonFilter() && (
              <div className={classes.transactionFilterContainer}>
                <Typography>Period</Typography>
                <FilterPeriod />

                <Typography>Show Records</Typography>
                <FilterPageSize />
              </div>
            )}
          </div>
        )}

        {handleShowFavouriteContainer() && (
          <div className={classes.favouriteHeaderContainer}>
            <Typography>Favourites</Typography>

            <Hidden smUp>
              <div className={classes.numberFav}>
                <Typography>{totalFavouriteItem}</Typography>
              </div>
            </Hidden>
          </div>
        )}

        <div className={classes.contentContainer}>
          <Hidden xsDown>
            <div className={classes.sideMenuContainer}>
              <div
                className={asPath.includes('profile') ? classes.activeMenuItem : classes.menuItem}
                onClick={() => router.push('/user/profile')}
              >
                <Typography>Profile</Typography>
              </div>

              <div
                className={
                  asPath.includes('transaction') ? classes.activeMenuItem : classes.menuItem
                }
                onClick={() => router.push('/user/transaction')}
              >
                <Typography>Transaction History</Typography>
              </div>

              <div
                className={
                  asPath.includes('favourites') ? classes.activeMenuItem : classes.menuItem
                }
                onClick={() => router.push('/user/favourites')}
              >
                <Typography>Favourites</Typography>
                <div className={classes.numberFav}>
                  <Typography>{totalFavouriteItem}</Typography>
                </div>
              </div>

              <div
                className={classes.menuItem}
                onClick={() => {
                  user.userLogout();
                }}
              >
                <Typography>Log out</Typography>
              </div>
            </div>
          </Hidden>

          <div className={classes.childContainer}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(UserLayout);
