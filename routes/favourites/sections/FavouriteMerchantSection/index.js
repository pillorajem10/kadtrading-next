import React, { useEffect, useState, useCallback } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// MUI Icons
import ClearIcon from '@material-ui/icons/Clear';

// components
import { Pagination } from 'jumbogold/common';

// Redux
import { useDispatch } from 'react-redux';
import { favourite } from 'redux/actions';

// Styling
import styles from './style';

const FavouriteMerchantSection = ({ classes }) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState({});
  const [favouriteList, setFavouriteList] = useState([]);

  const handleGetFavouriteMerchantList = useCallback(
    async (pageIndex = 1) => {
      const params = { pageSize: 30, pageIndex };

      const res = await dispatch(favourite.getFavouriteMerchants(params));
      const { success, data } = res;

      if (success) {
        setPage(res.page);
        setFavouriteList(data);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    handleGetFavouriteMerchantList();
  }, [handleGetFavouriteMerchantList]);

  const handleChangePageIndex = (value) => {
    handleGetFavouriteMerchantList(value);
  };

  return (
    <div className={classes.section}>
      <div className={classes.headerContainer}>
        <Typography className={classes.totalMerchantsSaved}>
          {page.totalItem} Merchants saved
        </Typography>

        <div className={classes.closeIconContainer}>
          <ClearIcon />
        </div>
      </div>

      <div className={classes.favouriteListContainer}>
        {favouriteList.map((fav) => (
          <div key={fav.id} className={classes.favouriteItemContainer}>
            <img src={fav.image} alt={fav.name} className={classes.merchantBanner} />

            <div className={classes.merchantLogoContainer}>
              <img src={fav.logo} alt="" className={classes.merchantLogo} />
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} onPageChange={handleChangePageIndex} />
    </div>
  );
};

export default withStyles(styles)(FavouriteMerchantSection);
