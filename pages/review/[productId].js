import React, { useEffect, useMemo, useCallback, useState } from 'react';
import Router from 'next/router';

// MUI Stuff
import { Typography, withStyles } from '@material-ui/core';

// components
import { RatingStar, MobileReviewCommentList } from 'jumbogold/product';
import { Pagination } from 'jumbogold/common';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { product } from 'redux/actions';

// Picture
import leftIcon from 'public/assets/icons/chevron-left.svg';
import primaryStar from 'public/assets/icons/primary-rating-star.svg';
import whiteStar from 'public/assets/icons/white-rating-star.svg';

// Styling
import styles from 'routes/review/style';

const ratingList = [5, 4, 3, 2, 1];

const Review = ({ classes, query: { productId } }) => {
  const dispatch = useDispatch();
  const { reviewSummary } = useSelector((state) => state.product);

  const [activeIndex, setActiveIndex] = useState('');
  const [pageDetails, setPageDetails] = useState({});
  const [reviewList, setReviewList] = useState([]);

  const handleGetProductReviews = useCallback(
    async (pageIndex = 1, rating = '') => {
      const params = { productId, pageIndex, rating };

      const res = await dispatch(product.getProductReviewsByParams(params));
      const { success } = res;

      if (success) {
        const { data, page } = res;

        setReviewList(data);
        setPageDetails(page);
      }
    },
    [dispatch, productId],
  );
  
  /*
  useEffect(() => {
    dispatch(product.getProductReviewSummary(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    handleGetProductReviews();
  }, [handleGetProductReviews]);
  */

  const handleChangeActiveIndex = (index) => {
    setActiveIndex(index);
    // handleGetProductReviews(1, index);
  };

  const handleChangePageIndex = (value) => {
    // handleGetProductReviews(value, activeIndex);
  };

  const totalCount = useMemo(() => {
    return reviewSummary.summary?.map((item) => item.count).reduce((pre, cur) => pre + cur);
  }, [reviewSummary.summary]);

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <img
          src={leftIcon}
          alt=""
          onClick={() => Router.push('/product/[productId]', `/product/${productId}`)}
        />

        <div>
          <Typography className={classes.header}>Overall Rating</Typography>

          <div className={classes.ratingContainer}>
            <Typography>{reviewSummary.overallRating}</Typography>
            <RatingStar value={reviewSummary.overallRating} readOnly />
          </div>
        </div>
      </div>

      <div className={classes.ratingStarContainer}>
        <div
          className={activeIndex === '' ? classes.activeAllBox : classes.allBox}
          onClick={() => handleChangeActiveIndex('')}
        >
          <Typography>All ({totalCount})</Typography>
        </div>

        <div className={classes.ratingStarList}>
          {ratingList.map((item) => (
            <div
              className={activeIndex === item ? classes.activeStarBox : classes.starBox}
              key={item}
              onClick={() => handleChangeActiveIndex(item)}
            >
              <Typography>{item}</Typography>
              <img src={activeIndex === item ? whiteStar : primaryStar} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className={classes.reviewListContainer}>
        {reviewList.length === 0 ? (
          <Typography className={classes.noReviewText}>No reviews in this rating</Typography>
        ) : (
          reviewList.map((review) => <MobileReviewCommentList key={review.id} review={review} />)
        )}
      </div>

      {reviewList.length !== 0 && (
        <Pagination page={pageDetails} onPageChange={handleChangePageIndex} />
      )}
    </div>
  );
};

Review.getInitialProps = ({ query }) => {
  return { query };
};

export default withStyles(styles)(Review);
