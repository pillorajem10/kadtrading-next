import React from 'react';
import moment from 'moment';

// MUI Stuff
import { withStyles, Typography, Modal, Radio } from '@material-ui/core';

// Styling
import styles from './style';

const MobileDeliveryOptionModal = ({
  classes,
  open,
  onClose,
  optionList,
  selectOption,
  optionId,
  actions,
}) => {

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <div className={classes.modalContainer}>
        {optionList?.map((option, idx) => (
          <div
            className={
              actions && optionId === option.name ? classes.selectedOptionList : classes.optionList
            }
            key={idx}
            onClick={() => (selectOption ? selectOption(option) : null)}
          >
            <div className={classes.deliveryOption}>
              <div className={classes.deliveryDurationWrapper}>
                <Typography className={classes.optionName}>{option.name}</Typography>

                {/*option.freeShippingAbove > 0 && (
                  <Typography className={classes.optionCondition}>
                    Orders above ${option.freeShippingAbove}
                  </Typography>
                )*/}


              </div>

              <div className={classes.optionListDeliveryFeeWrapper}>
                <Typography className={classes.optionAmount}>${option.amount}</Typography>
                {/*
                {option.freeShippingAbove > 0 && (
                  <Typography className={classes.freeDelivery}>
                    {option.freeShippingExtra !== null && option.freeShippingExtra !== 0
                      ? `$${option.freeShippingExtra}`
                      : 'Free'}
                  </Typography>
                )}
                <Typography className={classes.optionDuration}>
                  {moment().add(option.minEddWeeks, 'w').format('DD MMM')} -{' '}
                  {moment().add(option.maxEddWeeks, 'w').format('DD MMM')}
                </Typography>                
                */}
              </div>

              {actions && (
                <Radio
                  color="primary"
                  checked={optionId === option.name}
                  value={option.name}
                  className={classes.optionRadioButton}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default withStyles(styles)(MobileDeliveryOptionModal);
