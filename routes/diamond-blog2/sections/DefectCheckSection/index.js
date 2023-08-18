import React from 'react';
// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const DefectCheckSection = ({ classes }) => {
  return (
    <div className={classes.defectCheckSection}>
      <Typography className={classes.articleSecondHeader}>
        DIAMONDS
      </Typography>

      <div className={classes.defectCheckListWrapper}>
        <div className={classes.defectCheckList}>
          <Typography className={classes.defectCheckListText}>
          JUMBO GOLD & DIAMONDS buys your diamond jewellery. We are well connected to the international diamond trade and offer our customers higher prices because of our diamond recycling program. Your diamonds are graded and priced according to the exacting qualities of the 4Cs (colour, clarity, cut & carat)
          </Typography>
        </div>

        <div className={classes.defectCheckList}>
          <Typography className={classes.defectCheckListText}>
            We buy diamond stones or diamond jewelry items in Singapore from our customers and pay them the best price for their used jewelry products. After testing the cut, colour, clarity and carat, we offer the best market price for loose diamonds or diamond jewelry, according to the market price. 
          </Typography>
        </div>

      </div>
    </div>
  );
};

export default withStyles(styles)(DefectCheckSection);
