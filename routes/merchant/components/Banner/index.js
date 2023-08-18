import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core/styles';

// Redux
import { useSelector } from 'react-redux';

import grayscale from 'public/assets/jumbo/grayscale.png';

const styles = () => ({
  banner: {
    width: '100%',
  },
});

const Banner = ({ classes }) => {
  const {
    merchant: { profile },
    common: { settings },
  } = useSelector((state) => state);

  return (
    <img className={classes.banner} src={grayscale} alt="" />
  );
};

export default withStyles(styles)(Banner);
