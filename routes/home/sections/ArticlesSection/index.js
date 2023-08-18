import React from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// components
import { Image } from 'jumbogold/common';

// picture
import article1 from 'public/assets/images/article/article-4/article-card.png';
import article2 from 'public/assets/images/article/article-1/article-card.jpg';
import article3 from 'public/assets/images/article/article-2/article-card.jpg';

// styling
import styles from './style';

const ArticlesSection = ({ classes }) => {
  return (
    <section className={classes.section}>
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>Articles</Typography>
      </div>

      <div className={classes.articlesGrid}>
        <div
          className={classes.articleContainer}
          onClick={() => Router.push('/blog/egss-deals-2020')}
        >
          <Image
            src={article1}
            alt="HDB August 2020 BTO Exercise: Location Guide"
            className={classes.articleImage}
          />
          <Typography className={classes.articleTitle}>
            7 eGSS Deals On Jumbo Gold and Diamonds To Stretch Your 9.9 Spending
          </Typography>
          <Typography className={classes.articleContent}>
            The Great Singapore Sale is upon us, and here are some of the best jewelry deals to
            aim for! With up to 50% discounts, these offers will excite.
          </Typography>
          <Typography className={classes.readMoreLink}>READ MORE</Typography>
        </div>

        <div
          className={classes.articleContainer}
          onClick={() => Router.push('/blog/bto-defect-checklist')}
        >
          <Image
            src={article2}
            alt="Checking Your New BTO For Defects: A Complete Guide"
            className={classes.articleImage}
          />
          <Typography className={classes.articleTitle}>
            Checking Your New BTO For Defects: A Complete Guide
          </Typography>

          <Typography className={classes.articleContent}>
            New BTO Defect Checklist. You’ve waited years to get the keys to your new BTO flat, but
            your homeowner journey has only just started. That’s right, buying a new flat…
          </Typography>

          <Typography className={classes.readMoreLink}>READ MORE</Typography>
        </div>

        <div
          className={classes.articleContainer}
          onClick={() => Router.push('/blog/sofa-buying-tips')}
        >
          <Image
            src={article3}
            alt="6 Details First-Time Sofa Buyers Always Miss Out On"
            className={classes.articleImage}
          />
          <Typography className={classes.articleTitle}>
            6 Details First-Time Sofa Buyers Always Miss Out On
          </Typography>
          <Typography className={classes.articleContent}>
            Sofa shopping made easy, In most Singapore homes, the sofa tends to take centre stage,
            as modern HDB designs tend to emphasise the living room…
          </Typography>
          <Typography className={classes.readMoreLink}>READ MORE</Typography>
        </div>
      </div>

      {/* Overlay in mobile */}
      <div className={classes.articleOverlay} />

      {/* <Button
        color='primary'
        variant='contained'
        className={classes.viewAllButton}
        component={Link}
        to='/articles'
      >
        Read More
      </Button> */}
    </section>
  );
};

export default withStyles(styles)(ArticlesSection);
