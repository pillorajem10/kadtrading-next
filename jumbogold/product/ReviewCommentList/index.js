import React, { useState } from 'react';
import moment from 'moment';

// MUI Stuff
import { withStyles, Typography, Collapse } from '@material-ui/core';

// components
import { RatingStar } from 'jumbogold/product';
import { Image } from 'jumbogold/common';

// Picture
import wizzo from 'public/assets/images/avatars/wizzo.png';
import imageTooltip from 'public/assets/icons/review-image-tooltip.svg';

// Styling
import styles from './style';

const ReviewCommentList = ({ classes, review }) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [collapse, setCollapse] = useState(false);

  const handleShowImage = (image) => {
    const img = selectedImage === image ? '' : image;

    if (img !== '') {
      setSelectedImage(img);
    } else {
      setTimeout(() => {
        setSelectedImage(img);
      }, 500);
    }

    setCollapse(img !== '');
  };

  return (
    <div className={classes.commentList}>
      <img src={review.commentAvatar || wizzo} alt="" className={classes.avatar} />

      <div className={classes.commentDetails}>
        <Typography className={classes.commentBy}>{review.commentBy}</Typography>

        <RatingStar value={review.overallRating} readOnly />

        {/*
        <Typography className={classes.variantName}>Color: {review.variantName}</Typography>        
        */}


        <Typography className={classes.comment}>{review.comment}</Typography>

        {review.commentImages.length > 0 && (
          <div className={classes.imageList}>
            {review.commentImages.map((image, index) => (
              <div
                className={
                  selectedImage === image ? classes.selectImageContainer : classes.imageContainer
                }
                key={index}
                onClick={() => handleShowImage(image)}
              >
                {selectedImage === image && (
                  <Image src={imageTooltip} alt="" className={classes.imageTooltip} />
                )}
                <Image src={image} alt="" className={classes.image} />
              </div>
            ))}
          </div>
        )}

        <Collapse in={collapse}>
          <div className={classes.imageViewer}>
            <Image src={selectedImage} alt="" />
          </div>
        </Collapse>

        <Typography className={classes.createTime}>
          {moment(review.createdAt).format('DD MMM YYYY hh:mm a')}
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(ReviewCommentList);
