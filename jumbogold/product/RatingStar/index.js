import React from 'react';

// MUI Stuff
import { Rating } from '@material-ui/lab';

// Picture
import ratingNormalIcons from 'public/assets/icons/rating-normal.svg';
import ratingActiveIcons from 'public/assets/icons/rating-active.svg';

const ratingMargin = { margin: '0 2px' };

const RatingStar = ({ name, value = 0, readOnly = false, onChange, size }) => {
  return (
    <Rating
      name={name}
      icon={
        <img
          src={ratingActiveIcons}
          alt=""
          height={size ? 19 : 'fit-content'}
          style={ratingMargin}
        />
      }
      emptyIcon={
        <img
          src={ratingNormalIcons}
          alt=""
          height={size ? 19 : 'fit-content'}
          style={ratingMargin}
        />
      }
      value={value}
      readOnly={readOnly}
      onChange={onChange}
      precision={readOnly ? 0.5 : 1}
    />
  );
};

export default RatingStar;
