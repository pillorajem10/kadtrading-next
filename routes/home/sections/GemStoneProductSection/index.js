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

const GemStoneProductSection = ({ classes }) => {

  const {
    common: { settings, currency },
    listing: { featuredGemStoneList },
  } = useSelector((state) => state);

  const { getFeaturedProductList } = useListing();

  useEffect(() => {
    /*
    const featuredProductIds = settings.featuredProducts
      ? settings.featuredProducts.split(',')
      : [];
    */
    const params = {
      categoryIds: "6155dbeb745e33800b7bb722",
      pageIndex: 1,
      pageSize: 10,
      type: "gemstone",
      currency
    };

    getFeaturedProductList(params);
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>Featured Gemstones</Typography>
      </div>

      <ProductCardSlider productList={featuredGemStoneList} />

      <Link href="/listing?pageIndex=1&pageSize=30&type=gemstone" as="/listing?pageIndex=1&pageSize=30&type=gemstone">
        <a>
          <Button color="primary" variant="contained" className={classes.viewAllButton}>
            View in-house gemstones
          </Button>
        </a>
      </Link>
    </section>
  );
};

export default withStyles(styles)(GemStoneProductSection);
