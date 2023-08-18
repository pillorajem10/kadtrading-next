import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

// Styling
import styles from './style';

const MobileProductCardSkeleton = ({ classes, grid }) => {
  return (
    <div className={grid ? classes.gridContainer : classes.container}>
      <Skeleton
        variant='rect'
        width={97}
        height={24}
        animation='wave'
        className={classes.featuredSkeleton}
      />
      <Skeleton
        variant='rect'
        width='100%'
        height={151}
        animation='wave'
        className={classes.imageSkeleton}
      />
      <Skeleton
        variant='rect'
        width={97}
        height={24}
        animation='wave'
        className={classes.productNameSkeleton}
      />
      <Skeleton
        variant='rect'
        width={72}
        height={24}
        animation='wave'
        className={classes.productPriceSkeleton}
      />
      <Skeleton
        variant='rect'
        width='100%'
        height={52}
        animation='wave'
        className={classes.promotionSkeleton}
      />
    </div>
  );
};

export default withStyles(styles)(MobileProductCardSkeleton);
