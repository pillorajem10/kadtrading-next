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

const FilterCaratRange = ({ classes, gatherFilterValues, clearFilters, triggerError }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  // const router = useRouter();
  // const { query, pathname } = router;

  const [value, setValue] = useState([0.00, 16.62]);
  const [minimum, setMinimum] = useState('0');
  const [maximum, setMaximum] = useState('16.62');
  const [openSnackBarForMustProvided, setOpenSnackBarForMustProvided] = useState(false);
  const [openSnackBarForMinMustSmaller, setOpenSnackBarForMinMustSmaller] = useState(false);

  const minimumCarat = value[0];
  const maximumCarat = value[1];

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBarForMustProvided(false);
    setOpenSnackBarForMinMustSmaller(false);
  };


  useEffect(() => {
    if (params.minimumCarat && params.maximumCarat) {
      setValue([parseFloat(params.minimumCarat), parseFloat(params.maximumCarat)]);
      setMinimum(parseFloat(params.minimumCarat));
      setMaximum(parseFloat(params.maximumCarat));
    } else {
      setValue([0.00, 16.62]);
      setMinimum('0');
      setMaximum('16.62');
    }
  }, [params.minimumCarat, params.maximumCarat]);

  useEffect(() => {
    if (triggerError === true) setOpenSnackBarForMinMustSmaller(true);
  }, [triggerError]);

  useEffect(() => {
    if (typeof(minimum) === 'number' || typeof(maximum) === 'number') {
      if (isNaN(minimum) || isNaN(maximum)) {
        setOpenSnackBarForMustProvided(true)
      } else {
        const values = {
          minimumCarat: parseFloat(minimum),
          maximumCarat: parseFloat(maximum)
        }
        gatherFilterValues(values);
      }
    }

  }, [minimum, maximum]);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setValue([0.00, 16.62]);
      setMinimum('0');
      setMaximum('16.62');
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

  const handleChangeCaratRangeDone = useDebounce(() => {
    /*
    router.push({
      pathname,
      query: {
        ...query,
        minimumCarat,
        maximumCarat,
      },
    });
    */
    const values = {
      minimumCarat,
      maximumCarat
    }
    gatherFilterValues(values);
  }, 300);

  // const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumCarat !== null && filter.minimumCarat !== null}
      disabled={filter.maximumCarat === null && filter.minimumCarat === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Carat</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <Typography className={classes.priceRangeValue}>
            <div className={classes.caratFields}>
              <TextField
                type="number"
                label="Min. Carat"
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
            <div className={classes.caratFields}>
              <TextField
               type="number"
               label="Max. Carat"
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
        </Typography>

        <Slider
          classes={{
            root: classes.root,
            rail: classes.rail,
            track: classes.track,
            thumb: classes.thumb,
          }}
          value={value}
          min={0.00}
          max={16.62}
          step={.01}
          onChange={handleChange}
          onChangeCommitted={handleChangeCaratRangeDone}
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

export default withStyles(styles)(FilterCaratRange);
