import React from 'react';
import Slider from 'react-slick';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// components
import ProductCard from '../ProductCard';
import ComboDealProductCard from '../ComboDealProductCard';

// Styling
import styles from './style';

const lgSliderSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 7000,
  dots: true,
  pauseOnDotsHover: true,
  pauseOnHover: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 2000,
};

const mdSliderSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 7000,
  dots: true,
  pauseOnDotsHover: true,
  pauseOnHover: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  speed: 2000,
};

const ProductCardList = ({ classes, productList, comboDeal }) => {
  
  const renderProductCardList = () =>
    productList.map((item, index) =>
        comboDeal ? (
          <ComboDealProductCard item={item} index={index} key={index} />
        ) : (
          <ProductCard item={item} index={index} key={index} />
        ),
      );

  return (
    <div className={classes.productCardList} id="_slideUnit">
      <Hidden mdDown>
        {productList.length < 5 ? (
          <div
            className={classes.flexContainer}
            style={{
              gridTemplateColumns: `repeat(5, 1fr)`,
            }}
          >
            {renderProductCardList()}
          </div>
        ) : (
          <Slider {...lgSliderSettings}>{renderProductCardList()}</Slider>
        )}
      </Hidden>

      <Hidden only={['xs', 'lg', 'xl']}>
        {productList.length < 4 ? (
          <div
            className={classes.flexContainer}
            style={{
              gridTemplateColumns: `repeat(4, 1fr)`,
            }}
          >
            {renderProductCardList()}
          </div>
        ) : (
          <Slider {...mdSliderSettings}>{renderProductCardList()}</Slider>
        )}
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(ProductCardList);
