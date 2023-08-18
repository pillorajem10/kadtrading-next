import React, { Fragment, useMemo, useCallback } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, IconButton, Typography } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateThreeDProductId } from 'redux/actions';

// Picture
import ratingActiveIcons from 'public/assets/icons/rating-active.svg';

// components
import { ThreeDButton } from 'jumbogold/button';
import { Image } from 'jumbogold/common';
import { ProductLabel } from 'jumbogold/product';

// utils
import { formatPrice } from 'utils/methods.js';

// hooks
import useCurrency from 'hooks/useCurrency';

// Styling
import styles from './style';

const MobileProductCard = ({ classes, item }) => {
  const dispatch = useDispatch();
  const { updatePriceByCurrency } = useCurrency();
  const {
    merchant: { profile },
  } = useSelector((state) => state);

  const handleOpen3dDialog = () => {
    dispatch(updateThreeDProductId(item.id));
  };

  const displayPromotionText = useCallback(() => {
    return item.promotions?.filter((promo) => promo.type !== 'FREE_GIFT').length > 0
      ? item.promotions[0]?.name
      : null;
  }, [item.promotions]);

  const isDiscount = useMemo(() => {
    return item.price !== item.retailPrice;
  }, [item.price, item.retailPrice]);

  const discountPercent = useMemo(() => {
    return item.percentOff !== null
      ? item.percentOff
      : `${((1 - item.retailPrice / item.price) * 100).toFixed(0)}`;
  }, [item.percentOff, item.price, item.retailPrice]);

  const detailLink = useMemo(() => {
    let href = '';
    let asz = '';
    let image = '';

    if (item.represent === 'globald') {
      href = '/product/[productId]';
      asz = `/product/${item.id}`;
      image = item.image_file_url;
    }

    if (item.type === 'diamond' && item.represent === 'inhouse') {
      href = '/inhouse/[productId]';
      asz = `/inhouse/${item.id}`;
      image = (item.images && item.images.length > 0) ? item.images[0] : '';
    }

    if (item.represent === 'setting') {
      href = '/setting/[productId]';
      asz = `/setting/${item.id}`;
      image = item.image;      
    }

    if (item.type === 'gemstone' && item.represent === 'inhouse') {
      href = '/gemstone/[productId]';
      asz = `/gemstone/${item.id}`;
      image = (item.images && item.images.length > 0) ? item.images[0] : '';
    }

    return { href, asz, image };

  }, [item.represent]);

  return (
    <div className={classes.productCardWrapper}>
      <Link href={detailLink.href} as={detailLink.asz}>
        <div
          style={{ 
            boxShadow: item.type !== 'gemstone'
            ? `0 0 ${item.represent === 'globald' ? '1px rgb(217 83 79)' : '3px rgb(221,221,221)'}`
            : `0 0 1px rgb(223,138,19)`
          }}
          className={classes.productCardInnerWrapper}>
          
          {/*
          {item.type !== 'gemstone' ? (
            <span className={`ribbon top-left ${item.represent === 'globald' ? 'ribbon-danger' : 'ribbon-default'}`}>
              <small>{item.represent === 'globald' ? 'global' : item.represent}</small>
            </span>          
          ) : (
            <span className={`ribbon top-left ribbon-warning`}>
              <small>gemstone</small>
            </span>          
          )}          
          */}

          
          <div className={classes.productImageContainer}>
            {/* Featured Tag */}
            {item.featured && (
              <div className={classes.featuredTagWrapper}>
                <ProductLabel label="FEATURED" color="WHITE" />
              </div>
            )}

            {/* Product Image 
            <Link href={detailLink.href} as={detailLink.asz}>            
            */}
              <a>
                <Image className={classes.productImage} src={detailLink.image} alt={item.name} />
              </a>


            <div className={classes.ribbonsContainer}>
              {/* Discount */}
              {/*isDiscount && (
                <div className={classes.discountWrapper}>
                  <Typography>-{discountPercent}% OFF</Typography>
                </div>
              )*/}
            </div>
          </div>

          <div className={classes.productInfoContainer}>
            {/* Product Label */}
            {/*
            <div className={classes.productLabelWrapper}>
              {item.labels.map(({ name, colorTheme, id }) => (
                <ProductLabel key={id} color={colorTheme} label={name} />
              ))}
            </div>          
            */}

            {/*
            <Link href={detailLink.href} as={detailLink.asz}>            
            */}

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
                      {formatPrice(updatePriceByCurrency(item.sgdPrice))}
                    </Typography>
                    {/*
                      <Typography className={classes.originalPrice}>
                        {item.price === 0 ? `$ -` : formatPrice(item.price)}
                      </Typography>                  
                    */}

                  </div>
                ) : (
                  <div className={classes.productPriceWrapper}>
                    <Typography className={classes.priceText}>
                      {formatPrice(updatePriceByCurrency(item.sgdPrice))}
                    </Typography>
                  </div>
                )}
              </a>


            {/* Merchant Name 
              <Link href={`/merchant?merchantIds=${item.merchantId}`}>
                <a>
                  <Typography className={classes.merchant}>{profile.displayName}</Typography>
                </a>
              </Link>            
            */}
            {profile.displayName && <Typography className={classes.merchant}>{profile.displayName}</Typography>}
          </div>
          
          <div className={classes.ratingContainer}>
            {item.overallRating && (
              <Fragment>
                <img src={ratingActiveIcons} alt="" />
                <Typography>{item.overallRating}</Typography>
              </Fragment>
            )}
          </div>
        </div>
      </Link>
      {/* Promotion */}
      {displayPromotionText() && (
        <div className={classes.promotionTextWrapper}>
          <Typography>{displayPromotionText()}</Typography>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(MobileProductCard);
