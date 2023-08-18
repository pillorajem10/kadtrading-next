import React, { useState, Fragment } from 'react';

// MUI Stuff
import { withStyles, Typography, Modal, Radio } from '@material-ui/core';

// Picture
import arrowDropdown from 'public/assets/icons/arrow-dropdown.svg';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const ProductVariants = ({
  classes,
  variant,
  variantList,
  setVariant,
  discountDetails: { isDiscount, isPercentDiscount, discountPercent },
  isAdded,
}) => {
  const [showProductVariantsModal, setShowProductVariantsModal] = useState(false);

  const handleShowProductVariantsModal = () => setShowProductVariantsModal(true);

  const handleCloseProductVariantsModal = () => setShowProductVariantsModal(false);

  const handleSetProductVariant = (variant) => {
    setVariant(variant);
    handleCloseProductVariantsModal();
  };

  const handleCalculateVariantPrice = (price) => {
    return isDiscount ? (isPercentDiscount ? price * (1 - discountPercent / 100) : price) : price;
  };

  return (
    <Fragment>
      {/* Product Variant Field */}
      <div
        className={classes.productVariants}
        onClick={() => (isAdded ? null : handleShowProductVariantsModal())}
        style={{ opacity: isAdded ? 0.6 : 1 }}
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

          <img
            src={arrowDropdown}
            alt="arrow dropdown"
            className={classes.productVariantsDropdownIcon}
          />
        </div>
      </div>

      {/* Product Variant List Modal */}
      <Modal
        open={showProductVariantsModal}
        onClose={handleCloseProductVariantsModal}
        className={classes.modal}
      >
        <div className={classes.modalWrapper}>
          {variantList.map((item, index) => (
            <div
              className={
                variant.id === item.id
                  ? classes.productVariantItemSelected
                  : classes.productVariantItem
              }
              key={index}
              onClick={() => handleSetProductVariant(item)}
            >
              <div className={classes.productVariantTextWrapper}>
                {item.label === 'COLOR' ? (
                  <div
                    className={classes.productVariantItemColor}
                    style={{ backgroundColor: `rgba(${item.color})` }}
                  />
                ) : item.label === 'ICON' ? (
                  <img
                    className={classes.productVariantItemColor}
                    src={item.icon}
                    alt="variant icon"
                  />
                ) : null}

                <Typography className={classes.productVariantItemText}>{item.name}</Typography>
              </div>

              <div className={classes.productVariantPriceWrapper}>
                <Typography className={classes.productVariantItemPrice}>
                  {formatPrice(handleCalculateVariantPrice(item.price))}
                </Typography>

                <Radio
                  color="primary"
                  checked={variant.id === item.id}
                  value={item.id}
                  name="option-id"
                  className={classes.variantRadioButton}
                />
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </Fragment>
  );
};

export default withStyles(styles)(ProductVariants);
