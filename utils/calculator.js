export const calculateOptionPrice = (price, isDiscount, isPercentDiscount, discountPercent) => {
  let variantPrice = price;

  if (isDiscount && isPercentDiscount) {
    variantPrice = price * (1 - discountPercent / 100);
  }

  return variantPrice;
};

export const listingFilterCount = (filter) => {
  let count = 0;

  if (filter.categoryIds) {
    count += 1;
  }

  if (filter.featured) {
    count += 1;
  }

  if (filter.sale) {
    count += 1;
  }

  if (filter.enabled3D) {
    count += 1;
  }

  if (typeof filter.colorGroups === 'string') {
    count += 1;
  } else {
    count += filter.colorGroups?.length || 0;
  }

  if (typeof filter.merchantIds === 'string') {
    count += 1;
  } else {
    count += filter.merchantIds?.length || 0;
  }

  if (typeof filter.materials === 'string') {
    count += 1;
  } else {
    count += filter.materials?.length || 0;
  }

  if (typeof filter.styles === 'string') {
    count += 1;
  } else {
    count += filter.styles?.length || 0;
  }

  if (typeof filter.brands === 'string') {
    count += 1;
  } else {
    count += filter.brands?.length || 0;
  }

  if (typeof filter.labels === 'string') {
    count += 1;
  } else {
    count += filter.labels?.length || 0;
  }

  if (filter.minPrice || filter.maxPrice) {
    count += 1;
  }

  if (filter.minEddWeeks || filter.maxEddWeeks) {
    count += 1;
  }

  if (
    filter.minDepth ||
    filter.maxDepth ||
    filter.minHeight ||
    filter.maxHeight ||
    filter.minWidth ||
    filter.maxWidth
  ) {
    count += 1;
  }

  return count;
};
