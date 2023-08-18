import React from 'react';

// MUI Stuff
import { withStyles, Modal, Radio, Typography } from '@material-ui/core';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const MobileProductOptionsModal = ({
  classes,
  open,
  onClose,
  optionList,
  setOption,
  option,
  discountDetails: { isDiscount, isPercentDiscount, discountPercent },
}) => {
  const handleCalculateOptionPrice = (price) => {
    let optionPrice = price;

    if (isDiscount && isPercentDiscount) {
      optionPrice = price * (1 - discountPercent / 100);
    }

    return optionPrice;
  };

  const handleRenderProductOption = (item) => {
    let renderer = null;

    if (item.price !== 0 && isPercentDiscount) {
      renderer = (
        <div className={classes.productOptionPriceWrapper}>
          <Typography className={classes.productOptionItemPrice}>
            {handleCalculateOptionPrice(item.price) > 0 ? '+' : ''}
            {formatPrice(handleCalculateOptionPrice(item.price))}
          </Typography>

          <Typography className={classes.productOptionItemOriginalPrice}>
            {item.price > 0 ? '+' : ''}
            {formatPrice(item.price)}
          </Typography>
        </div>
      );
    }

    if (item.price !== 0 && !isPercentDiscount) {
      renderer = (
        <Typography className={classes.productOptionItemPrice}>
          {handleCalculateOptionPrice(item.price) > 0 ? '+' : ''}
          {formatPrice(handleCalculateOptionPrice(item.price))}
        </Typography>
      );
    }

    return renderer;
  };

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <div className={classes.modalWrapper}>
        {optionList.map((item, index) => (
          <div
            className={
              option.id === item.id ? classes.productOptionItemSelected : classes.productOptionItem
            }
            key={index}
            onClick={() => setOption(item)}
          >
            <div>
              <Typography className={classes.productOptionItemText}>{item.name}</Typography>

              {handleRenderProductOption(item)}
            </div>

            <Radio
              color="primary"
              checked={option.id === item.id}
              value={item.id}
              name="option-id"
              className={classes.optionRadioButton}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default withStyles(styles)(MobileProductOptionsModal);
