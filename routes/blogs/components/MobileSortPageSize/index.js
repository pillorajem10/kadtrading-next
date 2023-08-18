import React, { Fragment, Component } from 'react';

// MUI Stuff
import {
  withStyles,
  Dialog,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from '@material-ui/core';

// MUI Icons
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// Styling
import styles from './style';

class MobileSortPageSize extends Component {
  state = {
    open: false,
    selectValue: '30',
  };

  anchorRef = React.createRef();

  handleToggle = () => {
    const { open } = this.state;

    this.setState({ open: !open });
  };

  handleClose = (event) => {
    if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  onClickSelectItem = (event) => {
    this.setState({ selectValue: event.target.value });
    this.handleClose(event);
  };

  handleRenderSelectedResult = () => {
    const { classes, defaultValue } = this.props;
    const { selectValue } = this.state;

    let renderer = <Typography className={classes.buttonText}>{defaultValue}</Typography>;

    if (selectValue === '30') renderer = <Typography className={classes.buttonText}>30</Typography>;

    if (selectValue === '60') renderer = <Typography className={classes.buttonText}>60</Typography>;

    if (selectValue === '90') renderer = <Typography className={classes.buttonText}>90</Typography>;

    return renderer;
  };

  render() {
    const { classes } = this.props;
    const { open, selectValue } = this.state;

    return (
      <Fragment>
        <div
          ref={this.anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          className={classes.button}
          onClick={this.handleToggle}
        >
          {this.handleRenderSelectedResult()}
          <ArrowDropDownIcon className={classes.buttonIcon} />
        </div>

        <Dialog onClose={this.handleClose} open={open}>
          <RadioGroup
            aria-label="select size"
            name="selectSize"
            className={classes.radioGroup}
            value={selectValue}
            onChange={this.onClickSelectItem}
          >
            <FormControlLabel
              className={classes.radioLabel}
              control={<Radio className={classes.radio} color="primary" />}
              label="30"
              labelPlacement="start"
              value="30"
            />
            <FormControlLabel
              className={classes.radioLabel}
              control={<Radio className={classes.radio} color="primary" />}
              label="60"
              labelPlacement="start"
              value="60"
            />
            <FormControlLabel
              className={classes.radioLabel}
              control={<Radio className={classes.radio} color="primary" />}
              label="90"
              labelPlacement="start"
              value="90"
            />
          </RadioGroup>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MobileSortPageSize);
