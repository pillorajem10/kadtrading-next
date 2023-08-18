import React from 'react';

// layout
import ListingLayout from 'layout/ListingLayout';

// hooks
import useListing from 'hooks/useListing';

const Products = () => {
  const {
    searchProductList,
    handleSearchKeyword,
    suggestionList,
    handleChangePageSize,
    handleChangePageIndex,
    pageSize,
  } = useListing({ type: 'products' });

  return (
    <ListingLayout
      onSearch={handleSearchKeyword}
      productList={searchProductList}
      suggestionList={suggestionList}
      setPageSize={handleChangePageSize}
      pageSize={pageSize}
      setPageIndex={handleChangePageIndex}
    />
  );
};

export default Products;
