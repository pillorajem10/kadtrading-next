import React from 'react';

// layout
import ListingLayout from 'layout/ListingLayout';

// hooks
import useListing from 'hooks/useListing';

const Listing = () => {
  const {
    searchProductList,
    handleSearchKeyword,
    suggestionList,
    handleChangePageSize,
    handleChangePageIndex,
    pageSize,
  } = useListing({ type: 'listing' });

  return (
    <ListingLayout
      onSearch={handleSearchKeyword}
      productList={searchProductList}
      suggestionList={suggestionList}
      fullListing
      setPageSize={handleChangePageSize}
      pageSize={pageSize}
      setPageIndex={handleChangePageIndex}
    />
  );
};

export default Listing;
