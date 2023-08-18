import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { Typography, withStyles } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { product } from 'redux/actions';

// Utils
import regExp from 'utils/regExp';

// components
import { RatingStar, ReviewCommentList } from 'jumbogold/product';
import { Pagination } from 'jumbogold/common';
import RatingStarBox from '../RatingStarBox';

// Styling
import styles from './style';

const ProductReviews = ({ classes }) => {
  const dispatch = useDispatch();
  const { reviewSummary } = useSelector((state) => state.product);
  const router = useRouter();
  const { query } = router;

  const [star, setStar] = useState('');
  const [pageDetails, setPageDetails] = useState({});
  const [reviewList, setReviewList] = useState([]);

  const handleGetProductReviews = useCallback(
    async (pageIndex = 1, rating = '') => {
      const params = { productId: query.productId, pageIndex, rating };
      const res = await dispatch(product.getProductReviewsByParams(params));
      const { success, data } = res;
      if (success) {
        setReviewList(data.docs);
        setPageDetails({ totalItem: data.totalPages, pageSize: data.page });
      }
    },
    [dispatch, query.productId],
  );

  useEffect(() => {
    handleGetProductReviews();
  }, [handleGetProductReviews]);

  const handleChangeStar = (value) => {
    setStar(value);
    handleGetProductReviews(1, value);
  };

  const handleChangePageIndex = (value) => {
    handleGetProductReviews(value, star);
  };

  if (regExp.isEmptyObject(reviewSummary)) return null;

  return (
    <>
      <div className={classes.ratingContainer}>
        <div className={classes.overallRatingContainer}>
          <Typography className={classes.overallRatingHeader}>Overall Rating</Typography>

          <div className={classes.overallRatingInnerContainer}>
            <Typography>{reviewSummary.overallRating}</Typography>
            <RatingStar readOnly value={reviewSummary.overallRating} />
          </div>
        </div>

        <div className={classes.ratingStarList}>
          <RatingStarBox
            count={reviewSummary.summary.map((item) => item.count).reduce((pre, cur) => pre + cur)}
            title="All"
            active={star === ''}
            setStar={handleChangeStar}
            hideStar
          />          

          {reviewSummary.summary.map((summary) => (
            <RatingStarBox
              key={summary.rating}
              count={summary.count}
              title={summary.rating}
              active={star === summary.rating}
              setStar={handleChangeStar}
            />
          ))}
        </div>
      </div>

      <div className={classes.reviewsContainer}>
        <div className={classes.reviewsHeader}>Product Reviews</div>

        {reviewList.length === 0 ? (
          <Typography className={classes.noReviewText}>No reviews in this rating</Typography>
        ) : (
          reviewList.map((review) => <ReviewCommentList key={review.id} review={review} />)
        )}

        {reviewList.length !== 0 && (
          <Pagination page={pageDetails} onPageChange={handleChangePageIndex} />
        )}
      </div>
    </>
  );
};

export default withStyles(styles)(ProductReviews);
