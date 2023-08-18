import React, { Fragment } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, IconButton, Typography } from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { updateThreeDProductId } from 'redux/actions';

// components
import { ThreeDButton } from 'jumbogold/button';
import { Image } from 'jumbogold/common';
import { RatingStar, ProductLabel } from 'jumbogold/product';

// Utils
import { formatPrice } from 'utils/methods.js';

// Styling
import styles from './style';

const ProductInfo = ({
  classes,
  item,
  discountDetails: { isDiscount, discountPercent },
  isAdded,
}) => {
  const dispatch = useDispatch();

  const handleOpen3dDialog = () => {
    dispatch(updateThreeDProductId(item.id));
  };

  return (
    <div className={classes.productCardWrapper}>
      <div
        className={
          isAdded ? classes.innerProductCardWrapperIsAdded : classes.innerProductCardWrapper
        }
      >
        <div className={classes.productCardContent}>
          <div className={classes.productImageContainer}>
            {/* Featured Tag */}
            {item.featured && (
              <div className={classes.featuredTagWrapper}>
                <ProductLabel label="FEATURED" color="WHITE" />
              </div>
            )}

            {/* Product Image */}
            <Link href="/product/[productId]" as={`/product/${item.id}`}>
              <a>
                <Image className={classes.productImage} src={item.image} alt={item.name} />
              </a>
            </Link>

            <div className={classes.ribbonsContainer}>
              {/* Free Gift */}
              {item.promotions?.find((promo) => promo.type === 'FREE_GIFT') && (
                <div className={classes.freeGiftWrapper}>
                  <Typography>Free Gift</Typography>
                </div>
              )}

              {/* Discount */}
              {isDiscount && (
                <div className={classes.discountWrapper}>
                  <Typography>-{discountPercent}% OFF</Typography>
                </div>
              )}
            </div>
          </div>

          <div className={classes.productInfoContainer}>
            {/* Product Label */}
            <div className={classes.productLabelWrapper}>
              {item.labels.map(({ name, colorTheme, id }) => (
                <ProductLabel label={name} color={colorTheme} key={id} />
              ))}
            </div>

            <div className={classes.productNameContainer}>
              {/* Product Name */}
              <Link href="/product/[productId]" as={`/product/${item.id}`}>
                <a className={classes.link}>
                  <Typography className={classes.productName}>{item.name}</Typography>
                </a>
              </Link>

              {/* 3D Icon */}
              {item.enable3D && (
                <IconButton
                  className={classes.threeDIconButton}
                  aria-label="view in 3d"
                  disableRipple
                  onClick={handleOpen3dDialog}
                >
                  <ThreeDButton />
                </IconButton>
              )}
            </div>

            {/* Product Price */}
            {isDiscount ? (
              <div className={classes.productPriceWrapper}>
                <Typography className={classes.salePrice}>
                  {item.retailPrice === 0 ? `$ -` : formatPrice(item.retailPrice)}
                </Typography>

                <Typography className={classes.originalPrice}>
                  {item.price === 0 ? `$ -` : formatPrice(item.price)}
                </Typography>
              </div>
            ) : (
              <div className={classes.productPriceWrapper}>
                <Typography className={classes.priceText}>
                  {item.retailPrice === 0 ? `$ -` : formatPrice(item.retailPrice)}
                </Typography>
              </div>
            )}

            {/* Merchant Name */}
            {item.merchantName && (
              <Link href={`/merchant?merchantIds=${item.merchantId}`}>
                <a>
                  <Typography className={classes.merchantName}>{item.merchantName}</Typography>
                </a>
              </Link>
            )}
          </div>

          <div className={classes.ratingContainer}>
            {item.overallRating !== null && (
              <Fragment>
                <RatingStar value={item.overallRating} size="small" readOnly />
                <Typography>{item.overallRating}</Typography>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProductInfo);
