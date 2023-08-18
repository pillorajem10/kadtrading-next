import React, { useEffect, useState } from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// Picture
import { threeDImageList } from 'public/assets/images/animation-button/3DIcon';

// Styling
import styles from './style';

let threeDInterval;

const ThreeDButton = ({ classes, size }) => {
  const [isHover, setIsHover] = useState(false);
  const [threeDIndex, setThreeDIndex] = useState(1);

  useEffect(() => {
    return () => {
      clearInterval(threeDInterval);
    };
  }, []);

  const threeDAnimation = () => {
    threeDInterval = setInterval(() => {
      setThreeDIndex((current) => {
        if (current + 1 === threeDImageList.length - 1) {
          clearInterval(threeDInterval);
          setThreeDIndex(0);
        }

        return current + 1;
      });
    }, 35);
  };

  const handleSetAnimationEnd = () => {
    clearInterval(threeDInterval);
    setIsHover(false);
    setThreeDIndex(0);
  };

  const handleSetAnimationStart = () => {
    setIsHover(true);
    threeDAnimation();
  };

  return isHover ? (
    <img
      src={threeDImageList[threeDIndex]}
      alt="3D button"
      onMouseLeave={handleSetAnimationEnd}
      className={classes.button}
      style={{ height: size || '', width: size || '' }}
    />
  ) : (
    <img
      src={threeDImageList[0]}
      alt="3D button"
      onMouseEnter={handleSetAnimationStart}
      className={classes.button}
      style={{ height: size || '', width: size || '' }}
    />
  );
};

export default withStyles(styles)(ThreeDButton);
