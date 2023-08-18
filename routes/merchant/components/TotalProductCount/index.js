import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const TotalProductCount = ({ classes }) => {
  const {
    product: { categoryList },
    listing: {
      page,
      search: { keyword, count },
      params,
    },
  } = useSelector((state) => state);

  const level2List = categoryList.reduce((pre, cur) => {
    return [...pre, ...cur.categories];
  }, []);

  const level3List = [...level2List].reduce((pre, cur) => {
    return [...pre, ...cur.categories];
  }, []);

  const categoryName = level3List?.find((category) => category.id === params.categoryIds)?.name;

  return (
    <Typography className={classes.productCountText}>{`${
      (keyword !== '' ? count : page.totalItem) || 0
    } item(s) found in “${categoryName || 'All Products'}”.`}</Typography>
  );
};

export default withStyles(styles)(TotalProductCount);
