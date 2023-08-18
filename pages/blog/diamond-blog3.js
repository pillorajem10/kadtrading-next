import React, { useState } from 'react';
import Head from 'next/head';

// MUI Stuff
import { withStyles, Typography, Hidden, ClickAwayListener } from '@material-ui/core';

// sections
import OptionsSection from 'routes/blog-4/sections/OptionsSection';
import IntroductionSection from 'routes/blog-4/sections/IntroductionSection';
import CelliniSection from 'routes/blog-4/sections/CelliniSection';
import KrisliteSection from 'routes/blog-4/sections/KrisliteSection';
import TiFurnitureSection from 'routes/blog-4/sections/TiFurnitureSection';
import CommuneSection from 'routes/blog-4/sections/CommuneSection';
import MMGalleriSection from 'routes/blog-4/sections/MMGalleriSection';
import DecoFanSection from 'routes/blog-4/sections/DecoFanSection';
import MelandasSection from 'routes/blog-4/sections/MelandasSection';

// components
import { MobileShareOptions, ArticlesSection } from 'jumbogold/common';
import Breadcrumb from 'routes/blog-4/components/Breadcrumb';

// Picture
import articleCover from 'public/assets/images/article/article-4/article-cover.png';
import metaImage from 'public/assets/images/article/article-4/meta-image.png';

// Styling
import styles from 'routes/blog-4/style';

const EGSSDeals2020 = ({ classes, meta }) => {
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
          content="https://www.jumbogold.com/blog/egss-deals-2020"
          key="og:url"
        />
      </Head>

      <div className={classes.container}>
        <Breadcrumb />

        <Typography className={classes.articleHeader}>
          7 eGSS Deals On Jumbo Gold and Diamonds To Stretch Your 9.9 Spending
        </Typography>
      </div>

      <img src={articleCover} alt="" className={classes.articleCover} />

      <div className={classes.container}>
        <div className={classes.articleContentWrapper}>
          <OptionsSection onOpen={handleShowMobileShareOptions} />

          <IntroductionSection />

          <CelliniSection />

          <KrisliteSection />

          <TiFurnitureSection />

          <CommuneSection />

          <MMGalleriSection />

          <DecoFanSection />

          <MelandasSection />

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
                  title="HDB August 2020 BTO Exercise: Location Guide"
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
        title: '7 eGSS Deals On Jumbo Gold and Diamonds To Stretch Your 9.9 Spending',
        description:
          'The Great Singapore Sale is upon us, and here are some of the best jewelry deals to aim for! With up to 50% discounts, these offers will excite.',
        keyword: 'eGSS, great singapore sale, discounts',
        image: metaImage,
      },
    },
  };
};

export default withStyles(styles)(EGSSDeals2020);
