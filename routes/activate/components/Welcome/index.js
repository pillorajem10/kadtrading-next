import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Picture
import welcomeWizzo from 'public/assets/images/wizzo/shi.png';

// Styling
import styles from './style';

const Welcome = ({ classes }) => {
  return (
    <div className={classes.welcome}>
      <Typography className={classes.headerOne}>Welcome onboard!</Typography>
      <Typography className={classes.headerTwo}>
        One more step before you are really ready…
      </Typography>
      <img src={welcomeWizzo} alt="welcome wizzo" className={classes.welcomeWizzo} />
    </div>
  );
};

export default withStyles(styles)(Welcome);
