import React from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// components
import { isProductSetValid, getProductSet } from 'routes/showroom/utils';

// Picture
import arImage from 'public/assets/images/showroom/shi.jpg';
import fiveRoomImage from 'public/assets/images/showroom/shi.jpg';

// Styling
import styles from 'routes/showroom/style';

// Dynamic component
const ShowroomPanel = dynamic(() => import('routes/showroom/components/ShowroomPanel'), {
  ssr: false,
});

// Dynamic component
const ShowroomFrame = dynamic(() => import('routes/showroom/components/ShowroomFrame'), {
  ssr: false,
});

const Showroom = ({ classes, meta }) => {
  const router = useRouter();
  const { query } = router.query;
  const localShowrooms = ['egss', 'wtp', 'wantai'];
  const isLocalShowroom = localShowrooms.includes(query);

  return (
    <div className={classes.layout}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:description" content={meta.description} key="description" />
        <meta property="og:image" content={isLocalShowroom ? arImage : fiveRoomImage} key="image" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.jumbogold.com${router.asPath}`}
          key="og:url"
        />
      </Head>

      {isProductSetValid(query) && !isLocalShowroom && (
        <div className={classes.showroomContainer}>
          <ShowroomFrame showroomRoute={query} />
        </div>
      )}
      {isProductSetValid(query) && isLocalShowroom && <ShowroomPanel productSet={getProductSet(query)} />}
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { query } = params;
  const localShowrooms = ['egss', 'wtp', 'wantai'];
  const isLocalShowroom = localShowrooms.includes(query);
  const externalDescription = isProductSetValid(query) ? `${getProductSet(query).description}` : '';
  const showroomDescription = isLocalShowroom ? 'Wizmarketplace showroom.' : externalDescription;
  const meta = {
    title: isProductSetValid(query) ? `${getProductSet(query).title}` : 'Showroom',
    description: showroomDescription,
  };
  return { props: { meta } };
};

export default withStyles(styles)(Showroom);
