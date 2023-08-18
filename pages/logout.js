import React from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography, Button } from '@material-ui/core';

// layout
import PatternLayout from 'layout/PatternLayout';

// Styling
import styles from 'routes/logout/style';

const Logout = ({ classes }) => {
  return (
    <PatternLayout>
      <div className={classes.logout}>
        <img src="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/account/defaultPic/1627493794133_jumbo_gold.jpg" alt="sleep wizzo" className={classes.sleepWizzo} />

        <Typography className={classes.headerOne}>You’re now logged out!</Typography>

        <Typography className={classes.headerTwo}>come back soon..</Typography>

        <Button
          color="default"
          variant="outlined"
          className={classes.backHomeButton}
          onClick={() => Router.push('/')}
        >
          BACK HOME
        </Button>
      </div>
    </PatternLayout>
  );
};

export default withStyles(styles)(Logout);
