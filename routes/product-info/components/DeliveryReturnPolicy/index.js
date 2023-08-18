import React, { useState } from 'react';
import moment from 'moment';

// MUI Stuff
import { withStyles, ClickAwayListener, Hidden } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Picture
import moreInfoIcon from 'public/assets/icons/more-info.svg';
import expandIcon from 'public/assets/icons/arrow-dropdown.svg';

// Utils
import regExp from 'utils/regExp';

// components
import { DeliveryOptionCard, MobileDeliveryOptionModal } from 'jumbogold/transaction';
import MerchantPolicyModal from '../MerchantPolicyModal';

// Styling
import styles from './style';

const DeliveryReturnPolicy = ({ classes }) => {
  const {
    product: { productDetails },
    merchant: { profile },
  } = useSelector((state) => state);

  const [showOption, setShowOption] = useState(false);
  const [showMobileOption, setShowMobileOption] = useState(false);
  const [showDeliveryPolicyModal, setShowDeliveryPolicyModal] = useState(false);
  const [showReturnPolicyModal, setShowReturnPolicyModal] = useState(false);

  const handleToggleOption = () => setShowOption((currentValue) => !currentValue);

  const handleToggleMobileOption = () => setShowMobileOption((currentValue) => !currentValue);

  const handleToggleDeliveryPolicyModal = () =>
    setShowDeliveryPolicyModal((currentValue) => !currentValue);

  const handleToggleReturnPolicyModal = () =>
    setShowReturnPolicyModal((currentValue) => !currentValue);

  const handleShowDefaultDeliveryOption = () => {
    const deliveryOption = productDetails.deliveryOptions[0];
    return (
      <div className={classes.defaultDeliveryOption}>
        <div>
          <div>
            Delivery{' '}
            <span>
              {deliveryOption.freeShippingExtra !== null && deliveryOption.freeShippingExtra !== 0
                ? `$${deliveryOption.freeShippingExtra}`
                : 'Free'}
            </span>{' '}
            {deliveryOption.freeShippingAbove > 0
              ? `above $${deliveryOption.freeShippingAbove}`
              : null}
          </div>

          <div>
            Get it from {moment().add(deliveryOption.minEddWeeks, 'w').format('DD MMM')} -{' '}
            {moment().add(deliveryOption.maxEddWeeks, 'w').format('DD MMM')}
          </div>
        </div>

        <Hidden smUp>
          <img src={expandIcon} alt="expand icon" />
        </Hidden>
      </div>
    );
  };

  if (
    productDetails.deliveryOptions?.length === 0 &&
    regExp.isEmpty(profile.deliveryPolicy) &&
    regExp.isEmpty(profile.returnPolicy)
  )
  return null;

  return (
    <div className={classes.deliveryReturnPolicy}>
      {productDetails.deliveryOptions?.length > 0 && (
        <div className={classes.deliveryOptions}>
          <div className={classes.deliveryOptionsTitle}>
            Delivery
            {/* Merchant Delivery Policy */}
            {!regExp.isEmpty(profile.deliveryPolicy) && (
              <img src={moreInfoIcon} alt="" onClick={handleToggleDeliveryPolicyModal} />
            )}
          </div>

          {/* Merchant Delivery Option List */}
          <div className={classes.deliveryOptionsContainer}>
            <div
              className={classes.deliveryOptionsInnerContainer}
              onMouseOver={handleToggleOption}
              onFocus={() => null}
              onClick={handleToggleMobileOption}
            >
              <div>{handleShowDefaultDeliveryOption()}</div>
            </div>

            <Hidden xsDown>
              {showOption && (
                <ClickAwayListener onClickAway={handleToggleOption}>
                  <div className={classes.optionsWrapper} onMouseLeave={handleToggleOption}>
                    {productDetails.deliveryOptions.map((option) => (
                      <DeliveryOptionCard key={option.id} option={option} readOnly />
                    ))}
                  </div>
                </ClickAwayListener>
              )}
            </Hidden>
          </div>
        </div>
      )}

      {/* Merchant Return Policy */}
      {!regExp.isEmpty(profile.returnPolicy) && (
        <div className={classes.returnPolicy}>
          <div className={classes.returnPolicyTitle}>Returns</div>

          <div className={classes.returnPolicyContainer} onClick={handleToggleReturnPolicyModal}>
            Return Policy
          </div>
        </div>
      )}

      {/* Delivery Policy Madol */}
      <MerchantPolicyModal
        open={showDeliveryPolicyModal}
        onClose={handleToggleDeliveryPolicyModal}
      />

      {/* Return Policy Madol */}
      <MerchantPolicyModal
        open={showReturnPolicyModal}
        onClose={handleToggleReturnPolicyModal}
        policyType="return"
      />

      {/* Mobile Delivery Option List Modal */}
      <Hidden smUp>
        <MobileDeliveryOptionModal
          open={showMobileOption}
          onClose={handleToggleMobileOption}
          optionList={productDetails.deliveryOptions}
        />
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(DeliveryReturnPolicy);
