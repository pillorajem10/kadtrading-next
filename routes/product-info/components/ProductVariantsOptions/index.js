import React, { useState, Fragment, useEffect, useMemo } from 'react';

// MUI Stuff
import { withStyles, Typography, ClickAwayListener } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { product } from 'redux/actions';

// Picture
import downButton from 'public/assets/icons/arrow-dropdown.svg';

// Utils
import { formatPrice } from 'utils/methods';
import regExp from 'utils/regExp';
import { calculateOptionPrice } from 'utils/calculator';

// Styling
import styles from './style';

const ProductVariantsOptions = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    product: {
      productDetails,
      variant: { id },
      isDiscount,
      discountPercent,
      isPercentDiscount,
    },
    transaction: { addToCartError },
  } = useSelector((state) => state);

  const [options, setOptions] = useState({});
  const [showOption, setShowOption] = useState(false);

  useEffect(() => {
    setOptions({});
  }, [id]);

  const handleShowOption = () => setShowOption((currentValue) => !currentValue);

  const handleCloseOption = () => setShowOption(false);

  const handleChangeVariantsOptions = (variantOption) => {
    const { price } = variantOption;
    const optionId = variantOption.id;

    const optionPrice = calculateOptionPrice(price, isDiscount, isPercentDiscount, discountPercent);

    const productOption = {
      optionId,
      optionOriginalPrice: price,
      optionPrice,
    };

    dispatch(product.setProductOption(productOption));

    setOptions(variantOption);

    handleCloseOption();
  };

  const renderVariantOptions = (item) => {
    const optionPrice = calculateOptionPrice(
      item.price,
      isDiscount,
      isPercentDiscount,
      discountPercent,
    );

    let renderer = null;

    if (item.price !== 0 && isPercentDiscount) {
      renderer = (
        <div className={classes.optionsPriceTextWrapper}>
          <Typography className={classes.optionsPriceText}>
            {optionPrice > 0 ? '+' : ''}
            {formatPrice(optionPrice)}
          </Typography>

          <Typography className={classes.optionOriginalPrice}>
            {item.price > 0 ? '+' : ''}
            {formatPrice(item.price)}
          </Typography>
        </div>
      );
    }

    if (item.price !== 0 && !isPercentDiscount) {
      renderer = (
        <div className={classes.optionsPriceTextWrapper}>
          <Typography className={classes.optionsPriceText}>
            {optionPrice > 0 ? '+' : ''}
            {formatPrice(optionPrice)}
          </Typography>
        </div>
      );
    }

    return (
      <>
        <div className={classes.optionsLabelTextWrapper}>
          <Typography className={classes.optionsLabelText}>{item.name}</Typography>
        </div>

        {renderer}
      </>
    );
  };

  const filterVariantsOptionsList = useMemo(
    () => productDetails.options?.filter((option) => option.variantIds.includes(id)) ?? [],
    [productDetails.options, id],
  );

  if (filterVariantsOptionsList.length === 0) return null;

  return (
    <div className={classes.productVariantsOptions}>
      <Typography className={classes.productVariantsOptionsTitle}>2. Select Option</Typography>

      <ClickAwayListener onClickAway={handleCloseOption}>
        <div>
          {/* Options Field */}
          <div
            className={classes.optionSelectField}
            onClick={handleShowOption}
            style={{
              border: addToCartError ? '1px solid #fc2929' : 'solid 1px #e4e4e4',
            }}
          >
            {regExp.isEmptyObject(options) ? (
              <Typography
                className={classes.placeholderText}
                style={{ color: addToCartError ? '#fc2929' : '#000000' }}
              >
                Select an option
              </Typography>
            ) : (
              // Options Value
              <div className={classes.optionsSelectedWrapper}>{renderVariantOptions(options)}</div>
            )}

            {/* Down Icon */}
            <img
              src={downButton}
              alt="button"
              className={showOption ? classes.optionSelectIconUp : classes.optionSelectIcon}
            />
          </div>

          {/* Option List */}
          {showOption && (
            <div className={classes.optionsWrapper}>
              {filterVariantsOptionsList.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={classes.optionsItem}
                    onClick={() => handleChangeVariantsOptions(item)}
                  >
                    {renderVariantOptions(item)}

                    <div className={classes.emptyIcon} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default withStyles(styles)(ProductVariantsOptions);
