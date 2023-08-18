import React, { useEffect, useState, useCallback } from 'react';
import Router from 'next/router';
import moment from 'moment';

// MUI Stuff
import { Typography, withStyles, Button } from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { ui, transaction, product } from 'redux/actions';

// utils
import { formatPrice } from 'utils/methods';
import { getOrderItemsId } from 'routes/transaction-history/utils';
import regExp from 'utils/regExp';

// hooks
import useCurrency from 'hooks/useCurrency';

// Picture
import promoIcon from 'public/assets/icons/promo.svg';

// components
import { HeaderName } from 'jumbogold/common';
import ItemReceivedModal from '../ItemReceivedModal';

// Styling
import styles from './style';

const TransactionDetails = ({ classes, id }) => {
  const dispatch = useDispatch();
  const { updatePriceByCurrency } = useCurrency();

  const [orderDetails, setOrderDetails] = useState({});
  const [selectedOrder, setSelectedOrder] = useState({});
  const [selectedItem, setSelectedItem] = useState({});
  const [reviewList, setReviewList] = useState([]);
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
        orders: data.orders.map(oi => ({ ...oi, id: oi._id })),
      };
      setOrderDetails(mutated);
      const params = { ...getOrderItemsId(mutated), pageIndex: 1, pageSize: 100 };
      handleGetProductReviewStatus(params);
    }
  }, [dispatch, id, handleGetProductReviewStatus]);

  useEffect(() => {
    handleGetTransactionDetails();
  }, [handleGetTransactionDetails]);

  const handleShowItemReceivedModal = (order, item) => {
    setSelectedOrder(order);
    setSelectedItem(item);
    setShowItemReceivedModal(true);
  };

  const handleHideItemReceivedModal = () => {
    setShowItemReceivedModal(false);
    setSelectedOrder({});
    setSelectedItem({});
  };

  const handleSubmitReview = async (payload) => {
    const res = await dispatch(product.createProductReview(payload));
    const { success } = res;

    if (success) {
      dispatch(ui.successNotification({ message: 'Review & rating added successfully.' }));

      const params = { ...getOrderItemsId(orderDetails), pageIndex: 1, pageSize: 100 };
      handleGetProductReviewStatus(params);
      handleHideItemReceivedModal();
    }
  };

  if (Object.keys(orderDetails).length === 0) return null;

  return (
    <div className={classes.transactionDetails}>
      <HeaderName name="Back to Transaction History" onClick={() => Router.push('/user/transaction')} />

      <div className={classes.orderHeader}>
        <div className={classes.orderHeaderItem}>
          <Typography>Date</Typography>
        </div>

        <div className={classes.orderHeaderItem}>
          <Typography>Transaction #</Typography>
        </div>

        <div className={classes.orderHeaderItem}>
          <Typography>Transaction Total</Typography>
        </div>

        <div className={classes.orderHeaderItem}>
          <Typography>Platform Voucher</Typography>
        </div>        

      </div>

      <div className={classes.summaryContainer}>
        {/* Created Time */}
        <div className={classes.summaryItem}>
          <Typography>{moment(orderDetails.createTime).format('DD/MM/YYYY')}</Typography>
        </div>

        {/* Transaction ID */}
        <div className={classes.summaryItem}>
          <Typography>{orderDetails.id.substr(orderDetails.id.length - 10)}</Typography>
        </div>

        {/* Amount Paid */}
        <div className={classes.summaryItem}>
          <Typography>{formatPrice(orderDetails.amountPaid)}</Typography>
          {orderDetails.serviceFee === 1 && <Typography>(Service Fee +$1.00)</Typography>}
        </div>

        {/* Voucher Code */}
        <div className={classes.summaryItem}>
            <Typography className={classes.summaryVoucherCode}>
              {orderDetails.voucherCode && orderDetails.voucherCode !== "" ? `${orderDetails.voucherCode} - ${formatPrice(orderDetails.voucherDiscount)}` : '--'}
            </Typography>
        </div>
      </div>

      {/* User Information, Delivery Address and Billing Address */}
      <div className={classes.userInfoContainer}>
        {orderDetails.deliveryAddress &&
          <div>
            <Typography className={classes.userInfoHeader}>Delivery Information</Typography>
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
          </div>
        }
        
        {orderDetails.billingAddress &&
          <div>
            <Typography className={classes.userInfoHeader}>Billing Information</Typography>{' '}
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
          </div>
        } 

      </div>


      {orderDetails.orders.map((order) => (
        <div className={classes.orderDetailsContainer} key={order.id}>
          {/* Merchant Info */}
          <div className={classes.companyContainer}>
            <div>
              <Typography className={classes.companyName}>{order.merchantName}</Typography>
              <Typography className={classes.orderNumber}>order no: {order.seqId}</Typography>

              <div className={classes.statusContainer}>
                <Typography>Status</Typography>
                <div
                  className={classes.status}
                  style={{ backgroundColor: order.status !== 'paid' ? 'gray' : 'paid' }}
                >
                  <Typography
                    style={{
                      color: order.status !== 'paid' ? 'black' : 'white',
                    }}
                  >
                    {order.status}
                  </Typography>
                </div>
              </div>
            </div>

            <Button
              color="primary"
              variant="contained"
              className={classes.contactMerchantButton}
              onClick={(e) => {
                e.preventDefault();
                window.open(`https://web.whatsapp.com/send?phone=+65${order.merchantPhone}`);
              }}
            >
              Contact Merchant
            </Button>
          </div>

          <div className={classes.orderDetailsHeader}>
            <div className={classes.orderDetailsItem}>
              <Typography>Product</Typography>
            </div>
            
            <div className={classes.orderDetailsItem}>
              <Typography></Typography>
            </div>

            <div className={classes.orderDetailsItem}>
              <Typography>Subtotal</Typography>
            </div>

            <div className={classes.orderDetailsItem}>
              <Typography>QTY</Typography>
            </div>
          </div>

          {/* Order Items List */}
          {order.items.map((item) => (
            <div key={item.id} className={classes.productContainer}>
              <div style={{ flex: 1 }} className={classes.productItem}>
                <div className={classes.productDetails}>
                  <img src={item.image} alt="img" className={classes.productImage} />

                  <div>
                    <Typography className={classes.productName}>{item.productName}</Typography>
                    {/*
                    <Typography className={classes.productVariant}>
                      {item.variantName} {item.variantPrice !== 0 ? `+$${item.variantPrice}` : ''}
                      AAAA
                    </Typography>
                    <Typography
                      className={classes.productVariant}
                      style={{ marginBottom: item.promoName !== null ? 35 : 0 }}
                    >
                      {item.optionName} {item.optionPrice !== 0 ? `+$${item.optionPrice}` : ''}
                      BBBB
                    </Typography>                    
                    */}

                    {item.isBundle &&
                      <div className={classes.buildringContainer}>
                        <div className={classes.buildring}>
                          <img src={promoIcon} alt="" height={16} width={16} />
                          <Typography>Build a Ring</Typography>
                        </div>
                      </div>                    
                    }

                    {/*item.promoName !== '' && item.promoName !== null && (
                      <div className={classes.promotionContainer}>
                        <div className={classes.promotion}>
                          <img src={promoIcon} alt="" height={16} width={16} />
                          <Typography>PROMO!</Typography>
                        </div>
                        <Typography>{item.promoName}</Typography>
                      </div>
                    )*/}
                  </div>
                </div>
              </div>

              {/*
              <div className={classes.productItem}>
                <Typography className={classes.productSku}>SKU</Typography>
                </div>              
              */}

              <div className={classes.productItem}>
                {item.price !== item.originalPrice ? (
                  <div className={classes.productPriceContainer}>
                    <Typography className={classes.salePrice}>
                    {formatPrice(updatePriceByCurrency(Math.round(item.price)), orderDetails.currency ? orderDetails.currency : '')}
                    </Typography>
                    {/*
                    <Typography className={classes.originalPrice}>
                      {formatPrice(
                        item.originalPrice + item.optionOriginalPrice + item.variantOriginalPrice,
                      )}
                    </Typography>                    
                    */}

                  </div>
                ) : (
                  <Typography className={classes.normalPrice}>
                    {formatPrice(updatePriceByCurrency(Math.round(item.price)), orderDetails.currency ? orderDetails.currency : '')}
                  </Typography>
                )}

                {order.shippingFee === 0 && (
                  <Typography className={classes.productGst}>(Gst included)</Typography>
                )}
              </div>

              <div className={classes.productItem}>
                <Typography className={classes.productQty}>x {item.qty}</Typography>

                {order.status === 'paid' && (
                  <div>
                    <Button
                      className={classes.receiveItemButton}
                      onClick={() => handleShowItemReceivedModal(order, item)}
                      disabled={reviewList.length > 0 && reviewList.find(r => r.orderItemId === item._id)}
                    >
                      Item Received
                    </Button>

                    {reviewList.length > 0 && reviewList.find(r => r.orderItemId === item._id) && (
                      <Typography className={classes.reviewSuccessText}>
                        Review added successfully.
                      </Typography>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Subtotal */}
          <div className={classes.orderSummaryContainer} style={{ marginTop: 24 }}>
            <div style={{ width: '25%' }} />
            <div className={classes.orderSummaryTitle}>
              <Typography>Subtotal</Typography>
            </div>
            <div className={classes.orderSummaryValue}>
              <Typography>{formatPrice(updatePriceByCurrency(order.subTotal), orderDetails.currency ? orderDetails.currency : '')}</Typography>
            </div>
          </div>

          {/* Free Gift
          {!regExp.isEmpty(order.remark) && (
            <div className={classes.orderSummaryContainer}>
              <div style={{ width: '25%' }} />
              <div className={classes.orderSummaryTitle}>
                <Typography>Free Gift</Typography>
              </div>
              <div className={classes.orderSummaryValue}>
                <Typography>{order.remark}</Typography>
              </div>
            </div>
          )}          
          */}


          {/* Promotion Total 
          {order.promoTotal !== 0 && (
            <div className={classes.orderSummaryContainer}>
              <div style={{ width: '25%' }} />
              <div className={classes.orderSummaryTitle}>
                <Typography>Promotion</Typography>
              </div>
              <div className={classes.orderSummaryValue}>
                <Typography>-{formatPrice(order.promoTotal)}</Typography>
              </div>
            </div>
          )}          
          */}


          {/* Voucher Discount 
          {order.voucherCode !== null && (
            <div className={classes.orderSummaryContainer}>
              <div style={{ width: '25%' }} />
              <div className={classes.orderSummaryTitle}>
                <Typography>Voucher Discount</Typography>
                <Typography>({order.voucherCode})</Typography>
              </div>
              <div className={classes.orderSummaryValue}>
                <Typography>-{formatPrice(order.voucherDiscount)}</Typography>
              </div>
            </div>
          )}          
          */}


          {/* Delivery Option */}
          {order.deliveryOption !== null && (
            <div className={classes.orderSummaryContainer}>
              <div style={{ width: '25%' }} />
              <div className={classes.orderSummaryTitle}>
                <Typography>Delivery fee</Typography>
              </div>
              <div className={classes.orderSummaryValue}>
                <Typography>
                  {order.shippingFee === 0 ? 'Free' : formatPrice(order.shippingFee)} (
                  {`${order.deliveryOption.name}`}) 
                </Typography>
                {order.shippingFee > 0 &&
                  <Typography variant="caption">
                    {`Est. Delivery: ${moment(order.createTime)
                      .add(3, 'd')
                      .format('DD MMM')} - ${moment(order.createTime)
                      .add(5, 'd')
                      .format('DD MMM')}`}
                  </Typography>                
                }
                
              </div>
            </div>
          )}

          {/* Order Total Container */}
          <div className={classes.orderTotalContainer}>
            <div style={{ width: '25%' }} />
            <div className={classes.orderTotalTitle}>
              <Typography>Order Total</Typography>
            </div>
            <div className={classes.orderTotalValue}>
              <Typography>{formatPrice(order.total)}</Typography>
              {order.gst && (
                <Typography className={classes.orderSummaryGst}>(Gst included)</Typography>
              )}
            </div>
          </div>
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

      <ItemReceivedModal
        open={showItemReceivedModal}
        onClose={handleHideItemReceivedModal}
        order={selectedOrder}
        item={selectedItem}
        submitReview={handleSubmitReview}
      />
    </div>
  );
};

export default withStyles(styles)(TransactionDetails);
