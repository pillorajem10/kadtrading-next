import React from 'react';

// MUI Stuff
import { withStyles, Divider, Hidden } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// components
import Breadcrumb from '../../components/Breadcrumb';
import About from '../../components/About';
import AboutBanner from '../../components/AboutBanner';
import FAQ from '../../components/FAQ';
import MobileFAQ from '../../components/MobileFAQ';

// Styling
import styles from './style';

const AboutSection = ({ classes }) => {
  const { profile } = useSelector((state) => state.merchant);

  return (
    <>
      <div className={classes.container}>
        <Hidden xsDown>
          <Breadcrumb />
        </Hidden>

        <About />

        <Hidden xsDown>
          <AboutBanner />
        </Hidden>
      </div>

      <Hidden smUp>
        <AboutBanner />
      </Hidden>

      {profile?.faqs?.length > 0 && (
        <>
          <Hidden xsDown>
            <Divider />

            <div className={classes.container}>
              <FAQ />
            </div>
          </Hidden>

          <Hidden smUp>
            <MobileFAQ />
          </Hidden>
        </>
      )}
    </>
  );
};

export default withStyles(styles)(AboutSection);
