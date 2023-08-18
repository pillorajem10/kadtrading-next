import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Typography, Popper, Grow, Paper, Hidden } from '@material-ui/core';

// MUI Icons
import ShareIcon from '@material-ui/icons/Share';

// components
import { ShareOptions } from 'jumbogold/common';

// Styling
import styles from './style';

const OptionsSection = ({ classes, onOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleShowShareOptions = (event) => setAnchorEl(anchorEl ? null : event.currentTarget);

  const handleCloseShareOptions = () => setAnchorEl(null);

  const openShareOptions = Boolean(anchorEl);
  const shareOptionsId = openShareOptions ? 'transitions-popper' : undefined;

  return (
    <div className={classes.optionsSection}>
      <Typography className={classes.createdDate}>29 July 2021 11:15AM</Typography>

      <Hidden xsDown>
        <ShareIcon
          className={classes.shareIconButton}
          aria-describedby={shareOptionsId}
          onClick={handleShowShareOptions}
        />
      </Hidden>

      <Hidden smUp>
        <ShareIcon className={classes.shareIconButton} onClick={onOpen} />
      </Hidden>

      <Popper
        id={shareOptionsId}
        open={openShareOptions}
        anchorEl={anchorEl}
        placement="right-start"
        transition
        className={classes.shareOptions}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'right-start' ? 'center top' : 'center bottom',
            }}
          >
            <Paper id="menu-list-grow">
              <ShareOptions
                handleClose={handleCloseShareOptions}
                title="Sell diamond jewellery"
                image="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/blogs/diamond-blog2/0a8e8c6e-4565-47b2-9930-933647f32405_jumbo_gold.jpg"
              />
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default withStyles(styles)(OptionsSection);
