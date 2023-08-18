import React, { useMemo } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// MUI Icons
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

// hooks
import useCart from 'hooks/useCart';

// picture
import promoIcon from 'public/assets/icons/promo.svg';
import shi from 'public/assets/images/wizzo/shi.png';

// utils
import { formatPrice } from 'utils/methods.js';

// hooks
import useCurrency from 'hooks/useCurrency';

// styling
import styles from './style';

const TransactionCartList = ({ classes, product, gst, checkout }) => {
  const { addQuantity, reduceQuantity, removeItem } = useCart(product);
  const { updatePriceByCurrency } = useCurrency();

  const detailLink = useMemo(() => {
    let href = '';
    let asz = '';
    if (product.represent === 'globald') {
      href = '/product/[productId]';
      asz = `/product/${product.productId}`;
    }

    if (product.type === 'diamond' && product.represent === 'inhouse') {
      href = '/inhouse/[productId]';
      asz = `/inhouse/${product.productId}`;
    }

    if (product.represent === 'setting') {
      href = '/setting/[productId]';
      asz = `/setting/${product.productId}`;
    }

    if (product.type === 'gemstone' && product.represent === 'inhouse') {
      href = '/gemstone/[productId]';
      asz = `/gemstone/${product.productId}`;
    }

    return { href, asz };

  }, [product.represent]);

  return (
    <div className={classes.productWrapper}>
      <div className={classes.productInfoWrapper}>
        {/* Product Image */}
        <Link href={detailLink.href} as={detailLink.asz}>
          <a>
            <img src={product.image !== '' ? product.image : shi} alt="img" className={classes.productImage} />
          </a>
        </Link>

        <div>
          {/* Product Name */}
          <Link href={detailLink.href} as={detailLink.asz}>
            <a>
              <Typography className={classes.productName}>{product.productName}</Typography>
            </a>
          </Link>

          {/* Product Sku */}
          {product.sku !== null && product.sku !== '' && (
            <Typography className={classes.productSKU}>SKU:{product.sku}</Typography>
          )}

          {/* Product Variant 
          <Typography className={classes.productVariantPrice}>
            {product.variantName} {product.variantPrice !== 0 ? `+$${product.variantPrice}` : ''}
          </Typography>          
          */}


          {/* Product Variant Option
          <Typography className={classes.productOptionPrice}>
            {product.optionName} {product.optionPrice !== 0 ? `+$${product.optionPrice}` : ''}
          </Typography>          
          */}


          {/* Promotion Name */}
          {product.promoName !== '' && product.promoName !== null && (
            <div className={classes.productPromotionWrapper}>
              <div className={classes.productPromotionTag}>
                <img
                  src={promoIcon}
                  alt="promotion icon"
                  className={classes.productPromotionIcon}
                />
                <Typography className={classes.productPromotionText}>Promo!</Typography>
              </div>

              <Typography className={classes.productPromotionName}>{product.promoName}</Typography>
            </div>
          )}
        </div>
      </div>

      {/* Product Price */}
      <div className={classes.productPriceWrapper}>
        <div className={classes.productPriceInnerWrapper}>
          <Typography
            className={
              product.originalPrice !== product.price
                ? classes.productDiscountPrice
                : classes.productSalePrice
            }
          >
            {formatPrice(updatePriceByCurrency(product.price))}
          </Typography>

          {/*product.price !== product.originalPrice && (
            <Typography className={classes.productOriginalPrice}>
              {formatPrice(
                product.originalPrice + product.optionOriginalPrice + product.variantOriginalPrice,
              )}
            </Typography>
          )*/}
        </div>

        {/* GST */}
        {gst && <Typography className={classes.productGST}>(Gst included)</Typography>}


      </div>

      <div className={classes.productQuantityWrapper}>
        {/*!checkout && (
          <RemoveIcon className={classes.productQuantityIcon} onClick={reduceQuantity} />
        )*/}

        <Typography className={classes.productQuantity}>{product.qty}</Typography>

        {/*!checkout && <AddIcon className={classes.productQuantityIcon} onClick={addQuantity} />*/}
      </div>

      {!checkout && <CloseIcon className={classes.closeIcon} onClick={removeItem} />}
    </div>
  );
};

export default withStyles(styles)(TransactionCartList);
