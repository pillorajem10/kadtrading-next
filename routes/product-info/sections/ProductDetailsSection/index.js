import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// components
import ProductRatings from '../../components/ProductRatings';
import ProductNameInfo from '../../components/ProductNameInfo';
import ProductPrice from '../../components/ProductPrice';
import ProductInfoTabs from '../../components/ProductInfoTabs';
import ProductVariants from '../../components/ProductVariants';
import ProductVariantsOptions from '../../components/ProductVariantsOptions';
import AddToCart from '../../components/AddToCart';
import DeliveryReturnPolicy from '../../components/DeliveryReturnPolicy';
import ProductIntroFooter from '../../components/ProductIntroFooter';
import BuildRing from '../../components/BuildRing';
import CompareProduct from '../../components/CompareProduct';

// Styling
import styles from './style';

const ProductDetailsSection = ({ classes }) => {
  return (
    <div>
      {/* Product Ratings*/}
      <ProductRatings />

      {/* Product Name and Merchant */}
      <ProductNameInfo />

      {/* Product Price */}
      <ProductPrice />

      {/* Product Information Tabs */}
      <ProductInfoTabs />

      {/* Product Variants
      <div className={classes.productVariantsWrapper}>
          <ProductVariants />
          <ProductVariantsOptions />
      </div>
      */}

      {/* Add To Cart */}
      <AddToCart />

      {/* Build a ring */}
      <BuildRing />

      <CompareProduct />

      {/* Delivery & Return Policy */}
      <DeliveryReturnPolicy />

      {/* Product Intro Footer */}
      <ProductIntroFooter />
    </div>
  );
};

export default withStyles(styles)(ProductDetailsSection);
