import React from 'react';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// components
import { ProductCardSkeleton, MobileProductCardSkeleton } from 'jumbogold/product';

// styling
import styles from './style';

const ProductListLoading = ({ classes }) => {
  return (
    <div className={classes.container}>
      {/* Product Card Skeleton */}
      <Hidden xsDown>
        {Array.from(new Array(15)).map((item, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </Hidden>

      {/* Mobile Product Card Skeleton */}
      <Hidden smUp>
        {Array.from(new Array(15)).map((item, index) => (
          <MobileProductCardSkeleton key={index} grid />
        ))}
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(ProductListLoading);
