import React from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player'

// MUI Stuff
import { withStyles, IconButton } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// import videoHero from 'public/assets/videos/movie1.mp4';

// styling
import styles from './style';

import bottomPattern from 'public/assets/images/patterns/pattern6.svg';


const bannerSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 8000,
  dots: false,
  infinite: true,
  pauseOnDotsHover: true,
  pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 2000,
};

const BannerSection = ({ classes }) => {
  const { settings } = useSelector((state) => state.common);

  /*
  const bannerList =
    settings.homepageBanners && settings.homepageBanners !== ''
      ? JSON.parse(`[${settings.homepageBanners}]`)
      : [];
  */
  const bannerList = [{
    image: 'https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/settings/banner/abf5e2cb-38cc-4c78-a319-95c71f7c9c84_jumbo_gold.jpg',
    url: '',
  }, {
    image: 'https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/settings/banner/e82161c8-ce3c-47ab-bdd3-6756ee32a7e6_jumbo_gold.jpg',
    url: '',
  }, {
    image: 'https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/settings/banner/e74e5c7c-bf4f-4c96-bbfe-ecea99674877_jumbo_gold.jpg',
    url: '',
  }];

  const handleGoToFeaturedProductSection = () => {
    document.querySelector('#category-section').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className={classes.section}>
      {/*
      <ReactPlayer
        className={classes.player}
        width="100%"
        height="44rem"
        playing
        muted
        loop
        url={videoHero} />
      */}

      <Slider {...bannerSettings}>
        {bannerList.map((banner, index) => (
          <div key={index}>
            <img
              className={classes.bannerImage}
              src={banner.image}
              onClick={(event) => {
                event.preventDefault();
                if (banner.url !== '') window.open(banner.url, '_self');
              }}
              alt="home page banner"
            />
          </div>
        ))}
      </Slider>

      <div className={classes.moreInfoButtonContainer} onClick={handleGoToFeaturedProductSection}>
        <IconButton disableRipple>
          <div className="icon-scroll" />
        </IconButton>
      </div>
    </section>
  );
};

export default withStyles(styles)(BannerSection);
