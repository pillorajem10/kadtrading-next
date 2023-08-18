import React from 'react';
import NumberFormat from 'react-number-format';

/**
 * WARNING: got multiple formatPrice functions. the other one is on utils/formatter
 * format price, fot example:
 * from 20, to $20.00
 * @param {*} price
 */
export const formatPrice = (price, currency = '') => {
  let vCurrency = '';
  if (currency !== '') {
    vCurrency = currency;
  } else {
    vCurrency = localStorage.getItem('currency');
  }

  return <NumberFormat
    decimalScale={2}
    fixedDecimalScale
    value={price}
    displayType="text"
    thousandSeparator
    prefix={vCurrency === 'SGD' ? "S$" : "$"}
  />
};

export const removeQtyAvailableFromCart = (cart) => {

  const groups = [...cart.groups];

  for (let i = 0; i < groups.length; i += 1) {
    for (let j = 0; j < groups[i].items.length; j += 1) {
      delete groups[i].createdAt;
      delete groups[i].updatedAt;
      const temp = groups[i].items[j];
      delete temp.qtyAvailable;
      delete temp.createdAt;
      delete temp.updatedAt;
      groups[i].items[j] = temp;
    }
  }

  return { ...cart, groups: [...groups] };
};

export const compareDifferentObject = (obj1, obj2) => {
  let keyFound = {};

  Object.keys(obj2).forEach((key) => {
    if (obj2[key] !== obj1[key]) {
      keyFound = { ...keyFound, [key]: obj2[key] };
    }
  });

  return keyFound;
};

export const cleanObject = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v != null && v !== '' && v !== undefined),
  );
};

export const evalBoolean = (params) => {
  return params === 'true' || params === true;
};

export const useDebounce = (func, wait) => {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(this, args);
    }, wait);
  };
};

export const getExtension = (filename) => {
  const parts = filename.split('.');
  return parts[parts.length - 1];
};

/*
const useDebounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};
*/
