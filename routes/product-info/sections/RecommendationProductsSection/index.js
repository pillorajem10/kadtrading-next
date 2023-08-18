import React, { useEffect } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// hooks
import useListing from 'hooks/useProductList';

// components
import { ProductCardSlider } from 'jumbogold/product';

// styling
import styles from './style';

const RecommendationProductsSection = ({ classes }) => {
  const {
    product: { productDetails },
    listing: { categoryRecommendList },
  } = useSelector((state) => state);

  const { getCategoryRecommendList } = useListing();

  useEffect(() => {
    if (productDetails.id) {
      getCategoryRecommendList(productDetails.id);
    }
  }, [productDetails.id]);

  if (categoryRecommendList.length === 0) return null;

  return (
    <section className={classes.section}>
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>You may also like</Typography>
      </div>

      <ProductCardSlider productList={categoryRecommendList} />
    </section>
  );
};

export default withStyles(styles)(RecommendationProductsSection);
