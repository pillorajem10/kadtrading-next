import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { Typography, withStyles, TextField, Paper, Checkbox } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { transaction, product, ui } from 'redux/actions';

// components
import { RatingStar } from 'jumbogold/product';
import { TransactionCartCard } from 'jumbogold/transaction';
import DeleteImageModal from 'routes/rating/components/DeleteImageModal';

// Picture
import leftIcon from 'public/assets/icons/chevron-left.svg';
import addPhotoIcon from 'public/assets/icons/add-photo.svg';
import removePhotoIcon from 'public/assets/icons/remove-photo.svg';

// Utils
import regExp from 'utils/regExp';

// Styling
import styles from 'routes/rating/style';

const Rating = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    user: { account },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query } = router;

  const uploader = useRef();

  const [order, setOrder] = useState({});
  const [item, setItem] = useState({});

  const [comment, setComment] = useState('');
  const [commentImages, setCommentImages] = useState([]);
  const [anonymous, setAnonymous] = useState(false);
  const [productRating, setProductRating] = useState(5);
  const [serviceRating, setServiceRating] = useState(5);
  const [deliveryRating, setDeliveryRating] = useState(5);

  const [selectedImage, setSelectedImage] = useState('');
  const [showDeleteImageModal, setShowDeleteImageModal] = useState(false);
  const [showOptionsBar, setShowOptionsBar] = useState(false);

  const handleGetTransactionDetails = useCallback(async () => {
    if (!regExp.isEmptyObject(query)) {
      const res = await dispatch(transaction.getTransactionDetails(query.transactionId));
      const { success, data } = res;

      if (success) {
        const filterOrder = data.orders.filter(
          (transactionOrder) => transactionOrder._id === query.orderId,
        )[0];
        setOrder(filterOrder);

        const filterItem = filterOrder.items.filter(
          (orderItem) => orderItem._id === query.itemId,
        )[0];
        setItem(filterItem);
      }
    }
  }, [dispatch, query]);

  useEffect(() => {
    handleGetTransactionDetails();
  }, [handleGetTransactionDetails]);

  useEffect(() => {
    const toggleOptionBar = () => {
      const scrolledPx = document.documentElement.scrollTop;
      const scrollAllowance =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPerc = scrolledPx / scrollAllowance;

      if (scrolledPerc > 0.05) {
        setShowOptionsBar(true);
      } else {
        setShowOptionsBar(false);
      }
    };

    window.addEventListener('scroll', toggleOptionBar);

    return () => {
      window.removeEventListener('scroll', toggleOptionBar);
    };
  }, []);

  const handleSetComment = (event) => {
    event.persist();
    setComment(event.target.value);
  };

  const handleTriggerUploader = () => {
    uploader.current.click();
  };

  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {};

    reader.readAsDataURL(file);

    let d = new FormData();
    let params = { container: 'review', prefix: item._id };
    let payload = { data: d, params };
    payload.data.append('file', file);

    const res = await dispatch(product.uploadReviewPicture(payload));
    const { success, data } = res;

    if (success) {
      setCommentImages((prevValues) => {
        return [...prevValues, data.url];
      });
    }
  };

  const handleShowDeleteImageModal = (image) => {
    setSelectedImage(image);
    setShowDeleteImageModal(true);
  };

  const handleHideDeleteImageModal = () => {
    setSelectedImage('');
    setShowDeleteImageModal(false);
  };

  const handleRemoveImage = () => {
    setCommentImages(commentImages.filter((image) => image !== selectedImage));
    handleHideDeleteImageModal();
  };

  const handleSubmitReview = async () => {
    const payload = {
      orderItemId: item._id,
      productId: item.productId,
      comment,
      commentImages,
      anonymous,
      productRating,
      serviceRating,
      deliveryRating,
      commentBy: anonymous ? 'Anonymous' : account.email,
      commentAvatar: anonymous ? '' : account.profilePic,
    };

    const res = await dispatch(product.createProductReview(payload));
    const { success } = res;

    if (success) {
      dispatch(ui.successNotification({ message: 'Review & rating added successfully.' }));

      router.push(`/user/transaction?id=${query.transactionId}`);
    }
  };

  if (regExp.isEmptyObject(order) && regExp.isEmptyObject(item)) return null;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <img
            src={leftIcon}
            alt=""
            onClick={() => router.push(`/user/transaction?id=${query.transactionId}`)}
          />
          <Typography>Rating & Review</Typography>
        </div>

        <div className={classes.orderDetailsContainer}>
          <Typography className={classes.companyName}>{order.merchantName}</Typography>
          <Typography className={classes.orderNumber}>order no: {order.seqId}</Typography>

          <div className={classes.statusContainer}>
            <Typography>Status</Typography>
            <div
              className={classes.status}
              style={{ backgroundColor: order.status === 'PROCESSING' ? '#ffce53' : '#92ed6e' }}
            >
              <Typography
                style={{
                  color: order.status === 'PROCESSING' ? 'rgba(0, 0, 0, 0.87)' : '#286614',
                }}
              >
                {order.status}
              </Typography>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <TransactionCartCard product={item} gst={order.gst} checkout />

        {/* Rating Section */}
        <div className={classes.ratingSectionContainer}>
          <div className={classes.ratingList}>
            <Typography>How accurate was the product description?</Typography>
            <RatingStar
              name="product-rating"
              value={productRating}
              onChange={(event, newValue) => {
                event.preventDefault();
                setProductRating(newValue);
              }}
              size="large"
            />
          </div>

          <div className={classes.ratingList}>
            <Typography>How satisfied were you with the store&apos;s service?</Typography>
            <RatingStar
              name="service-rating"
              value={serviceRating}
              onChange={(event, newValue) => {
                event.preventDefault();
                setServiceRating(newValue);
              }}
              size="large"
            />
          </div>

          <div className={classes.ratingList}>
            <Typography>How quickly were the items delivered?</Typography>
            <RatingStar
              name="delivery-rating"
              value={deliveryRating}
              onChange={(event, newValue) => {
                event.preventDefault();
                setDeliveryRating(newValue);
              }}
              size="large"
            />
          </div>
        </div>

        {/* Image List Section */}
        <div className={classes.imageSectionContainer}>
          {commentImages.map((img) => (
            <div className={classes.imageContainer} key={img}>
              <img src={img} alt="" className={classes.image} />
              <img
                src={removePhotoIcon}
                alt=""
                className={classes.removePhotoIcon}
                onClick={() => handleShowDeleteImageModal(img)}
              />
            </div>
          ))}

          {commentImages.length < 5 && (
            <div className={classes.imageUploader} onClick={handleTriggerUploader}>
              <input
                type="file"
                style={{ display: 'none' }}
                ref={uploader}
                onChange={handleUploadImage}
              />
              <div className={classes.imageUploaderContainer}>
                <img src={addPhotoIcon} alt="" />
                <Typography>Photo</Typography>
              </div>
            </div>
          )}
        </div>

        {/* Review Section */}
        <div className={classes.reviewSectionContainer}>
          <Typography className={classes.reviewLabel}>
            Product Review & Experience: (optional) {comment.length}/200
          </Typography>

          <TextField
            placeholder="Type your review here"
            multiline
            rows={6}
            variant="outlined"
            fullWidth
            color="primary"
            value={comment}
            onChange={handleSetComment}
            inputProps={{ maxLength: 200 }}
          />
        </div>
      </div>

      {/* Options Bar */}
      {showOptionsBar && (
        <Paper className={classes.optionBarContainer}>
          <div className={classes.optionBarInnerContainer}>
            <div className={classes.anonymousContainer}>
              <Checkbox
                color="primary"
                className={classes.checkbox}
                checked={anonymous}
                onChange={() => setAnonymous((preValue) => !preValue)}
              />
              <Typography>Leave Review as Anonymous</Typography>
            </div>

            <div className={classes.submit} onClick={handleSubmitReview}>
              SUBMIT
            </div>
          </div>
        </Paper>
      )}

      <DeleteImageModal
        open={showDeleteImageModal}
        onClose={handleHideDeleteImageModal}
        deleteImage={handleRemoveImage}
      />
    </>
  );
};

export default withStyles(styles)(Rating);
