import React, { useState } from 'react';
import Head from 'next/head';

// MUI Stuff
import { withStyles, Typography, Hidden, ClickAwayListener } from '@material-ui/core';

// components
import Breadcrumb from 'routes/blog-2/components/Breadcrumb';
import { MobileShareOptions, ArticlesSection } from 'jumbogold/common';

// sections
import OptionsSection from 'routes/blog-2/sections/OptionsSection';
import SofaShoppingSection from 'routes/blog-2/sections/SofaShoppingSection';
import DetailsListSection from 'routes/blog-2/sections/DetailsListSection';

// Picture
import articleCover from 'public/assets/images/article/article-2/article-cover.jpg';

// Styling
import styles from 'routes/blog-2/style';

const ArticleTwo = ({ classes, meta }) => {
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
          content="https://www.jumbogold.com/blog/sofa-buying-tips"
          key="og:url"
        />
      </Head>

      <div className={classes.container}>
        <Breadcrumb />

        <Typography className={classes.articleHeader}>
          6 Details First-Time Sofa Buyers Always Miss Out On
        </Typography>
      </div>

      <img
        src={articleCover}
        alt="6 Details First-Time Sofa Buyers Always Miss Out On"
        className={classes.articleCover}
      />

      <div className={classes.articleContentWrapper}>
        <div className={classes.container}>
          <OptionsSection onOpen={handleShowMobileShareOptions} />

          <SofaShoppingSection />

          <DetailsListSection />

          <ArticlesSection hide={3} />
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
                  title="6 Details First-Time Sofa Buyers Always Miss Out On"
                  image={articleCover}
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
        title: '6 Details First-Time Sofa Buyers Always Miss Out On',
        description:
          'Sofas come in all shapes, sizes, and colours, and choosing can be a major headache. Here are some tips to think about before making your big couch purchase.',
        keyword: 'How to, sofa',
        image:
          'https://hapichair.com/error-pages/isabella-mendes.jpg',
      },
    },
  };
};

export default withStyles(styles)(ArticleTwo);
