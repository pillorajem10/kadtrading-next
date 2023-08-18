import React from 'react';

// MUI Stuff
import { withStyles, Divider } from '@material-ui/core';

// components
import Banner from 'routes/merchants/components/Banner';
import Breadcrumb from 'routes/merchants/components/Breadcrumb';
import StarMerchantsSection from 'routes/merchants/sections/StarMerchantsSection';
import MerchantsListSection from 'routes/merchants/sections/MerchantsListSection';

// Styling
import styles from 'routes/merchants/style';

const Merchants = ({ classes }) => {
  return (
    <div className={classes.merchants}>
      <Banner />

      <div className={classes.container}>
        <Breadcrumb />

        <StarMerchantsSection />

        <Divider />

        <MerchantsListSection />
      </div>
    </div>
  );
};

export default withStyles(styles)(Merchants);
