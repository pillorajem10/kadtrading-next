import React from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden, Divider } from '@material-ui/core';

// Constant
import { btoList } from '../../utils/const';

// Styling
import styles from './style';

const BTOListSection = ({ classes }) => {
  return (
    <div className={classes.btoListSection}>
      <div className={classes.btoList}>
        {btoList.map(
          ({ location, classification, numberOfNewFlat, type }, index) => (
            <div className={classes.btoWrapper} key={index}>
              <div className={classes.btoInnerWrapper}>
                <Typography className={classes.btoLocation}>
                  {location}
                </Typography>

                <div className={classes.btoClassificationWrapper}>
                  <Typography>Classification</Typography>
                  <Hidden smUp>
                    <Typography>: </Typography>
                  </Hidden>
                  <Typography>{classification}</Typography>
                </div>

                <div className={classes.btoNumberOfNewFlatWrapper}>
                  <Typography>No. of new flats</Typography>
                  <Hidden smUp>
                    <Typography>: </Typography>
                  </Hidden>
                  <Typography>{numberOfNewFlat}</Typography>
                </div>

                <Hidden xsDown>
                  <Divider />
                </Hidden>

                <div className={classes.btoTypesOfFlatsWrapper}>
                  <Typography className={classes.btoTypesOfFlatsTitle}>
                    Types of flats available:
                  </Typography>

                  <div>
                    {type.map((item, number) => (
                      <Typography
                        className={classes.btoTypesOfFlats}
                        key={number}>
                        {item}
                      </Typography>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(BTOListSection);
