import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core/styles';

// Redux
import { useSelector } from 'react-redux';

const styles = () => ({
  banner: {
    width: '100%',
  },
});

const Banner = ({ classes }) => {
  const { settings } = useSelector((state) => state.common);

  return <img className={classes.banner} src={settings.categoryBanners} alt="" />;
};

export default withStyles(styles)(Banner);
