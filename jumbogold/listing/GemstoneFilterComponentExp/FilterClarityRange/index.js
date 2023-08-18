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

const FilterClarityRange = ({ classes, gatherFilterValues, clearFilters }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 4]);

  useEffect(() => {
    if (params.minimumClarity && params.maximumClarity) {
      setValue([
        parseInt(labelValues[params.minimumClarity], 10),
        parseInt(labelValues[params.maximumClarity], 10)
      ]);
    } else {
      setValue([1, 4]);
    }
  }, [params.minimumClarity, params.maximumClarity]);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setValue([1, 4]);
    }
  }, [clearFilters]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minClarity = value[0];
  const maxClarity = value[1];

  const handleChangeClarityRangeDone = useDebounce(() => {
    /*
    router.push({
      pathname,
      query: {
        ...query,
        minimumClarity: valuesLabel[minClarity],
        maximumClarity: valuesLabel[maxClarity],
      },
    });
    */
    const values = {
      minimumClarity: valuesLabel[minClarity],
      maximumClarity: valuesLabel[maxClarity],
    }
    gatherFilterValues(values);
  }, 300);

  // const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumClarity !== null && filter.minimumClarity !== null}
      disabled={filter.maximumClarity === null && filter.minimumClarity === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Clarity</Typography>
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
          max={4}
          onChange={handleChange}
          onChangeCommitted={handleChangeClarityRangeDone}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterClarityRange);
