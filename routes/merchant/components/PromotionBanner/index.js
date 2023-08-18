import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core/styles';

// Redux
import { useSelector } from 'react-redux';

import regExp from 'utils/regExp';

const styles = (theme) => ({
  banner: {
    width: '100%',

    [theme.breakpoints.only('xs')]: {
      marginBottom: 59,
      padding: '0 -22px !important',
    },
  },
});

const Banner = ({ classes }) => {
  const {
    merchant: { profile },
  } = useSelector((state) => state);

  if (regExp.isEmpty(profile.promotionBanner)) return null;

  return <img className={classes.banner} src={profile.promotionBanner} alt="" />;
};

export default withStyles(styles)(Banner);
