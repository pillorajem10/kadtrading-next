import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const HeaderName = ({ classes, name, sideBar, onClick }) => {
  return (
    <div className={sideBar ? classes.siderBarHeaderNameWrapper : classes.headerWrapper}>
      <Typography
        className={classes.header}
        onClick={() => (onClick ? onClick() : null)}
        style={{ cursor: onClick ? 'pointer' : 'normal' }}
      >
        {name}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(HeaderName);
