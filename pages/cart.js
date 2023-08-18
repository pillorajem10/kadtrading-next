import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { transaction } from 'redux/actions';

// components
import { TransactionConfirmOrder, MobileTransactionConfirmOrder } from 'jumbogold/transaction';

// sections
import CartListSection from 'routes/cart/sections/CartListSection';
import MobileCartListSection from 'routes/cart/sections/MobileCartListSection';

// Utils
import { formatDeliveryOptionParams } from 'utils/formatter';

// Styling
import styles from 'routes/cart/style';

const Cart = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    user: { authenticated },
    transaction: { cart },
  } = useSelector((state) => state);

  const router = useRouter();

  const [isClicked, setIsClicked] = useState(false);

  const handleGetTransactionCart = useCallback(async () => {
    if (authenticated) {
      const res = await dispatch(transaction.getTransactionCart());
      const { success, data } = res;
  
      if (success) {
        const { groups } = data;
  
        if (groups.length > 0) {
          const params = formatDeliveryOptionParams(groups);
          // dispatch(transaction.getDeliveryOptionsByParams(params));
        }
      }
    } else {
      const { groups } = cart;
      if (groups.length > 0) {
        const params = formatDeliveryOptionParams(groups);
        // dispatch(transaction.getDeliveryOptionsByParams(params));
      }      
    }

  }, [dispatch]);

  useEffect(() => {
    handleGetTransactionCart();
  }, [handleGetTransactionCart]);

  const handleConfirmOrder = useCallback(() => {
    const checkDeliveryOption = cart.groups?.filter((item) => item.deliveryOption === null);

    if (checkDeliveryOption.length > 0) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
      router.push('/checkout');
    }
  }, [cart, router]);

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.cartQuantity}>
          <Typography>Cart Items ({cart.itemCount})</Typography>
        </div>

        {cart.itemCount === 0 ? (
          <Typography className={classes.emptyCartText}>Your cart is empty.</Typography>
        ) : (
          <Fragment>
            <Hidden xsDown>
              <CartListSection isClicked={isClicked} />
              <TransactionConfirmOrder confirmOrder={handleConfirmOrder} />
            </Hidden>

            <Hidden smUp>
              <MobileCartListSection isClicked={isClicked} />
              <MobileTransactionConfirmOrder confirmOrder={handleConfirmOrder} cartPage />
            </Hidden>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(Cart);
