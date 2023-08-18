import React from 'react';
import Router from 'next/router';
import moment from 'moment';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// utils
import { formatPrice } from 'utils/methods.js';

// hooks
import useCurrency from 'hooks/useCurrency';

// Styling
import styles from './style';

const OrderCard = ({ classes, order }) => {
  const { updatePriceByCurrency } = useCurrency();

  return (
    <div
      className={classes.orderCard}
      onClick={() => Router.push(`/user/transaction?id=${order.id}`)}
    >
      <div className={classes.cardHeader}>
        <Typography>{moment(order.createdAt).format('DD/MM/YYYY')}</Typography>
      </div>

      <div className={classes.cardContent}>
        <div>
          <Typography className={classes.orderText}>Transaction #</Typography>
          <Typography className={classes.orderNumber}>
            {order.id.substr(order.id.length - 10)}
          </Typography>
        </div>

        <div>
          <Typography className={classes.totalText}>Total paid</Typography>
          <Typography className={classes.totalPaid}>
            {formatPrice(updatePriceByCurrency(order.amountPaid))}
            </Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(OrderCard);
