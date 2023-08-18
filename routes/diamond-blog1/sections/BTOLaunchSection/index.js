import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const BTOLaunchSection = ({ classes }) => {
  return (
    <div className={classes.btoLaunchSection}>
      <Typography className={classes.btoLaunchHeader}>
        New BTO launch in Aug 2020
      </Typography>

      <Typography className={classes.btoLaunchContent}>
        As always, do keep in mind that certain areas will have fewer units up
        for grabs, so it might be prudent to apply for the areas that have
        larger developments. Of course, this might also mean being further away
        from amenities. Keep your balance in mind, and mentally prepare yourself
        for disappointment!
      </Typography>

      <Typography className={classes.btoLaunchContent}>
        Check out{' '}
        <a
          href='https://www.hdb.gov.sg/cs/infoweb/residential/buying-a-flat/new/bto-sbf'
          className={classes.btoLaunchLink}
          target='_blank'
          rel='noopener noreferrer'>
          HDB’s website
        </a>{' '}
        for more details on the Aug 2020 BTO exercise.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(BTOLaunchSection);
