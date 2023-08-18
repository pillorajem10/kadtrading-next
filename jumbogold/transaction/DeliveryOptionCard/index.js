import React, { Fragment } from 'react';
import moment from 'moment';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// hooks
import useCurrency from 'hooks/useCurrency';

// utils
import { formatPrice } from 'utils/methods.js';

// Styling
import styles from './style';

const DeliveryOptionCard = ({ classes, option, selectOption, readOnly }) => {
  
  const { updatePriceByCurrency } = useCurrency();

  const deliveryOptionClassName = () => {
    let className = classes.deliveryOption;

    if (readOnly) {
      className = classes.readOnlyDeliveryOptions;
    }

    return className;
  };

  return (
    <>
      <div
        className={deliveryOptionClassName()}
        onClick={() => (selectOption ? selectOption() : null)}
      >
        <div className={classes.deliveryDurationWrapper}>
          <Typography className={classes.deliveryOptionName}>{option.name}</Typography>
          {/*
          {option.freeShippingAbove > 0 && (
            <Typography className={classes.freeDeliveryCondition}>
              Orders above ${option.freeShippingAbove}
            </Typography>
          )}

          <Typography className={classes.deliveryEstDuration}>Get it from</Typography>          
          */}

        </div>

        <div className={classes.deliveryFeeWrapper}>
          <Typography className={classes.deliveryFeePrice}>Shipping Fee: {formatPrice(updatePriceByCurrency(option.amount))}</Typography>
          {/*
          {option.freeShippingAbove > 0 && (
            <Typography className={classes.freeDelivery}>
              {option.freeShippingExtra !== null && option.freeShippingExtra !== 0
                ? `$${option.freeShippingExtra}`
                : 'Free'}
            </Typography>
          )}

          <Typography className={classes.deliveryEstDuration}>
            {moment().add(option.minEddWeeks, 'w').format('DD MMM')} -{' '}
            {moment().add(option.maxEddWeeks, 'w').format('DD MMM')}
          </Typography>          
          */}

        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(DeliveryOptionCard);
