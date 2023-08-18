import React, { useState, useEffect } from 'react';

// MUI Stuff
import {
  withStyles,
  Dialog,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from '@material-ui/core';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

const MobileFilterPageSize = ({ classes, setPageSize, pageSize }) => {
  const [selected, setSelected] = useState('');
  const [showPageSizeList, setShowPageSizeList] = useState(false);

  useEffect(() => {
    if (pageSize) {
      setSelected(parseInt(pageSize, 10));
    }
  }, [pageSize]);

  const handleTogglePageSizeList = () => setShowPageSizeList(true);

  const handleClosePageSizeList = () => setShowPageSizeList(false);

  const handleSelectPageSize = (event) => {
    setPageSize(event.target.value);

    handleClosePageSizeList();
  };

  const handleRenderSelectedResult = () => {
    let renderer = <Typography className={classes.mobileFilterPageSizeText}>30</Typography>;

    if (selected === 60)
      renderer = <Typography className={classes.mobileFilterPageSizeText}>60</Typography>;

    if (selected === 90)
      renderer = <Typography className={classes.mobileFilterPageSizeText}>90</Typography>;

    return renderer;
  };

  return (
    <>
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
        </RadioGroup>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(MobileFilterPageSize);
