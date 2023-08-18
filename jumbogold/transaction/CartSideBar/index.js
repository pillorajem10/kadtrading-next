import React from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Slide, Dialog, Typography } from '@material-ui/core';

// MUI Icons
import CloseIcon from '@material-ui/icons/Close';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { common } from 'redux/actions';

// utils
import { useDebounce } from 'utils/methods';

// components
import { HeaderName } from '../../common';
import { TransactionCartCard, MobileTransactionConfirmOrder, EmptyCartDisplay } from '..';

// Styling
import styles from './style';

const Transition = React.forwardRef(function Transition(props, ref) {
  props.timeout.enter = 800;
  props.timeout.exit = 800;
  return <Slide unmountOnExit direction="left" ref={ref} {...props} />;
});

const CartSideMenu = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    transaction: { cart },
    common: { showCartSideBar },
  } = useSelector((state) => state);

  const handleHideCartSideBar = () => dispatch(common.toggleCartSideBar(false));

  const handleConfirmOrder = useDebounce(() => {
    handleHideCartSideBar();
    Router.push('/cart');
  }, 500);
  
  return Object.keys(cart).length > 0 ? (
    <Dialog
      classes={{
        container: classes.container,
        root: classes.layout,
        paper: classes.paper,
      }}
      fullScreen
      open={showCartSideBar}
      onClose={handleHideCartSideBar}
      TransitionComponent={Transition}
    >
      {/* Cart Side Bar Header */}
      <div className={classes.cartSideBarHeader}>
        <Typography className={classes.cartSideBarHeaderText}>
          Your Cart ({cart.itemCount})
        </Typography>

        <CloseIcon className={classes.cartSideBarIcon} onClick={handleHideCartSideBar} />
      </div>

      <div
        className={classes.transactionCartList}
        style={{
          paddingBottom: cart.promoTotal === 0 ? 80 : 120,
        }}
      >
        {/* Empty Cart Display */}
        {cart.itemCount === 0 && <EmptyCartDisplay />}

        {/* Transaction Cart List */}
        {cart.itemCount > 0 && cart.groups.map((group, index) => (
          <div key={index}>
            <HeaderName name={group.merchantName} sideBar />

            {group.items.map((product, number) => (
              <TransactionCartCard product={product} gst={group.gst} key={number} />
            ))}
          </div>
        ))}
      </div>

      {/* Confirm Order */}
      {cart.itemCount > 0 && (
        <div className={classes.confirmOrderWrapper}>
          <MobileTransactionConfirmOrder confirmOrder={handleConfirmOrder} sideBar />
        </div>
      )}
    </Dialog>
  ) : null;
};

export default withStyles(styles)(CartSideMenu);
