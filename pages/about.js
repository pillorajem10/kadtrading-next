import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// components
// import Breadcrumb from 'routes/about/components/Breadcrumb';

/*
import aboutBackgroundPic from 'public/assets/images/about-bg.jpg';
import mobileAboutBackgroundPic from 'public/assets/images/about-mobile-bg.jpg';
import Mascot from 'public/assets/images/wizzo/waa.png';
import MascotBefore from 'public/assets/images/wizzo/before.png';
import MascotAfter from 'public/assets/images/wizzo/after.png';
import PatternBottom from 'public/assets/images/patterns/pattern2.png';
*/

// pics
import AboutUsHeader from 'public/assets/jumbo/aboutUsHeader.jpg';
import About1 from 'public/assets/jumbo/about1.jpg';
import About2 from 'public/assets/jumbo/about2.png';
import About3 from 'public/assets/jumbo/about3.jpg';
import About4 from 'public/assets/jumbo/about4.jpg';

// Styling
import styles from 'routes/about/style';

const About = ({ classes }) => {
  return (
    <div className={classes.about}>
      <img style={{width: "100%"}} src={AboutUsHeader} alt="About"/>

      <div className={classes.container}>
        <Typography className={classes.header}>
          ABOUT JUMBO GOLD AND DIAMONDS
        </Typography>
        <div className={classes.headerLine} />

        <Typography className={classes.normalText}>
          JUMBO GOLD & DIAMONDS is an established gold & diamonds merchant based in Singapore.
          Our present company was started in 2008 and has links dating back to the 1970s.
          Our founder Mr Francis Tan has over 40 years experience in the jewellery industry,
          specializing in the manufacture, export and wholesale of diamond jewellery.
        </Typography>

        <div className={classes.subContainer}>
          <img className={classes.aboutImage} src={About1} alt="About"/>
          <div style={{maxWidth: "25rem"}}>
            <Typography className={classes.header}>
              OUR ADVANTAGE
            </Typography>
            <div className={classes.cardHeaderLine} />

            <Typography className={classes.normalText}>
              A 3rd generation outfit hailing from Singapore’s pioneer jewellers,
              we strongly believe in amalgamating past experience and cutting-edge
              knowledge to bring only the best to our customers.
              As such, our company is on constant lookout for the
              latest trends to stay ahead in the global diamonds marketplace.
            </Typography>
          </div>
        </div>

        <div className={classes.subContainer}>
          <div style={{maxWidth: "26rem"}}>
            <Typography className={classes.header}>
              BEST IN SINGAPORE
            </Typography>
            <div className={classes.cardHeaderLine} />

            <Typography className={classes.normalText}>
              We leave no stone unturned in our quest to find the best materials,
              techniques and knowledge.
              Be sure to check out our reviews and what other people say about us!
            </Typography>
          </div>
          <img className={classes.aboutImage} src={About2} alt="About"/>
        </div>

        <div className={classes.subContainer}>
          <img className={classes.aboutImage} src={About3} alt="About"/>
          <div style={{maxWidth: "26rem"}}>
            <Typography className={classes.header}>
              OUR PRODUCT & VALUES
            </Typography>
            <div className={classes.cardHeaderLine} />

            <Typography className={classes.normalText}>
              We take pride in designing fine jewellery,
              using GIA certified diamonds and rare gemstones.
              Our core values are integrity, honesty and excellence.
              We are privileged to have served thousands of satisfied
              customers over the years and look forward to serving you.
            </Typography>
          </div>
        </div>

        <div className={classes.subContainer}>
          <div style={{maxWidth: "26rem"}}>
            <Typography className={classes.header}>
              PEOPLE BEHIND JUMBO
            </Typography>
            <div className={classes.cardHeaderLine} />
            
            <Typography className={classes.normalText}>
              Our team is passionate about precious metals, gems and diamonds.
              We spare no expense in training and equipping our team and every member
              has certificates form the top gemological institutions from America to the United Kingdom.
              At Jumbo, expertise is the foundation of our business
              and we believe in continuous, lifelong learning.
            </Typography>
          </div>
          <img className={classes.aboutImage} src={About4} alt="About"/>
        </div>
      </div>

    </div>
  );
};

export default withStyles(styles)(About);
