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

const FilterColorRange = ({ classes, gatherFilterValues, clearFilters }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([1, 10]);

  useEffect(() => {
    if (params.minimumColor && params.maximumColor) {
      setValue([
        parseInt(labelValues[params.minimumColor], 10),
        parseInt(labelValues[params.maximumColor], 10)
      ]);
    } else {
      setValue([1, 10]);
    }
  }, [params.minimumColor, params.maximumColor]);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setValue([1, 10]);
    }
  }, [clearFilters]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minColor = value[0];
  const maxColor = value[1];

  const handleChangeColorRangeDone = useDebounce(() => {
    /*
    router.push({
      pathname,
      query: {
        ...query,
        minimumColor: valuesLabel[minColor],
        maximumColor: valuesLabel[maxColor],
      },
    });
    */
    const values = {
      minimumColor: valuesLabel[minColor],
      maximumColor: valuesLabel[maxColor],
    }
    gatherFilterValues(values);
  }, 300);

  // const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumColor !== null && filter.minimumColor !== null}
      disabled={filter.maximumColor === null && filter.minimumColor === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Color</Typography>
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
          max={10}
          onChange={handleChange}
          onChangeCommitted={handleChangeColorRangeDone}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterColorRange);
