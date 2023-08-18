import React, { useEffect, useState, useCallback } from 'react';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// components
import { Pagination } from 'jumbogold/common';
import FavouriteItemCard from 'routes/favourites/components/FavouriteItemCard';
import FavouriteItemList from 'routes/favourites/components/FavouriteItemList';

// Redux
import { useDispatch } from 'react-redux';
import { favourite } from 'redux/actions';

// Styling
import styles from './style';

const FavouriteItemSection = ({ classes, get3D }) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState({});
  const [favouriteList, setFavouriteList] = useState([]);

  const handleGet3DFavouriteList = useCallback(
    async (pageIndex = 1) => {
      const params = { enable3D: true, pageSize: 30, pageIndex };

      const res = await dispatch(favourite.getFavouriteItems(params));
      const { success, data } = res;


      if (success) {
        setFavouriteList(data.docs);
        setPage({ totalItem: data.totalDocs, pageSize: data.page });
      }
    },
    [dispatch],
  );

  const handleGetFavouriteList = useCallback(
    async (pageIndex = 1) => {
      const params = { pageSize: 30, pageIndex };

      const res = await dispatch(favourite.getFavouriteItems(params));
      const { success, data } = res;

      if (success) {
        setFavouriteList(data.docs);
        setPage({ totalItem: data.totalDocs, pageSize: data.page });
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (get3D) {
      handleGet3DFavouriteList();
    } else {
      handleGetFavouriteList();
    }
  }, [get3D, handleGet3DFavouriteList, handleGetFavouriteList]);

  const handleChangePageIndex = (value) => {
    if (get3D) {
      handleGet3DFavouriteList(value);
    } else {
      handleGetFavouriteList(value);
    }
  };

  const handleRemoveFavouriteItem = async (id) => {
    const res = await dispatch(favourite.removeFavouriteItem(id));
    const { success } = res;

    if (success) {
      if (get3D) {
        handleGet3DFavouriteList();
      } else {
        handleGetFavouriteList();
      }
    }
  };

  return (
    <>
      <div className={classes.section}>
        {favouriteList.map((fav) => (
          <div key={fav.id} className={classes.favouriteListContainer}>
            <Hidden xsDown>
              <FavouriteItemList fav={fav} removeFavouriteItem={handleRemoveFavouriteItem} />
            </Hidden>

            <Hidden smUp>
              <FavouriteItemCard fav={fav} removeFavouriteItem={handleRemoveFavouriteItem} />
            </Hidden>
          </div>
        ))}
      </div>

      <Pagination page={page} onPageChange={handleChangePageIndex} />
    </>
  );
};

export default withStyles(styles)(FavouriteItemSection);
