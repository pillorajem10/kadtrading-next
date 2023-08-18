import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core/styles';

// Redux
import { useSelector } from 'react-redux';

import regExp from 'utils/regExp';

const styles = (theme) => ({
  banner: {
    width: '100%',
    padding: '0 44px 170px',

    [theme.breakpoints.only('xs')]: {
      padding: 0,
    },
  },
});

const Banner = ({ classes }) => {
  const {
    merchant: { profile },
  } = useSelector((state) => state);

  if (regExp.isEmpty(profile.aboutBanner)) return null;

  return <img className={classes.banner} src={profile.aboutBanner} alt="" />;
};

export default withStyles(styles)(Banner);
