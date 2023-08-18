import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

const styles = (theme) => ({
  tag: {
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    padding: '6px 15px',
    marginBottom: 13,
    width: 'fit-content',
    cursor: 'pointer',

    [theme.breakpoints.only('xs')]: {
      marginBottom: 14,
      marginRight: 10,
      // height: "fit-content",
    },
  },
  tagText: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

const TagBox = ({ classes, tag }) => {
  return (
    <div className={classes.tag}>
      <Typography className={classes.tagText}>{tag}</Typography>
    </div>
  );
};

export default withStyles(styles)(TagBox);
