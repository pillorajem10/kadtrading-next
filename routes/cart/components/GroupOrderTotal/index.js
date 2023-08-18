import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// utils
import { formatPrice } from 'utils/methods.js';

// hooks
import useCurrency from 'hooks/useCurrency';

// Styling
import styles from './style';

const GroupOrderTotal = ({ classes, orderTotal }) => {
  const { updatePriceByCurrency } = useCurrency();

  return (
    <div className={classes.container}>
      <Typography>Order total</Typography>
      <Typography>{formatPrice(updatePriceByCurrency(orderTotal))}</Typography>
    </div>
  );
};

export default withStyles(styles)(GroupOrderTotal);
