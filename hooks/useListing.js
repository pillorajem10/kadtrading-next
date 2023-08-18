import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// redux
import { useDispatch } from 'react-redux';
import { listing, ui, product } from 'redux/actions';

// utils
import { formatCategoryIds, formatQueryParams } from 'utils/listing';

const useListing = ({ type }) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { asPath } = router;

  const [productList, setProductList] = useState([]);
  const [searchProductList, setSearchProductList] = useState([]);
  const [pageSize, setPageSize] = useState(30);
  const [suggestionList, setSuggestionList] = useState([]);

  const handleSetProductList = useCallback((pageIndex, list) => {
    if (pageIndex === 1) {
      setProductList(list);
      setSearchProductList(list);
    } else {
      setProductList((currentValues) => [...currentValues, ...list]);
      setSearchProductList((currentValues) => [...currentValues, ...list]);
    }
  }, []);

  const handleGetSuggestionList = useCallback(
    async (keyword) => {
      const res = await dispatch(listing.getProductKeywordSuggestion(keyword));
      const { success, data } = res;

      if (success) {
        setSuggestionList(data);
      }
    },
    [dispatch],
  );

  const handleGetProductPromotionSummary = useCallback(
    async (pageIndex, list, payload) => {
      const res = await dispatch(product.getBatchProductPromotionSummary(payload));
      const { success, data } = res;

      if (success) {
        const tempProductList = list.map((productItem) => {
          return {
            ...productItem,
            promotions: data?.find((item) => item.productId === productItem.id)?.promotions,
          };
        });

        handleSetProductList(pageIndex, tempProductList);
      }

      dispatch(ui.clearLoading());
    },
    [dispatch, handleSetProductList],
  );

  /*
  const handleGetCompareList = useCallback(() => {
    dispatch(ui.setLoading());

    dispatch(listing.setListingPage(page));

    handleSetProductList(1, productComparisonList);
  });
  */

  const handleGetProductList = useCallback(
    async (pageIndex = 1, size) => {

      dispatch(ui.setLoading());

      const query = asPath.split('?').length > 1 ? formatQueryParams(asPath.split('?')[1]) : {};

      const params = {
        pageIndex,
        pageSize: size,
        ...query,
      };

      const productParams = formatCategoryIds(params);

      dispatch(listing.setListingParams({ ...params, categoryIds: productParams.categoryIds }));
      
      const res = await dispatch(listing.getProductsByParams(productParams));
      const { success, data } = res;

      if (success) {
        const { page } = res;

        dispatch(listing.setListingPage(page));

        if (type === 'listing') {
          if (data.length === 0 && query?.keyword) {
            handleGetSuggestionList(query.keyword);
          } else {
            setSuggestionList([]);
          }
        }

        handleSetProductList(pageIndex, data);

        const productIdList = data.map((item) => item.id);

        handleGetProductPromotionSummary(pageIndex, data, productIdList);
      }

      dispatch(ui.clearLoading());
    },
    [
      asPath,
      dispatch,
      handleGetSuggestionList,
      handleSetProductList,
      handleGetProductPromotionSummary,
      type,
    ],
  );

  useEffect(() => {
    setProductList([]);
    setSearchProductList([]);

    handleGetProductList(undefined, pageSize);
  }, [pageSize, handleGetProductList]);


  /*
  useEffect(() => {
    if (type === 'products') {
      if (router.query.c2 !== undefined) {
        const params = { categoryIds: router.query.c2 };
        dispatch(listing.getListingFilterByParams(params));
      }
    }
  }, [dispatch, router.query.c2, type]);

  useEffect(() => {
    if (type === 'merchant') {
      if (router.query.merchantIds !== undefined) {
        const params = { merchantIds: router.query.merchantIds };
        dispatch(listing.getListingFilterByParams(params));
      }
    }
  }, [dispatch, router.query.merchantIds, type]);

  useEffect(() => {
    if (type === 'listing') {
      dispatch(listing.getListingFilterByParams({}));
    }
  }, [dispatch, type]);
  */

  useEffect(() => {
    return () => {
      dispatch(listing.clearListing());
    };
  }, [dispatch]);

  const handleChangePageSize = (value) => {
    setProductList([]);
    setSearchProductList([]);

    if (pageSize === value) {
      handleGetProductList(undefined, value);
    }

    setPageSize(value);
  };

  const handleChangePageIndex = (value) => {
    handleGetProductList(value, pageSize);
  };

  const handleSearchKeyword = (event) => {
    event.persist();

    const keyword = event.target.value.toLowerCase();

    const filterProductList =
      keyword !== ''
        ? [...productList].filter((item) => {
            if (item.merchantName !== null) {
              return (
                item.name.toLowerCase().includes(keyword) ||
                item.merchantName.toLowerCase().includes(keyword) ||
                item.brand.toLowerCase().includes(keyword)
              );
            }

            return (
              item.name.toLowerCase().includes(keyword) ||
              item.brand.toLowerCase().includes(keyword)
            );
          })
        : productList;

    const search = {
      keyword,
      count: filterProductList.length,
    };

    dispatch(listing.setListingSearch(search));

    setSearchProductList(filterProductList);
  };

  return {
    searchProductList,
    handleSearchKeyword,
    suggestionList,
    handleChangePageSize,
    handleChangePageIndex,
    pageSize,
  };
};

export default useListing;
