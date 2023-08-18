import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Button } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { ui, transaction } from 'redux/actions';

// components
import ProductInfo from './components/ProductInfo';
import ProductVariants from './components/ProductVariants';
import ProductOptions from './components/ProductOptions';

// Utils
import { formatShoppingCart } from './utils';

// Styling
import styles from './style';

const MobileComboDealProductCard = ({ classes, item, index }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.transaction);

  const [discountDetails, setDiscountDetials] = useState({
    isDiscount: false,
    isPercentDiscount: false,
    discountPercent: 0,
  });
  const [variant, setVariant] = useState({});
  const [option, setOption] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (item) {
      setVariant(item.variants[0]);
      setDiscountDetials({
        isDiscount: item.retailPrice !== item.price,
        isPercentDiscount: item.percentOff !== null,
        discountPercent:
          item.percentOff !== null
            ? item.percentOff
            : ((1 - item.retailPrice / item.price) * 100).toFixed(0),
      });
    }

    // check whether the product is inside the cart
    if (cart) {
      const shoppingCart = formatShoppingCart(cart.groups);
      const checkProductIsAdded = shoppingCart.find((cartItem) => cartItem.productId === item.id);
      setIsAdded(checkProductIsAdded !== undefined);
    }
  }, [cart, item]);

  const handleSetVariant = useCallback((selectedVariant) => setVariant(selectedVariant), []);

  const handleSetOption = useCallback((selectedOption) => setOption(selectedOption), []);

  const handleUpdateTransactionCart = async (payload) => {
    const res = await dispatch(transaction.updateTransactionCart(payload));
    const { success, data } = res;

    if (success) {
      dispatch(ui.successNotification({ message: 'Added to cart successfully.' }));
    } else if (data === 502) {
      Router.push('/login');
    }
  };

  const handleAddToCart = () => {
    const checkOptions = item.options.filter((itemOption) =>
      itemOption.variantIds.includes(variant.id),
    );

    setIsError(false);

    if (checkOptions.length > 0) {
      if (Object.keys(option).length > 0) {
        const payload = {
          variantId: variant.id,
          optionId: option.id,
          qty: 1,
        };
        handleUpdateTransactionCart(payload);
      } else {
        setIsError(true);

        dispatch(
          ui.errorNotification({
            message: 'Please select an option" before adding the item to cart.',
          }),
        );
      }
    } else {
      const payload = {
        variantId: variant.id,
        optionId: '',
        qty: 1,
      };
      handleUpdateTransactionCart(payload);
    }
  };

  const disableCondition = useMemo(() => {
    return (
      ((item.price === 0 || item.price === null) &&
        (item.salePrice === 0 || item.salePrice === null)) ||
      isAdded ||
      variant.qtyAvailable === 0
    );
  }, [item.price, item.salePrice, isAdded, variant.qtyAvailable]);

  return (
    <div className={classes.mobileComboDealProductCard}>
      {/* Product Info */}
      <ProductInfo item={item} index={index} isAdded={isAdded} />

      {/* Product Color Variant */}
      <ProductVariants
        variantList={item.variants}
        variant={variant}
        setVariant={handleSetVariant}
        discountDetails={discountDetails}
        isAdded={isAdded}
      />

      {/* Product Variant Options */}
      <ProductOptions
        optionList={item.options}
        variantId={variant.id}
        option={option}
        setOption={handleSetOption}
        discountDetails={discountDetails}
        isError={isError}
        isAdded={isAdded}
      />

      {/* Art To Cart Button */}
      <Button
        color="primary"
        variant="contained"
        className={classes.addToCartButton}
        onClick={handleAddToCart}
        disabled={disableCondition}
      >
        {isAdded ? 'Added to cart' : 'Add to cart'}
      </Button>
    </div>
  );
};

export default withStyles(styles)(MobileComboDealProductCard);
