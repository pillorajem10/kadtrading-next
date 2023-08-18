import { useState } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { ui } from 'redux/actions';

// picture
import shi from 'public/assets/images/wizzo/shi.png';

// hooks
import useCart from './useCart';

const useProduct = () => {
  const dispatch = useDispatch();
  const { productDetails, variant, optionId } = useSelector((state) => state.product);

  const { updateCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = () => {
    if (quantity < variant.qtyAvailable) {
      setQuantity((currentValue) => currentValue + 1);
    }
  };

  const handleReduceQuantity = () => {
    if (quantity > 1) {
      setQuantity((currentValue) => currentValue - 1);
    }
  };

  const handleAddToCart = async () => {
    /*
    const checkOptions = productDetails.options.filter((option) =>
      option.variantIds.includes(variant.id),
    );
    */
    const checkOptions = [];

    let image = '';
  
    if (productDetails.represent === 'globald') {
      image = productDetails.image_file_url ?? '';
    }

    if (productDetails.type === 'diamond' && productDetails.represent === 'inhouse') {
      image = (productDetails.images && productDetails.images.length > 0) ? productDetails.images[0] : '';
    }

    if (productDetails.represent === 'setting') {
      image = productDetails.image;
    }

    if (productDetails.type === 'gemstone' && productDetails.represent === 'inhouse') {
      image = (productDetails.images && productDetails.images.length > 0) ? productDetails.images[0] : '';
    }

    if (checkOptions.length === 0) {
      const payload = {
        productId: productDetails.id,
        productName: productDetails.name,
        // variantId: variant.id,
        image,
        type: productDetails.type,
        represent: productDetails.represent,
        price: productDetails.retailPrice,
        originalPrice: productDetails.retailPrice,
        qty: quantity,
        optionId: '',
        itemReplace: false,
        isBundle: false,
      };

      // console.log('[handleAddToCart] ', payload);

      updateCart(payload);
      return;
    }
    
    if (optionId === '') {
      dispatch(
        ui.errorNotification({
          message: 'Please select an option" before adding the item to cart.',
        }),
      );
    } else {
      const payload = {
        variantId: variant.id,
        qty: quantity,
        optionId,
        itemReplace: false,
      };

      updateCart(payload);
    }
  };

  return {
    quantity,
    addQuantity: handleAddQuantity,
    reduceQuantity: handleReduceQuantity,
    addToCart: handleAddToCart,
  };
};

export default useProduct;
