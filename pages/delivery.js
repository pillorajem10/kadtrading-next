import React from 'react';

// MUI Stuff
import {
  withStyles,
  Typography,
} from '@material-ui/core';


// Layout
import PatternLayout from 'layout/PatternLayout';

// Styling
import styles from 'routes/delivery/style';

// pics
import loginHeader from 'public/assets/jumbo/loginHeader.jpg';

const Delivery = ({ classes }) => {
  return (
    <PatternLayout>
      <img className={classes.headerPic} src={loginHeader} alt="Header"/>
      <div className={classes.container}>
        <div className={classes.paragraphCard}>
          <Typography className={classes.paragraphTitle}>International Shipping</Typography>
          <p>International shipping takes between 3-5 business days.</p>
          <div>
            A tracking number will indicate the exact item(s) arrive at the customer’s location.
            We require a signature for our deliveries as part of a secure shipping option.
            In the case that the customer is not at the given address,
            the courier will contact the customer for further delivery options.
          </div>
        </div>
        <div className={classes.paragraphCard}>
          <Typography className={classes.paragraphTitle}>Lead Time</Typography>
          <p>Items in stock will be shipped out within 3 days to 10 days of order.</p>
          <p>Loose stone(s) and custom-made order(s) will take approximately</p>
          <p>2 to 6 weeks to craft & prepare before being shipped out from Singapore.</p>
          <div className={classes.subCard}>If you need your item urgently kindly let us know and we will try our best to have it expedited.</div>
        </div>
        <div className={classes.paragraphCard}>
          <Typography className={classes.paragraphTitle}>Shipping Rates</Typography>
          <p>International shipping rates apply as follows</p>
          <p>$150 flat shipping rate + 2.5% of invoice value</p>
          <div className={classes.subCard}>Items shipped are insured from theft and damage etc.</div>
        </div>
        <div className={classes.paragraphCard}>
          <Typography className={classes.paragraphTitle}>Taxes & Duties</Typography>
          <p>Taxes & duties are not collected before shipment and customers are responsible for official taxes & duties imposed by their customs office.</p>
        </div>
        <div className={classes.paragraphCard}>
          <Typography className={classes.paragraphTitle}>Shipping time</Typography>
          <p>Shipping time is approximate and may vary in the case of unforeseen circumstances.</p>
        </div>
      </div>
    </PatternLayout>
  );
};

export default withStyles(styles)(Delivery);
