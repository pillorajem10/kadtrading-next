import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { transaction } from 'redux/actions';

// Picture
import closeVoucherIcon from 'public/assets/icons/close-voucher-code.svg';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const VoucherDiscount = ({ classes, voucherCode, voucherDiscount, merchantId }) => {
  const dispatch = useDispatch();

  const handleRemoveVoucherCode = () => {
    const payload = { merchantId };

    dispatch(transaction.deleteVoucherCode(payload));
  };

  if (voucherCode === null && voucherDiscount === 0) return null;

  return (
    <div className={classes.container}>
      <Typography>Voucher discount</Typography>

      <div>
        <Typography className={classes.voucherDiscount}>-{formatPrice(voucherDiscount)}</Typography>

        <div className={classes.voucherCode}>
          <Typography>{voucherCode}</Typography>
          <img src={closeVoucherIcon} alt="close voucher icon" onClick={handleRemoveVoucherCode} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(VoucherDiscount);
