export const formatShoppingCart = (shoppingCart) => {
  const tempArr = [];

  for (let i = 0; i < shoppingCart.length; i += 1) {
    for (let j = 0; j < shoppingCart[i].items.length; j += 1) {
      tempArr.push(shoppingCart[i].items[j]);
    }
  }

  return tempArr;
};
