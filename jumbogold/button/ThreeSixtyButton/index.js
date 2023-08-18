import React, { useEffect, useState } from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// Picture
import { threeSixtyImageList } from 'public/assets/images/animation-button/360Icon';

const styles = () => ({
  button: {
    cursor: 'pointer',
  },
});

let threeSixtyInterval;

const ThreeSixtyButton = ({ classes }) => {
  const [isHover, setIsHover] = useState(false);
  const [threeSixtyIndex, setThreeSixtyIndex] = useState(1);

  useEffect(() => {
    return () => {
      clearInterval(threeSixtyInterval);
    };
  }, []);

  const threeSixtyAnimation = () => {
    threeSixtyInterval = setInterval(() => {
      setThreeSixtyIndex((current) => {
        if (current + 1 === threeSixtyImageList.length - 1) {
          clearInterval(threeSixtyInterval);
          setThreeSixtyIndex(0);
        }

        return current + 1;
      });
    }, 35);
  };

  const handleSetAnimationEnd = () => {
    clearInterval(threeSixtyInterval);
    setIsHover(false);
    setThreeSixtyIndex(0);
  };

  const handleSetAnimationStart = () => {
    setIsHover(true);
    threeSixtyAnimation();
  };

  return isHover ? (
    <img
      src={threeSixtyImageList[threeSixtyIndex]}
      alt="360 animation button"
      onMouseLeave={handleSetAnimationEnd}
      className={classes.button}
    />
  ) : (
    <img
      src={threeSixtyImageList[0]}
      alt="360 animation button"
      onMouseEnter={handleSetAnimationStart}
      className={classes.button}
    />
  );
};

export default withStyles(styles)(ThreeSixtyButton);
