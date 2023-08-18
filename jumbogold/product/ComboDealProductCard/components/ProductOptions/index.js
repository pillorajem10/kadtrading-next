import React, { useState, Fragment, useMemo } from 'react';

// MUI Stuff
import { withStyles, Typography, ClickAwayListener } from '@material-ui/core';

// Picture
import arrowDropdown from 'public/assets/icons/arrow-dropdown.svg';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const ProductOptions = ({
  classes,
  variantId,
  optionList,
  option,
  setOption,
  discountDetails: { isDiscount, isPercentDiscount, discountPercent },
  isAdded,
  isError,
}) => {
  const [showProductOptions, setShowProductOptions] = useState(false);

  const handleCloseProductOptions = () => setShowProductOptions(false);

  const handleShowProductOptions = () => setShowProductOptions(true);

  const handleSelectProductOption = (option) => {
    setOption(option);
    handleCloseProductOptions();
  };

  const filterProductOptionsList = useMemo(() => {
    return optionList ? optionList.filter((option) => option.variantIds.includes(variantId)) : [];
  }, [optionList, variantId]);

  const handleCalculateOptionPrice = (price) => {
    return isDiscount ? (isPercentDiscount ? price * (1 - discountPercent / 100) : price) : price;
  };

  return (
    <div className={classes.productOptions}>
      {filterProductOptionsList.length !== 0 && (
        <Fragment>
          {/* Product Option Field */}
          <div
            className={
              isAdded
                ? classes.productOptionIsAdded
                : isError
                ? classes.productOptionsFieldError
                : classes.productOptionsField
            }
            onClick={() => (isAdded ? null : handleShowProductOptions())}
          >
            {Object.keys(option).length === 0 ? (
              <Typography className={classes.productOptionPlaceholder}>Select an option</Typography>
            ) : (
              <div>
                <Typography className={classes.productOptionText}>{option.name}</Typography>

                {option.price !== 0 && isPercentDiscount ? (
                  <div className={classes.productOptionPriceWrapper}>
                    <Typography className={classes.productOptionListPrice}>
                      +{formatPrice(handleCalculateOptionPrice(option.price))}
                    </Typography>
                    <Typography className={classes.productOptionListOriginalPrice}>
                      -{formatPrice(option.price)}
                    </Typography>
                  </div>
                ) : option.price !== 0 && !isPercentDiscount ? (
                  <Typography className={classes.productOptionListPrice}>
                    {formatPrice(handleCalculateOptionPrice(option.price))}
                  </Typography>
                ) : null}
              </div>
            )}
            <img src={arrowDropdown} alt="down button" className={classes.dropdownIcon} />
          </div>

          {/* Product Option List */}
          {showProductOptions && (
            <div className={classes.productOptionList}>
              <ClickAwayListener onClickAway={handleCloseProductOptions}>
                <div className={classes.clickAwayListenerWrapper}>
                  <div
                    className={classes.productOptionListItem}
                    onClick={handleCloseProductOptions}
                  >
                    <Typography className={classes.productOptionPlaceholder}>
                      Select an option
                    </Typography>
                    <img src={arrowDropdown} alt="down button" className={classes.dropdownIcon} />
                  </div>

                  {filterProductOptionsList.map((item, index) => {
                    return (
                      <div
                        className={classes.productOptionListItem}
                        onClick={() => handleSelectProductOption(item)}
                        key={index}
                      >
                        <div>
                          <Typography className={classes.productOptionListText}>
                            {item.name}
                          </Typography>

                          {item.price !== 0 && isPercentDiscount ? (
                            <div className={classes.productOptionPriceWrapper}>
                              <Typography className={classes.productOptionListPrice}>
                                +{formatPrice(handleCalculateOptionPrice(item.price))}
                              </Typography>
                              <Typography className={classes.productOptionListOriginalPrice}>
                                -{formatPrice(item.price)}
                              </Typography>
                            </div>
                          ) : item.price !== 0 && !isPercentDiscount ? (
                            <Typography className={classes.productOptionListPrice}>
                              {formatPrice(handleCalculateOptionPrice(item.price))}
                            </Typography>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ClickAwayListener>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default withStyles(styles)(ProductOptions);
