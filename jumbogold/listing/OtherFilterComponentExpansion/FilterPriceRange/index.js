import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Slider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

// useDebounce
import { useDebounce } from 'utils/methods' ;

// components
import MustBeProvidedSnackBar from './components/MustBeProvidedSnackBar';
import MinMustBeSmallerSnackBar from './components/MinimumMustBeSmallerSnackbar';

const FilterPriceRange = ({ classes, gatherFilterValues, clearFilters, triggerError }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  // const router = useRouter();
  // const { query, pathname } = router;

  const [value, setValue] = useState([200, 2000000]);
  const [minimum, setMinimum] = useState('200');
  const [maximum, setMaximum] = useState('2000000');
  const [openSnackBarForMustProvided, setOpenSnackBarForMustProvided] = useState(false);
  const [openSnackBarForMinMustSmaller, setOpenSnackBarForMinMustSmaller] = useState(false);

  const minimumPrice = value[0];
  const maximumPrice = value[1];

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBarForMustProvided(false);
    setOpenSnackBarForMinMustSmaller(false);
  };


  useEffect(() => {
    if (params.minimumPrice && params.maximumPrice) {
      setValue([parseFloat(params.minimumPrice), parseFloat(params.maximumPrice)]);
      setMinimum(parseFloat(params.minimumPrice));
      setMaximum(parseFloat(params.maximumPrice));
    } else {
      setValue([200, 2000000]);
      setMinimum('200');
      setMaximum('2000000');
    }
  }, [params.minimumPrice, params.maximumPrice]);

  useEffect(() => {
    if (triggerError === true) setOpenSnackBarForMinMustSmaller(true);
  }, [triggerError]);

  useEffect(() => {
    if (typeof(minimum) === 'number' || typeof(maximum) === 'number') {
      if (isNaN(minimum) || isNaN(maximum)) {
        setOpenSnackBarForMustProvided(true)
      } else {
        const values = {
          minimumPrice: parseFloat(minimum),
          maximumPrice: parseFloat(maximum)
        }
        gatherFilterValues(values);
      }
    }

  }, [minimum, maximum]);



  useEffect(() => {
    if (clearFilters !== undefined) {
      setValue([200, 2000000]);
      setMinimum('200');
      setMaximum('2000000');
    }
  }, [clearFilters]);

  /*
  const handleChangeMin = (event) => {
    event.preventDefault();
    if (minimum === '' || maximum === '') {
      setOpenSnackBarForMustProvided(true)
    } else if (parseFloat(maximum) < parseFloat(minimum)) {
      setOpenSnackBarForMinMustSmaller(true)
    } else {
      setValueTextField([parseFloat(minimum), parseFloat(maximum)]);
      setValue([parseFloat(minimum), parseFloat(maximum)]);
    }
  };
  */

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMinimum(newValue[0].toPrecision());
    setMaximum(newValue[1].toPrecision());
  };

  const handleChangePriceRangeDone = useDebounce(() => {
    /*
    router.push({
      pathname,
      query: {
        ...query,
        minimumPrice,
        maximumPrice,
      },
    });
    */
    const values = {
      minimumPrice,
      maximumPrice
    }
    gatherFilterValues(values);
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
          <form className={classes.priceForm}>
            <div className={classes.priceFields}>
              <TextField
                type="number"
                label="Min. Price"
                onChange={(e) => setMinimum(parseFloat(e.target.value))}
                onWheel={(e) => e.target.blur()}
                variant="outlined"
                size="small"
                inputProps={{
                  step: "0.01",
                }}
                value={minimum}
               />
            </div>
            <div className={classes.priceFields}>
              <TextField
               type="number"
               label="Max. Price"
               onChange={(e) => setMaximum(parseFloat(e.target.value))}
               onWheel={(e) => e.target.blur()}
               variant="outlined"
               size="small"
               inputProps={{
                 step: "0.01",
               }}
               value={maximum}
              />
            </div>
          </form>
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
          max={2000000}
          step={.01}
          onChange={handleChange}
          onChangeCommitted={handleChangePriceRangeDone}
        />
      </AccordionDetails>
      <MustBeProvidedSnackBar
        openSnackBar={openSnackBarForMustProvided}
        closeSnackBar={handleClose}
      />
      <MinMustBeSmallerSnackBar
        openSnackBar={openSnackBarForMinMustSmaller}
        closeSnackBar={handleClose}
      />
    </Accordion>

  );
};

export default withStyles(styles)(FilterPriceRange);
