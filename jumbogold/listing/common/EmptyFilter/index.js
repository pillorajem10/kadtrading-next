import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

const styles = () => ({
  container: {
    padding: '4px 21px 8px',

    '& p': {
      opacity: 0.38,
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.38)',
    },
  },
});

const EmptyFilter = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography>No results</Typography>
    </div>
  );
};

export default withStyles(styles)(EmptyFilter);
