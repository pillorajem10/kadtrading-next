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

const FilterColorRange = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minColor = value[0];
  const maxColor = value[1];

  const handleChangeColorRangeDone = useDebounce(() => {
    router.push({
      pathname,
      query: {
        ...query,
        minimumColor: valuesLabel[minColor],
        maximumColor: valuesLabel[maxColor],
      },
    });
  }, 300);

  useEffect(() => {
    setValue([1, 10]);

    if (params.minimumColor || params.maximumColor) {
      setValue([
        parseInt(labelValues[params.minimumColor], 10),
        parseInt(labelValues[params.maximumColor], 10)
      ]);
    }

  }, [
    params.minimumColor,
    params.maximumColor,
  ]);

  return (
    <>
      <div className={classes.filterColorRange}>
        <b>Color</b>
        <Slider
          classes={{
            root: classes.root,
            markLabel: classes.markLabel,
          }}
          step={null}
          value={value}
          onChange={handleChange}
          marks={marks}
          onChangeCommitted={handleChangeColorRangeDone}
          min={1}
          max={10}
        />
      </div>
    </>
  )
}
export default withStyles(styles)(FilterColorRange);
