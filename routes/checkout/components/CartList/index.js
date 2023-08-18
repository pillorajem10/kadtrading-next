import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// components
import { HeaderName } from 'jumbogold/common';
import { TransactionCartList } from 'jumbogold/transaction';
import DeliveryOptions from '../DeliveryOptions';
import VoucherDiscount from '../VoucherDiscount';
import PromotionTotal from '../PromotionTotal';
import GroupOrderTotal from '../GroupOrderTotal';
import FreeGift from '../FreeGift';

// Styling
import styles from './style';

const CartList = ({ classes }) => {
  const {
    transaction: { cart },
  } = useSelector((state) => state);

  if (Object.keys(cart).length === 0) return null;

  const { deliveryOption } = cart.groups[0];

  return (
    <div className={classes.container}>
      <div className={classes.cartListHeader}>
        <Typography>Product</Typography>
        <Typography>Subtotal</Typography>
        <Typography>Quantity</Typography>
      </div>

      {cart.groups.map((group, index) => (
        <div className={classes.itemList} key={index}>
          <HeaderName name={group.merchantName} />

          <div className={classes.itemWrapper}>
            {group.items.map((product, number) => (
              <TransactionCartList product={product} key={number} gst={group.gst} checkout />
            ))}

            <div className={classes.itemTransaction}>
              <div className={classes.itemOptionWrapper}>
                {/* Delivery Options */}
                <DeliveryOptions
                  deliveryOption={deliveryOption}
                  shippingFee={group.shippingFee}
                />

                {/* Voucher Discount 
                <VoucherDiscount
                  voucherCode={group.voucherCode}
                  voucherDiscount={group.voucherDiscount}
                  merchantId={group.merchantId}
                />                
                */}


                {/* Promotion Total
                <PromotionTotal promoTotal={group.promoTotal} />                
                */}


                {/* Free Gift
                <FreeGift remark={group.remark} />                
                */}


                {/* Group Order Total */}
                <GroupOrderTotal orderTotal={group.orderTotal} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(CartList);
