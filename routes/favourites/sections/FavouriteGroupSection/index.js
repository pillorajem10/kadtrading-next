import React, { useEffect, useState, useCallback } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// components
import { Pagination } from 'jumbogold/common';

// Redux
import { useDispatch } from 'react-redux';
import { favourite } from 'redux/actions';

// Styling
import styles from './style';

const FavouriteGroupSection = ({ classes }) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [favGroupList, setFavGroupList] = useState([]);

  const handleGetFavouriteItemsByGroupId = useCallback(
    async (groupId) => {
      const res = await dispatch(favourite.getFavouriteItemsByGroupId(groupId));
      const { data, success } = res;

      if (success) {
        return data;
      }

      return false;
    },
    [dispatch],
  );

  const handleLoopGroupList = useCallback(
    async (group) => {
      const list = [];

      for (let i = 0; i < group.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        const groupItems = await handleGetFavouriteItemsByGroupId(group[i].groupId);

        if (groupItems) {
          list.push({ ...group[i], items: groupItems });
        }
      }

      setFavGroupList(list);
    },
    [handleGetFavouriteItemsByGroupId],
  );

  const handleGetFavouriteGroupsList = useCallback(
    async (pageIndex = 1) => {
      const params = { pageSize: 30, pageIndex };

      const res = await dispatch(favourite.getFavouriteGroups(params));
      const { success, data } = res;

      if (success) {
        setPage(res.page);
        handleLoopGroupList(data);
      }
    },
    [dispatch, handleLoopGroupList],
  );

  useEffect(() => {
    handleGetFavouriteGroupsList();
  }, [handleGetFavouriteGroupsList]);

  const handleChangePageIndex = (value) => {
    handleGetFavouriteGroupsList(value);
  };

  return (
    <div className={classes.section}>
      <div className={classes.favouriteListContainer}>
        {favGroupList.map((group) => (
          <div key={group.groupId} className={classes.favouriteItemContainer}>
            <div className={classes.groupImageList}>
              {group.items.slice(0, 4).map((item) => (
                <img src={item.image} key={item.id} alt="" className={classes.itemImage} />
              ))}
            </div>
            <div className={classes.groupNameContainer}>{group.groupName}</div>
            <Typography className={classes.totalItem}>{group.itemCount} favourite item</Typography>
          </div>
        ))}
      </div>
      <Pagination page={page} onPageChange={handleChangePageIndex} />
    </div>
  );
};

export default withStyles(styles)(FavouriteGroupSection);
