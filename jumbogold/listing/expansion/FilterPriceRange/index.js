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

const FilterPriceRange = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [priceRange, setPriceRange] = useState([0, 0]);

  useEffect(() => {
    if (params.minPrice && params.maxPrice) {
      setPriceRange([parseFloat(params.minPrice), parseFloat(params.maxPrice)]);
    } else {
      setPriceRange([0, 0]);
    }
  }, [params.minPrice, params.maxPrice]);

  const handleChangePriceRange = (event, value) => {
    setPriceRange([value[0], value[1]]);
  };

  const handleChangePriceRangeDone = (event, value) => {
    router.push({
      pathname,
      query: {
        ...query,
        minPrice: value[0],
        maxPrice: value[1],
      },
    });
  };

  const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maxPrice !== null && filter.minPrice !== null}
      disabled={filter.maxPrice === null && filter.minPrice === null}
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
          Price: ${priceRange[0] || filter.minPrice} - ${priceRange[1] || filter.maxPrice}
        </Typography>

        <Slider
          classes={{
            root: classes.sliderRoot,
            rail: classes.rail,
            track: classes.track,
            thumb: classes.thumb,
            valueLabel: classes.valueLabel,
          }}
          min={filter.minPrice}
          max={filter.maxPrice}
          onChange={handleChangePriceRange}
          onChangeCommitted={handleChangePriceRangeDone}
          value={[priceRange[0] || filter.minPrice, priceRange[1] || filter.maxPrice]}
          valueLabelFormat={handleValueFormat}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterPriceRange);
