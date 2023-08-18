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

const FilterPolishRange = ({ classes, gatherFilterValues, clearFilters }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 3]);

  useEffect(() => {
    if (params.minimumPolish && params.maximumPolish) {
      setValue([
        parseInt(labelValues[params.minimumPolish], 10),
        parseInt(labelValues[params.maximumPolish], 10)
      ]);
    } else {
      setValue([1, 3]);
    }
  }, [params.minimumPolish, params.maximumPolish]);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setValue([1, 3]);
    }
  }, [clearFilters])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minPolish = value[0];
  const maxPolish = value[1];

  const handleChangePolishRangeDone = useDebounce(() => {
    /*
    router.push({
      pathname,
      query: {
        ...query,
        minimumPolish: valuesLabel[minPolish],
        maximumPolish: valuesLabel[maxPolish],
      },
    });
    */
    const values = {
      minimumPolish: valuesLabel[minPolish],
      maximumPolish: valuesLabel[maxPolish],
    }
    gatherFilterValues(values);
  }, 300);

  // const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumPolish !== null && filter.minimumPolish !== null}
      disabled={filter.maximumPolish === null && filter.minimumPolish === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Polish</Typography>
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
          onChangeCommitted={handleChangePolishRangeDone}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterPolishRange);
