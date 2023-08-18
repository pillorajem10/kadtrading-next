import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Cookies from 'js-cookie';

// MUI Stuff
import { Typography, withStyles, Button, Hidden } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { transaction } from 'redux/actions';

// constants
import { cart } from 'constant';

// Picture
import wizzoSuccess from 'public/assets/images/wizzo/shi.png';
import mobileWizzoSuccess from 'public/assets/images/wizzo/shi.jpg';

// Styling
import styles from 'routes/checkout-success/style';

const CheckoutSuccess = ({ classes }) => {
  const dispatch = useDispatch();
  const { authenticated, account } = useSelector((state) => state.user);
  const [trans, setTrans] = useState(undefined);
  const router = useRouter();
  const { query } = router;

  const handleGetTransactionDetails = useCallback((v) => {
    dispatch(transaction.getTransactionBySessionId(v))
    .then(res => {
      const { success, data } = res;
      if (success) {
        if (data.length > 0) setTrans(data[0]);
      }

    });
  }, [query.session_id]);

  useEffect(() => {
    if (!authenticated) {
      Cookies.set('cart', JSON.stringify(cart));      
      dispatch(transaction.setTransactionCart(cart));      
      router.push('/login');
    } else {
      if (query.session_id) {
        handleGetTransactionDetails(query.session_id);
      }
    }
  }, [router, authenticated]);

  if (!trans) return null;

  return (
    <div className={classes.checkoutSuccess}>
      <div className={classes.container}>
        <Typography className={classes.header}>
          Your order is being processed!
        </Typography>
        <Typography className={classes.successText}>
          Hi {account.fname} {account.lname},
        </Typography>
        <br />
        <Typography className={classes.successText}>
          We have received your order and will be preparing it for delivery.
        </Typography>
        <br />
        <Typography className={classes.successText}>
          Tracking #: {trans._id}
        </Typography>
        <br />
        <Typography className={classes.successText}>
          Have a question? Drop us an email at
        </Typography>
        <a href="jumbojew@gmail.com" className={classes.emailLink}>
        jumbojew@gmail.com
        </a>
        <br />
        <br />
        <Typography className={classes.successText}>Thank you for shopping from Jumbo Gold and Diamonds.</Typography>

        <Button
          color="primary"
          variant="contained"
          className={classes.viewYourOrderBtn}
          onClick={() => router.push(`/user/transaction?id=${trans._id}`)}
        >
          View your order
        </Button>

        <Link href="/">
          <a className={classes.continueShopping}>
            <Typography>Continue Shopping</Typography>
          </a>
        </Link>
      </div>

      <Hidden xsDown>
        <img src={wizzoSuccess} alt="" className={classes.wizzoSuccess} />
      </Hidden>
      <Hidden smUp>
        <img src={mobileWizzoSuccess} alt="" className={classes.wizzoSuccess} />
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(CheckoutSuccess);
