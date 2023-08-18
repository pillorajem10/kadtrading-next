import React from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const ProductLabel = ({ classes, color, label }) => {
  const colorLabel = {
    BLACK: classes.blackLabel,
    WHITE: classes.whiteLabel,
    RED: classes.redLabel,
    ORANGE: classes.orangeLabel,
    YELLOW: classes.yellowLabel,
  };

  const handleGoLabelPage = () => {
    if (label.toLowerCase() === 'featured') {
      Router.push({
        pathname: '/listing',
        query: { featured: true },
      });
    } else {
      Router.push({
        pathname: '/listing',
        query: { labels: label },
      });
    }
  };

  return (
    <Typography className={colorLabel[color]} onClick={handleGoLabelPage}>
      {label}
    </Typography>
  );
};

export default withStyles(styles)(ProductLabel);
