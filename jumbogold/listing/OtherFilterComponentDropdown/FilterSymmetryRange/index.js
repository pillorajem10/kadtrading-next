import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Slider  } from '@material-ui/core';

// useDebounce
import { useDebounce } from 'utils/methods' ;

// styling
import styles from './style';

// utils
import { valuesLabel, marks, labelValues } from './utils';

// redux
import { useSelector } from 'react-redux';

const FilterSymmetryRange = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 3]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minSymmetry = value[0];
  const maxSymmetry = value[1];

  const handleChangeSymmetryRangeDone = useDebounce(() => {
    router.push({
      pathname,
      query: {
        ...query,
        minimumSymmetry: valuesLabel[minSymmetry],
        maximumSymmetry: valuesLabel[maxSymmetry],
      },
    });
  }, 300);

  useEffect(() => {
    setValue([1, 3]);

    if (params.minimumSymmetry || params.maximumSymmetry) {
      setValue([
        parseInt(labelValues[params.minimumSymmetry], 10),
        parseInt(labelValues[params.maximumSymmetry], 10)
      ]);
    }

  }, [
    params.minimumSymmetry,
    params.maximumSymmetry,
  ]);

  return (
    <>
      <div className={classes.filterSymmetryRange}>
        <b>Symmetry</b>
        <Slider
          classes={{
            root: classes.root,
            markLabel: classes.markLabel,
          }}
          step={null}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleChangeSymmetryRangeDone}
          marks={marks}
          min={1}
          max={3}
        />
      </div>
    </>
  )
}
export default withStyles(styles)(FilterSymmetryRange);
