import React from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// components
import { TransactionConfirmOrder, MobileTransactionConfirmOrder } from 'jumbogold/transaction';
import CartList from '../../components/CartList';
import MobileCartList from '../../components/MobileCartList';

// Styling
import styles from './style';

const CartItemsSection = ({ classes, handleMakePayment, isLoad }) => {
  const { cart } = useSelector((state) => state.transaction);

  return (
    <div className={classes.cartItems}>
      <div className={classes.container}>
        <div className={classes.cartQuantity}>
          <Typography className={classes.cartQuantityText}>
            Cart Items ({cart.itemCount})
          </Typography>
        </div>

        <Hidden xsDown>
          <CartList />
          <TransactionConfirmOrder confirmOrder={handleMakePayment} isLoad={isLoad} />
        </Hidden>

        <Hidden smUp>
          <MobileCartList />
          <MobileTransactionConfirmOrder
            confirmOrder={handleMakePayment}
            isLoad={isLoad}
            cartPage
          />
        </Hidden>
      </div>
    </div>
  );
};

export default withStyles(styles)(CartItemsSection);
