import React from 'react';

// MUI Stuff
import { Typography, withStyles, Hidden } from '@material-ui/core';

// Picture
import egssLogo from 'public/assets/images/article/article-4/egss-logo.png';

// Styling
import styles from './style';

const IntroductionSection = ({ classes }) => {
  return (
    <>
      <Typography className={classes.subHeader}>9.9 Deals On Jumbo Gold and Diamonds</Typography>

      <div className={classes.section}>
        <img src={egssLogo} alt="EGSS Logo" className={classes.egssLogo} />

        <Typography>
          Mention 9.9 to any shopaholic and watch them immediately perk up. <br />
          This year, the legendary online shopping festival coincides with the annual Great
          Singapore Sale,
          <Hidden xsDown>
            <br />
          </Hidden>
          which will take place exclusively online for the first time, marking the first-ever eGSS.
          <Hidden xsDown>
            <br />
          </Hidden>
          We’ve sussed out some of the best deals on Jumbo Gold and Diamonds to keep your eye on between 9.9
          to 10.10.
        </Typography>
      </div>
    </>
  );
};

export default withStyles(styles)(IntroductionSection);
