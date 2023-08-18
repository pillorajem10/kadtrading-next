import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Picture
import emptyCart from 'public/assets/images/wizzo/emptycart.jpg';

// Styling
import styles from './style';

const EmptyCartDisplay = ({ classes }) => {
  return (
    <div className={classes.emptyCartDisplay}>
      <img src={emptyCart} className={classes.emptyCartImage} alt="empty cart" />
      <Typography className={classes.emptyCartText}>Your cart is empty.</Typography>
    </div>
  );
};

export default withStyles(styles)(EmptyCartDisplay);
