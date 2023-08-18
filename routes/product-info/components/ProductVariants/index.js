import React, { useState, useEffect } from 'react';

// MUI Stuff
import { withStyles, IconButton, Tooltip, Typography, Hidden } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { product } from 'redux/actions';

// Utils
import { formatPrice } from 'utils/methods';
import { calculateOptionPrice } from 'utils/calculator';

// Styling
import styles from './style';

const ProductVaraints = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    productDetails,
    variant: { id },
    isDiscount,
    discountPercent,
    isPercentDiscount,
  } = useSelector((state) => state.product);

  const [variantDisplay, setVariantDisplay] = useState({});

  useEffect(() => {
    if (productDetails.represent === 'setting') {
      if (productDetails.variants) {
        const variant = productDetails.variants[0];
        const variantPrice = calculateOptionPrice(
          variant.price,
          isDiscount,
          isPercentDiscount,
          discountPercent,
        );

        setVariantDisplay({ ...variant, variantPrice });
      }    
    }

  }, [productDetails.variants, isDiscount, isPercentDiscount, discountPercent]);

  const handleSelectVariant = (selectedVariant) => {
    setVariantDisplay(selectedVariant);
    dispatch(product.setProductVariant(selectedVariant));
  };

  const handleRenderVariant = (variant) => {
    let renderer = null;

    // add border color to white color variant
    if (variant.label === 'COLOR') {
      renderer = (
        <div
          className={classes.variantIcon}
          style={{
            backgroundColor: `rgba(${variant.color})`,
            border: `0.5px solid ${
              variant.color === '255,255,255,1' ? 'rgb(216, 216, 208)' : 'transparent'
            }`,
          }}
        />
      );
    }

    if (variant.label === 'ICON') {
      renderer = <img className={classes.variantIcon} src={variant.icon} alt="" />;
    }

    return renderer;
  };

  // if (productDetails.represent !== 'setting') return null;
  // will not show variants for now
  return null;

  return (
    <div className={classes.productVariant}>
      <Typography className={classes.productVariantTitle}>1. Select Color / Texture</Typography>

      <div className={classes.productVariantsWrapper}>
        {productDetails.variants?.map((variant) => {
          const variantPrice = calculateOptionPrice(
            variant.price,
            isDiscount,
            isPercentDiscount,
            discountPercent,
          );

          return (
            <Tooltip
              classes={{
                popper: classes.popper,
                tooltip: classes.tooltip,
                arrow: classes.tooltipArrow,
              }}
              title={
                <div className={classes.variantWrapper}>
                  <Typography className={classes.variantName}>{variant.name}</Typography>

                  {variantPrice !== 0 && (
                    <Typography className={classes.variantPrice}>
                      +{formatPrice(variantPrice)}
                    </Typography>
                  )}
                </div>
              }
              placement="top"
              key={variant.id}
              arrow
            >
              <IconButton
                className={`${classes.variantIconButton} ${
                  variant.id === id ? classes.variantIconActive : ''
                }`}
                aria-label="select color"
                onClick={() => handleSelectVariant({ ...variant, variantPrice })}
              >
                {handleRenderVariant(variant)}
              </IconButton>
            </Tooltip>
          );
        })}
      </div>

      <Hidden lgUp>
        <div className={classes.variantDisplay}>
          <Typography className={classes.variantDisplayName}>{variantDisplay.name}</Typography>
          {variantDisplay.variantPrice !== 0 && (
            <Typography className={classes.variantDisplayPrice}>
              +{formatPrice(variantDisplay.variantPrice)}
            </Typography>
          )}
        </div>
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(ProductVaraints);
