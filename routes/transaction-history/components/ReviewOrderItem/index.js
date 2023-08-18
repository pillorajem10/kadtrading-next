import React, { useState, useRef } from 'react';

// MUI Stuff
import { withStyles, Typography, TextField, Button, Checkbox, Hidden } from '@material-ui/core';

// components
import { RatingStar } from 'jumbogold/product';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { product } from 'redux/actions';

// Picture
import promoIcon from 'public/assets/icons/promo.svg';
import addPhotoIcon from 'public/assets/icons/add-photo.svg';
import removePhotoIcon from 'public/assets/icons/remove-photo.svg';

// utils
import { formatPrice } from 'utils/methods';

// hooks
import useCurrency from 'hooks/useCurrency';

// Styling
import styles from './style';

const ReviewOrderItem = ({ classes, order, item, onClose, submitReview }) => {
  const dispatch = useDispatch();
  const { updatePriceByCurrency } = useCurrency();
  const {
    user: { account },
  } = useSelector((state) => state);

  const uploader = useRef();

  const [comment, setComment] = useState('');
  const [commentImages, setCommentImages] = useState([]);
  const [anonymous, setAnonymous] = useState(false);
  const [productRating, setProductRating] = useState(5);
  const [serviceRating, setServiceRating] = useState(5);
  const [deliveryRating, setDeliveryRating] = useState(5);

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

  const handleRemoveImage = (selectedImage) => {
    setCommentImages(commentImages.filter((image) => image !== selectedImage));
  };

  const handleSubmitReview = () => {
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

    submitReview(payload);
  };

  return (
    <div>
      <Typography className={classes.header}>Rating & Review</Typography>

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

      <div className={classes.orderDetailsHeader}>
        <div className={classes.orderDetailsItem}>
          <Typography>Product</Typography>
        </div>

        <div className={classes.orderDetailsItem}>
          <Typography></Typography>
        </div>        

        <div className={classes.orderDetailsItem}>
          <Typography>Subtotal</Typography>
        </div>

        <div className={classes.orderDetailsItem}>
          <Typography>QTY</Typography>
        </div>
      </div>

      <div className={classes.productContainer}>
        <div style={{ flex: 1 }} className={classes.productItem}>
          <div className={classes.productDetails}>
            <img src={item.image} alt={item.productName} className={classes.productImage} />

            <div>
              <Typography className={classes.productName}>{item.productName}</Typography>
              {/*
              <Typography className={classes.productVariant}>
                {item.variantName} {item.variantPrice !== 0 ? `+$${item.variantPrice}` : ''}
              </Typography>
              <Typography
                className={classes.productVariant}
                style={{ marginBottom: item.promoName !== null ? 35 : 0 }}
              >
                {item.optionName} {item.optionPrice !== 0 ? `+$${item.optionPrice}` : ''}
              </Typography>              
              */}

              {item.isBundle &&
                <div className={classes.buildringContainer}>
                  <div className={classes.buildring}>
                    <img src={promoIcon} alt="" height={16} width={16} />
                    <Typography>Build a Ring</Typography>
                  </div>
                </div>                    
              }
              
              {/*item.promoName !== null && (
                <div className={classes.promotionContainer}>
                  <div className={classes.promotion}>
                    <img src={promoIcon} alt="" height={16} width={16} />
                    <Typography>PROMO!</Typography>
                  </div>
                  <Typography>{item.promoName}</Typography>
                </div>
              )*/}
            </div>
          </div>
        </div>
        
        {/*
        <div className={classes.productItem}>
          <Typography className={classes.productSku}>{item.sku}</Typography>
        </div>        
        */}

        <div className={classes.productItem}>
          {item.price !== item.originalPrice ? (
            <div className={classes.productPriceContainer}>
              <Typography className={classes.salePrice}>
                {formatPrice(updatePriceByCurrency(Math.round(item.price)), order.currency ? order.currency : '')}
              </Typography>
              {/*
              <Typography className={classes.originalPrice}>
                {formatPrice(
                  item.originalPrice + item.optionOriginalPrice + item.variantOriginalPrice,
                )}
              </Typography>              
              */}

            </div>
          ) : (
            <Typography className={classes.normalPrice}>
              {formatPrice(updatePriceByCurrency(Math.round(item.price)), order.currency ? order.currency : '')}
            </Typography>
          )}

          {order.shippingFee === 0 && <Typography className={classes.productGst}>(Gst included)</Typography>}
        </div>

        <div className={classes.productItem}>
          <Typography className={classes.productQty}>x {item.qty}</Typography>
        </div>
      </div>

      <div className={classes.reviewSectionContainer}>
        <div className={classes.ratingList}>
          <Typography>How accurate was the product description?</Typography>
          <RatingStar
            name="product-rating"
            value={productRating}
            onChange={(event, newValue) => {
              event.preventDefault();
              setProductRating(newValue);
            }}
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
          />
        </div>

        <div className={classes.imageList}>
          {commentImages.map((img, idx) => (
            <div className={classes.imageContainer} key={idx}>
              <img src={img} alt="" className={classes.image} />
              <img
                src={removePhotoIcon}
                alt=""
                className={classes.removePhotoIcon}
                onClick={() => handleRemoveImage(img)}
              />
            </div>
          ))}

          {commentImages.length < 5 && (
            <div className={classes.addPhotoContainer} onClick={handleTriggerUploader}>
              <input
                type="file"
                style={{ display: 'none' }}
                ref={uploader}
                onChange={handleUploadImage}
              />
              <div className={classes.addPhotoInnerContainer}>
                <img src={addPhotoIcon} alt="" />
                <Typography>Photo</Typography>
              </div>
            </div>
          )}
        </div>

        <Typography className={classes.reviewLabel}>
          Product Review & Experience: (optional) {comment.length}/200
        </Typography>

        <TextField
          multiline
          rows={6}
          variant="outlined"
          fullWidth
          color="primary"
          value={comment}
          onChange={handleSetComment}
          inputProps={{ maxLength: 200 }}
        />

        <Hidden mdUp>
          <div className={classes.anonymousContainer}>
            <Checkbox
              color="primary"
              className={classes.checkbox}
              checked={anonymous}
              onChange={() => setAnonymous((preValue) => !preValue)}
            />
            <Typography>Leave Review as Anonymous</Typography>
          </div>
        </Hidden>

        <div className={classes.btnGroup}>
          <Hidden smDown>
            <div className={classes.anonymousContainer}>
              <Checkbox
                color="primary"
                className={classes.checkbox}
                checked={anonymous}
                onChange={() => setAnonymous((preValue) => !preValue)}
              />
              <Typography>Leave Review as Anonymous</Typography>
            </div>
          </Hidden>

          <Button className={classes.cancelBtn} onClick={onClose}>
            Cancel
          </Button>

          <Button
            color="primary"
            variant="contained"
            className={classes.confirmBtn}
            onClick={handleSubmitReview}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ReviewOrderItem);
