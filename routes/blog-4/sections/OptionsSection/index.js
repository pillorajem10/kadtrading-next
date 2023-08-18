import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Typography, Popper, Grow, Paper, Hidden } from '@material-ui/core';

// MUI Icons
import ShareIcon from '@material-ui/icons/Share';

// components
import { ShareOptions } from 'jumbogold/common';

// Picture
import aricleCover from 'public/assets/images/article/article-3/article-cover.png';

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
      <Typography className={classes.createdDate}>25 June 2020 06:15AM</Typography>

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
                title="HDB August 2020 BTO Exercise: Location Guide"
                image={aricleCover}
              />
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default withStyles(styles)(OptionsSection);
