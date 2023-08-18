import React, { useState, useEffect, Fragment } from 'react';

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
import { useSelector, useDispatch } from 'react-redux';
import { transaction } from 'redux/actions';

// Picture
import expandIcon from 'public/assets/icons/expand.png';

// Styling
import styles from './style';

const MobileFilterPageSize = ({ classes }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.transaction);

  const [selected, setSelected] = useState('');
  const [showPageSizeList, setShowPageSizeList] = useState(false);

  useEffect(() => {
    setSelected(parseInt(filter.pageSize, 10));
  }, [filter.pageSize]);

  const handleTogglePageSizeList = () => setShowPageSizeList(true);

  const handleClosePageSizeList = () => setShowPageSizeList(false);

  const handleSelectPageSize = (event) => {
    dispatch(transaction.updateTransactionFilter({ pageSize: event.target.value }));

    handleClosePageSizeList();
  };

  const handleRenderSelectedResult = () => {
    let renderer = <Typography className={classes.filterPageSizeText}>Default</Typography>;

    if (selected === 30)
      renderer = <Typography className={classes.filterPageSizeText}>30</Typography>;

    if (selected === 60)
      renderer = <Typography className={classes.filterPageSizeText}>60</Typography>;

    if (selected === 90)
      renderer = <Typography className={classes.filterPageSizeText}>90</Typography>;

    if (selected === 1000)
      renderer = <Typography className={classes.filterPageSizeText}>All</Typography>;

    return renderer;
  };

  return (
    <Fragment>
      <div className={classes.mobilefilterPageSize} onClick={handleTogglePageSizeList}>
        {handleRenderSelectedResult()}

        <img src={expandIcon} alt="expand icon" className={classes.mobileFilterPageSizeIcon} />
      </div>

      <Dialog onClose={handleClosePageSizeList} open={showPageSizeList}>
        <RadioGroup
          aria-label="select size"
          name="selectSize"
          className={classes.radioGroup}
          value={selected}
          onChange={handleSelectPageSize}
        >
          <FormControlLabel
            className={classes.radioLabel}
            control={<Radio className={classes.radio} color="primary" />}
            label="30"
            labelPlacement="start"
            value={30}
          />
          <FormControlLabel
            className={classes.radioLabel}
            control={<Radio className={classes.radio} color="primary" />}
            label="60"
            labelPlacement="start"
            value={60}
          />
          <FormControlLabel
            className={classes.radioLabel}
            control={<Radio className={classes.radio} color="primary" />}
            label="90"
            labelPlacement="start"
            value={90}
          />
          <FormControlLabel
            className={classes.radioLabel}
            control={<Radio className={classes.radio} color="primary" />}
            label="All"
            labelPlacement="start"
            value={1000}
          />
        </RadioGroup>
      </Dialog>
    </Fragment>
  );
};

export default withStyles(styles)(MobileFilterPageSize);
