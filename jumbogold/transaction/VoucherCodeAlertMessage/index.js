import React from 'react';
import { CSSTransition } from 'react-transition-group';

// MUI Stuff
import { withStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

// Styling
import styles from './style';

const VoucherCodeAlertMessage = ({ classes, show, type }) => {
  const animation = {
    enter: classes.itemEnter,
    enterActive: classes.itemEnterActive,
    exit: classes.itemExit,
    exitActive: classes.itemExitActive,
  };

  return (
    <CSSTransition in={show} timeout={300} unmountOnExit classNames={animation}>
      <Alert
        variant='filled'
        severity='error'
        className={classes.invalidVoucherCodeStatus}>
        {type === 'service-fee'
          ? 'There will be a $1.00 service fee if the transaction is below $1.00'
          : "Voucher Code is invalid. Your cart does not meet this discount's requirements."}
      </Alert>
    </CSSTransition>
  );
};

export default withStyles(styles)(VoucherCodeAlertMessage);
