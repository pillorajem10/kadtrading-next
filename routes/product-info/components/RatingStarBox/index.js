import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Picture
import primaryStar from 'public/assets/icons/primary-rating-star.svg';
import whiteStar from 'public/assets/icons/white-rating-star.svg';

// Styling
import styles from './style';

const RatingStarBox = ({ classes, title, count, active = false, hideStar, setStar }) => {
  const [activeKey, setActiveKey] = useState('');

  const handleSetActiveKey = () => setActiveKey(title);

  const handleRemoveActiveKey = () => setActiveKey('');

  return (
    <div
      className={active ? classes.activeRatingStarBox : classes.ratingStarBox}
      onMouseOver={handleSetActiveKey}
      onMouseLeave={handleRemoveActiveKey}
      onFocus={() => null}
      onClick={() => setStar(title === 'All' ? '' : title)}
    >
      <div>
        <Typography className={classes.ratingStarHeader}>{title}</Typography>
        {!hideStar && <img src={activeKey === title || active ? whiteStar : primaryStar} alt="" />}
      </div>

      <Typography className={classes.ratingStarAmount}>{count} Ratings</Typography>
    </div>
  );
};

export default withStyles(styles)(RatingStarBox);
