import React, { useState } from 'react';
import Head from 'next/head';

// MUI Stuff
import { withStyles, Typography, Hidden, ClickAwayListener } from '@material-ui/core';

// components
import Breadcrumb from 'routes/diamond-blog1/components/Breadcrumb';
import { MobileShareOptions, ArticlesSection } from 'jumbogold/common';

// sections
import OptionsSection from 'routes/diamond-blog1/sections/OptionsSection';
import BTOIntroductionSection from 'routes/diamond-blog1/sections/BTOIntroductionSection';
/*
import BTOListSection from 'routes/diamond-blog1/sections/BTOListSection';
import BTOLaunchSection from 'routes/diamond-blog1/sections/BTOLaunchSection';
*/

// Styling
import styles from 'routes/diamond-blog1/style';

const ArticleThree = ({ classes, meta }) => {
  const [showMobileShareOptions, setShowMobileShareOptions] = useState(false);

  const handleCloseMobileShareOptions = () => setShowMobileShareOptions(false);

  const handleShowMobileShareOptions = () =>
    setShowMobileShareOptions((currentValue) => {
      return !currentValue;
    });

  return (
    <div className={classes.page}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keyword} />
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:description" content={meta.description} key="description" />
        <meta property="og:image" content={meta.image} key="image" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.hapichair.com/blog/diamond-blog1"
          key="og:url"
        />
      </Head>

      <div className={classes.container}>
        <Breadcrumb />

        <Typography className={classes.articleHeader}>
        Where to sell unwanted Gold Jewellery?
        </Typography>
      </div>

      <img
        src="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/blogs/diamond-blog1/0d4fb03f-9350-4023-8cf4-ad1528c12d8f_jumbo_gold.jpg"
        alt="Best place to sell jewellery in Singapore"
        className={classes.articleCover}
      />

      <div className={classes.articleContentWrapper}>
        <div className={classes.container}>
          <OptionsSection onOpen={handleShowMobileShareOptions} />

          <BTOIntroductionSection />

          {/*
          <BTOListSection />

          <BTOLaunchSection />
          */}


          <ArticlesSection hide={1} />

        </div>
      </div>

      <Hidden smUp>
        <div
          className={
            showMobileShareOptions ? classes.mobileShareOptions : classes.hideMobileShareOptions
          }
        >
          {showMobileShareOptions && (
            <ClickAwayListener onClickAway={handleCloseMobileShareOptions}>
              <div>
                <MobileShareOptions
                  onClose={handleCloseMobileShareOptions}
                  title="Best place to sell jewellery in Singapore"
                  image="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/blogs/diamond-blog1/0d4fb03f-9350-4023-8cf4-ad1528c12d8f_jumbo_gold.jpg"
                />
              </div>
            </ClickAwayListener>
          )}
        </div>
      </Hidden>
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      meta: {
        title: 'Best place to sell jewellery in Singapore',
        description:
          "Sell Jewellery",
        keyword: 'sell jewellery, sell gold, sell silver',
        image:
          'https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/blogs/diamond-blog1/0d4fb03f-9350-4023-8cf4-ad1528c12d8f_jumbo_gold.jpg',
      },
    },
  };
};

export default withStyles(styles)(ArticleThree);
