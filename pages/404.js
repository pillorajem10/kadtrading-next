import React from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Picture
import expireWizzo from 'public/assets/images/wizzo/expiry-error.png';

// Styling
import styles from 'routes/404/style';

const Custom404 = ({ classes }) => {
  return (
    <div className={classes.custom404}>
      <div className={classes.container}>
        <div className={classes.errorTextContainer}>
          <Typography className={classes.headerOne}>404</Typography>
          <Typography className={classes.headerTwo}>page not found!</Typography>

          <Link href="/" as="/">
            <a>
              <Typography className={classes.headerThree}>Go back to main page</Typography>
            </a>
          </Link>




        </div>

        <img src={expireWizzo} alt="" className={classes.wizzo} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Custom404);
