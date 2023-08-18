import React, { Fragment, Component } from 'react';

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

// MUI Icons
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// Styling
import styles from './style';

class SortPageSize extends Component {
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

  onClickSelectItem = (event, item) => {
    this.setState({ selectValue: item });
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
    const { open } = this.state;

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

        <Popper
          anchorEl={this.anchorRef.current}
          className={classes.popper}
          disablePortal
          keepMounted
          open={open}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList className={classes.menuList}>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={(e) => this.onClickSelectItem(e, '30')}
                    >
                      <Typography>30</Typography>
                    </MenuItem>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={(e) => this.onClickSelectItem(e, '60')}
                    >
                      <Typography>60</Typography>
                    </MenuItem>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={(e) => this.onClickSelectItem(e, '90')}
                    >
                      <Typography>90</Typography>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SortPageSize);
