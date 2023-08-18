import React from 'react';

// MUI Stuff
import { withStyles, Typography, Dialog } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const MerchantPolicyModal = ({ classes, open, onClose, policyType = 'delivery' }) => {
  const { profile } = useSelector((state) => state.merchant);

  return (
    <Dialog onClose={onClose} open={open} classes={{ paper: classes.paper }}>
      <div className={classes.container}>
        <Typography className={classes.header}>
          {policyType === 'delivery' ? 'Delivery' : 'Return Policy'}
        </Typography>

        <div
          className={classes.text}
          dangerouslySetInnerHTML={{
            __html: policyType === 'delivery' ? profile.deliveryPolicy : profile.returnPolicy,
          }}
        />
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(MerchantPolicyModal);
