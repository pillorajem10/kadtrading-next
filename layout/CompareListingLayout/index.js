import React from 'react';
import Link from 'next/link';

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
import CompareListSection from './sections/CompareListSection';
import FilterOptionsSection from './sections/FilterOptionsSection';
import OtherFilterOptionsSection from './sections/OtherFilterOptionsSection';

// Styling
import styles from './style';

const CompareListingLayout = ({
  classes,
  productList,
}) => {
  return (
    <div className={classes.page}>
      {/* Banner */}
      <Banner />

      <div className={classes.container}>

        {/* Breadcrumb 
        <Breadcrumb fullListing={fullListing} />

        */}
        
        {/*
        <BuildRingSection />        
        */}



        {/* Filter Section 
        <FilterSection
          onSearch={onSearch}
          fullListing={fullListing}
          setPageSize={setPageSize}
          pageSize={pageSize}
        />        
        */}

        <Divider className={classes.divider} />
      </div>

      {/*
      <Hidden xsDown>
        <FilterOptionsSection fullListing={fullListing} />
      </Hidden>      

      <Hidden xsDown>
        <OtherFilterOptionsSection fullListing={fullListing} />
      </Hidden>
*/}




      <div className={classes.pageContent}>
        <div className={classes.container}>

          <Hidden xsDown>
            {/* Product Tag Section 
            <ProductsTagSection fullListing={fullListing} />
*/}


            <div className={classes.searchContainer}>
              {/* Search Keyword 
              <SearchKeyword onSearch={onSearch} />              
              */}
         <Typography className={classes.filterTitle}>Compare Diamonds</Typography>

              {/* Filter Order 
              <Typography className={classes.filterTitle}>Sort by</Typography>
              <FilterOrder />              
              */}

            </div>
          </Hidden>
            
            {/*
          <Hidden smUp>
            <TotalProductCount />
          </Hidden>            
            */}

        </div>

        {/* Suggestion List */}
        {/*suggestionList && suggestionList.length > 0 && (
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
                )*/}

        {/* Product List  */}
        <div className={classes.container}>
          <CompareListSection productList={productList} setPageIndex={1} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(CompareListingLayout);
