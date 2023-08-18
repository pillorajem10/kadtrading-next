import React, { useMemo } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, IconButton, Typography } from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { updateThreeDProductId } from 'redux/actions';

// Picture
import ratingActiveIcons from 'public/assets/icons/rating-active.svg';

// components
import { ThreeDButton } from 'jumbogold/button';
import { Image } from 'jumbogold/common';
import { ProductLabel } from 'jumbogold/product';

// Utils
import { formatPrice } from 'utils/methods.js';

// Styling
import styles from './style';

const ProductInfo = ({ classes, item, index, isAdded }) => {
  const dispatch = useDispatch();

  const handleOpen3dDialog = () => {
    dispatch(updateThreeDProductId(item.id));
  };

  const isDiscount = useMemo(() => {
    return item.price !== item.retailPrice;
  }, [item.retailPrice, item.price]);

  const discountPercent = useMemo(() => {
    return item.percentOff !== null
      ? item.percentOff
      : `${((1 - item.retailPrice / item.price) * 100).toFixed(0)}`;
  }, [item.percentOff, item.price, item.retailPrice]);

  return (
    <div
      className={isAdded ? classes.productCardIsAddedWrapper : classes.productCardWrapper}
      id={`_product_item${index}`}
    >
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
            <ProductLabel key={id} color={colorTheme} label={name} />
          ))}
        </div>

        <Link href="/product/[productId]" as={`/product/${item.id}`}>
          <a className={classes.link}>
            <div className={classes.productNameContainer}>
              {/* Product Name */}
              <Typography className={classes.productName}>{item.name}</Typography>

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
          </a>
        </Link>

        {/* Merchant Name */}
        {item.merchantName && (
          <Link href={`/merchant?merchantIds=${item.merchantId}`}>
            <a>
              <Typography className={classes.merchant}>{item.merchantName}</Typography>
            </a>
          </Link>
        )}
      </div>

      <div className={classes.ratingContainer}>
        {item.overallRating !== null && (
          <>
            <img src={ratingActiveIcons} alt="" />
            <Typography>{item.overallRating}</Typography>
          </>
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(ProductInfo);
