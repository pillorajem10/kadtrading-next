import React from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography, Button, Hidden } from '@material-ui/core';

// components
import Breadcrumb from 'routes/board/components/Breadcrumb';

// Picture
import bannerPicture from 'public/assets/images/group-5.png';
import joinMerchantImage from 'public/assets/images/wizzo/shi.png';
import mobileJoinMerchantImage from 'public/assets/images/wizzo/shi.jpg';
import supportImage from 'public/assets/images/wizzo/shi.png';
import jumboLogo from 'public/assets/images/logo.png';
import featureImage from 'public/assets/images/wizzo/shi.png';
import patternTop from 'public/assets/images/patterns/pattern2.png';
import patternBottom from 'public/assets/images/patterns/pattern1.png';

// Styling
import styles from 'routes/board/style';

const Board = ({ classes }) => {
  return (
    <div className={classes.board}>
      <div className={classes.container}>
        <Breadcrumb />

        <div className={classes.topContainer}>
          <Typography className={classes.topContainerHeader}>
            Join us at Jumbo Gold and Diamonds and find your customers easily
          </Typography>

          <Typography className={classes.topContainerSubHeader}>
            Start selling your products now
          </Typography>

          <Typography className={classes.topContainerValue}>
            Jumbo Gold and Diamonds is built for you, the jewelry merchant. Want to reach out to the
            millions of online customers you&apos;re missing out on? We got you covered. Click on
            the button below and we&apos;ll take care of the rest.
          </Typography>

          <Button
            color="primary"
            variant="contained"
            className={classes.joinUsButton}
            onClick={() => Router.push('/contact')}
          >
            JOIN US NOW!
          </Button>
        </div>

        <Hidden xsDown>
          <img src={joinMerchantImage} alt="join merchant" className={classes.joinMerchantImage} />
        </Hidden>

        <Hidden smUp>
          <img
            src={mobileJoinMerchantImage}
            alt="join merchant"
            className={classes.joinMerchantImage}
          />
        </Hidden>
      </div>

      <div className={classes.container}>
        <div className={classes.middleContainer}>
          <Hidden xsDown>
            <img src={bannerPicture} alt="banner" className={classes.bannerPicture} />
          </Hidden>

          <div>
            <Typography className={classes.middleContainerHeader}>Join us now!</Typography>
            <Typography className={classes.middleContainerValue}>
              Jumbo Gold and Diamonds is Singapore&apos;s first jewelry-focused online marketplace, and we
              help you reach directly to your customers.
            </Typography>
          </div>
        </div>
      </div>

      <Hidden smUp>
        <img src={bannerPicture} alt="banner" className={classes.bannerPicture} />
      </Hidden>

      <div className={classes.container}>
        <div className={classes.bottomContainer}>
          <Typography className={classes.bottomContainerHeader}>
            We&apos;re always here for you
          </Typography>

          <Typography className={classes.bottomContainerValue}>
            Got a problem? Dont worry, we got you covered. Explore our help page (hyperlink) or drop
            us an email at (email address) and we&apos;ll get to you soonest.
          </Typography>

          <div className={classes.bottomGridContainer}>
            <div>
              <img src={supportImage} alt="support" className={classes.supportImage} />
              <Typography className={classes.bottomGridPlaceholder}>Support Service</Typography>
            </div>

            <div>
              <img src={jumboLogo} alt="jumbo gold logo" className={classes.jumboLogo} />
              <Typography className={classes.bottomGridPlaceholder}>
                Jumbo Gold and Merchant Support
              </Typography>
            </div>

            <div>
              <img src={featureImage} alt="feature" className={classes.featureImage} />
              <Typography className={classes.bottomGridPlaceholder}>Sales and Feature</Typography>
            </div>
          </div>
        </div>
      </div>

      <img src={patternTop} alt="top pattern" className={classes.patternTop} />
      <img src={patternBottom} alt="bottom pattern" className={classes.patternBottom} />
    </div>
  );
};

export default withStyles(styles)(Board);
