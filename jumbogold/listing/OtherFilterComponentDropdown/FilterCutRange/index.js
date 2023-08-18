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

const FilterCutRange = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 3]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minCut = value[0];
  const maxCut = value[1];

  const handleChangeCutRangeDone = useDebounce(() => {
    router.push({
      pathname,
      query: {
        ...query,
        minimumCut: valuesLabel[minCut],
        maximumCut: valuesLabel[maxCut],
      },
    });
  }, 300);

  useEffect(() => {
    setValue([1, 3]);

    if (params.minimumCut || params.maximumCut) {
      setValue([
        parseInt(labelValues[params.minimumCut], 10),
        parseInt(labelValues[params.maximumCut], 10)
      ]);
    }

  }, [
    params.minimumCut,
    params.maximumCut,
  ]);

  return (
    <>
      <div className={classes.filterCutRange}>
        <b>Cut</b>
        <Slider
          classes={{
            root: classes.root,
            markLabel: classes.markLabel,
          }}
          step={null}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleChangeCutRangeDone}
          marks={marks}
          min={1}
          max={3}
        />
      </div>
    </>
  )
}
export default withStyles(styles)(FilterCutRange);
