import React, { useEffect } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography, Button } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// hooks
import useListing from 'hooks/useProductList';

// components
import { ProductCardSlider } from 'jumbogold/product';

// styling
import styles from './style';

const SettingProductSection = ({ classes }) => {

  const {
    common: { settings, currency },
    listing: { featuredSettingList },
  } = useSelector((state) => state);

  const { getFeaturedProductList } = useListing();

  useEffect(() => {
    /*
    const featuredProductIds = settings.featuredProducts
      ? settings.featuredProducts.split(',')
      : [];
    */
    const params = {
      // categoryIds: "610f9c4c1343a53a7ca3319e",
      pageIndex: 1,
      pageSize: 10,
      type: "product",
      currency,
    };

    getFeaturedProductList(params);
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>Featured Settings</Typography>
      </div>

      <ProductCardSlider productList={featuredSettingList} />

      <Link href="/listing?pageIndex=1&pageSize=30&type=product" as="/listing?pageIndex=1&pageSize=30&type=product">
        <a>
          <Button color="primary" variant="contained" className={classes.viewAllButton}>
            View other products
          </Button>
        </a>
      </Link>
    </section>
  );
};

export default withStyles(styles)(SettingProductSection);
