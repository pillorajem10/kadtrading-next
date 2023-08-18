import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// components
import { HeaderName } from 'jumbogold/common';
import { TransactionCartCard } from 'jumbogold/transaction';
import DeliveryOptions from '../DeliveryOptions';
import VoucherDiscount from '../VoucherDiscount';
import GroupOrderTotal from '../GroupOrderTotal';
import PromotionTotal from '../PromotionTotal';
import FreeGift from '../FreeGift';

// Styling
import styles from './style';

const MobileCartList = ({ classes }) => {
  const {
    transaction: { cart },
  } = useSelector((state) => state);

  if (Object.keys(cart).length === 0) return null;

  return (
    <div className={classes.container}>
      {cart.groups.map((group, index) => (
        <div key={index}>
          <HeaderName name={group.merchantName} />

          <div className={classes.itemWrapper}>
            {group.items.map((product, number) => (
              <TransactionCartCard product={product} gst={group.gst} key={number} checkout />
            ))}

            {/* Delivery Options */}
            <DeliveryOptions
              deliveryOption={group.deliveryOption}
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
      ))}
    </div>
  );
};

export default withStyles(styles)(MobileCartList);
