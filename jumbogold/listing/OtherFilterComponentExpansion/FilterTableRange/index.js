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

const FilterTableRange = ({ classes, gatherFilterValues, clearFilters, triggerError }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  // const router = useRouter();
  // const { query, pathname } = router;

  const [value, setValue] = useState([45, 86]);
  const [minimum, setMinimum] = useState('45');
  const [maximum, setMaximum] = useState('86');
  const [openSnackBarForMustProvided, setOpenSnackBarForMustProvided] = useState(false);
  const [openSnackBarForMinMustSmaller, setOpenSnackBarForMinMustSmaller] = useState(false);

  const minimumTable = value[0];
  const maximumTable = value[1];

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBarForMustProvided(false);
    setOpenSnackBarForMinMustSmaller(false);
  };


  useEffect(() => {
    if (params.minimumTable && params.maximumTable) {
      setValue([parseFloat(params.minimumTable), parseFloat(params.maximumTable)]);
      setMinimum(parseFloat(params.minimumTable));
      setMaximum(parseFloat(params.maximumTable));
    } else {
      setValue([45, 86]);
      setMinimum('45');
      setMaximum('86');
    }
  }, [params.minimumTable, params.maximumTable]);

  useEffect(() => {
    if (triggerError === true) setOpenSnackBarForMinMustSmaller(true);
  }, [triggerError]);

  useEffect(() => {
    if (typeof(minimum) === 'number' || typeof(maximum) === 'number') {
      if (isNaN(minimum) || isNaN(maximum)) {
        setOpenSnackBarForMustProvided(true)
      } else {
        const values = {
          minimumTable: parseFloat(minimum),
          maximumTable: parseFloat(maximum)
        }
        gatherFilterValues(values);
      }
    }

  }, [minimum, maximum]);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setValue([45, 86]);
      setMinimum('45');
      setMaximum('86');
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

  const handleChangeTableRangeDone = useDebounce(() => {
    /*
    router.push({
      pathname,
      query: {
        ...query,
        minimumTable,
        maximumTable,
      },
    });
    */
    const values = {
      minimumTable,
      maximumTable
    }
    gatherFilterValues(values);
  }, 300);

  // const handleValueFormat = (value) => (value === null ? '' : `$${value}`);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumTable !== null && filter.minimumTable !== null}
      disabled={filter.maximumTable === null && filter.minimumTable === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Table</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <Typography className={classes.priceRangeValue}>
            <div className={classes.tableFields}>
              <TextField
                type="number"
                label="Min. Table"
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
            <div className={classes.tableFields}>
              <TextField
               type="number"
               label="Max. Table"
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
          min={45}
          max={86}
          step={.01}
          onChange={handleChange}
          onChangeCommitted={handleChangeTableRangeDone}
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

export default withStyles(styles)(FilterTableRange);
