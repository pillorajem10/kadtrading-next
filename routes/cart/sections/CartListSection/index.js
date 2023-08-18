import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// components
import { HeaderName } from 'jumbogold/common';
import { TransactionCartList } from 'jumbogold/transaction';
import DeliveryOptions from '../../components/DeliveryOptions';
import VoucherDiscount from '../../components/VoucherDiscount';
import GroupOrderTotal from '../../components/GroupOrderTotal';
import PromotionTotal from '../../components/PromotionTotal';
import FreeGift from '../../components/FreeGift';

// Styling
import styles from './style';

const CartListSection = ({ classes, isClicked }) => {
  const { 
    transaction: { cart, deliveryOptions },
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
              <TransactionCartList product={product} key={number} gst={group.gst} />
            ))}

            <div className={classes.itemTransaction}>
              <div className={classes.itemOptionWrapper}>
                {/* Delivery Options */}
                <DeliveryOptions
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(CartListSection);
