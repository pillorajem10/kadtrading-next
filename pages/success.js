import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';

// MUI Stuff
import { withStyles, Typography, Button } from '@material-ui/core';

// Picture
import successImage from 'public/assets/images/wizzo/shi.png';
import PatternTop from 'public/assets/images/patterns/pattern3.png';
import PatternBottom from 'public/assets/images/patterns/pattern4.png';

// Styling
import styles from 'routes/success/style';

const Success = ({ classes }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const account = Cookies.get('account');

    if (account) {
      const parseAccount = JSON.parse(account);
      const { firstName, lastName } = parseAccount;

      setName(`${firstName} ${lastName}`);
    } else {
      Router.push('/login');
    }
  }, []);

  return (
    <div className={classes.success}>
      <img src={successImage} alt="success wizzo" className={classes.successImage} />

      <Typography className={classes.successText}>
        Thank you {name}! You have successfully activated your account on Jumbo Gold and Diamonds.
        Start browsing through our products now!
      </Typography>

      <Button
        color="primary"
        variant="contained"
        className={classes.goToAccountButton}
        onClick={() => Router.push('/user/profile')}
      >
        GO TO ACCOUNT
      </Button>

      <img src={PatternTop} alt="top pattern" className={classes.patternTop} />
      <img src={PatternBottom} alt="top pattern" className={classes.patternBottom} />
    </div>
  );
};

export default withStyles(styles)(Success);
