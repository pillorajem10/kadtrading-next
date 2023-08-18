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

const FilterCaratRange = ({ classes }) => {
  const lowScreen = useMediaQuery("(max-width: 1108px)");

  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([0.00, 16.62]);
  const [valueTextField, setValueTextField] = useState(undefined);
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(16.62);
  const [openSnackBarForMustProvided, setOpenSnackBarForMustProvided] = useState(false);
  const [openSnackBarForMinMustSmaller, setOpenSnackBarForMinMustSmaller] = useState(false);

  const handleChangeCaratRangeDone = useDebounce(() => {

    router.push({
      pathname,
      query: {
        ...query,
        minimumCarat: value[0],
        maximumCarat: value[1],
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
    setValue([0, 16.62]);
    setMinimum(0);
    setMaximum(16.62);

    if (params.minimumCarat || params.maximumCarat) {
      setValue([parseFloat(params.minimumCarat), parseFloat(params.maximumCarat)]);
      setMinimum(parseFloat(params.minimumCarat));
      setMaximum(parseFloat(params.maximumCarat));
    }

  }, [
    params.minimumCarat,
    params.maximumCarat,
  ]);

  useEffect(() => {
    setMinimum(value[0].toPrecision());
    setMaximum(value[1].toPrecision());
  }, [value]);

  useEffect(() => {
    if(valueTextField) {
      router.push({
        pathname,
        query: {
          ...query,
          minimumCarat: valueTextField[0],
          maximumCarat: valueTextField[1],
        },
      });
    }
  }, [valueTextField]);

  return (
    <>
      <div className={classes.filterCaratRange}>
        <b>Carat</b>
        { lowScreen ? (
          <form className={classes.caratForm1} onSubmit={handleChangeMin}>
            <div className={classes.caratFields1}>
              <TextField
                type="number"
                label="Min. Carat"
                onChange={(e) => setMinimum(e.target.value)}
                onWheel={(e) => e.target.blur()}
                variant="outlined"
                size="small"
                inputProps={{
                  step: "0.01",
                }}
                value={minimum}
               />
            </div>
            <div className={classes.caratFields1}>
              <TextField
                type="number"
                label="Max. Carat"
                onChange={(e) => setMaximum(e.target.value)}
                onWheel={(e) => e.target.blur()}
                variant="outlined"
                size="small"
                inputProps={{
                  step: "0.01",
                }}
                value={maximum}
              />
            </div>
            <button type="submit" hidden/>
          </form>
        ) : (
          <form className={classes.caratForm} onSubmit={handleChangeMin}>
            <div className={classes.caratFields}>
              <TextField
                type="number"
                label="Min. Carat"
                onChange={(e) => setMinimum(e.target.value)}
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
               onChange={(e) => setMaximum(e.target.value)}
               onWheel={(e) => e.target.blur()}
               variant="outlined"
               size="small"
               inputProps={{
                 step: "0.01",
               }}
               value={maximum}
              />
            </div>
            <button type="submit" hidden/>
          </form>
        )}
        <Slider
          value={value}
          min={0.00}
          max={16.62}
          step={.01}
          onChange={handleChange}
          onChangeCommitted={handleChangeCaratRangeDone}
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
export default withStyles(styles)(FilterCaratRange);
