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

const OnSaleSection = ({ classes }) => {
  const { onSaleList } = useSelector((state) => state.listing);
  const {
    common: { settings, currency },
  } = useSelector((state) => state);

  const { getOnSaleList } = useListing();

  useEffect(() => {
    getOnSaleList({ sale: true, pageIndex: 1, pageSize: 12, currency });
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>On Sale Now</Typography>
      </div>

      <ProductCardSlider productList={onSaleList} />

      <Link href="/listing?sale=true">
        <a>
          <Button color="primary" variant="contained" className={classes.viewAllButton}>
            VIEW ALL SALE PRODUCTS
          </Button>
        </a>
      </Link>
    </section>
  );
};

export default withStyles(styles)(OnSaleSection);
