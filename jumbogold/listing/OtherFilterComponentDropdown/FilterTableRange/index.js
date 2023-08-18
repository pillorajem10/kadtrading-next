import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Slider,
  TextField,
  Typography,
  useMediaQuery
 } from '@material-ui/core';

// components
import MustBeProvidedSnackBar from './components/MustBeProvidedSnackBar';
import MinMustBeSmallerSnackBar from './components/MinimumMustBeSmallerSnackbar';

// useDebounce
import { useDebounce } from 'utils/methods' ;

// styling
import styles from './style';

// redux
import { useSelector } from 'react-redux';

const FilterTableRange = ({ classes }) => {
  const lowScreen = useMediaQuery("(max-width: 1108px)");

  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([45.0, 86.0]);
  const [valueTextField, setValueTextField] = useState(undefined);
  const [minimum, setMinimum] = useState(45.0);
  const [maximum, setMaximum] = useState(86.0);
  const [openSnackBarForMustProvided, setOpenSnackBarForMustProvided] = useState(false);
  const [openSnackBarForMinMustSmaller, setOpenSnackBarForMinMustSmaller] = useState(false);

  const handleChangeTableRangeDone = useDebounce(() => {

    router.push({
      pathname,
      query: {
        ...query,
        minimumTable: value[0],
        maximumTable: value[1],
      },
    });
  }, 300);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBarForMustProvided(false);
    setOpenSnackBarForMinMustSmaller(false);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleChangeMin = (event) => {
    event.preventDefault();
    if (minimum === '' || maximum === '') {
      setOpenSnackBarForMustProvided(true)
    } else if (parseFloat(maximum) < parseFloat(minimum)) {
      setOpenSnackBarForMinMustSmaller(true)
    } else {
      setValueTextField([parseFloat(minimum), parseFloat(maximum)]);
    }
  };

  useEffect(() => {
    setValue([45.0, 86.0]);
    setMinimum(45.0);
    setMaximum(86.0);

    if (params.minimumTable || params.maximumTable) {
      setValue([parseFloat(params.minimumTable), parseFloat(params.maximumTable)]);
      setMinimum(parseFloat(params.minimumTable));
      setMaximum(parseFloat(params.maximumTable));
    }

  }, [
    params.minimumTable,
    params.maximumTable,
  ]);

  useEffect(() => {
    setMinimum(value[0]);
    setMaximum(value[1]);
  }, [value]);

  useEffect(() => {
    if(valueTextField) {
      router.push({
        pathname,
        query: {
          ...query,
          minimumTable: valueTextField[0],
          maximumTable: valueTextField[1],
        },
      });
    }
  }, [valueTextField]);

  return (
    <>
      <div className={classes.filterTableRange}>
        <b>Table %</b>
        { lowScreen ? (
          <form className={classes.tableForm1} onSubmit={handleChangeMin}>
            <div className={classes.tableFields1}>
              <TextField
                type="number"
                label="Min. Table %"
                onChange={(e) => setMinimum(e.target.value)}
                onWheel={(e) => e.target.blur()}
                variant="outlined"
                size="small"
                inputProps={{
                  step: "0.1",
                }}
                value={minimum}
               />
            </div>
            <div className={classes.tableFields1}>
              <TextField
               type="number"
               label="Max. Table %"
               onChange={(e) => setMaximum(e.target.value)}
               onWheel={(e) => e.target.blur()}
               variant="outlined"
               size="small"
               inputProps={{
                 step: "0.1",
               }}
               value={maximum}
              />
            </div>
            <button type="submit" hidden/>
          </form>
        ) : (
          <form className={classes.tableForm} onSubmit={handleChangeMin}>
            <div className={classes.tableFields}>
              <TextField
                type="number"
                label="Min. Table %"
                onChange={(e) => setMinimum(e.target.value)}
                onWheel={(e) => e.target.blur()}
                variant="outlined"
                size="small"
                inputProps={{
                  step: "0.1",
                }}
                value={minimum}
               />
            </div>
            <div className={classes.tableFields}>
              <TextField
               type="number"
               label="Max. Table %"
               onChange={(e) => setMaximum(e.target.value)}
               onWheel={(e) => e.target.blur()}
               variant="outlined"
               size="small"
               inputProps={{
                 step: "0.1",
               }}
               value={maximum}
              />
            </div>
            <button type="submit" hidden/>
          </form>
        )}
        <Slider
          value={value}
          min={45.0}
          max={86.0}
          step={.1}
          onChange={handleChange}
          onChangeCommitted={handleChangeTableRangeDone}
        />
        <MustBeProvidedSnackBar
          openSnackBar={openSnackBarForMustProvided}
          closeSnackBar={handleClose}
        />
        <MinMustBeSmallerSnackBar
          openSnackBar={openSnackBarForMinMustSmaller}
          closeSnackBar={handleClose}
        />
      </div>
    </>
  )
}
export default withStyles(styles)(FilterTableRange);
