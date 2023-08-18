import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const PromotionTotal = ({ classes, promoTotal }) => {
  if (promoTotal === null || promoTotal === 0) return null;

  return (
    <div className={classes.container}>
      <Typography>Promotion</Typography>

      <div>
        <Typography className={classes.promotionTotal}>-{formatPrice(promoTotal)}</Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(PromotionTotal);
