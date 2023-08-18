import React from 'react';

// MUI Stuff
import { withStyles, Typography, Button, Divider } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// hooks
import useCart from 'hooks/useCart';

// utils
import { formatPrice } from 'utils/methods.js';

// hooks
import useCurrency from 'hooks/useCurrency';

// picture
import addVoucherIcon from 'public/assets/icons/add-voucher-code.svg';
import closeVoucherIcon from 'public/assets/icons/close-voucher-code.svg';
import checkVoucherIcon from 'public/assets/icons/check-voucher.svg';
import enterIcon from 'public/assets/icons/arrow-forward.svg';

// components
import VoucherCodeAlertMessage from '../VoucherCodeAlertMessage';
import { CartRefreshModal } from '../../modal';
import { Spinner } from '../../common';

// styling
import styles from './style';

const MobileTransactionConfirmOrder = ({ classes, confirmOrder, sideBar, isLoad }) => {
  const {
    transaction: { cart },
    user: { authenticated },
  } = useSelector((state) => state);

  const cartHooks = useCart();
  const { updatePriceByCurrency } = useCurrency();

  const handleRenderButtonText = () => {
    let renderer = 'Confirm Order';

    if (isLoad) renderer = <Spinner />;

    if (sideBar) renderer = 'Checkout';

    if (sideBar && !authenticated) renderer = 'Checkout As Guest';

    return renderer;
  };

  return (
    <div className={classes.mobileTransactionConfirmOrder}>
      <div className={classes.inputVoucherCodeContainer}>
        {/* Enter Voucher Code */}
        {authenticated && !sideBar && (
          <>
            {/*
            <div className={classes.confirmOrderWrapper}>
              <Typography className={classes.voucherTitle}>Enter voucher code</Typography>

              {cartHooks.showVoucherInput ? (
                <img
                  src={closeVoucherIcon}
                  alt="close vource code"
                  onClick={cartHooks.handleCloseAddVoucherInput}
                  className={classes.closeVoucherIcon}
                />
              ) : (
                <img
                  src={addVoucherIcon}
                  alt="add vource code"
                  onClick={cartHooks.handleShowVoucherInput}
                  className={classes.addVoucherIcon}
                />
              )}
            </div>

            {cartHooks.showVoucherInput && (
              <div className={classes.voucherWrapper}>
                <input
                  value={cartHooks.voucherCode}
                  className={classes.voucherTextField}
                  onChange={cartHooks.handleSetVoucherCode}
                  onKeyDown={cartHooks.handleVoucherCodeKeyDown}
                  style={{
                    color: cartHooks.invalidVoucherCode ? '#fc2929' : '#000',
                  }}
                />

                {cartHooks.showCheckedIcon ? (
                  <img src={checkVoucherIcon} alt="check voucher icon" />
                ) : (
                  <img
                    src={enterIcon}
                    alt="enter icon"
                    onClick={cartHooks.handleCheckVoucherCode}
                    className={classes.enterIcon}
                  />
                )}
              </div>
            )}            
            */}


            {/* Invalid Voucher Code Alert
            <VoucherCodeAlertMessage show={cartHooks.invalidVoucherCode} type="invalid-code" />            
            */}


            {/* Service Fee Alert
            <VoucherCodeAlertMessage show={cartHooks.showServiceFeeError} type="service-fee" />            
            */}
          </>
        )}

        {/* Order Voucher Code */}
        {cart.voucherCode !== null && !sideBar && (
          <>
            {/*
            <div className={classes.confirmOrderWrapper} style={{ marginBottom: 0 }}>
              <Typography className={classes.voucherCodeTitle}>Platform Voucher</Typography>

              <div className={classes.voucherCodeInnerWrapper}>
                <img
                  src={closeVoucherIcon}
                  alt="close vource code"
                  onClick={cartHooks.handleRemoveVoucherCode}
                  className={classes.closeVoucherIcon}
                />
              </div>
            </div>            
            */}

            {/*
            <div className={classes.confirmOrderWrapper} style={{ marginBottom: 0 }}>
              <Typography className={classes.voucherCodeText}>{cart.voucherCode}</Typography>
              <div className={classes.voucherCodeInnerWrapper}>
                <Typography className={classes.voucherDiscount}>
                  -${cart.voucherDiscount}
                </Typography>
              </div>
            </div>            
            */}
          </>
        )}
      </div>

      {/* Subtotal */}
      {/*cart.total !== cart.subtotal && (

      )*/}

      <div className={classes.confirmOrderWrapper}>
        <Typography className={classes.wrapperTitle}>Subtotal</Typography>
        <Typography className={classes.wrapperValue}>{formatPrice(updatePriceByCurrency(cart.subTotal))}</Typography>
      </div>

      {/* Promotion */}
      {cart.promoTotal !== 0 && (
        <div className={classes.confirmOrderWrapper}>
          <Typography className={classes.wrapperTitle}>Promotion</Typography>
          <Typography className={classes.wrapperValue}>-{formatPrice(updatePriceByCurrency(cart.promoTotal))}</Typography>
        </div>
      )}

      {/* Discount Value */}
      {cart.voucherDiscountTotal !== 0 && (
        <div className={classes.confirmOrderWrapper}>
          <Typography className={classes.wrapperTitle}>Voucher discount</Typography>
          <Typography className={classes.wrapperValue}>
            -{formatPrice(updatePriceByCurrency(cart.voucherDiscountTotal))}
          </Typography>
        </div>
      )}

      {/* Delivery Fee */}
      {authenticated && (
        <div className={classes.confirmOrderWrapper}>
          <Typography className={classes.wrapperTitle}>Delivery Fee</Typography>
          <Typography className={classes.wrapperValue}>{formatPrice(updatePriceByCurrency(cart.shippingFee))}</Typography>
        </div>
      )}

      {/* Service Fee */}
      {cart.serviceFee !== 0 && (
        <div className={classes.confirmOrderWrapper}>
          <Typography className={classes.promotionTitle}>Service fee</Typography>
          <Typography className={classes.promotionValue}>{formatPrice(updatePriceByCurrency(cart.serviceFee))}</Typography>
        </div>
      )}

      {authenticated && <Divider className={classes.divider} />}

      {/* Order Total */}
      <div className={classes.confirmOrderWrapper}>
        <Typography className={classes.orderTotalTitle}>Order Total</Typography>
        <Typography className={classes.orderTotalValue}>
          {formatPrice(updatePriceByCurrency(cart.total + cart.serviceFee))}
        </Typography>
      </div>

      {/* Confirm Order Button */}
      <Button
        color="primary"
        variant="contained"
        className={classes.confirmOrderButton}
        onClick={() => cartHooks.handleConfirmOrder(true, confirmOrder)}
        disabled={(cartHooks.invalidVoucherCode && cartHooks.voucherCode.length > 0) || isLoad}
      >
        {handleRenderButtonText()}
      </Button>

      {/* Cart Refresh Modal */}
      <CartRefreshModal
        open={cartHooks.showCartRefreshModal}
        onClose={cartHooks.handleCloseCartRefreshModal}
      />
    </div>
  );
};

export default withStyles(styles)(MobileTransactionConfirmOrder);
