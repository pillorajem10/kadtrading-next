import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// components
import { HeaderName } from 'jumbogold/common';
import { TransactionCartCard } from 'jumbogold/transaction';
import MobileDeliveryOptions from '../../components/MobileDeliveryOptions';
import VoucherDiscount from '../../components/VoucherDiscount';
import GroupOrderTotal from '../../components/GroupOrderTotal';
import PromotionTotal from '../../components/PromotionTotal';
import FreeGift from '../../components/FreeGift';

// Styling
import styles from './style';

const MobileCartListSection = ({ classes, isClicked }) => {
  const { 
    transaction: { cart, deliveryOptions },
  } = useSelector((state) => state);

  if (Object.keys(cart).length === 0) return null;

  const { deliveryOption } = cart.groups[0];

  return (
    <div className={classes.container}>
      {cart.groups.map((group, index) => (
        <div key={index}>
          <HeaderName name={group.merchantName} />

          <div className={classes.itemWrapper}>
            {group.items.map((product, number) => (
              <TransactionCartCard product={product} gst={group.gst} key={number} cartPage />
            ))}

            {/* Delivery Options */}
            <MobileDeliveryOptions
              optionList={deliveryOptions}
              deliveryOption={deliveryOption}
              shippingFee={group.shippingFee}
              isClicked={isClicked}
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

export default withStyles(styles)(MobileCartListSection);
