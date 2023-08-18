import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// components
import { ThreeSixtyButton } from 'jumbogold/button';

// Styling
import styles from './style';

const ShowroomContainer = ({ classes, mainShowroomPicture, showroomSlides }) => {
  const [showViewOtherRoom, setShowViewOtherRoom] = useState(true);
  const [showShowroomSlides, setShowShowroomSlides] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleShowShowroomSlides = () => {
    setShowViewOtherRoom(false);

    setTimeout(() => {
      setShowShowroomSlides(true);
    }, 500);
  };

  const handleCloseShowShowroomSlides = () => {
    setShowShowroomSlides(false);

    setTimeout(() => {
      setShowViewOtherRoom(true);
    }, 500);
  };

  const handleShowOverlay = () => setShowOverlay(true);

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setShowShowroomSlides(false);

    setTimeout(() => {
      setShowViewOtherRoom(true);
    }, 500);
  };

  return (
    <div className={classes.showroomContainer}>
      <img
        src={mainShowroomPicture}
        alt="main showroom"
        height="100%"
        width="100%"
        onClick={handleCloseShowShowroomSlides}
      />
      {/* View Other Room */}
      <div
        className={
          showViewOtherRoom ? classes.viewOtherRoomContainer : classes.closeViewOtherRoomContainer
        }
      >
        <Typography className={classes.viewOtherRoomText} onClick={handleShowShowroomSlides}>
          view other room
        </Typography>
      </div>

      {/* Showroom list */}
      <div
        className={
          showShowroomSlides
            ? classes.showroomSlidesContainer
            : classes.closeShowroomSlidesContainer
        }
      >
        {showroomSlides.map((slide, index) => (
          <img
            src={slide}
            alt="showroom slide"
            className={classes.showroomSlidesImage}
            onClick={handleShowOverlay}
            key={index}
          />
        ))}
      </div>

      {/* Overlay */}
      <div
        className={showOverlay ? classes.showroomOverlay : classes.closeShowroomOverlay}
        onClick={handleCloseOverlay}
      >
        <ThreeSixtyButton />
      </div>
    </div>
  );
};

export default withStyles(styles)(ShowroomContainer);
