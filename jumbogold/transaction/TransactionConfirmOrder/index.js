import React from 'react';

// MUI Stuff
import { withStyles, Typography, Button, Divider } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// utils
import { formatPrice } from 'utils/methods.js';

// hooks
import useCurrency from 'hooks/useCurrency';
import useCart from 'hooks/useCart';

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

const TransactionConfirmOrder = ({ classes, confirmOrder, isLoad }) => {
  const {
    common: { gst },
    transaction: { cart },
    user: { authenticated },
  } = useSelector((state) => state);

  const cartHooks = useCart();
  const { updatePriceByCurrency } = useCurrency();
 
  return (
    <>
      <div style={{ display: 'none' }} className={classes.inputVoucherCodeContainer}>
        <div className={classes.container}>
          {/* Enter Voucher Code */}
          {authenticated && (
            <>
              <div className={classes.voucherWrapper}>
                <Typography className={classes.voucherTitle}>Enter Voucher Code</Typography>

                {cartHooks.showVoucherInput ? (
                  <div className={classes.voucherInnerWrapper}>
                    <div className={classes.voucherTextWrapper}>
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

                    <img
                      src={closeVoucherIcon}
                      alt="close voucher icon"
                      className={classes.closeVoucherIcon}
                      onClick={cartHooks.handleCloseAddVoucherInput}
                    />
                  </div>
                ) : (
                  <img
                    src={addVoucherIcon}
                    alt="add voucher icon"
                    className={classes.addVoucherIcon}
                    onClick={cartHooks.handleShowVoucherInput}
                  />
                )}
              </div>

              <div className={classes.alertMessageWrapper}>
                {/* Invalid Voucher Code Alert */}
                <VoucherCodeAlertMessage show={cartHooks.invalidVoucherCode} type="invalid-code" />

                {/* Service Fee Alert */}
                <VoucherCodeAlertMessage show={cartHooks.showServiceFeeError} type="service-fee" />
              </div>
            </>
          )}

          {/* Order Voucher Code */}
          {cart.voucherCode !== '' && cart.voucherCode !== null && (
            <div className={classes.voucherWrapper}>
              <Typography className={classes.voucherTitle}>Platform Voucher</Typography>

              <div
                className={classes.voucherInnerWrapper}
                style={{
                  justifyContent: 'space-between',
                }}
              >
                <div className={classes.vourcherTextWrapper}>
                  <Typography className={classes.voucherDiscountText}>
                    -{formatPrice(cart.voucherDiscount)}
                  </Typography>
                </div>

                <div className={classes.voucherCodeWrapper}>
                  <Typography className={classes.voucherCodeText}>{cart.voucherCode}</Typography>
                  <img
                    src={closeVoucherIcon}
                    alt="close voucher icon"
                    className={classes.closeVoucherIcon}
                    onClick={cartHooks.handleRemoveVoucherCode}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={classes.transactionConfirmOrder}>
        <div className={classes.container}>
          {/* Subtotal */}
          {cart.total !== cart.subtotal && (
            <div className={classes.confirmOrderDetailsWrapper}>
              <Typography className={classes.wrapperTitle}>Subtotal</Typography>
              <Typography className={classes.wrapperValue}>{formatPrice(updatePriceByCurrency(cart.subTotal))}</Typography>
            </div>
          )}

          {/* Promotion 
          {cart.promoTotal !== 0 && (
            <div className={classes.confirmOrderDetailsWrapper}>
              <Typography className={classes.wrapperTitle}>Promotion</Typography>
              <Typography className={classes.wrapperValue}>
                -{formatPrice(cart.promoTotal)}
              </Typography>
            </div>
          )}          
          */}


          {/* Discount Value 
          {cart.voucherDiscountTotal !== 0 && (
            <div className={classes.confirmOrderDetailsWrapper}>
              <Typography className={classes.wrapperTitle}>Voucher Discount</Typography>
              <Typography className={classes.wrapperValue}>
                -{formatPrice(cart.voucherDiscountTotal)}
              </Typography>
            </div>
          )}          
          */}


          {/* Delivery Fee */}
          <div
            className={
              cart.serviceFee !== 0
                ? classes.confirmOrderDetailsWrapper
                : classes.confirmOrderWrapper
            }
          >
            <Typography className={classes.wrapperTitle}>Delivery Fee</Typography>
            <Typography className={classes.wrapperValue}>
              {formatPrice(updatePriceByCurrency(cart.shippingFee))}
            </Typography>
          </div>


          {/* GST 
            GST Amount = (Original Cost*GST Rate Percentage) / 100
            Net Price = Original Cost + GST Amount
            214 * 7 / (100 + 7)
            0.07 * 100
          */}
          {cart.shippingFee !== 0 && (
            <div className={classes.confirmOrderWrapper}>
              <Typography className={classes.wrapperTitle}>GST</Typography>
              <Typography className={classes.wrapperValue}>
                -{formatPrice(updatePriceByCurrency(cart.gstTotal))}
              </Typography>
            </div>
          )}




          {/* Service Fee */}
          {cart.serviceFee !== 0 && (
            <div className={classes.confirmOrderWrapper}>
              <Typography className={classes.wrapperTitle}>Service Fee</Typography>
              <Typography className={classes.wrapperValue}>
                {formatPrice(updatePriceByCurrency(cart.serviceFee))}
              </Typography>
            </div>
          )}

          <Divider className={classes.divider} />

          <div className={classes.confirmOrderWrapper}>
            {/* Order Total */}
            <Typography className={classes.orderTotalTitle}>Order Total</Typography>
            <Typography className={classes.orderTotalValue}>
              {formatPrice(updatePriceByCurrency(cart.total + cart.serviceFee))}
            </Typography>

            {/* Confirm Order Button */}
            <Button
              color="primary"
              variant="contained"
              className={classes.confirmOrderButton}
              onClick={() => cartHooks.handleConfirmOrder(false, confirmOrder)}
              disabled={
                (cartHooks.invalidVoucherCode && cartHooks.voucherCode.length > 0) || isLoad
              }
            >
              {isLoad ? <Spinner /> : 'Confirm Order'}
            </Button>
          </div>
        </div>

        <CartRefreshModal
          open={cartHooks.showCartRefreshModal}
          onClose={cartHooks.handleCloseCartRefreshModal}
        />
      </div>
    </>
  );
};

export default withStyles(styles)(TransactionConfirmOrder);
