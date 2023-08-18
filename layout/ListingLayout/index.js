import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Divider, Hidden, Typography } from '@material-ui/core';

// components
import { FilterOrder, SearchKeyword } from 'jumbogold/listing/common';
import TotalProductCount from './components/TotalProductCount';
import Banner from './components/Banner';
import Breadcrumb from './components/Breadcrumb';

// sections
import BuildRingSection from './sections/BuildRingSection';
import FilterSection from './sections/FilterSection';
import ProductsTagSection from './sections/ProductsTagSection';
import ProductListSection from './sections/ProductListSection';
// import FilterOptionsSection from './sections/FilterOptionsSection';
import OtherFilterOptionsSection from './sections/OtherFilterOptionsSection';
import SettingFilterOptionsSection from './sections/SettingFilterOptionsSection';
import GemstoneFilterOptionsSection from './sections/GemstoneFilterOptionsSection';

// Styling
import styles from './style';

const ProductListing = ({
  classes,
  onSearch,
  productList,
  fullListing,
  suggestionList,
  setPageIndex,
  setPageSize,
  pageSize,
}) => {
  const router = useRouter();
  const { query } = router;

/*
  let filterComponent;

  if (query.type === 'product') {
    filterComponent = <SettingFilterOptionsSection fullListing={fullListing} />
  } else if (query.type === 'inhouse' || query.type === 'globald') {
    filterComponent = <OtherFilterOptionsSection fullListing={fullListing} />
  }
*/

  const renderFilterComponent = useCallback(() => {
    let filterComponent = null;

    if (query.type === 'product') {
      filterComponent = <SettingFilterOptionsSection fullListing={fullListing} />
    } else if (query.type === 'inhouse' || query.type === 'globald') {
      filterComponent = <OtherFilterOptionsSection fullListing={fullListing} />
    } else {
      filterComponent = <GemstoneFilterOptionsSection fullListing={fullListing} />
    }

    return filterComponent;
  }, [query.type]);

  return (
    <div className={classes.page}>
      {/* Banner */}
      <Banner />

      <div className={classes.container}>
        {/* Breadcrumb */}
        <Breadcrumb fullListing={fullListing} />

        <BuildRingSection />


        {// Filter Section
        <FilterSection
          onSearch={onSearch}
          fullListing={fullListing}
          setPageSize={setPageSize}
          pageSize={pageSize}
        />}


        <Divider className={classes.divider} />
      </div>


      {/* <Hidden xsDown>
        <OtherFilterOptionsSection fullListing={fullListing} />
        <MobileOtherFilterOptionsSection/>
      </Hidden> */}

      <Hidden xsDown>
        {renderFilterComponent()}
      </Hidden>


      {/*query.type !== 'product' &&}

      {query.type === 'product' &&
        <Hidden xsDown>
          <SettingFilterOptionsSection fullListing={fullListing} />
        </Hidden>
      */}


      <div className={classes.pageContent}>
        <div className={classes.container}>
          <Hidden xsDown>
            {/* Product Tag Section */}
            <ProductsTagSection fullListing={fullListing} />

            <div className={classes.searchContainer}>
              {/* Search Keyword */}
              <SearchKeyword onSearch={onSearch} />

              {/* Filter Order */}
              <Typography className={classes.filterTitle}>Sort by</Typography>
              <FilterOrder />
            </div>
          </Hidden>

          <Hidden smUp>
            <TotalProductCount />
          </Hidden>
        </div>

        {/* Suggestion List */}
        {suggestionList && suggestionList.length > 0 && (
          <div className={classes.suggestionListWrapper}>
            <div className={classes.container}>
              <Typography>
                Do you mean:{' '}
                {suggestionList.map((word, index) => (
                  <Link href={`/listing?keyword=${encodeURIComponent(word)}`} key={index}>
                    <a>
                      <span>
                        {word} {suggestionList.length - 1 === index ? '' : ', '}
                      </span>
                    </a>
                  </Link>
                ))}
                ?
              </Typography>
            </div>
          </div>
        )}

        {/* Product List  */}
        <div className={classes.container}>
          <ProductListSection productList={productList} setPageIndex={setPageIndex} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProductListing);
