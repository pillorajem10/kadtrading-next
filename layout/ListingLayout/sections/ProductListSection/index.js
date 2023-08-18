import React, { useCallback } from 'react';

// MUI Stuff
import { withStyles, Hidden, Button } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// components
import { ProductCard, MobileProductCard } from 'jumbogold/product';
import { NoProductFound, ProductListLoading } from 'jumbogold/listing/common';

// styling
import styles from './style';

const ProductListSection = ({ classes, productList, setPageIndex }) => {
  const {
    listing: {
      page,
      search: { keyword },
    },
    ui: { loading },
  } = useSelector((state) => state);

  const handleChangePage = () => {
    const totalPage = Math.ceil(page.totalItem / page.pageSize);

    if (page.pageIndex < totalPage) {
      setPageIndex(page.pageIndex + 1);
    }
  };

  const handleRenderProductList = useCallback(() => {
    let renderer = null;

    if (productList.length === 0 && loading) {
      renderer = <ProductListLoading />;
    }

    if (productList.length !== 0) {
      renderer = (
        <>
          <div className={classes.productListInnerContainer}>            
            <div className={classes.listWrapper}>

              {/* Product Card */}
              <Hidden xsDown>
                {productList.map((product, index) => (
                  <ProductCard item={product} index={index} key={index} grid />
                ))}
              </Hidden>

              {/* Mobile Product Card */}
              <Hidden smUp>
                {productList.map((product, index) => (
                  <MobileProductCard item={product} key={index} />
                ))}
              </Hidden>            

            </div>





          </div>

          {loading && <ProductListLoading />}

          {/* Load More Button */}
          {page.pageIndex !== Math.ceil(page.totalItem / page.pageSize) &&
            !loading &&
            keyword === '' && (
              <Button
                color="primary"
                variant="contained"
                className={classes.loadMoreButton}
                onClick={handleChangePage}
              >
                Load More
              </Button>
            )}
        </>
      );
    }

    if (productList.length === 0 && !loading) {
      renderer = <NoProductFound />;
    }

    return renderer;
  }, [productList, loading]);

  return (
    <div className={classes.productListSection}>
      <div className={classes.productListContainer}>{handleRenderProductList()}</div>
    </div>
  );
};

export default withStyles(styles)(ProductListSection);
