import React, { useState, useRef, Fragment, useEffect } from 'react';
import moment from 'moment';

// MUI Stuff
import {
  withStyles,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { transaction } from 'redux/actions';

// Picture
import expandIcon from 'public/assets/icons/grey-expand.svg';

// Styling
import styles from './style';

const FilterPeriod = ({ classes }) => {
  const dispatch = useDispatch();
  const { duration } = useSelector((state) => state.transaction);

  const [selected, setSelected] = useState('7 Days');
  const [showPeriodList, setShowPeriodList] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    setSelected(duration);
  }, [duration]);

  const handleTogglePeriodList = () =>
    setShowPeriodList((currentValue) => {
      return !currentValue;
    });

  const handleClosePeriodList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setShowPeriodList(false);
  };

  const handleGetStartMonth = (value) => {
    return moment()
      .subtract(value, value > 1 ? 'months' : 'month')
      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      .format('x');
  };

  const handleChangePeriod = (event, period) => {
    setSelected(period);

    const endTime = moment()
      .add(1, 'day')
      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      .format('x');

    if (period === '7 Days') {
      const payload = {
        startTime: moment()
          .subtract(6, 'days')
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .format('x'),
        endTime,
      };

      dispatch(transaction.setTransactionFilterDuration({ filter: payload, duration: period }));
    }

    if (period === '1 Month') {
      const payload = { startTime: handleGetStartMonth(1), endTime };

      dispatch(transaction.setTransactionFilterDuration({ filter: payload, duration: period }));
    }

    if (period === '3 Months') {
      const payload = { startTime: handleGetStartMonth(3), endTime };

      dispatch(transaction.setTransactionFilterDuration({ filter: payload, duration: period }));
    }

    if (period === '6 Months') {
      const payload = { startTime: handleGetStartMonth(6), endTime };

      dispatch(transaction.setTransactionFilterDuration({ filter: payload, duration: period }));
    }

    if (period === 'All') {
      const payload = { startTime: null, endTime: null };

      dispatch(transaction.setTransactionFilterDuration({ filter: payload, duration: period }));
    }

    handleClosePeriodList(event);
  };

  const handleRenderSelectedResult = () => {
    let renderer = <Typography className={classes.filterPeriodText}>Default</Typography>;

    if (selected === '7 Days')
      renderer = <Typography className={classes.filterPeriodText}>Last 7 Days</Typography>;

    if (selected === '1 Month')
      renderer = <Typography className={classes.filterPeriodText}>Last 1 Month</Typography>;

    if (selected === '3 Months')
      renderer = <Typography className={classes.filterPeriodText}>Last 3 Months</Typography>;

    if (selected === '6 Months')
      renderer = <Typography className={classes.filterPeriodText}>Last 6 Months</Typography>;

    if (selected === 'All')
      renderer = <Typography className={classes.filterPeriodText}>All</Typography>;

    return renderer;
  };

  return (
    <Fragment>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterPeriod}
        onClick={handleTogglePeriodList}
      >
        {handleRenderSelectedResult()}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.filterPeriodIcon}
          style={{
            transform: showPeriodList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showPeriodList}
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
              <ClickAwayListener onClickAway={handleClosePeriodList}>
                <MenuList className={classes.menuList}>
                  <MenuItem
                    className={classes.menuItem}
                    onClick={(event) => handleChangePeriod(event, '7 Days')}
                  >
                    <Typography>Last 7 Days</Typography>
                  </MenuItem>

                  <MenuItem
                    className={classes.menuItem}
                    onClick={(event) => handleChangePeriod(event, '1 Month')}
                  >
                    <Typography>Last 1 Month</Typography>
                  </MenuItem>

                  <MenuItem
                    className={classes.menuItem}
                    onClick={(event) => handleChangePeriod(event, '3 Months')}
                  >
                    <Typography>Last 3 Months</Typography>
                  </MenuItem>

                  <MenuItem
                    className={classes.menuItem}
                    onClick={(event) => handleChangePeriod(event, '6 Months')}
                  >
                    <Typography>Last 6 Months</Typography>
                  </MenuItem>

                  <MenuItem
                    className={classes.menuItem}
                    onClick={(event) => handleChangePeriod(event, 'All')}
                  >
                    <Typography>All</Typography>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};

export default withStyles(styles)(FilterPeriod);
