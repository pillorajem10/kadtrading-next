import React, { Fragment } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// components
import { Image } from 'jumbogold/common';

// Picture
import article1 from 'public/assets/images/article/article-4/article-card.png';
import article2 from 'public/assets/images/article/article-1/article-card.jpg';
import article3 from 'public/assets/images/article/article-2/article-card.jpg';
import article4 from 'public/assets/images/article/article-3/article-card.jpg';



// Styling
import styles from './style';

const ArticlesSection = ({ classes, hide }) => {
  return (
    <Fragment>
      <Typography className={classes.interestHeader}>You might be interested:</Typography>

      <div className={classes.articlesSection}>
        {/* Article Grid */}
        <div className={classes.articlesGrid}>
          {hide !== 1 && (
            <div
              className={classes.articleContainer}
              onClick={() => Router.push('/blog/diamond-blog1')}
            >
              <Image
                src="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/blogs/diamond-blog1/0d4fb03f-9350-4023-8cf4-ad1528c12d8f_jumbo_gold.jpg"
                alt="dblog1"
                className={classes.articleImage}
              />
              <Typography className={classes.articleTitle}>
                Best place to sell jewellery in Singapore.
              </Typography>

              <Typography className={classes.articleContent}>
                Sell Jewellery.
              </Typography>

              <Typography className={classes.readMoreLink}>READ MORE</Typography>
            </div>
          )}

          {hide !== 2 && (
            <div
              className={classes.articleContainer}
              onClick={() => Router.push('/blog/diamond-blog2')}
            >
              <Image
                src="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/blogs/diamond-blog2/0a8e8c6e-4565-47b2-9930-933647f32405_jumbo_gold.jpg"
                alt="dblog2"
                className={classes.articleImage}
              />

              <Typography className={classes.articleTitle}>
                Sell diamond jewellery.
              </Typography>

              <Typography className={classes.articleContent}>
                Best place to sell diamond jewellery in Singapore.
              </Typography>

              <Typography className={classes.readMoreLink}>READ MORE</Typography>
            </div>
          )}

          {/*hide !== 3 && (
            <div
              className={classes.articleContainer}
              onClick={() => Router.push('/blog/diamond-blog3')}
            >
              <Image
                src={article3}
                alt="dblog3"
                className={classes.articleImage}
              />
              <Typography className={classes.articleTitle}>

              </Typography>
              <Typography className={classes.articleContent}>

              </Typography>
              <Typography className={classes.readMoreLink}>READ MORE</Typography>
            </div>
          )}

          {hide !== 4 && (
            <div
              className={classes.articleContainer}
              onClick={() => Router.push('/blog/aug-2020-bto')}
            >
              <Image
                src={article4}
                alt="HDB August 2020 BTO Exercise: Location Guide"
                className={classes.articleImage}
              />
              <Typography className={classes.articleTitle}>
                HDB August 2020 BTO Exercise: Location Guide
              </Typography>
              <Typography className={classes.articleContent}>
                BTO locations for Aug 2020 include Choa Chu Kang, Bishan, and Tampines. Aug 2020’s
                BTO exercise will be the first since HDB postponed the May exercise due to the
                Covid...
              </Typography>
              <Typography className={classes.readMoreLink}>READ MORE</Typography>
            </div>
          )*/}
        </div>

        {/* Overlay in mobile */}
        <div className={classes.articleOverlay} />

        {/* Button */}
        {/* <Button
        color='primary'
        variant='contained'
        className={classes.viewAllButton}
        component={Link}
        to='/articles'
      >
        Read More
      </Button> */}
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(ArticlesSection);
