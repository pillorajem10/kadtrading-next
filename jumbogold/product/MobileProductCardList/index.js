import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// components
import MobileProductCard from '../MobileProductCard';
import MobileComboDealProductCard from '../MobileComboDealProductCard';

// Styling
import styles from './style';

const MobileProductCardList = ({ classes, productList, comboDeal }) => {

  return (
    <div className={classes.mobileProductCardList}>
      <div className={classes.listWrapper}>
        
        {productList.docs && productList.docs.map((item, index) => {
          return comboDeal ? (
            <MobileComboDealProductCard key={index} item={item} grid />
          ) : (
            <MobileProductCard key={index} item={item} />
          );
        })}

        {!productList.docs && productList.map((item, index) => {
          return comboDeal ? (
            <MobileComboDealProductCard key={index} item={item} grid />
          ) : (
            <MobileProductCard key={index} item={item} />
          );
        })}

      </div>
    </div>
  );
};

export default withStyles(styles)(MobileProductCardList);
