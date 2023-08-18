import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// hooks
import useCart from '../../../../hooks/useCart';

// Picture
import downButton from 'public/assets/icons/arrow-dropdown.svg';
import redDownButton from 'public/assets/icons/red-arrow-dropdown.svg';
import redError from 'public/assets/icons/red-error.svg';

// components
import { MobileDeliveryOptionModal } from 'jumbogold/transaction';
import SelectedDeliveryOption from '../SelectedDeliveryOption';

// Styling
import styles from './style';

const MobileDeliveryOptions = ({ classes, optionList, deliveryOption, shippingFee, isClicked }) => {
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
          className={classes.optionListWrapper}
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

          <img src={showMerchantError || isError ? redDownButton : downButton} alt="down icon" />
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
    <div className={classes.container}>
      {/* Delivery Options */}
      <div
        className={classes.deliveryOptions}
        style={{
          alignItems: deliveryOption ? 'baseline' : 'center',
        }}
      >
        <Typography>Delivery Options</Typography>

        {renderDeliveryOptionContainer()}
      </div>

      {/* Delivery Options Error Message */}
      {!deliveryOption && (
        <div className={classes.errorMessageContainer}>
          {!showMerchantError && isError && (
            <div>
              <img src={redError} alt="error icon" />

              <Typography>Please select your delivery fee before confirming your order.</Typography>
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

      {/* Delivery Options List Modal */}
      <MobileDeliveryOptionModal
        open={showOption}
        onClose={handleCloseOption}
        optionList={optionList}
        selectOption={handleSelectDeliveryOption}
        optionId={deliveryOption.length > 0 ? deliveryOption[0]?.name : ''}
        actions
      />
    </div>
  );
};

export default withStyles(styles)(MobileDeliveryOptions);
