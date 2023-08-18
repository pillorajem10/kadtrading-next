import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Typography,
  Slider,
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
  const [showDeliveryTimeSlider, setShowDeliveryTimeSlider] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    if (params.minEddWeeks && params.maxEddWeeks) {
      setDeliveryTimeRange([parseInt(params.minEddWeeks, 10), parseInt(params.maxEddWeeks, 10)]);
    } else {
      setDeliveryTimeRange([0, 0]);
    }
  }, [params.minEddWeeks, params.maxEddWeeks]);

  const handleToggleDeliveryTimeSlider = () =>
    setShowDeliveryTimeSlider((currentValue) => {
      return !currentValue;
    });

  const handleCloseDeliveryTimeSlider = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowDeliveryTimeSlider(false);
  };

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

    if (value === 10) {
      valueFormat = '9+ Week';
    }

    if (value === null) {
      valueFormat = '';
    }

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

  const handleRenderSelectedDeliveryDate = () => {
    let renderer = `${deliveryTimeRange[0] === 10 ? '9+' : deliveryTimeRange[0]} - ${
      deliveryTimeRange[1] === 10 ? '9+' : deliveryTimeRange[1]
    } Weeks`;

    if (deliveryTimeRange[0] === 0 && deliveryTimeRange[1] === 0) renderer = 'Estimated Delivery';

    if (deliveryTimeRange[0] === 10 && deliveryTimeRange[1] === 10) renderer = '9+ Weeks';

    return renderer;
  };

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterDeliveryTime}
        onClick={handleToggleDeliveryTimeSlider}
        style={{
          border:
            showDeliveryTimeSlider || deliveryTimeRange[0] !== 0 || deliveryTimeRange[1] !== 0
              ? '1px solid #000'
              : '1px solid #e4e4e4',
        }}
      >
        <Typography>{handleRenderSelectedDeliveryDate()}</Typography>

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showDeliveryTimeSlider ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showDeliveryTimeSlider}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper id="menu-list-grow" className={classes.menuWrapper}>
              <ClickAwayListener onClickAway={handleCloseDeliveryTimeSlider}>
                <div className={classes.deliveryTimeSliderWrapper}>
                  <Typography className={classes.deliveryTimeRangeValue}>
                    {handleRenderDeliveryDate()}
                  </Typography>

                  <Slider
                    classes={{
                      root: classes.root,
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
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(FilterDeliveryTime);
