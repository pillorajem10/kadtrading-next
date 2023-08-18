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

const FilterPriceRange = ({ classes }) => {
  const lowScreen = useMediaQuery("(max-width: 1108px)");

  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [value, setValue] = useState([200, 2000000]);
  const [valueTextField, setValueTextField] = useState(undefined);
  const [minimum, setMinimum] = useState(200);
  const [maximum, setMaximum] = useState(2000000);
  const [openSnackBarForMustProvided, setOpenSnackBarForMustProvided] = useState(false);
  const [openSnackBarForMinMustSmaller, setOpenSnackBarForMinMustSmaller] = useState(false);

  const handleChangePriceRangeDone = useDebounce(() => {
    router.push({
      pathname,
      query: {
        ...query,
        minimumPrice: value[0],
        maximumPrice: value[1],
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
    setValue([200, 2000000]);
    setMinimum(200);
    setMaximum(2000000);

    if (params.minimumPrice || params.maximumPrice) {
      setValue([parseFloat(params.minimumPrice), parseFloat(params.maximumPrice)]);
      setMinimum(parseFloat(params.minimumPrice));
      setMaximum(parseFloat(params.maximumPrice));
    }

  }, [
    params.minimumPrice,
    params.maximumPrice,
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
          minimumPrice: valueTextField[0],
          maximumPrice: valueTextField[1],
        },
      });
    }
  }, [valueTextField]);

  return (
    <>
      <div className={classes.filterPriceRange}>
        <b>Price</b>
        { lowScreen ? (
          <form className={classes.priceForm1} onSubmit={handleChangeMin}>
            <div className={classes.priceFields1}>
              <TextField
                type="number"
                label="Min. Price"
                onChange={(e) => setMinimum(e.target.value)}
                variant="outlined"
                size="small"
                inputProps={{
                  step: "0.01",
                }}
                value={minimum}
               />
            </div>
            <div className={classes.priceFields1}>
              <TextField
               type="number"
               label="Max. Price"
               onChange={(e) => setMaximum(e.target.value)}
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
          <form className={classes.priceForm} onSubmit={handleChangeMin}>
            <div className={classes.priceFields}>
              <TextField
                type="number"
                label="Min. Price"
                onChange={(e) => setMinimum(e.target.value)}
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
               onChange={(e) => setMaximum(e.target.value)}
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
          min={200}
          max={2000000}
          step={0.01}
          onChange={handleChange}
          onChangeCommitted={handleChangePriceRangeDone}
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
export default withStyles(styles)(FilterPriceRange);
