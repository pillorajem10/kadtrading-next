import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Slider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// utils
import { valuesLabel, marks, labelValues } from './utils';

// styling
import styles from './style';

// useDebounce
import { useDebounce } from 'utils/methods' ;

const FilterSymmetryRange = ({ classes, gatherFilterValues, clearFilters }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 3]);

  useEffect(() => {
    if (params.minimumSymmetry && params.maximumSymmetry) {
      setValue([
        parseInt(labelValues[params.minimumSymmetry], 10),
        parseInt(labelValues[params.maximumSymmetry], 10)
      ]);
    } else {
      setValue([1, 3]);
    }
  }, [params.minimumSymmetry, params.maximumSymmetry]);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setValue([1, 3]);
    }
  }, [clearFilters]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minSymmetry = value[0];
  const maxSymmetry = value[1];

  const handleChangeSymmetryRangeDone = useDebounce(() => {
    /*
    router.push({
      pathname,
      query: {
        ...query,
        minimumSymmetry: valuesLabel[minSymmetry],
        maximumSymmetry: valuesLabel[maxSymmetry],
      },
    });
    */
    const values = {
      minimumSymmetry: valuesLabel[minSymmetry],
      maximumSymmetry: valuesLabel[maxSymmetry],
    }
    gatherFilterValues(values);
  }, 300);

  // const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumSymmetry !== null && filter.minimumSymmetry !== null}
      disabled={filter.maximumSymmetry === null && filter.minimumSymmetry === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Symmetry</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <Slider
          classes={{
            root: classes.root,
            rail: classes.rail,
            track: classes.track,
            thumb: classes.thumb,
            markLabel: classes.markLabel,
          }}
          value={value}
          step={null}
          marks={marks}
          min={1}
          max={3}
          onChange={handleChange}
          onChangeCommitted={handleChangeSymmetryRangeDone}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterSymmetryRange);
