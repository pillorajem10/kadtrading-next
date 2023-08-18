import React, { useEffect } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Button, Typography } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// components
import { ProductCardSlider } from 'jumbogold/product';

// hooks
import useListing from 'hooks/useProductList';

// styling
import styles from './style';

const MerchantRecommentProductsSection = ({ classes }) => {
  const {
    product: { productDetails },
    listing: { merchantRecommendList },
  } = useSelector((state) => state);

  const { getMerchantRecommendList } = useListing();

  useEffect(() => {
    if (productDetails.id) {
      getMerchantRecommendList(productDetails.id);
    }
  }, [productDetails]);

  if (merchantRecommendList.length === 0) return null;

  return (
    <section className={classes.section}>
      <Typography
        className={classes.header}
      >{`More From ${productDetails.merchantName} Products`}</Typography>

      <ProductCardSlider productList={merchantRecommendList} />

      <div className={classes.viewMoreButtonContainer}>
        <Link href={`/merchant?merchantIds=${productDetails.merchantId}`}>
          <a>
            <Button className={classes.viewMoreButton} color="primary" variant="contained">
              View More
            </Button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default withStyles(styles)(MerchantRecommentProductsSection);
