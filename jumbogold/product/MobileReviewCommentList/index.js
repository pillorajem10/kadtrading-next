import React from 'react';
import moment from 'moment';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// components
import { RatingStar } from 'jumbogold/product';
import { Image } from 'jumbogold/common';

// Picture
import wizzo from 'public/assets/images/avatars/wizzo.png';

// Styling
import styles from './style';

const options = {
  buttons: {
    showAutoplayButton: false,
    showCloseButton: false,
    showDownloadButton: false,
  },
};

const MobileReviewCommentList = ({ classes, review }) => {
  return (
    <SimpleReactLightbox>
      <div className={classes.container}>
        <div className={classes.userInfoContainer}>
          <img src={wizzo} alt="" className={classes.avatar} />

          <div>
            <Typography className={classes.commentBy}>{review.commentBy}</Typography>

            <RatingStar value={review.overallRating} readOnly />
          </div>
        </div>

        <Typography className={classes.variantName}>Color: {review.variantName}</Typography>

        <Typography className={classes.comment}>{review.comment}</Typography>

        <SRLWrapper options={options}>
          {review.commentImages.length > 0 && (
            <div className={classes.imageList}>
              {review.commentImages.map((image, index) => (
                <Image src={image} alt="" key={index} />
              ))}
            </div>
          )}
        </SRLWrapper>

        <Typography className={classes.createTime}>
          {moment(review.createTime).format('DD MMM YYYY hh:mm a')}
        </Typography>
      </div>
    </SimpleReactLightbox>
  );
};

export default withStyles(styles)(MobileReviewCommentList);
