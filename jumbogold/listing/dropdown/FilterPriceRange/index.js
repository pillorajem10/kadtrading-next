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

// components
import EmptyFilter from '../../common/EmptyFilter';

// styling
import styles from './style';

const FilterPriceRange = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [priceRange, setPriceRange] = useState([0, 0]);
  const [showPriceSlider, setShowPriceSlider] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    if (params.minPrice && params.maxPrice) {
      setPriceRange([parseFloat(params.minPrice), parseFloat(params.maxPrice)]);
    } else {
      setPriceRange([0, 0]);
    }
  }, [params.minPrice, params.maxPrice]);

  const handleTogglePriceSlider = () =>
    setShowPriceSlider((currentValue) => {
      return !currentValue;
    });

  const handleClosePriceSlider = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowPriceSlider(false);
  };

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
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterPriceRange}
        onClick={handleTogglePriceSlider}
        style={{
          border:
            showPriceSlider || priceRange[0] !== 0 || priceRange[1] !== 0
              ? '1px solid #000'
              : '1px solid #e4e4e4',
        }}
      >
        <Typography>
          {priceRange[0] === 0 && priceRange[1] === 0
            ? 'Price'
            : `$${priceRange[0]} - $${priceRange[1]}`}
        </Typography>

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showPriceSlider ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showPriceSlider}
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
              <ClickAwayListener onClickAway={handleClosePriceSlider}>
                <div
                  className={classes.priceSliderWrapper}
                  style={{
                    padding:
                      filter.minPrice === null && filter.maxPrice === null ? '9px 0' : '6px 12px',
                  }}
                >
                  {filter.minPrice === null && filter.maxPrice === null ? (
                    <EmptyFilter />
                  ) : (
                    <>
                      <Typography className={classes.priceRangeValue}>
                        Price: ${priceRange[0] || filter.minPrice} - $
                        {priceRange[1] || filter.maxPrice}
                      </Typography>

                      <Slider
                        classes={{
                          root: classes.root,
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
                    </>
                  )}
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(FilterPriceRange);
