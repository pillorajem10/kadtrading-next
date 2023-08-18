import React, { useMemo } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography, Button } from '@material-ui/core';

// MUI Icons
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

// hooks
import useCart from 'hooks/useCart';

// picture
import promoIcon from 'public/assets/icons/promo.svg';

// utils
import { formatPrice } from 'utils/methods.js';

// hooks
import useCurrency from 'hooks/useCurrency';

// styling
import styles from './style';

const TransactionCartCard = ({
  classes,
  product,
  gst,
  checkout,
  cartPage,
  status,
  reviewed,
  showItemReceivedModal,
}) => {
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
    <div className={cartPage ? classes.cartPageWrapper : classes.productWrapper}>
      <div className={classes.productUpperContainer}>
        <div className={classes.productInfoWrapper}>
          {/* Product Image */}
          <Link href={detailLink.href} as={detailLink.asz}>
            <a>
              <img src={product.image} alt="img" className={classes.productImage} />
            </a>
          </Link>

          <div>
            {/* Product Name */}
            <div className={classes.productNameWrapper}>
              <Link href={detailLink.href} as={detailLink.asz}>
                <a>
                  <Typography className={classes.productName}>{product.productName}</Typography>
                </a>
              </Link>
            </div>

            {/* Product Sku */}
            {/*product.sku !== null && product.sku !== '' && (
              <Typography className={classes.productSKU}>SKU:{product.sku}</Typography>
            )*/}

            {/* Product Variant */}
            {/*


            <div className={classes.productVariantWrapper}>
              <Typography className={classes.productVariant}>{product.variantName}</Typography>

              <Typography className={classes.productVariant}>
                {product.variantPrice !== 0 ? `+$${product.variantPrice}` : ''}
              </Typography>
            </div>            
            */}


            {/* Product Variant Option */}
            {product.optionName &&
              <div className={classes.productOptionWrapper}>
                <Typography className={classes.productOption}>{product.optionName}</Typography>

                <Typography className={classes.productOption}>
                  {product.optionPrice !== 0 ? `+$${product.optionPrice}` : ''}
                </Typography>
              </div>            
            }

          </div>
        </div>


        {product.isBundle &&
          <div className={classes.buildRingWrapper}>
            <div className={classes.buildRingTag}>
              <img src={promoIcon} alt="icn" className={classes.buildRingIcon} />
              <Typography className={classes.buildRingText}>Build a Ring</Typography>
            </div>
          </div>        
        }




        {/* Promotion Name */}
        {product.promoName !== '' && product.promoName !== null && (
          <div className={classes.productPromotionWrapper}>
            <div className={classes.productPromotionTag}>
              <img src={promoIcon} alt="icn" className={classes.productPromotionIcon} />
              <Typography className={classes.productPromotionText}>Promo!</Typography>
            </div>

            <Typography className={classes.productPromotionName}>{product.promoName}</Typography>
          </div>
        )}

        {status === 'paid' && (
          <div className={classes.itemReceivedContainer}>
            {!reviewed &&
              <Button
                className={classes.itemReceivedBtn}
                disabled={reviewed}
                onClick={showItemReceivedModal}>
                Item Received
              </Button>            
            }
            {reviewed && <Typography>Review added successfully. </Typography>}
          </div>
        )}

        {!checkout && <CloseIcon className={classes.closeIcon} onClick={removeItem} />}
      </div>

      <div className={classes.productBottomContainer}>
        <div className={classes.productQuantityWrapper}>
          {/*!checkout && (
            <RemoveIcon className={classes.productQuantityIcon} onClick={reduceQuantity} />
          )*/}

          <Typography
            className={checkout ? classes.checkoutProductQuantity : classes.productQuantity}
          >
            {checkout ? `x ${product.qty}` : product.qty}
          </Typography>

          {/*!checkout && <AddIcon className={classes.productQuantityIcon} onClick={addQuantity} />*/}
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
              {/*formatPrice(product.price + product.optionPrice + product.variantPrice) */}
              {formatPrice(updatePriceByCurrency(product.price))}              
            </Typography>

            {/*product.retailPrice !== product.price && (
              <Typography className={classes.productOriginalPrice}>
                {formatPrice(
                  product.price +
                    product.optionOriginalPrice +
                    product.variantOriginalPrice,
                )}
              </Typography>
            )*/}
          </div>

          {/* GST */}
          {gst && <Typography className={classes.productGST}>(Gst included)</Typography>}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(TransactionCartCard);
