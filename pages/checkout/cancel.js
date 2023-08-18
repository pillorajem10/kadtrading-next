import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { Typography, withStyles, Button, Hidden } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Picture
import wizzoCheckoutCancel from 'public/assets/images/wizzo/shi.png';
import mobileWizzoCheckoutCancel from 'public/assets/images/wizzo/shi.jpg';

// Styling
import styles from 'routes/checkout-cancel/style';

const CheckoutCancel = ({ classes }) => {
  const { authenticated, account } = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      router.push('/login');
    }
  }, [router, authenticated]);

  return (
    <div className={classes.checkoutCancel}>
      <div className={classes.container}>
        <Typography className={classes.header}>
          Sorry! Your transaction was unsuccessful.
        </Typography>
        <Typography className={classes.cancelText}>
          Hi {account.firstName} {account.lastName},
        </Typography>
        <br />
        <Typography className={classes.cancelText}>
          Your order was not successful and has not been completed. The items are still in your
          cart. You may choose to complete the transaction again.
        </Typography>
        <br />
        <Typography className={classes.cancelText}>Have a question? Drop us an email at</Typography>
        <a href="mailto:jumbojew@gmail.com">jumbojew@gmail.com</a>
        <br />
        <br />
        <Typography className={classes.cancelText}>Thank you for shopping from Jumbo Gold and Diamonds.</Typography>

        <Button className={classes.backToShoppingCartBtn} onClick={() => router.push('/cart')}>
          Back to shopping cart
        </Button>
      </div>

      <Hidden xsDown>
        <img src={wizzoCheckoutCancel} alt="" className={classes.wizzoCheckoutCancel} />
      </Hidden>
      <Hidden smUp>
        <img src={mobileWizzoCheckoutCancel} alt="" className={classes.wizzoCheckoutCancel} />
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(CheckoutCancel);
