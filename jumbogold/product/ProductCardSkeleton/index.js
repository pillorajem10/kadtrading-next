import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

// Styling
import styles from './style';

const ProductCardSkeleon = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Skeleton
        variant='rect'
        width='100%'
        height={250}
        animation='wave'
        className={classes.imageSkeleton}
      />
      <Skeleton
        variant='rect'
        width={120}
        height={22}
        animation='wave'
        className={classes.textSkeleton}
      />
      <Skeleton variant='rect' width={65} height={30} animation='wave' />
    </div>
  );
};

export default withStyles(styles)(ProductCardSkeleon);
