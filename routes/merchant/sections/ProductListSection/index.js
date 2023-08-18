import React, { Fragment, useCallback } from 'react';

// MUI Stuff
import { withStyles, Hidden, Button, Divider } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// components
import { ProductCard, MobileProductCard } from 'jumbogold/product';
import { ProductListLoading, NoProductFound } from 'jumbogold/listing/common';
import {
  FilterPriceRange,
  FilterDeliveryTime,
  FilterCategory,
  FilterDisplay,
  FilterColors,
  FilterDimensions,
  FilterStyles,
  FilterMaterials,
} from 'jumbogold/listing/expansion';

// Styling
import styles from './style';

const ProductListSection = ({ classes, productList, setPageIndex }) => {
  const {
    ui: { loading },
    listing: {
      page,
      filter,
      search: { keyword },
    },
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
        <Fragment>
          <div className={classes.productListInnerContainer}>
            {/* Product Card */}
            <Hidden xsDown>
              {productList.map((product, index) => (
                <ProductCard item={product} index={index} key={index} merchant />
              ))}
            </Hidden>

            {/* Mobile Product Card */}
            <Hidden smUp>
              {productList.map((product, index) => (
                <MobileProductCard item={product} key={index} />
              ))}
            </Hidden>
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
        </Fragment>
      );
    }

    if (productList.length === 0 && !loading) {
      renderer = <NoProductFound />;
    }

    return renderer;
  }, [productList, loading]);

  return (
    <div className={classes.productListSection}>
      <Hidden xsDown>
        <div className={classes.filterOptionsContainer}>
          <FilterPriceRange />

          <Divider />

          <FilterDeliveryTime />

          {filter?.Categories?.length > 0 && (
            <Fragment>
              <Divider />

              <FilterCategory />
            </Fragment>
          )}

          {filter?.Display?.length > 0 && (
            <Fragment>
              <Divider />

              <FilterDisplay />
            </Fragment>
          )}

          {filter?.ColorGroups?.length > 0 && (
            <Fragment>
              <Divider />

              <FilterColors />
            </Fragment>
          )}

          <Divider />

          <FilterDimensions />

          {filter?.Styles?.length > 0 && (
            <Fragment>
              <Divider />

              <FilterStyles />
            </Fragment>
          )}

          {filter?.Material?.length > 0 && (
            <Fragment>
              <Divider />

              <FilterMaterials />
            </Fragment>
          )}
        </div>
      </Hidden>

      <div className={classes.productListContainer}>{handleRenderProductList()}</div>
    </div>
  );
};

export default withStyles(styles)(ProductListSection);
