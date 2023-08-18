import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Typography, ClickAwayListener } from '@material-ui/core';

// Picture
import arrowDropdown from 'public/assets/icons/arrow-dropdown.svg';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const ProductVariants = ({
  classes,
  variantList,
  variant,
  setVariant,
  discountDetails: { isDiscount, isPercentDiscount, discountPercent },
  isAdded,
}) => {
  const [showProductVariants, setShowProductVariants] = useState(false);

  const handleCloseProductVariats = () => setShowProductVariants(false);

  const handleShowProductVariants = () => setShowProductVariants(true);

  const handleSelectProductVariant = (variant) => {
    setVariant(variant);
    handleCloseProductVariats();
  };

  const handleCalculateVariantPrice = (price) => {
    return isDiscount ? (isPercentDiscount ? price * (1 - discountPercent / 100) : price) : price;
  };

  return (
    <div className={classes.productVariants}>
      {/* Product Variant Field */}
      <div
        className={isAdded ? classes.productVariantIsAdded : classes.productVariantsField}
        onClick={() => (isAdded ? null : handleShowProductVariants())}
      >
        <div className={classes.productVariantTextWrapper}>
          {variant.label === 'COLOR' ? (
            <div
              className={classes.productVariantColor}
              style={{ backgroundColor: `rgba(${variant.color})` }}
            />
          ) : variant.label === 'ICON' ? (
            <img className={classes.productVariantColor} src={variant.icon} alt="variant icon" />
          ) : null}
          <Typography className={classes.productVariantText}>{variant.name}</Typography>
        </div>

        <div className={classes.productVariantPriceWrapper}>
          <Typography className={classes.productVariantPrice}>
            {formatPrice(handleCalculateVariantPrice(variant.price))}
          </Typography>
          <img src={arrowDropdown} alt="down button" className={classes.dropdownIcon} />
        </div>
      </div>

      {/* Product Variant List */}
      {showProductVariants && (
        <div className={classes.productVariantList}>
          <ClickAwayListener onClickAway={handleCloseProductVariats}>
            <div className={classes.clickAwayListenerWrapper}>
              {variantList.map((item, index) => (
                <div
                  className={classes.productVariantItem}
                  key={index}
                  onClick={() => handleSelectProductVariant(item)}
                >
                  <div className={classes.productVariantTextWrapper}>
                    {item.label === 'COLOR' ? (
                      <div
                        className={classes.productVariantColor}
                        style={{ backgroundColor: `rgba(${item.color})` }}
                      />
                    ) : item.label === 'ICON' ? (
                      <img
                        className={classes.productVariantColor}
                        src={item.icon}
                        alt="variant icon"
                      />
                    ) : null}
                    <Typography className={classes.productVariantText}>{item.name}</Typography>
                  </div>

                  <div className={classes.productVariantPriceWrapper}>
                    <Typography className={classes.productVariantPrice}>
                      {formatPrice(handleCalculateVariantPrice(item.price))}
                    </Typography>
                  </div>
                </div>
              ))}

              <img
                src={arrowDropdown}
                alt="down button"
                className={classes.productVariantListDropdownIcon}
              />
            </div>
          </ClickAwayListener>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(ProductVariants);
