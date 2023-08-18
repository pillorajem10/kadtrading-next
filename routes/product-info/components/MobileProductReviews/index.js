import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Button } from '@material-ui/core';

// components
import { MobileReviewCommentList } from 'jumbogold/product';

// Redux
import { useDispatch } from 'react-redux';
import { product } from 'redux/actions';

// Styling
import styles from './style';

const MobileProductReviews = ({ classes }) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { query } = router;

  const [reviewList, setReviewList] = useState([]);

  const handleGetProductReviews = useCallback(async () => {
    const params = { productId: query.productId, pageIndex: 1, pageSize: 3 };

    const res = await dispatch(product.getProductReviewsByParams(params));
    const { success } = res;

    if (success) {
      const { data } = res;

      setReviewList(data);
    }
  }, [dispatch, query.productId]);

  useEffect(() => {
    handleGetProductReviews();
  }, [handleGetProductReviews]);

  return (
    <div className={classes.container}>
      {reviewList.map((review) => (
        <MobileReviewCommentList key={review.id} review={review} />
      ))}

      <Button
        className={classes.viewMoreRatingButton}
        color="primary"
        variant="contained"
        onClick={() => router.push('/review/[productId]', `/review/${query.productId}`)}
      >
        View more rating
      </Button>
    </div>
  );
};

export default withStyles(styles)(MobileProductReviews);
