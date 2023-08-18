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

const FeaturedProductSection = ({ classes }) => {
  
  const {
    common: { settings, currency },
    listing: { featuredProductList },
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
      pageSize: 30,
      type: "inhouse",
      currency
    };

    getFeaturedProductList(params);
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>Featured Diamonds</Typography>
      </div>

      <ProductCardSlider productList={featuredProductList} />

      <Link href="/listing?featured=true">
        <a>
          <Button color="primary" variant="contained" className={classes.viewAllButton}>
            View all featured diamonds
          </Button>
        </a>
      </Link>
    </section>
  );
};

export default withStyles(styles)(FeaturedProductSection);
