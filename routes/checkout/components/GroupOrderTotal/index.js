import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const GroupOrderTotal = ({ classes, orderTotal }) => {
  return (
    <div className={classes.container}>
      <Typography>Order total</Typography>
      <Typography>{formatPrice(orderTotal)}</Typography>
    </div>
  );
};

export default withStyles(styles)(GroupOrderTotal);
