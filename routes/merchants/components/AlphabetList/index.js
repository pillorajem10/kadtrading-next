import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const AlphabetList = ({ classes, alphaList }) => {
  const handleGoSection = (id) => {
    const selector = document.querySelector(id);

    if (selector) {
      selector.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.stickyContainer}>
      {alphabet.map((item, index) => (
        <div
          key={index}
          onClick={() => handleGoSection(`#section-${item}`)}
          className={classes.alphaWrapper}
        >
          <Typography
            className={alphaList.includes(item) ? classes.activeAlpha : classes.normalAlpha}
          >
            {item}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(AlphabetList);
