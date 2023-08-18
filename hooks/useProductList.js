// redux
import { useDispatch } from 'react-redux';
import { product, listing } from 'redux/actions';

const useListing = () => {
  const dispatch = useDispatch();

  /**
   * get product list promotion summary
   * @param {*} productList
   * @param {*} payload
   */
  const handleGetProductPromotionSummary = async (productList, payload) => {
    /*
    const res = await dispatch(product.getBatchProductPromotionSummary(payload));
    const { success, data } = res;

    if (success) {
      const tempList = productList.map((productItem) => {
        return {
          ...productItem,
          promotions: data.find((item) => item.productId === productItem.id)?.promotions,
        };
      });

      return tempList;
    }
    */
    return productList;
  };

  /**
   * get products by params
   * @param {*} params
   */
  const handleGetProductList = async (params) => {
    const res = await dispatch(listing.getProductsByParams(params));
    const { success, data } = res;

    if (success) {
      const productIdList = data.map((item) => item._id ? item._id : item.diamond_id);

      return handleGetProductPromotionSummary(data, productIdList);
    }
    return [];
  };

  /**
   * get on sale product list
   */
  const handleGetOnSaleList = async (params) => {
    const res = await handleGetProductList(params);
    dispatch(listing.setOnSaleList(res.docs));
  };

  /**
   * get featured product list
   * @param {*} params
   */
  const handleGetFeaturedProductList = async (params) => {
    const res = await handleGetProductList(params);    
    dispatch(listing.setFeaturedProductList(res, params.type));
  };

  /**
   * get merchant recommend list
   * @param {*} productId
   */
  const handleGetMerchantRecommendList = async (productId) => {
    const res = await dispatch(listing.getMerchantRecommendProducts(productId));
    const { success, data } = res;

    if (success) {
      const productIdList = data.map((item) => item.id);
      const merchantRecommendList = await handleGetProductPromotionSummary(data, productIdList);

      dispatch(listing.setMerchantRecommendList(merchantRecommendList));
    }
  };

  /**
   * get category recommend list
   * @param {*} productId
   */
  const handleGetCategoryRecommendList = async (productId) => {
    const res = await dispatch(listing.getCategoryRecommendProducts(productId));
    const { success, data } = res;

    if (success) {
      const productIdList = data.map((item) => item.id);
      const categoryRecommendList = await handleGetProductPromotionSummary(data, productIdList);

      dispatch(listing.setCategoryRecommenList(categoryRecommendList));
    }
  };

  return {
    getOnSaleList: handleGetOnSaleList,
    getFeaturedProductList: handleGetFeaturedProductList,
    getMerchantRecommendList: handleGetMerchantRecommendList,
    getCategoryRecommendList: handleGetCategoryRecommendList,
  };
};

export default useListing;
