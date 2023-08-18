import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Slider  } from '@material-ui/core';

// useDebounce
import { useDebounce } from 'utils/methods' ;

// redux
import { useSelector } from 'react-redux';

// styling
import styles from './style';

// utils
import {
  arrayOfLabs,
  labelsValue,
  valuesOffset,
  marks,
} from './utils';

const FilterLabRange = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([0, 3]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const minLab = value[0];
  const maxLab = value[1];

  const rangeOfLabs = arrayOfLabs.slice(minLab, valuesOffset[maxLab]);

  const handleChangeLabDone = useDebounce(() => {
    router.push({
      pathname,
      query: {
        ...query,
        labs: rangeOfLabs.join(','),
      },
    });
  }, 300);

  useEffect(() => {
    setValue([0, 3]);

    if (params.labs) {
      const minimumLabParams = decodeURIComponent(params.labs).split(',')[0];
      const maximumLabParams = decodeURIComponent(params.labs).split(',').slice(-1)[0];

      setValue([
        parseInt(labelsValue[minimumLabParams], 10),
        parseInt(labelsValue[maximumLabParams], 10)
      ]);
    }
  }, [params.labs]);


  return (
    <>
      <div className={classes.filterLabRange}>
        <b>Lab</b>
        <Slider
          classes={{
            root: classes.root,
            markLabel: classes.markLabel,
          }}
          step={null}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleChangeLabDone}
          marks={marks}
          min={0}
          max={3}
        />
      </div>
    </>
  )
}
export default withStyles(styles)(FilterLabRange);
