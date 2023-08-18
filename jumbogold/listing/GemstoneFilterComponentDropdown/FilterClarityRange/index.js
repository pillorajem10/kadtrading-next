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
import { valuesLabel, marks, labelValues } from './utils';

const FilterClarityRange = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 4]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minClarity = value[0];
  const maxClarity = value[1];

  const handleChangeClarityRangeDone = useDebounce(() => {
    router.push({
      pathname,
      query: {
        ...query,
        minimumClarity: valuesLabel[minClarity],
        maximumClarity: valuesLabel[maxClarity],
      },
    });
  }, 300);

  useEffect(() => {
    setValue([1, 4]);

    if (params.minimumClarity || params.maximumClarity) {
      setValue([
        parseInt(labelValues[params.minimumClarity], 10),
        parseInt(labelValues[params.maximumClarity], 10)
      ]);
    }

  }, [
    params.minimumClarity,
    params.maximumClarity,
  ]);

  return (
    <>
      <div className={classes.filterContainer}>
        <b>Clarity</b>
        <Slider
          classes={{
            root: classes.root,
            markLabel: classes.markLabel,
          }}
          step={null}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleChangeClarityRangeDone}
          marks={marks}
          min={1}
          max={4}
        />
      </div>
    </>
  )
}
export default withStyles(styles)(FilterClarityRange);
