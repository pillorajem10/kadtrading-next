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

// styling
import styles from './style';

// useDebounce
import { useDebounce } from 'utils/methods' ;

const FilterPriceRange = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([200, 500000]);

  useEffect(() => {
    if (params.minimumPrice && params.maximumPrice) {
      setValue([parseFloat(params.minimumPrice), parseFloat(params.maximumPrice)]);
    } else {
      setValue([200, 500000]);
    }
  }, [params.minimumPrice, params.maximumPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minimumPrice = value[0];
  const maximumPrice = value[1];

  const handleChangePriceRangeDone = useDebounce(() => {
    router.push({
      pathname,
      query: {
        ...query,
        minimumPrice,
        maximumPrice,
      },
    });
  }, 300);

  // const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumPrice !== null && filter.minimumPrice !== null}
      disabled={filter.maximumPrice === null && filter.minimumPrice === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Price</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <Typography className={classes.priceRangeValue}>
          Price: ${value[0] || filter.minimumPrice} - ${value[1] || filter.maximumPrice}
        </Typography>

        <Slider
          classes={{
            root: classes.root,
            rail: classes.rail,
            track: classes.track,
            thumb: classes.thumb,
          }}
          value={value}
          min={200}
          max={500000}
          onChange={handleChange}
          onChangeCommitted={handleChangePriceRangeDone}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterPriceRange);
