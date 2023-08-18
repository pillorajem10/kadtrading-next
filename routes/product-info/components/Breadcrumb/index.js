import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Breadcrumbs, Typography } from '@material-ui/core';

// MUI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { product } from 'redux/actions';

// utils
import regExp from 'utils/regExp';

// Styling
import styles from './style';

const levelsIntitialValue = {
  level1: {},
  level2: {},
  level3: {},
};

const Breadcrumb = ({ classes }) => {
  const dispatch = useDispatch();
  const { productDetails } = useSelector((state) => state.product);
  const [levels, setLevels] = useState(levelsIntitialValue);

  const handleProductCategory = useCallback(async () => {
    if (!regExp.isEmptyObject(productDetails)) {
      const categoryId = productDetails.categories[0] ?? '';

      const level3 = await dispatch(product.getProductCategoryById(categoryId));
      const level3Id = level3[0]?.parentId;

      const level2 = await dispatch(product.getProductCategoryById(level3Id));
      const level2Id = level2[0]?.parentId;

      const level1 = await dispatch(product.getProductCategoryById(level2Id));

      setLevels({ level1: level1[0], level2: level2[0], level3: level3[0] });
    }
  }, [dispatch, productDetails]);

  useEffect(() => {
    handleProductCategory();
  }, [handleProductCategory]);

  return (
    <section className={classes.section}>
      {Object.keys(levels).length === 3 && (
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<ChevronRightIcon className={classes.breadcrumbIcon} />}
        >
          <Link href="/">
            <a>
              <Typography className={classes.breadcrumbLink}>Home</Typography>
            </a>
          </Link>

          <Link href="/category/[categoryId]" as={`/category/${levels.level1?.id}`}>
            <a>
              <Typography className={classes.breadcrumbLink}>{levels.level1?.name}</Typography>
            </a>
          </Link>

          <Link href={`/products?c1=${levels.level1?.id}&c2=${levels.level2?.id}`}>
            <a>
              <Typography className={classes.breadcrumbLink}>{levels.level2?.name}</Typography>
            </a>
          </Link>

          <Link
            href={`/products?c1=${levels.level1?.id}&c2=${levels.level2?.id}&c3=${levels.level3?.id}`}
          >
            <a>
              <Typography className={classes.breadcrumbLink}>{levels.level3?.name}</Typography>
            </a>
          </Link>

          <Typography className={classes.breadcrumbText}>{productDetails.name}</Typography>
        </Breadcrumbs>
      )}
    </section>
  );
};

export default withStyles(styles)(Breadcrumb);
