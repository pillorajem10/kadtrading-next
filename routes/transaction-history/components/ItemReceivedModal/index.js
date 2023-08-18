import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Dialog } from '@material-ui/core';

import OrderItemReceived from '../OrderItemReceived';
import ReviewOrderItem from '../ReviewOrderItem';

const styles = () => ({
  orderItemReceived: {
    borderRadius: 15,
    maxWidth: 676,
    width: 676,
    backgroundColor: '#ffffff',
  },
  reviewOrderItem: {
    borderRadius: 15,
    maxWidth: 883,
    width: 883,
    backgroundColor: '#ffffff',
  },
});

const ItemReceivedModal = ({ classes, open, onClose, order, item, submitReview }) => {
  const [showReviewOrderItem, setShowReviewOrderItem] = useState(false);

  const handleCloseItemReceiveModal = () => {
    onClose();
    setShowReviewOrderItem(false);
  };

  const handleShowReviewOrderItem = () => setShowReviewOrderItem(true);

  return (
    <Dialog
      onClose={handleCloseItemReceiveModal}
      open={open}
      classes={{ paper: showReviewOrderItem ? classes.reviewOrderItem : classes.orderItemReceived }}
    >
      {!showReviewOrderItem ? (
        <OrderItemReceived
          item={item}
          onClose={handleCloseItemReceiveModal}
          showReviewOrderItem={handleShowReviewOrderItem}
        />
      ) : (
        <ReviewOrderItem
          item={item}
          order={order}
          onClose={handleCloseItemReceiveModal}
          submitReview={submitReview}
        />
      )}
    </Dialog>
  );
};

export default withStyles(styles)(ItemReceivedModal);
