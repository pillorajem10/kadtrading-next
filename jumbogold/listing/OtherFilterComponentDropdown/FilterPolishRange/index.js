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

const FilterPolishRange = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 3]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minPolish = value[0];
  const maxPolish = value[1];

  const handleChangePolishRangeDone = useDebounce(() => {
    router.push({
      pathname,
      query: {
        ...query,
        minimumPolish: valuesLabel[minPolish],
        maximumPolish: valuesLabel[maxPolish],
      },
    });
  }, 300);

  useEffect(() => {
    setValue([1, 3]);

    if (params.minimumPolish || params.maximumPolish) {
      setValue([
        parseInt(labelValues[params.minimumPolish], 10),
        parseInt(labelValues[params.maximumPolish], 10)
      ]);
    }

  }, [
    params.minimumPolish,
    params.maximumPolish,
  ]);

  return (
    <>
      <div className={classes.filterPolishRange}>
        <b>Polish</b>
        <Slider
          classes={{
            root: classes.root,
            markLabel: classes.markLabel,
          }}
          step={null}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleChangePolishRangeDone}
          marks={marks}
          min={1}
          max={3}
        />
      </div>
    </>
  )
}
export default withStyles(styles)(FilterPolishRange);
