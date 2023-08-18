import React, { Fragment, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// utils
import { removePropFromQuery } from 'utils/listing';
import regExp from 'utils/regExp';

// components
import { FilterTag } from 'jumbogold/listing/common';
import TotalProductCount from '../../components/TotalProductCount';

// styling
import styles from './style';

const ProductsTagSection = ({ classes }) => {
  const {
    product: { categoryList },
    listing: { tagList },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const handleRemoveTag = (key, value) => {
    router.push({
      pathname,
      query: removePropFromQuery(key, value, query),
    });
  };

  const handleClearAllTags = () => {
    router.push(pathname);
  };

  const handleRemoveCategoryTag = () => {
    const { c1, c2, c3, ...rest } = query;

    router.push({
      pathname,
      query: { ...rest },
    });
  };

  const handleRemovePriceTag = () => {
    const { minPrice, maxPrice, ...rest } = query;

    router.push({
      pathname,
      query: { ...rest },
    });
  };

  const handleRemoveDeliveryTag = () => {
    const { minEddWeeks, maxEddWeeks, ...rest } = query;

    router.push({
      pathname,
      query: { ...rest },
    });
  };

  const renderCategoryTag = useCallback(() => {
    if (categoryList) {
      const level2List = categoryList.reduce((pre, cur) => {
        return [...pre, ...cur.categories];
      }, []);
      const level3List = [...level2List].reduce((pre, cur) => {
        return [...pre, ...cur.categories];
      }, []);

      return [...level2List, ...level3List]?.find((category) => category.id === tagList.c3)?.name;
    }

    return null;
  }, [categoryList, tagList.c3]);

  const renderPriceTag = useCallback(() => {
    if (tagList.minPrice !== null && tagList.maxPrice !== null)
      return `$${tagList.minPrice} - $${tagList.maxPrice}`;

    return null;
  }, [tagList.minPrice, tagList.maxPrice]);

  const renderDeliveryTag = useCallback(() => {
    if (tagList.minEddWeeks !== null && tagList.maxEddWeeks !== null) {
      return `${tagList.minEddWeeks === '10' ? '9+' : tagList.minEddWeeks} - ${
        tagList.maxEddWeeks === '10' ? '9+' : tagList.maxEddWeeks
      } Weeks`;
    }

    return null;
  }, [tagList.minEddWeeks, tagList.maxEddWeeks]);

  return (
    <div className={classes.productsTagSection}>
      {/* Total Product Count */}
      <Hidden xsDown>
        <TotalProductCount />
      </Hidden>

      <Hidden smUp>
        <Fragment>
          {!regExp.isEmptyObject(tagList) && (
            <div className={classes.mobileHeaderWrapper}>
              <Typography className={classes.tagsYourChoice}>Your Choice</Typography>

              <Typography className={classes.tagsClearAll} onClick={handleClearAllTags}>
                clear all
              </Typography>
            </div>
          )}
        </Fragment>
      </Hidden>

      {/* Products Filter Tags */}
      {!regExp.isEmptyObject(tagList) && (
        <div className={classes.tagsWrapper}>
          <Hidden xsDown>
            <Typography className={classes.tagsYourChoice}>Your Choice</Typography>
          </Hidden>

          <div className={classes.tagsList}>
            {/* Price Range */}
            {(tagList.minPrice || tagList.maxPrice) && (
              <FilterTag text={renderPriceTag()} onRemove={handleRemovePriceTag} />
            )}

            {/* Delivery Time */}
            {(tagList.minEddWeeks || tagList.maxEddWeeks) && (
              <FilterTag text={renderDeliveryTag()} onRemove={handleRemoveDeliveryTag} />
            )}

            {/* Category Tag */}
            {tagList.c3 && (
              <FilterTag text={renderCategoryTag()} onRemove={handleRemoveCategoryTag} />
            )}

            {/* Keyword Tag */}
            {tagList.keyword && (
              <FilterTag
                text={`Search: ${decodeURIComponent(tagList.keyword)}`}
                onRemove={() => handleRemoveTag('keyword', decodeURIComponent(tagList.keyword))}
              />
            )}

            {/* Featured Tag */}
            {tagList.featured && (
              <FilterTag text="Featured" onRemove={() => handleRemoveTag('featured', 'true')} />
            )}

            {/* Sale Tag */}
            {tagList.sale && (
              <FilterTag text="Sale" onRemove={() => handleRemoveTag('sale', 'true')} />
            )}

            {/* 3D Tag */}
            {tagList.enable3D && (
              <FilterTag text="3D" onRemove={() => handleRemoveTag('enable3D', 'true')} />
            )}

            {/* Color Group Tag */}
            {tagList.colorGroups?.map((color, index) => (
              <FilterTag
                key={index}
                text={decodeURIComponent(color)}
                onRemove={() => handleRemoveTag('colorGroups', decodeURIComponent(color))}
              />
            ))}

            {/* Material Tag */}
            {tagList.materials?.map((material, index) => (
              <FilterTag
                key={index}
                text={decodeURIComponent(material)}
                onRemove={() => handleRemoveTag('materials', decodeURIComponent(material))}
              />
            ))}

            {/* Labels Tag */}
            {tagList.labels?.map((label, index) => (
              <FilterTag
                key={index}
                text={decodeURIComponent(label)}
                onRemove={() => handleRemoveTag('labels', decodeURIComponent(label))}
              />
            ))}

            {/* Styles Tag */}
            {tagList.styles?.map((style, index) => (
              <FilterTag
                key={index}
                text={decodeURIComponent(style)}
                onRemove={() => handleRemoveTag('styles', decodeURIComponent(style))}
              />
            ))}

            {/* Clear All  */}
            <Hidden xsDown>
              <Typography className={classes.tagsClearAll} onClick={handleClearAllTags}>
                clear all
              </Typography>
            </Hidden>
          </div>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(ProductsTagSection);
