import { useState } from 'react';
import { useRouter } from 'next/router';

import Cookies from 'js-cookie';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { common, transaction, ui } from 'redux/actions';

// utils
import { removeQtyAvailableFromCart, useDebounce } from 'utils/methods';
import { formatDeliveryOptionParams } from 'utils/formatter';

// hooks
import useDisclosure from './useDisclosure';

const useCart = (item = {}) => {
  const dispatch = useDispatch();
  const {
    common: { currency },
    user: { authenticated },
    transaction: { cart },
    merchant: { profile },
  } = useSelector((state) => state);

  const router = useRouter();

  const {
    isOpen: showCartRefreshModal,
    onOpen: handleShowCartRefreshModal,
    onClose: handleCloseCartRefreshModal,
  } = useDisclosure();

  const {
    isOpen: showVoucherInput,
    onOpen: handleShowVoucherInput,
    onClose: handleCloseVoucherInput,
  } = useDisclosure();

  const {
    isOpen: showCheckedIcon,
    onOpen: handleShowCheckedIcon,
    onClose: handleCloseCheckedIcon,
  } = useDisclosure();

  const {
    isOpen: invalidVoucherCode,
    onOpen: handleSetInvalidVoucherCode,
    onClose: handleRemoveInvalidVoucherCode,
  } = useDisclosure();

  const {
    isOpen: showServiceFeeError,
    onOpen: handleShowServiceFeeError,
    onClose: handleCloseServiceFeeError,
  } = useDisclosure();

  const [voucherCode, setVoucherCode] = useState('');

  const handleAddQuantity = () => {
    const { variantId, qty, qtyAvailable, optionId } = item;
    if (qty < qtyAvailable) {
      const payload = {
        productId: item.id,
        productName: item.name,
        image: item.image,
        type: item.type,
        represent: item.represent,
        price: item.retailPrice,  
        isBundle: false,
        variantId,
        optionId,
        qty: qty + 1,
        resort: false,
        itemReplace: true,
        currency,
      };
      dispatch(transaction.updateTransactionCart(payload));
    }
  };

  const handleReduceQuantity = () => {
    const { variantId, qty, optionId } = item;
    if (qty > 1) {
      const payload = {
        productId: item.id,
        productName: item.name,
        image: item.image,
        type: item.type,
        represent: item.represent,
        price: item.retailPrice,  
        isBundle: false,
        variantId,
        optionId,
        qty: qty - 1,
        resort: false,
        itemReplace: true,
        currency,        
      };
      dispatch(transaction.updateTransactionCart(payload));
    }
  };

  const handleRemoveItem = () => {
    if (authenticated) {
      const { variantId, optionId } = item;
      const payload = { variantId, optionId };
      dispatch(transaction.deleteTransactionCartItemById({ groupId: cart.groups[0]._id, itemId: item._id }));
    } else {
      let updatedCart = { ...cart };
      const cartItems = cart.groups[0].items.filter(ci => ci.productName !== item.productName);

      updatedCart.itemCount = updatedCart.itemCount - item.qty;
      updatedCart.subTotal = updatedCart.subTotal - (item.qty * item.price);            
      updatedCart.total = updatedCart.total - (item.qty * item.price);
  
      updatedCart.groups[0].items = cartItems;
      updatedCart.groups[0].orderTotal = updatedCart.total;
      updatedCart.groups[0].subTotal = updatedCart.subTotal;
  
      Cookies.set('cart', JSON.stringify(updatedCart));
      dispatch(transaction.setTransactionCart(updatedCart));
  
      // dispatch(ui.successNotification({ message: 'Added to cart successfully.' }));
    }
  };

  const updateCookieCartDeliveryOptions = (payload) => {
    let updatedCart = { ...cart };
    let orderTotal = 0;
    const { currency, amount, name } = payload;

    // console.log('[updateCookieCartDeliveryOptions]]]]]]]]] ', payload);

    // UPDATING ORDER TOTAL
    updatedCart.groups[0].items.map(ci => {
      if (ci.price) {
          orderTotal += (ci.price * ci.qty);
      }
      return ci;
    });

    updatedCart.shippingFee = amount;
    updatedCart.total = updatedCart.shippingFee + orderTotal; 

    updatedCart.groups[0].deliveryOption = { name, amount };
    updatedCart.groups[0].shippingFee = amount;
    updatedCart.groups[0].orderTotal = updatedCart.groups[0].shippingFee + orderTotal;


    Cookies.set('cart', JSON.stringify(updatedCart));
    dispatch(transaction.setTransactionCart(updatedCart));

    dispatch(ui.successNotification({ message: 'Updated cart with delivery options.' }));
  };


  const updateCookieCart = (payload) => {
    let updatedCart = { ...cart };
    let itemCount = 0;
    let orderTotal = 0;
    let cartItemAdded = false;
    let cartItems = [];
    const { itemReplace, productId, qty } = payload;

    for (let cartItem of cart.groups[0].items) {
      if (!itemReplace && cartItem.productId === productId) {
          const updatedQty = cartItem.qty + qty;
          cartItemAdded = true;
          cartItem.qty = updatedQty;
      }

      if (itemReplace && cartItem.productId === productId) {
          const updatedQty = qty;
          cartItemAdded = true;
          cartItem.qty = updatedQty;
      }
      cartItems.push(cartItem);
    }

    if (!cartItemAdded) {
        cartItems.push(payload);
    }
    
    // UPDATING ORDER TOTAL
    cartItems.map(ci => {
        if (ci.price) {
            orderTotal += (ci.price * ci.qty);
        }
        itemCount += ci.qty;
        return ci;
    });

    updatedCart.itemCount = itemCount;
    updatedCart.subTotal = orderTotal;            
    updatedCart.total = orderTotal; 

    updatedCart.groups[0].items = cartItems;
    updatedCart.groups[0].orderTotal = orderTotal;
    updatedCart.groups[0].subTotal = orderTotal;

    Cookies.set('cart', JSON.stringify(updatedCart));
    dispatch(transaction.setTransactionCart(updatedCart));

    dispatch(ui.successNotification({ message: 'Added to cart successfully.' }));
  };

  const handleUpdateCart = async (payload) => {
    if (authenticated) {
      const res = await dispatch(transaction.updateTransactionCart(payload));
      const { success, data, code } = res;
  
      if (success) {
        dispatch(ui.successNotification({ message: 'Added to cart successfully.' }));
      } else if (code === 502) {
        router.push('/login');
      }
    } else {
      updateCookieCart(payload);
    }
  };

  const handleUpdateDeliveryOption = (payload) => {
    if (authenticated) {
      dispatch(transaction.applyDeliveryOption(payload));
    } else {
      updateCookieCartDeliveryOptions(payload);
    }
  };

  // build a ring
  const handleUpdateRingCart = async (payload) => {
    if (authenticated) {
      const res = await dispatch(transaction.updateTransactionCart(payload));
      const { success, data } = res;
  
      if (success) {
        router.push(`/cart`);
      }
    } else {
      updateCookieCart(payload);
      // Cookies.set('cart', JSON.stringify(payload));
      // dispatch(transaction.setTransactionCart(payload));
      router.push(`/cart`);      
    }
  };

  const handleCloseAddVoucherInput = () => {
    handleCloseVoucherInput();
    handleRemoveInvalidVoucherCode();
    setVoucherCode('');
  };

  const handleSetVoucherCode = (event) => {
    const { value } = event.target;

    if (value.length === 0) {
      handleRemoveInvalidVoucherCode();
    }

    setVoucherCode(value);
  };

  const handleRemoveVoucherCode = () => {
    const payload = { merchantId: '0' };

    dispatch(transaction.deleteVoucherCode(payload));
  };

  const handleCheckVoucherCode = async () => {
    handleRemoveInvalidVoucherCode();

    const payload = { code: voucherCode };

    const res = await dispatch(transaction.applyVoucherCode(payload));
    const { success, data } = res;

    if (success) {
      const { serviceFee } = data;

      dispatch(
        ui.successNotification({
          message: 'Voucher code have successfully applied.',
        }),
      );

      handleShowCheckedIcon();

      if (serviceFee !== 0) {
        handleShowServiceFeeError();
      }

      setTimeout(() => {
        handleCloseCheckedIcon();
        setVoucherCode('');
      }, 2000);

      setTimeout(() => {
        handleCloseServiceFeeError();
      }, 5000);
    } else {
      handleSetInvalidVoucherCode();
    }
  };

  const handleVoucherCodeKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleCheckVoucherCode();
    }
  };

  const handleConfirmOrder = useDebounce(async (sideBar = false, confirmOrder) => {
    if (sideBar) {
      /*
      if (!authenticated) {
        dispatch(common.toggleCartSideBar(false));
        router.push('/login');
        return;
      }
      */
    }

    if (authenticated) {
      const res = await dispatch(transaction.getLatestTransactionCart());
      const { success, data } = res;
  
      if (success) {
        const cat = JSON.stringify(removeQtyAvailableFromCart(cart));
        const dog = JSON.stringify(removeQtyAvailableFromCart(data));
        if (cat === dog) {
          confirmOrder();
        } else {
          if (data?.groups.length > 0) {
            const params = formatDeliveryOptionParams(data.groups);
            // dispatch(transaction.getDeliveryOptionsByParams(params));
          }
  
          if (cart.voucherCode !== null && data.voucherCode === null) {
            handleShowVoucherInput();
            setVoucherCode(cart.voucherCode);
            handleSetInvalidVoucherCode();
          }
          handleShowCartRefreshModal();
        }
      }
    } else {
      confirmOrder();
    }
  }, 500);

  return {
    updateDeliveryOption: handleUpdateDeliveryOption,
    updateRingCart: handleUpdateRingCart,
    updateCart: handleUpdateCart,
    addQuantity: handleAddQuantity,
    reduceQuantity: handleReduceQuantity,
    removeItem: handleRemoveItem,
    voucherCode,
    handleSetVoucherCode,
    handleCloseAddVoucherInput,
    handleRemoveVoucherCode,
    handleCheckVoucherCode,
    handleVoucherCodeKeyDown,
    showCartRefreshModal,
    handleShowCartRefreshModal,
    handleCloseCartRefreshModal,
    showVoucherInput,
    handleShowVoucherInput,
    handleCloseVoucherInput,
    showCheckedIcon,
    handleShowCheckedIcon,
    handleCloseCheckedIcon,
    invalidVoucherCode,
    handleSetInvalidVoucherCode,
    handleRemoveInvalidVoucherCode,
    showServiceFeeError,
    handleShowServiceFeeError,
    handleCloseServiceFeeError,
    handleConfirmOrder,
  };
};

export default useCart;
