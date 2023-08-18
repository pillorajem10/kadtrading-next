import React, { useEffect, useState, useCallback } from 'react';
import Router from 'next/router';
import moment from 'moment';

// MUI Stuff
import {
  withStyles,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { transaction, product } from 'redux/actions';

// Picture
import emailIcon from 'public/assets/icons/email.svg';
import expandIcon from 'public/assets/icons/grey-expand.svg';

// Utils
import { formatPrice } from 'utils/methods';
import { getOrderItemsId } from 'routes/transaction-history/utils';
import regExp from 'utils/regExp';

// components
import { HeaderName } from 'jumbogold/common';
import { TransactionCartCard } from 'jumbogold/transaction';
import MobileItemReceivedModal from '../MobileItemReceivedModal';

// Styling
import styles from './style';

const MobileTransactionDetails = ({ classes, id }) => {
  const dispatch = useDispatch();

  const [orderDetails, setOrderDetails] = useState({});
  const [reviewList, setReviewList] = useState([]);
  const [orderId, setOrderId] = useState('');
  const [itemId, setItemId] = useState('');
  const [showItemReceivedModal, setShowItemReceivedModal] = useState(false);

  const handleGetProductReviewStatus = useCallback(
    async (params) => {
      const res = await dispatch(product.getProductReviewStatus(params));
      const { success, data } = res;
      if (success) {
        setReviewList(data.docs);
      }
    },
    [dispatch],
  );

  const handleGetTransactionDetails = useCallback(async () => {
    const res = await dispatch(transaction.getTransactionDetails(id));
    const { success, data } = res;

    if (success) {
      const mutated = {
        ...data,
        id: data._id,
        orders: data.orders.map(oi => {
          return { ...oi, id: oi._id };
        }),
      };
      
      setOrderDetails(mutated);
      const params = { ...getOrderItemsId(mutated), pageIndex: 1, pageSize: 100 };
      handleGetProductReviewStatus(params);
    }
  }, [dispatch, id, handleGetProductReviewStatus]);

  useEffect(() => {
    handleGetTransactionDetails();
  }, [handleGetTransactionDetails]);

  const handleShowItemReceivedModal = (selectedOrderId, selectedItemId) => {
    setOrderId(selectedOrderId);
    setItemId(selectedItemId);
    setShowItemReceivedModal(true);
  };

  const handleHideItemReceivedModal = () => {
    setOrderId('');
    setItemId('');
    setShowItemReceivedModal(false);
  };

  if (Object.keys(orderDetails).length === 0) return null;

  return (
    <div>
      <Typography className={classes.header}>Transaction History</Typography>

      <HeaderName name="BACK" onClick={() => Router.push('/user/transaction')} />

      <Accordion defaultExpanded className={classes.userInfoExpander}>
        <AccordionSummary
          className={classes.userInfoContainer}
          expandIcon={<img src={expandIcon} alt="" className={classes.expandIcon} />}
          aria-controls="toggle-panel-content"
          id="panel-header"
        >
          <Typography className={classes.userInfoHeader}>Delivery Information</Typography>
        </AccordionSummary>

        <AccordionDetails className={classes.userInfoInnerContainer}>
          <div>

          {orderDetails.deliveryAddress &&
              <>
                <Typography className={classes.userName}>
                  {orderDetails.deliveryAddress.firstName} {orderDetails.deliveryAddress.lastName}
                </Typography>
                <Typography className={classes.userPhone}>
                  {orderDetails.deliveryAddress.countryCode} {orderDetails.deliveryAddress.phone}
                </Typography>
                <Typography className={classes.userAddress}>
                  {orderDetails.deliveryAddress.address}
                </Typography>
                <Typography className={classes.userAddress}>
                  {orderDetails.deliveryAddress.unit}
                </Typography>
                <Typography className={classes.userAddress}>
                  Singapore {orderDetails.deliveryAddress.postcode}
                </Typography>
              </>            
            }




            <div className={classes.userDivider} />

            <Typography className={classes.userInfoHeader} style={{ marginBottom: 20 }}>
              Billing Information
            </Typography>

            {orderDetails.billingAddress &&
              <>
              <Typography className={classes.userName}>
                {orderDetails.billingAddress.firstName} {orderDetails.billingAddress.lastName}
              </Typography>
              <Typography className={classes.userPhone}>
                {orderDetails.billingAddress.countryCode} {orderDetails.billingAddress.phone}
              </Typography>
              <Typography className={classes.userAddress}>
                {orderDetails.billingAddress.address}
              </Typography>
              <Typography className={classes.userAddress}>
                {orderDetails.billingAddress.unit}
              </Typography>
              <Typography className={classes.userAddress}>
                Singapore {orderDetails.billingAddress.postcode}
              </Typography>
              </>            
            }

          </div>
        </AccordionDetails>
      </Accordion>

      {/* Create Time */}
      <div className={classes.createTimeContainer}>
        <Typography>{moment(orderDetails.createTime).format('DD/MM/YYYY')}</Typography>
      </div>

      {/* Transaction Number / Amount Paid  */}
      <div className={classes.transactionOrderContainer}>
        <div>
          <Typography>Transaction #</Typography>
          <Typography>{orderDetails.id.substr(orderDetails.id.length - 10)}</Typography>
        </div>
        <div>
          <Typography>Transaction Total</Typography>
          <Typography>
            {formatPrice(orderDetails.amountPaid)}
          </Typography>
        </div>
      </div>

      {/* Platform Voucher 
      {orderDetails.voucherCode !== null && (
        <div className={classes.voucherCodeContainer}>
          <Typography>Platform Voucher</Typography>
          <Typography>
            {orderDetails.voucherCode} -{formatPrice(orderDetails.voucherDiscount)}
          </Typography>
        </div>
      )}      
      */}


      {orderDetails.orders.map((order, index) => (
        <div key={order.id}>
          <div className={classes.orderDetailsContainer} key={order.id}>
            {/* Merchant Info */}
            <div className={classes.companyContainer}>
              <div>
                <Typography className={classes.companyName}>{order.merchantName}</Typography>
                <Typography className={classes.orderNumber}>order no: {order.seqId}</Typography>
              </div>

              <img
                src={emailIcon}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`https://web.whatsapp.com/send?phone=+65${order.merchantPhone}`);
                }}
              />
            </div>

            {/* Status */}
            <div className={classes.statusContainer}>
              <Typography>Status</Typography>
              <div
                className={classes.status}
                style={{ backgroundColor: order.status !== 'paid' ? 'gray' : 'black' }}
              >
                <Typography
                  style={{ color: order.status !== 'paid' ? 'black' : 'white' }}
                >
                  {order.status}
                </Typography>
              </div>
            </div>

            {/* Order Items List */}
            {order.items.map((item) => (
              <TransactionCartCard
                key={item._id}
                product={item}
                gst={order.gst}
                checkout
                status={order.status}
                reviewed={reviewList.length > 0 && reviewList.find(r => r.orderItemId === item._id)}
                showItemReceivedModal={() => handleShowItemReceivedModal(order._id, item._id)}
              />
            ))}

            {/* Subtotal */}
            <div className={classes.orderSummaryContainer}>
              <Typography>Subtotal</Typography>
              <Typography>{formatPrice(order.subTotal)}</Typography>
            </div>

            {/* Free Gift
            {!regExp.isEmpty(order.remark) && (
              <div className={classes.orderSummaryContainer}>
                <Typography>Free Gift</Typography>
                <Typography>{order.remark}</Typography>
              </div>
            )}            
            */}


            {/* Promotion Total 
            {order.promoTotal !== 0 && (
              <div className={classes.orderSummaryContainer}>
                <Typography>Promotion</Typography>
                <Typography>-{formatPrice(order.promoTotal)}</Typography>
              </div>
            )}            
            */}


            {/* Voucher Discount 
            {order.voucherCode !== null && (
              <div className={classes.orderSummaryContainer}>
                <Typography>
                  Voucher Discount <br />
                  <span className={classes.voucherCode}>({order.voucherCode})</span>
                </Typography>
                <Typography>-{formatPrice(order.voucherDiscount)}</Typography>
              </div>
            )}            
            */}


            {/* Delivery Option */}
            {order.deliveryOption !== null && (
              <>
                <div className={classes.orderSummaryContainer}>
                  <Typography>Delivery fee</Typography>
                  <Typography>
                    {order.shippingFee === 0 ? 'Free' : formatPrice(order.shippingFee)}
                  </Typography>
                </div>
                <Typography variant="caption">
                  ({`${order.deliveryOption.name}: Est. Delivery: ${moment(order.createTime)
                    .add(3, 'd')
                    .format('DD MMM')} - ${moment(order.createTime)
                    .add(5, 'd')
                    .format('DD MMM')}`})
                </Typography>
              </>
            )}

            {/* Order Total */}
            <div className={classes.orderTotalContainer}>
              <Typography>Order Total</Typography>
              <Typography>
                {formatPrice(order.total)}{' '}
                {order.gst && <span className={classes.orderSummaryGst}>(Gst included)</span>}
              </Typography>
            </div>
          </div>

          {/* Divider */}
          {index !== orderDetails.orders.length - 1 && <div className={classes.divider} />}
        </div>
      ))}

      {/* Back Button */}
      <Button
        color="primary"
        variant="contained"
        className={classes.backButton}
        onClick={() => Router.push('/user/transaction')}
      >
        Back
      </Button>

      {/* Mobile Item Received Modal */}
      <MobileItemReceivedModal
        open={showItemReceivedModal}
        onClose={handleHideItemReceivedModal}
        transactionId={id}
        orderId={orderId}
        itemId={itemId}
      />
    </div>
  );
};

export default withStyles(styles)(MobileTransactionDetails);
