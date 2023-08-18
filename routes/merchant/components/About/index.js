import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const About = ({ classes }) => {
  const { profile } = useSelector((state) => state.merchant);

  return (
    <div className={classes.about}>
      <Typography className={classes.merchantName}>{profile.displayName}</Typography>

      <Typography
        className={classes.merchantIntro}
        dangerouslySetInnerHTML={{ __html: profile.profileContent }}
      />
    </div>
  );
};

export default withStyles(styles)(About);
