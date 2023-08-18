import React from 'react';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// Picture

// Styling
import styles from './style';

const PatternLayout = ({ classes, showWizzo, children }) => {
  return (
    <div className={classes.layout}>
      {/*<img className={classes.topPattern} src={topPattern} alt="" />*/}

      <div className={classes.container}>{children}</div>

{/*      <Hidden xsDown>
        {showWizzo && <img className={classes.wizzoHi} src={wizzoHi} alt="" />}
        <img className={classes.bottomPattern} src={bottomPattern} alt="" />
      </Hidden>*/}
    </div>
  );
};

export default withStyles(styles)(PatternLayout);
