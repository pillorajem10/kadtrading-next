import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// components
import Breadcrumb from 'routes/category/components/Breadcrumb';

// Redux
import { useDispatch } from 'react-redux';
import { product } from 'redux/actions';

// picture
import defaultImg from 'public/assets/images/wizzo/shi.png';

// Styling
import styles from 'routes/category/style';

const Category = ({ classes }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [category, setCategory] = useState({});
  const { query: { categoryId } } = router;

  const handleGetProductCategory = useCallback(async () => {
    if (categoryId) {
      const res = await dispatch(product.getProductCategoryById(categoryId));
      if (res?.length > 0) {
        setCategory(res[0]);
      }
    }
  }, [dispatch, categoryId]);

  useEffect(() => {
    handleGetProductCategory();
  }, [handleGetProductCategory]);

  const handleGoProductListing = (cat, catId) => {
    let type = 'product';

    if (cat.name === 'In House Diamonds') {
      type = 'inhouse';
    };
    if (cat.name === 'Global Diamonds') {
      type = 'globald';
    };

    if (cat.name === 'In House Gemstones') {
      type = 'gemstone';
    };

    router.push({
      pathname: '/products',
      query: {
        c1: categoryId,
        c2: catId,
        type,
      },
    });
  };

  if (!categoryId) return null;
  if (Object.keys(category).length === 0) return null;

  const categoryName = category.name === 'Root' ? 'Main Categories' : category.name;

  return (
    <div className={classes.category}>
      <div className={classes.container}>
        <Breadcrumb name={categoryName} />

        <Hidden xsDown>
          <Typography className={classes.header}>{categoryName}</Typography>
        </Hidden>

        <div className={classes.gridContainer}>
          {category.categories.map((cat) => (
            <div key={cat.id} onClick={() => handleGoProductListing(cat, cat.id)}>
              <img src={cat.moodshot !== '' ?  cat.moodshot : defaultImg} alt={cat.name} className={classes.categoryImage} />
              <Typography className={classes.categoryName}>{cat.name}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Category);
