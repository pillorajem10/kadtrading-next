import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography, ClickAwayListener } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { transaction } from 'redux/actions';

// hooks
import useCart from '../../../../hooks/useCart';

// Picture
import downButton from 'public/assets/icons/arrow-dropdown.svg';
import redDownButton from 'public/assets/icons/red-arrow-dropdown.svg';
import redError from 'public/assets/icons/red-error.svg';

// components
import { DeliveryOptionCard } from 'jumbogold/transaction';
import SelectedDeliveryOption from '../SelectedDeliveryOption';

// Styling
import styles from './style';

const DeliveryOptions = ({ classes, optionList, deliveryOption, shippingFee, isClicked }) => {
  const dispatch = useDispatch();
  const { common: { currency, gst }} = useSelector((state) => state);
  const { updateDeliveryOption } = useCart();

  const [isError, setIsError] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [showMerchantError, setShowMerchantError] = useState(false);

  useEffect(() => {
    if (isClicked && deliveryOption === null) {
      setIsError(true);
    }
  }, [isClicked, deliveryOption]);

  const handleShowOption = () => {
    if (optionList === undefined) {
      setShowMerchantError(true);
    } else {
      setShowOption(true);
    }
  };

  const handleCloseOption = () => setShowOption(false);

  const handleSelectDeliveryOption = (option) => {
    const { amount, name } = option
    const payload = { currency, gst, amount, name };
    updateDeliveryOption(payload);
    handleCloseOption();
  };

  const renderDeliveryOptionContainer = () => {
    let renderer = null;

    if (!deliveryOption || deliveryOption.length === 0) {
      renderer = (
        <div
          className={classes.optionsListWrapper}
          style={{
            border: showMerchantError || isError ? 'solid 1px #fc2929' : 'solid 1px transparent',
          }}
          onClick={handleShowOption}
        >
          <Typography
            style={{
              color: showMerchantError || isError ? '#fc2929' : '000000',
            }}
          >
            Please select a delivery option
          </Typography>

          <img
            src={showMerchantError || isError ? redDownButton : downButton}
            alt="down icon"
            style={{
              transform: showOption ? 'rotateX(180deg)' : 'rotateX(0deg)',
            }}
          />
        </div>
      );
    } else {
      renderer = (
        <SelectedDeliveryOption
          option={deliveryOption[0]}
          showOption={handleShowOption}
          shippingFee={shippingFee}
        />
      );
    }

    return renderer;
  };

  return (
    <>
      {/* Delivery Options */}
      <div
        className={classes.deliveryOptions}
        style={{
          alignItems: deliveryOption ? 'baseline' : 'center',
        }}
      >
        <Typography>Delivery Options</Typography>

        <ClickAwayListener onClickAway={handleCloseOption}>
          <>
            {renderDeliveryOptionContainer()}
            {showOption && (
              <div
                className={classes.deliveryOptionsContainer}
                style={{
                  top: deliveryOption ? 0 : 48,
                  left: deliveryOption ? 158 : 158,
                }}
              >
                {optionList.map((option, idx) => (
                  <DeliveryOptionCard
                    key={idx}
                    option={option}
                    selectOption={() => handleSelectDeliveryOption(option)}
                  />
                ))}
              </div>
            )}
          </>
        </ClickAwayListener>
      </div>

      {/* Delivery Options Error Message */}
      {!deliveryOption && (
        <div className={classes.errorMessageContainer}>
          {!showMerchantError && isError && (
            <div>
              <img src={redError} alt="error icon" />

              <Typography>Please select a delivery option before continuing.</Typography>
            </div>
          )}

          {showMerchantError && (
            <div>
              <img src={redError} alt="error icon" />

              <Typography>
                There is no delivery information yet. Please{' '}
                <Link href="/contact">
                  <a>contact us</a>
                </Link>{' '}
                or remove the item(s) from your cart. We are sorry for the inconvenience caused.
              </Typography>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default withStyles(styles)(DeliveryOptions);
