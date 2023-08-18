import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Picture
import expireWizzo from 'public/assets/images/wizzo/expiry-error.png';

// Styling
import styles from 'routes/error/style';

const Error = ({ classes }) => {
  return (
    <div className={classes.error}>
      <div className={classes.container}>
        <div className={classes.errorTextContainer}>
          <Typography className={classes.headerOne}>Error!</Typography>
          <Typography className={classes.headerTwo}>Something went wrong. We'll fix this shortly..</Typography>
        </div>

        <img src="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/account/defaultPic/1627493794133_jumbo_gold.jpg" alt="" className={classes.wizzo} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Error);
