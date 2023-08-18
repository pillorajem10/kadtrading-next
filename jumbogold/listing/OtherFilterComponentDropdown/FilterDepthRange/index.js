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

const FilterDepthRange = ({ classes }) => {
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

  const handleChangeDepthRangeDone = useDebounce(() => {

    router.push({
      pathname,
      query: {
        ...query,
        minimumDepth: value[0],
        maximumDepth: value[1],
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

    if (params.minimumDepth || params.maximumDepth) {
      setValue([parseFloat(params.minimumDepth), parseFloat(params.maximumDepth)]);
      setMinimum(parseFloat(params.minimumDepth));
      setMaximum(parseFloat(params.maximumDepth));
    }

  }, [
    params.minimumDepth,
    params.maximumDepth,
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
          minimumDepth: valueTextField[0],
          maximumDepth: valueTextField[1],
        },
      });
    }
  }, [valueTextField]);

  return (
    <>
      <div className={classes.filterDepthRange}>
        <b>Depth %</b>
        { lowScreen ? (
          <form className={classes.depthForm1} onSubmit={handleChangeMin}>
            <div className={classes.depthFields1}>
              <TextField
                type="number"
                label="Min. Depth %"
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
            <div className={classes.depthFields1}>
              <TextField
               type="number"
               label="Max. Depth %"
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
          <form className={classes.depthForm} onSubmit={handleChangeMin}>
            <div className={classes.depthFields}>
              <TextField
                type="number"
                label="Min. Depth %"
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
            <div className={classes.depthFields}>
              <TextField
               type="number"
               label="Max. Depth %"
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
          onChangeCommitted={handleChangeDepthRangeDone}
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
export default withStyles(styles)(FilterDepthRange);
