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

const FilterCutRange = ({ classes, gatherFilterValues, clearFilters }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 3]);

  useEffect(() => {
    if (params.minimumCut && params.maximumCut) {
      setValue([
        parseInt(labelValues[params.minimumCut], 10),
        parseInt(labelValues[params.maximumCut], 10)
      ]);
    } else {
      setValue([1, 3]);
    }
  }, [params.minimumCut, params.maximumCut]);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setValue([1, 3]);
    }
  }, [clearFilters]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minCut = value[0];
  const maxCut = value[1];

  const handleChangeCutRangeDone = useDebounce(() => {
    /*
    router.push({
      pathname,
      query: {
        ...query,
        minimumCut: valuesLabel[minCut],
        maximumCut: valuesLabel[maxCut],
      },
    });
    */
    const values = {
      minimumCut: valuesLabel[minCut],
      maximumCut: valuesLabel[maxCut],
    }
    gatherFilterValues(values);
  }, 300);

  // const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumCut !== null && filter.minimumCut !== null}
      disabled={filter.maximumCut === null && filter.minimumCut === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Cut</Typography>
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
          onChangeCommitted={handleChangeCutRangeDone}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterCutRange);
