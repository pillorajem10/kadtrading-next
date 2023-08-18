import React from 'react';

// MUI Stuff
import { Typography, withStyles } from '@material-ui/core';

// components
import { RatingStar } from 'jumbogold/product';

// Redux
import { useSelector } from 'react-redux';

// Utils
import regExp from 'utils/regExp';

// Styling
import styles from './style';

const ProductRatings = ({ classes }) => {
  const { reviewSummary } = useSelector((state) => state.product);  
  if (regExp.isEmptyObject(reviewSummary) || reviewSummary.overallRating === null) return null;

  return (
    <div className={classes.productRatings}>
      <Typography>{reviewSummary.overallRating}</Typography>
      <RatingStar value={+reviewSummary.overallRating} readOnly />
    </div>
  );
};

export default withStyles(styles)(ProductRatings);
