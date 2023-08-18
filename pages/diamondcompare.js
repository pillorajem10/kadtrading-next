import React from 'react';

// redux
import { useSelector } from 'react-redux';

// layout
import CompareListingLayout from 'layout/CompareListingLayout';

const DiamondCompare = () => {
  const {
    listing: { productComparisonList }} = useSelector((state) => state);

  return (
    <CompareListingLayout
      productList={productComparisonList}
    />
  );
};

export default DiamondCompare;
