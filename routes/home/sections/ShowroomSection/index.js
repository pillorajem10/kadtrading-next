import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// components
import { ThreeSixtyButton } from 'jumbogold/button';

// picture
import showroom1 from 'public/assets/images/showroom-thumbnail/showroom1.jpg';
import showroom2 from 'public/assets/images/showroom-thumbnail/showroom2.jpg';
import showroom3 from 'public/assets/images/showroom-thumbnail/showroom3.png';
import showroom4 from 'public/assets/images/showroom-thumbnail/showroom4.jpg';

// styling
import styles from './style';

const ShowroomSection = ({ classes }) => {
  return (
    <section className={classes.section}>
      {/* Header */}
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>Explore our 3D showrooms in 360</Typography>
      </div>

      {/* Show Room Grid */}
      <div className={classes.showroomGrid}>
        <div className={classes.showroomContainer}>
          <img src={showroom4} alt="contemporary-5r" height="100%" width="100%" />
          <div className={classes.showroomOverlay}>
            <div
              onClick={(event) => {
                event.preventDefault();
                window.open('showroom/hdb-5room-modern-contemporary', '_blank');
              }}
            >
              <ThreeSixtyButton />
            </div>
          </div>
        </div>

        <div className={classes.showroomContainer}>
          <img src={showroom3} alt="egss" height="100%" width="100%" />
          <div className={classes.showroomOverlay}>
            <div
              onClick={(event) => {
                event.preventDefault();
                window.open('showroom/egss', '_blank');
              }}
            >
              <ThreeSixtyButton />
            </div>
          </div>
        </div>

        <div className={classes.showroomContainer}>
          <img src={showroom2} alt="wtp" height="100%" width="100%" />
          <div className={classes.showroomOverlay}>
            <div
              onClick={(event) => {
                event.preventDefault();
                window.open('showroom/wtp', '_blank');
              }}
            >
              <ThreeSixtyButton />
            </div>
          </div>
        </div>

        <div className={classes.showroomContainer}>
          <img src={showroom1} alt="wantai" height="100%" width="100%" />
          <div className={classes.showroomOverlay}>
            <div
              onClick={(event) => {
                event.preventDefault();
                window.open('showroom/wantai', '_blank');
              }}
            >
              <ThreeSixtyButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(ShowroomSection);
