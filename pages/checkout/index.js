import React, { useEffect, useState, useCallback } from 'react';
import Router from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

// sections
import DeliveryFormSection from 'routes/checkout/sections/DeliveryFormSection';
import BillingFormSection from 'routes/checkout/sections/BillingFormSection';

// components
import CartItemsSection from 'routes/checkout/sections/CartItemsSection';
import UpdateAddressModal from 'routes/checkout/components/UpdateAddressModal';

// MUI Stuff
import Alert from '@material-ui/lab/Alert';
import { withStyles, Typography, Checkbox } from '@material-ui/core';

// Constant
import stripeTargetEnv from 'constant/stripeConfig';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { transaction } from 'redux/actions';

// Utils
import { formRules } from 'routes/checkout/utils/rules';
import { formValidationCheck } from 'utils/CheckFormValidation';
import { useDebounce } from 'utils/methods';

// Styling
import styles from 'routes/checkout/style';

const addressFormInitialValues = {
  id: '',
  firstName: '',
  lastName: '',
  phone: '',
  countryCode: '+65',
  address: '',
  unit: '',
  postcode: '',
  remark: '',
  email: '',
};

const Checkout = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    common: { currency, currencyRates, gst },
    user: { account, authenticated },
    transaction: { cart },
  } = useSelector((state) => state);

  const [deliveryAddress, setDeliveryAddress] = useState([]);
  const [deliveryForm, setDeliveryForm] = useState({ ...addressFormInitialValues });
  const [billingForm, setBillingForm] = useState({ ...addressFormInitialValues });
  const [deliveryFormError, setDeliveryFormError] = useState({});
  const [billingFormError, setBillingFormError] = useState({});
  const [deliveryAddressIndex, setDeliveryAddressIndex] = useState('');
  const [useDeliveryAddress, setUseDeliveryAddress] = useState(false);
  const [failMessage, setFailMessage] = useState('');
  const [updateDeliveryForm, setUpdateDeliveryForm] = useState({});
  const [showUpdateAddressModal, setShowUpdateAddressModal] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const handleGetDeliveryAddress = useCallback(async () => {
    const res = await dispatch(transaction.getDeliveryAddress());
    const { success, data } = res;

    if (success) {
      setDeliveryAddress(data);
    }
  }, [dispatch]);

  useEffect(() => {
    if (cart.itemCount === 0) {
      Router.push('/');
    }
  }, [cart]);

  useEffect(() => {
    if (authenticated) {
      const { firstName, lastName, mobile, countryCode } = account;

      setDeliveryForm((currentValues) => {
        return {
          ...currentValues,
          firstName,
          lastName,
          phone: mobile,
          countryCode,
        };
      });
  
      handleGetDeliveryAddress();
    }
  }, [handleGetDeliveryAddress]);

  const handleSelectDeliveryAddress = (event) => {
    const id = event.target.value;
    const form = deliveryAddress.find((address) => address.id === id);
    const selectedForm = form || {
      id: '',
      firstName: '',
      lastName: '',
      phone: '',
      countryCode: '+65',
      address: '',
      unit: '',
      postcode: '',
      remark: '',
    };

    setDeliveryAddressIndex(id);
    setDeliveryForm(selectedForm);
    setDeliveryFormError({});

    if (useDeliveryAddress) {
      setBillingForm(selectedForm);
      setBillingFormError({});
    }
  };

  const handleCheckUseDeliveryAddress = (event) => {
    const { target } = event;
    const { checked } = target;

    setUseDeliveryAddress(checked);

    if (checked) {
      setBillingForm(deliveryForm);
      setBillingFormError({});
    } else {
      setBillingForm({
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        countryCode: '+65',
        address: '',
        unit: '',
        postcode: '',
        remark: '',
      });
    }
  };

  const handleChangeDeliveryForm = (event) => {
    const { target } = event;
    const { name, value } = target;

    setDeliveryForm((currentValues) => {
      return {
        ...currentValues,
        [name]: value,
      };
    });

    const filterFormRules = formRules.find((item) => item.fieldName === name);
    const valid = formValidationCheck(filterFormRules.rule, value);

    if (!valid) {
      setDeliveryFormError((currentValues) => {
        return {
          ...currentValues,
          [filterFormRules.fieldName]: filterFormRules.message,
        };
      });
    } else {
      const errorMessage = deliveryFormError;

      if (errorMessage[filterFormRules.fieldName]) {
        delete errorMessage[filterFormRules.fieldName];
      }

      setDeliveryFormError(errorMessage);
    }
  };

  const handleChangeBillingForm = (event) => {
    const { target } = event;
    const { name, value } = target;

    setBillingForm((currentValues) => {
      return {
        ...currentValues,
        [name]: value,
      };
    });

    const filterFormRules = formRules.find((item) => item.fieldName === name);
    const valid = formValidationCheck(filterFormRules.rule, value);

    if (!valid) {
      setBillingFormError((currentValues) => {
        return {
          ...currentValues,
          [filterFormRules.fieldName]: filterFormRules.message,
        };
      });
    } else {
      const errorMessage = billingFormError;

      if (errorMessage[filterFormRules.fieldName]) {
        delete errorMessage[filterFormRules.fieldName];
      }

      setBillingFormError(errorMessage);
    }
  };

  const handleCreateAddress = async (form, type) => {
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      countryCode: form.countryCode,
      address: form.address,
      unit: form.unit,
      postcode: form.postcode,
      remark: form.remark,
    };

    const res = await dispatch(transaction.addDeliveryAddress(payload));
    const { success, data } = res;

    if (success) {
      const { id } = data;

      if (type === 'delivery') {
        setDeliveryForm((currentValues) => {
          return { ...currentValues, id };
        });
      } else {
        setBillingForm((currentValues) => {
          return { ...currentValues, id };
        });
      }
    }
  };

  const handleStripeCheckout = async (payload) => {
    setIsLoad(true);
    const stripe = await loadStripe(stripeTargetEnv[window.location.origin]);

    try {
      const res = await dispatch(
        !authenticated
        ? transaction.transactionGuestCheckout(payload)
        : transaction.transactionCheckout(payload)
      );

      const { success, data, msg } = res;

      if (success) {
        const { id } = data;
        stripe.redirectToCheckout({ sessionId: id });
      } else {
        setIsLoad(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFailMessage(msg);
      }
    } catch (err) {
      setIsLoad(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setFailMessage(err);
    }
  };

  const handleMakePayment = async () => {    
    const variantIds = [];
    let skipPayment = false;

    if (authenticated) {
      if (deliveryForm.id === '') {
        handleCreateAddress(deliveryForm, 'delivery');
      }

      if (!useDeliveryAddress && billingForm.id === '') {
        handleCreateAddress(billingForm, 'billing');
      }

      const res = await dispatch(transaction.getDeliveryAddress());
      const { success, data } = res;

      if (success) {
        setDeliveryAddress(data);

        const deliveryAddr = data.find((addr) => addr.id === deliveryForm.id);

        if (deliveryAddr) {
          data.forEach((address) => {
            if (address.id === deliveryForm.id) {
              Object.keys(deliveryForm).map((key) => {
                if (key !== 'user' && key !== 'id' && key !== 'remark') {                
                  if (deliveryForm[key] !== address[key]) {
                    setShowUpdateAddressModal(true);
                    setUpdateDeliveryForm(deliveryForm);
                    skipPayment = true;
                  }
                }
                return null;
              });
            }
          });
        }

        if (!skipPayment) {
          let deliveryOption = undefined; 
          cart.groups.forEach((group) => {
            deliveryOption = group.deliveryOption.length > 0 ? group.deliveryOption[0] : undefined;
            group.items.forEach((item) => {
              variantIds.push(item);
            });
          });

          const payload = {
            billingAddress: billingForm,
            deliveryAddress: deliveryForm,
            currency,
            deliveryOption,
            variantIds,
          };

          handleStripeCheckout(payload);
        }
      }
    } else {
      cart.groups.forEach((group) => {
        group.items.forEach((item) => {
          variantIds.push(item);
        });
      });

      const { email: email1, ...restBillingForm } = billingForm;
      const { email: email2, ...restDeliveryForm } = deliveryForm;      

      const payload = {
        billingAddress: restBillingForm,
        deliveryAddress: restDeliveryForm,
        email: email1,
        variantIds,
      };

      handleStripeCheckout(payload);
    }
  };

  const handleCheckFormValue = useDebounce(() => {
    let deliveryFormErrors = {};
    let billingFormErrors = {};

    formRules.forEach((item) => {
        const valid = formValidationCheck(item.rule, deliveryForm[item.fieldName]);

        if (!valid && deliveryFormErrors[item.fieldName] === undefined) {
            deliveryFormErrors = {
              ...deliveryFormErrors,
              [item.fieldName]: item.message,
            };
        }
    });

    formRules.forEach((item) => {
      const valid = formValidationCheck(item.rule, billingForm[item.fieldName]);

      if (!valid && billingFormErrors[item.fieldName] === undefined) {
        billingFormErrors = {
          ...billingFormErrors,
          [item.fieldName]: item.message,
        };
      }
    });
    
    if (deliveryFormErrors.email && authenticated) {
      delete deliveryFormErrors.email;
      delete billingFormErrors.email;
    }

    setDeliveryFormError(deliveryFormErrors);
    setBillingFormError(billingFormErrors);

    if (
      Object.keys(deliveryFormErrors).length === 0 &&
      Object.keys(billingFormErrors).length === 0
    ) {
      handleMakePayment();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 500);

  const handleCloseUpdateAddressModal = async (action) => {
    switch (action) {
      case 'create': {
        const payload = {
          firstName: updateDeliveryForm.firstName,
          lastName: updateDeliveryForm.lastName,
          phone: updateDeliveryForm.phone,
          countryCode: updateDeliveryForm.countryCode,
          address: updateDeliveryForm.address,
          unit: updateDeliveryForm.unit,
          postcode: updateDeliveryForm.postcode,
          remark: updateDeliveryForm.remark,
        };

        const res = await dispatch(transaction.addDeliveryAddress(payload));
        const { success, data } = res;
        if (success) {
          const { id } = data;

          setDeliveryForm((currentValues) => {
            return { ...currentValues, id };
          });

          setShowUpdateAddressModal(false);

          handleCheckFormValue();
        }

        break;
      }

      case 'update': {
        const res = await dispatch(transaction.updateDeliveryAddress(updateDeliveryForm));
        const { success } = res;
        if (success) {
          setShowUpdateAddressModal(false);
          handleCheckFormValue();
        }
        break;
      }

      default:
        break;
    }
  };

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.innerWrapper}>
          <Typography className={classes.checkoutHeader}>Customer Information</Typography>

          {!!failMessage && (
            <Alert style={{ marginBottom: '1rem' }} severity="error">
              {failMessage}
            </Alert>
          )}

          <div className={classes.moses}>
            <div className={classes.egypt}>
              <DeliveryFormSection
                deliveryForm={deliveryForm}
                deliveryAddress={deliveryAddress}
                deliveryAddressIndex={deliveryAddressIndex}
                selectDeliveryAddress={handleSelectDeliveryAddress}
                deliveryFormError={deliveryFormError}
                setDeliveryForm={handleChangeDeliveryForm}
              />              
            </div>
            <div className={classes.horeb}>
              <BillingFormSection
                billingForm={billingForm}
                billingFormError={billingFormError}
                setBillingForm={handleChangeBillingForm}
              />
              <div className={classes.checkboxWrapper}>
                <Checkbox
                  checked={useDeliveryAddress}
                  className={classes.checkbox}
                  onChange={handleCheckUseDeliveryAddress}
                  color="default"
                  inputProps={{
                    'aria-label': 'address information',
                  }}
                  disableRipple
                />
                <Typography className={classes.checkboxText}>
                  Same as my delivery information.
                </Typography>
              </div>              
            </div>
          </div>
        </div>

        <CartItemsSection handleMakePayment={handleCheckFormValue} isLoad={isLoad} />

        <UpdateAddressModal
          open={showUpdateAddressModal}
          onClose={() => setShowUpdateAddressModal(false)}
          updateAddress={handleCloseUpdateAddressModal}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Checkout);
