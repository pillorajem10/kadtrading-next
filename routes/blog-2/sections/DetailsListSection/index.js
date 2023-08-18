import React from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Constant
import { detailsList } from '../../utils/const';

// Styling
import styles from './style';

const DetailsListSection = ({ classes }) => {
  return (
    <div className={classes.detailsListSection}>
      {detailsList.map(({ title, content, image, show }, index) => (
        <div className={classes.detailsListWrapper} key={index}>
          <Hidden xsDown>
            <img
              src={image}
              className={classes.detailsListImage}
              alt='details list'
            />
          </Hidden>

          <Hidden smUp>
            {show && (
              <img
                src={detailsList[index - 1].mobileImage}
                className={classes.detailsListImage}
                alt='details list'
              />
            )}
          </Hidden>

          <div className={classes.detailsListContentWrapper}>
            <Typography className={classes.detailsListNumber}>
              {index + 1}.
            </Typography>

            <div>
              <Typography className={classes.detailsListHeader}>
                {title}
              </Typography>
              <Typography className={classes.detailsListContent}>
                {content}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(DetailsListSection);
