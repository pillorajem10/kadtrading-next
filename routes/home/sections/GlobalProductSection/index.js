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

const GlobalProductSection = ({ classes }) => {
  
  const {
    common: { settings, currency },
    listing: { featuredGlobalList },
  } = useSelector((state) => state);

  const { getFeaturedProductList } = useListing();

  useEffect(() => {
    /*
    const featuredProductIds = settings.featuredProducts
      ? settings.featuredProducts.split(',')
      : [];
    */
    const params = {
      categoryIds: "606747a96ac0e48b78d50a5e",
      pageIndex: 1,
      pageSize: 10,
      type: "globald",
      currency,
    };

    getFeaturedProductList(params);
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>Featured Global Diamonds</Typography>
      </div>

      <ProductCardSlider productList={featuredGlobalList} />

      <Link href="/listing?pageIndex=1&pageSize=30&type=globald" as="/listing?pageIndex=1&pageSize=30&type=globald">
        <a>
          <Button color="primary" variant="contained" className={classes.viewAllButton}>
            View global diamonds
          </Button>
        </a>
      </Link>
    </section>
  );
};

export default withStyles(styles)(GlobalProductSection);
