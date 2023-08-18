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

// useDebounce
import { useDebounce } from 'utils/methods' ;

// styling
import styles from './style';

const FilterPriceRange = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([200, 500000]);
  const [showPriceSlider, setShowPriceSlider] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    if (params.minimumPrice && params.maximumPrice) {
      setValue([parseFloat(params.minimumPrice), parseFloat(params.maximumPrice)]);
    } else {
      setValue([200, 500000]);
    }
  }, [params.minimumPrice, params.maximumPrice]);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const minPrice = value[0];
  const maxPrice = value[1];

  const handleChangePriceRangeDone = useDebounce(() => {
    router.push({
      pathname,
      query: {
        ...query,
        minimumPrice: minPrice,
        maximumPrice: maxPrice,
      },
    });
  }, 300);

  const handleValueFormat = (price) => (price === null ? '' : `$${price}`);

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
            showPriceSlider || params.minimumPrice && params.maximumPrice
              ? '1px solid #000'
              : '1px solid #e4e4e4',
        }}
      >
        <Typography>
          {!params.minimumPrice && !params.maximumPrice
            ? 'Price'
            : `$${value[0]} - $${value[1]}`}
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
                      params.minimumPrice === null && params.maximumPrice === null ? '9px 0' : '6px 12px',
                  }}
                >
                  {params.minimumPrice === null && params.maximumPrice === null ? (
                    <EmptyFilter />
                  ) : (
                    <>
                      <Typography className={classes.priceRangeValue}>
                        Price: ${value[0] || params.minimumPrice} - $
                        {value[1] || params.maximumPrice}
                      </Typography>

                      <Slider
                        classes={{
                          root: classes.root,
                          rail: classes.rail,
                          track: classes.track,
                          thumb: classes.thumb,
                          valueLabel: classes.valueLabel,
                        }}
                        min={200}
                        max={500000}
                        onChange={handleChange}
                        onChangeCommitted={handleChangePriceRangeDone}
                        value={value}
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
