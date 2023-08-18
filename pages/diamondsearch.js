import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from 'routes/about/style';

const DiamondSearch = ({ classes }) => {
  return (
    <div className={classes.about}>
      <div id='diamondinstantinventory'
        data-apikey='10369086-db35-41b5-85d8-44b0381dc659'
        style={{ height: '100vh', width: '100%' }}
      />
    </div>
  );
};

export default withStyles(styles)(DiamondSearch);
