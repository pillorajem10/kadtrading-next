import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography, Button } from '@material-ui/core';

// components
import { Image } from 'jumbogold/common';

/*
import { useSelector, useDispatch } from 'react-redux';
import { product } from 'redux/actions';

// utils
import { formatPayloadParams } from 'utils/formatter';

import room1 from 'public/assets/jumbo/room1.png';
import room2 from 'public/assets/jumbo/room2.jpg';
import room3 from 'public/assets/jumbo/room3.jpg';
import room4 from 'public/assets/jumbo/room4.jpg';
import room5 from 'public/assets/jumbo/room5.jpg';
*/

// pics
import ss1 from 'public/assets/jumbo/signatureStone1.jpg';
import ss2 from 'public/assets/jumbo/signatureStone2.jpg';
import ss3 from 'public/assets/jumbo/signatureStone3.jpg';
import weddingBands from 'public/assets/jumbo/weddingBands.jpg';
import ooak from 'public/assets/jumbo/ooak.jpg';
import currentWork1 from 'public/assets/jumbo/currentWork1.jpg';
import currentWork2 from 'public/assets/jumbo/currentWork2.jpg';
import currentWork3 from 'public/assets/jumbo/currentWork3.jpg';
import currentWork4 from 'public/assets/jumbo/currentWork4.jpg';
import currentWork5 from 'public/assets/jumbo/currentWork5.jpg';
import currentWork6 from 'public/assets/jumbo/currentWork6.jpg';
import currentWork7 from 'public/assets/jumbo/currentWork7.jpg';
import currentWork8 from 'public/assets/jumbo/currentWork8.jpg';
import lilBitMoreUs1 from 'public/assets/jumbo/lilBitMoreUs1.jpg';
import lilBitMoreUs2 from 'public/assets/jumbo/lilBitMoreUs2.jpg';
import lilBitMoreUs3 from 'public/assets/jumbo/lilBitMoreUs3.jpg';
import lilBitMoreUs4 from 'public/assets/jumbo/lilBitMoreUs4.jpg';

// styling
import styles from './style';

const CategoriesSection = ({ classes }) => {
  /*
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.common);

  const [categoryList, setCategoryList] = useState([]);

  const handleGetCategoryList = useCallback(async () => {
    const categoriesIds = settings.featuredCategories ? settings.featuredCategories.split(',') : [];

    if (categoriesIds.length > 0) {
      const params = { categoryIds: categoriesIds };

      const res = await dispatch(product.getProductCategoryByBatchId(params));
      const { success, data } = res;

      if (success) {
        setCategoryList(data);
      }
    }
  }, [dispatch, settings.featuredCategories]);

  useEffect(() => {
    handleGetCategoryList();
  }, [handleGetCategoryList]);
  */

  const handleGoCategory = async (id) => {

    /*
    const level3Id = id;
    const level2Id = categoryList?.find((category) => category.id === id)?.parentId;

    const level1 = await dispatch(product.getProductCategoryById(level2Id));
    const level1Id = level1[0]?.parentId;

    const params = {
      c1: level1Id,
      c2: level2Id,
      c3: level3Id,
    };

    Router.push({
      pathname: '/products',
      query: {
        ...params,
      },
    });
    */
  };

  return (
    <section className={classes.section} id="category-section">
  
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>SIGNATURE STONES</Typography>
        <div className={classes.headerLine} />
      </div>


      <div className={classes.categoryList}>
        <div className={classes.card}>
          <Image src={ss1} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>SIGNATURE IDEAL DIAMONDS</Typography>
        </div>

        <div className={classes.card}>
          <Image src={ss2} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>SHOWCASE DIAMONDS</Typography>
        </div>

        <div className={classes.card}>
          <Image src={ss3} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>SHOWCASE GEMS</Typography>
        </div>

      </div>

      <div className={classes.categoryList1}>
        <div className={classes.card}>
          <Typography className={classes.header1}>WEDDING BANDS</Typography>
          <div className={classes.headerLine1} />
          <div>Browse Timeless Wedding Bands</div>
          <Image src={weddingBands} alt="signatureStone1" className={classes.categoryImage1}/>
        </div>
        <div className={classes.card}>
          <Typography className={classes.header1}>OOAK</Typography>
          <div className={classes.headerLine1} />
          <div>One of A Kind Items</div>
          <Image src={ooak} alt="signatureStone1" className={classes.categoryImage1}/>
        </div>
      </div>

      <div className={classes.headerContainer}>
        <Typography className={classes.header1}>CURRENT WORK</Typography>
        <div className={classes.headerLine1} />
        <div>Discover popular pieces from our treasure trove</div>
      </div>

      <div className={classes.categoryList}>
        <div className={classes.card}>
          <Image src={currentWork1} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>6 PRONG CLASSIC</Typography>
        </div>

        <div className={classes.card}>
          <Image src={currentWork2} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>TRILOGY</Typography>
        </div>

        <div className={classes.card}>
          <Image src={currentWork3} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>CATHEDRAL</Typography>
        </div>

        <div className={classes.card}>
          <Image src={currentWork4} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>MARQUISE TAPERED BAGUETTES</Typography>
        </div>

        <div className={classes.card}>
          <Image src={currentWork5} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>NSEW CHANNEL</Typography>
        </div>

        <div className={classes.card}>
          <Image src={currentWork6} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>CLASSIC ROUND HALO</Typography>
        </div>

        <div className={classes.card}>
          <Image src={currentWork7} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>DOUBLE HALO OVAL (SAPPHIRE)</Typography>
        </div>

        <div className={classes.card}>
          <Image src={currentWork8} alt="signatureStone1" className={classes.categoryImage}/>
          <Typography className={classes.categoryName}>SNOWFLAKE</Typography>
        </div>
      </div>

      <div className={classes.headerContainer}>
        <Typography className={classes.header1}>A Little Bit More About Us</Typography>
      </div>
      <div className={classes.categoryList}>

        <div className={classes.card}>
          <Image src={lilBitMoreUs1} alt="signatureStone1" className={classes.categoryImage}/>
        </div>

        <div className={classes.card}>
          <Image src={lilBitMoreUs2} alt="signatureStone1" className={classes.categoryImage}/>
        </div>

        <div className={classes.card}>
          <Image src={lilBitMoreUs3} alt="signatureStone1" className={classes.categoryImage}/>
        </div>

        <div className={classes.card}>
          <Image src={lilBitMoreUs4} alt="signatureStone1" className={classes.categoryImage}/>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(CategoriesSection);
