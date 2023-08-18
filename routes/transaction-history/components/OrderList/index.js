import React from 'react';
import Router from 'next/router';
import moment from 'moment';

// MUI Stuff
import { withStyles, Typography, Button } from '@material-ui/core';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const OrderList = ({ classes, order }) => {
  
  // console.log('[ORDERLIST] ', order);

  return (
    <div className={classes.orderList}>
      <div className={classes.orderItem}>
        <Typography>{moment(order.createdAt).format('DD/MM/YYYY')}</Typography>
      </div>

      <div className={classes.orderItem}>
        <Typography>{order.id.substr(order.id.length - 10)}</Typography>
      </div>

      <div className={classes.orderItem}>
        <Typography>{formatPrice(order.amountPaid)}</Typography>
      </div>

      <div className={classes.buttonContainer}>
        <Button
          className={classes.viewOrderButton}
          color="primary"
          variant="contained"
          onClick={() => Router.push(`/user/transaction?id=${order.id}`)}
        >
          VIEW ORDER
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(OrderList);
