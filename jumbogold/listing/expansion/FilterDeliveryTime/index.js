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

const FilterDeliveryTime = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [deliveryTimeRange, setDeliveryTimeRange] = useState([0, 0]);

  useEffect(() => {
    if (params.minEddWeeks && params.maxEddWeeks) {
      setDeliveryTimeRange([parseInt(params.minEddWeeks, 10), parseInt(params.maxEddWeeks, 10)]);
    } else {
      setDeliveryTimeRange([0, 0]);
    }
  }, [params.minEddWeeks, params.maxEddWeeks]);

  const handleChangeDeliveryTimeRange = (event, value) => {
    setDeliveryTimeRange([value[0], value[1]]);
  };

  const handleChangeDeliveryTimeRangeDone = (event, value) => {
    router.push({
      pathname,
      query: {
        ...query,
        minEddWeeks: value[0],
        maxEddWeeks: value[1],
      },
    });
  };

  const handleValueFormat = (value) => {
    let valueFormat = `${value} Week`;

    if (value === 10) valueFormat = '9+ Week';

    if (value === null) valueFormat = '';

    return valueFormat;
  };

  const handleRenderDeliveryDate = () => {
    let renderer = `Weeks: ${deliveryTimeRange[0] === 10 ? '9+' : deliveryTimeRange[0]} - ${
      deliveryTimeRange[1] === 10 ? '9+' : deliveryTimeRange[1]
    }`;

    if (deliveryTimeRange[0] === 0 && deliveryTimeRange[1] === 0) renderer = 'Weeks: 0 - 9+';

    if (deliveryTimeRange[0] === 10 && deliveryTimeRange[1] === 10) renderer = 'Weeks: 9+';

    return renderer;
  };

  return (
    <Accordion className={classes.layout} defaultExpanded>
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Estimated Delivery</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <Typography className={classes.deliveryTimeRangeValue}>
          {handleRenderDeliveryDate()}
        </Typography>

        <Slider
          classes={{
            root: classes.sliderRoot,
            rail: classes.rail,
            track: classes.track,
            thumb: classes.thumb,
            valueLabel: classes.valueLabel,
          }}
          min={0}
          max={10}
          onChange={handleChangeDeliveryTimeRange}
          onChangeCommitted={handleChangeDeliveryTimeRangeDone}
          value={[deliveryTimeRange[0] || 0, deliveryTimeRange[1] || 10]}
          valueLabelFormat={handleValueFormat}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterDeliveryTime);
