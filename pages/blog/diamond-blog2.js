import React, { useState } from 'react';
import Head from 'next/head';

// MUI Stuff
import { withStyles, Typography, Hidden, ClickAwayListener } from '@material-ui/core';

// components
import Breadcrumb from 'routes/diamond-blog2/components/Breadcrumb';
import { MobileShareOptions, ArticlesSection } from 'jumbogold/common';

// sections
import OptionsSection from 'routes/diamond-blog2/sections/OptionsSection';
import DefectCheckSection from 'routes/diamond-blog2/sections/DefectCheckSection';
import DefectCheckTableSection from 'routes/diamond-blog2/sections/DefectCheckTableSection';
import BTOCheckListSection from 'routes/diamond-blog2/sections/BTOCheckListSection';

// Picture
import articleCover from 'public/assets/images/article/article-1/shi.png';

// Styling
import styles from 'routes/diamond-blog2/style';

const BlogOne = ({ classes, meta }) => {
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
          content="https://www.hapichair.com/blog/diamond-blog2"
        />
      </Head>

      <div className={classes.container}>
        <Breadcrumb />

        <Typography className={classes.articleHeader}>
          Sell diamond jewellery
        </Typography>
      </div>

      <img
        src="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/blogs/diamond-blog2/0a8e8c6e-4565-47b2-9930-933647f32405_jumbo_gold.jpg"
        alt="Sell diamond jewellery"
        className={classes.articleCover}
      />

      <div className={classes.articleContentWrapper}>
        <div className={classes.container}>
          <OptionsSection onOpen={handleShowMobileShareOptions} />

          <DefectCheckSection />
          {/*
          <DefectCheckTableSection />
          <BTOCheckListSection />          
          */}
          <ArticlesSection hide={2} />
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
                  title="Sell diamond jewellery"
                  image="https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/blogs/diamond-blog2/0a8e8c6e-4565-47b2-9930-933647f32405_jumbo_gold.jpg"
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
        title: 'Sell diamond jewellery',
        description:
          "Best place to sell diamond jewellery in Singapore.",
        keyword: 'Sell diamond, sell diamond ring, sell engagement ring, sell diamond jewellery',
        image:
          'https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/blogs/diamond-blog2/0a8e8c6e-4565-47b2-9930-933647f32405_jumbo_gold.jpg',
      },
    },
  };
};

export default withStyles(styles)(BlogOne);
