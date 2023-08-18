import { colorGroupList } from 'constant';

// WARNING: got multiple formatPrice functions. the other one is on utils/methods
export const formatPrice = (price, key = '') => {
  const formattedPrice = parseFloat(price)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return key === '' ? `$${formattedPrice}` : `${key}$ ${formattedPrice}`;
};

export const formatPayloadParams = (params) => {
  let res = Object.keys(params)
  .filter(key => params[key] !== undefined)  
  .map((key) => `${encodeURIComponent(key)}=${decodeURIComponent(params[key])}`)
  .join('&');

  return res;
};

export const formatDeliveryOptionParams = (list) => {
  const merchantIds = list.map((item) => item.merchantId);
  const itemList = list.map((item) => item.items);
  const productIds = [];

  for (let i = 0; i < itemList.length; i += 1) {
    for (let j = 0; j < itemList[i].length; j += 1) {
      productIds.push(itemList[i][j].productId);
    }
  }

  return { merchantIds, productIds };
};

export const formatColorList = (list) => {
  const tempArr = [];

  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < colorGroupList.length; j += 1) {
      if (colorGroupList[j].name === list[i]) {
        tempArr.push(colorGroupList[j]);
      }
    }
  }

  return tempArr;
};
