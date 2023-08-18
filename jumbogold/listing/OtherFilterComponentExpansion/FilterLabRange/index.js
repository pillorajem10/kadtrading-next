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
import {
  arrayOfLabs,
  labelsValue,
  valuesOffset,
  marks,
} from './utils';

// styling
import styles from './style';

// useDebounce
import { useDebounce } from 'utils/methods' ;

const FilterLabsRange = ({ classes, gatherFilterValues, clearFilters }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([0, 3]);

  useEffect(() => {
    if (params.labs) {
      const minimumLabParams = decodeURIComponent(params.labs).split(',')[0];
      const maximumLabParams = decodeURIComponent(params.labs).split(',').slice(-1)[0];

      setValue([
        parseInt(labelsValue[minimumLabParams], 10),
        parseInt(labelsValue[maximumLabParams], 10)
      ]);
    } else {
      setValue([0, 3]);
    }
  }, [params.labs]);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setValue([0, 3]);
    }
  }, [clearFilters]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minLab = value[0];
  const maxLab = value[1];

  const rangeOfLabs = arrayOfLabs.slice(minLab, valuesOffset[maxLab]);

  const handleChangeLabDone = useDebounce(() => {

    /*
    router.push({
      pathname,
      query: {
        ...query,
        labs: rangeOfLabs.join(','),
      },
    });
    */

    const values = {
      labs: rangeOfLabs.join(','),
    }
    gatherFilterValues(values);
  }, 300);

  // const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumLabs !== null && filter.minimumLabs !== null}
      disabled={filter.maximumLabs === null && filter.minimumLabs === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Labs</Typography>
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
          min={0}
          max={3}
          onChange={handleChange}
          onChangeCommitted={handleChangeLabDone}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterLabsRange);
