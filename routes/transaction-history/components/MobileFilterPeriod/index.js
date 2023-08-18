import React, { useState, Fragment, useEffect } from 'react';
import moment from 'moment';

// MUI Stuff
import {
  withStyles,
  Dialog,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { transaction } from 'redux/actions';

// Picture
import expandIcon from 'public/assets/icons/expand.png';

// Styling
import styles from './style';

const MobileFilterPageSize = ({ classes }) => {
  const dispatch = useDispatch();
  const { duration } = useSelector((state) => state.transaction);

  const [selected, setSelected] = useState('7 Days');
  const [showPeriodList, setShowPeriodList] = useState(false);

  useEffect(() => {
    setSelected(duration);
  }, [duration]);

  const handleTogglePeriodList = () => setShowPeriodList(true);

  const handleClosePeriodList = () => setShowPeriodList(false);

  const handleGetStartMonth = (value) => {
    return moment()
      .subtract(value, value > 1 ? 'months' : 'month')
      .add(1, 'day')
      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      .format('x');
  };

  const handleSelectPeriod = (event) => {
    const period = event.target.value;

    setSelected(period);

    const endTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).format('x');

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

    handleClosePeriodList();
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
      <div className={classes.mobilefilterPeriod} onClick={handleTogglePeriodList}>
        {handleRenderSelectedResult()}

        <img src={expandIcon} alt="expand icon" className={classes.mobileFilterPeriodIcon} />
      </div>

      <Dialog onClose={handleClosePeriodList} open={showPeriodList}>
        <RadioGroup
          aria-label="select size"
          name="selectSize"
          className={classes.radioGroup}
          value={selected}
          onChange={handleSelectPeriod}
        >
          <FormControlLabel
            className={classes.radioLabel}
            control={<Radio className={classes.radio} color="primary" />}
            label="Last 7 Days"
            labelPlacement="start"
            value="7 Days"
          />
          <FormControlLabel
            className={classes.radioLabel}
            control={<Radio className={classes.radio} color="primary" />}
            label="Last 1 Month"
            labelPlacement="start"
            value="1 Month"
          />
          <FormControlLabel
            className={classes.radioLabel}
            control={<Radio className={classes.radio} color="primary" />}
            label="Last 3 Months"
            labelPlacement="start"
            value="3 Months"
          />
          <FormControlLabel
            className={classes.radioLabel}
            control={<Radio className={classes.radio} color="primary" />}
            label="Last 6 Months"
            labelPlacement="start"
            value="6 Months"
          />
          <FormControlLabel
            className={classes.radioLabel}
            control={<Radio className={classes.radio} color="primary" />}
            label="All"
            labelPlacement="start"
            value="All"
          />
        </RadioGroup>
      </Dialog>
    </Fragment>
  );
};

export default withStyles(styles)(MobileFilterPageSize);
