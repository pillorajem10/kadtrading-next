import React from 'react';
import moment from 'moment';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// utils
import { formatPrice } from 'utils/methods.js';

// hooks
import useCurrency from 'hooks/useCurrency';

// Styling
import styles from './style';

const SelectedDeliveryOption = ({ classes, option, showOption, shippingFee }) => {
  const { updatePriceByCurrency } = useCurrency();

  return (
    <div className={classes.container} onClick={showOption}>
      <div>
        <Typography className={classes.optionAmount}>
          {option.amount === 0 ? 'Free' : formatPrice(updatePriceByCurrency(option.amount))}
        </Typography>
        <Typography className={classes.optionCondition}>Shipping Fee</Typography>

        {/*option.freeShippingAbove > 0 && (
          <Typography className={classes.optionCondition}>
            {option.freeShippingExtra !== null && option.freeShippingExtra !== 0
              ? `$${option.freeShippingExtra}`
              : 'Free'}{' '}
            delivery above ${option.freeShippingAbove}
          </Typography>
        )*/}
      </div>

      <div>
        <Typography className={classes.optionName}>{option.name}</Typography>
        {/*
        <Hidden xsDown>
          <>
            <Typography className={classes.optionDuration}>Est.Delivery:</Typography>
            <Typography className={classes.optionDuration}>
              {moment().add(option.minEddWeeks, 'w').format('DD MMM')} -{' '}
              {moment().add(option.maxEddWeeks, 'w').format('DD MMM')}
            </Typography>
          </>
        </Hidden>

        <Hidden smUp>
          <Typography className={classes.optionDuration}>
            Est.Delivery:{' '}
            <span className={classes.optionDuration}>
              {moment().add(option.minEddWeeks, 'w').format('DD MMM')} -{' '}
              {moment().add(option.maxEddWeeks, 'w').format('DD MMM')}
            </span>
          </Typography>
        </Hidden>
        */}
      </div>
    </div>
  );
};

export default withStyles(styles)(SelectedDeliveryOption);
