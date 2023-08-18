import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// constants
import { defaultPrimaryColors } from 'constant';

// styling
import styles from './style';

// utils
import { getColorDetails, getColorDetailsByText } from 'utils/colorDetect';

// react-color
import { CirclePicker } from 'react-color';

const SingleColorSelection = ({ classes, onChange, color }) => {

  return (
    <CirclePicker
      circleSize={20}
      hex={color}
      colors={defaultPrimaryColors}
      onChangeComplete={onChange}
      styles={{
        default: {
          card: {
            paddingTop: 20,
            paddingLeft: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            margin: '0 auto'
          }
        }
      }}
    />
  )
}
export default withStyles(styles)(SingleColorSelection);
