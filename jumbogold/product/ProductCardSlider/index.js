import React from 'react';

// MUI Stuff
import { Hidden } from '@material-ui/core';

// components
import { ProductCardList, MobileProductCardList } from 'jumbogold/product';

const ProductCardSlider = ({ productList, comboDeal = false }) => {
  return (
    <>
      <Hidden xsDown>
        <ProductCardList productList={productList} comboDeal={comboDeal} />
      </Hidden>
      <Hidden smUp>
        <MobileProductCardList productList={productList} comboDeal={comboDeal} />
      </Hidden>
    </>
  );
};

export default ProductCardSlider;
