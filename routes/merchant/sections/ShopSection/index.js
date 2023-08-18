import React from 'react';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// sections
import FilterSection from '../FilterSection';

// components
import Breadcrumb from '../../components/Breadcrumb';
import PromotionBanner from '../../components/PromotionBanner';
import ProductListSection from '../ProductListSection';
import ProductsTagSection from '../ProductsTagSection';

// Styling
import styles from './style';

const ShopSection = ({ classes, onSearch, setPageSize, pageSize, productList, setPageIndex }) => {
  return (
    <div className={classes.section}>
      <Hidden xsDown>
        <div className={classes.container}>
          <Breadcrumb />

          <PromotionBanner />
        </div>
      </Hidden>

      <FilterSection onSearch={onSearch} setPageSize={setPageSize} pageSize={pageSize} />

      <div className={classes.container}>
        <Hidden xsDown>
          <ProductsTagSection />
        </Hidden>

        <ProductListSection productList={productList} setPageIndex={setPageIndex} />
      </div>
    </div>
  );
};

export default withStyles(styles)(ShopSection);
