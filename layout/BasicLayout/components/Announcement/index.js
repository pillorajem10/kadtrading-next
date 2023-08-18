import React from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const Announcement = ({ classes }) => {
  // const { settings } = useSelector((state) => state.common);

  return (
    <div className={classes.container}>
      <div className={classes.announcement}>
        <Link href="/products?c1=6067479b6ac0e48b78d50a5d&c2=606747a96ac0e48b78d50a5e&type=inhouse">
          <a>
            <Typography className={classes.announcementText}>
              Welcome to Jumbo Gold & Diamonds! Check out our in-house diamonds and build your custom ring here.
            </Typography>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Announcement);
