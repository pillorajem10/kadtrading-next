import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

// MUI Stuff
import { Typography, withStyles, IconButton, Dialog, Button, TextField } from '@material-ui/core';

// MUI Icons
import EmailIcon from 'mdi-react/EmailIcon';

// components
import { ThreeDButton } from 'jumbogold/button';
import { Image } from 'jumbogold/common';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { common, updateThreeDProductId } from 'redux/actions';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const FavouriteItemCard = ({ classes, fav, removeFavouriteItem }) => {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.user);

  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [sent, setSent] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleShowEnquiryForm = () => setShowEnquiryForm(true);

  const handleHideEnquiryForm = () => {
    setShowEnquiryForm(false);
    setEnquiryForm('');
  };

  const handleSetEnquiryForm = (event) => {
    event.persist();

    setEnquiryForm(event.target.value);
  };

  const handleSubmitEnquiryForm = async () => {
    const payload = {
      userId: account.id,
      msg: enquiryForm,
      productId: fav.productId,
    };

    const res = await dispatch(common.sendProductEnquiry(payload));
    const { success } = res;

    if (success) {
      setEnquiryForm('');

      setSent(true);

      setTimeout(() => {
        setSent(false);
        setShowEnquiryForm(false);
      }, 3000);
    }
  };

  const handleRemoveFavouriteItem = () => {
    setIsSelected(true);

    removeFavouriteItem(fav.id);

    setTimeout(() => {
      setIsSelected(false);
    }, 250);
  };

  const handleOption3dDialog = () => {
    dispatch(updateThreeDProductId(fav.productId));
  };

  return (
    <div className={classes.favouriteItem}>
      <Link href="/product/[productId]" as={`/product/${fav.productId}`}>
        <a>
          <Image src={fav.image} alt="" className={classes.productImage} />
        </a>
      </Link>

      <Link href="/product/[productId]" as={`/product/${fav.productId}`}>
        <a>
          <Typography className={classes.productName}>{fav.name}</Typography>
        </a>
      </Link>

      <Typography className={classes.productPrice}>{formatPrice(fav.price)}</Typography>

      {fav.brand && (
        <div className={classes.brandContainer}>
          <Typography>Brand</Typography>

          <Link href={`/listing?brands=${encodeURIComponent(fav.brand)}`}>
            <a>
              <Typography>{fav.brand}</Typography>
            </a>
          </Link>
        </div>
      )}

      <div className={classes.merchantContainer}>
        <Typography>FROM</Typography>

        <Link href={`/listing?keyword=${encodeURIComponent(fav.merchantName)}`}>
          <a>
            <Typography>{fav.merchantName}</Typography>
          </a>
        </Link>
      </div>

      <div className={classes.favouriteItemFooter}>
        {fav.enable3D && (
          <div onClick={handleOption3dDialog}>
            <ThreeDButton />
          </div>
        )}

        <div>
          <EmailIcon className={classes.emailIcon} onClick={handleShowEnquiryForm} />

          <IconButton
            className={classes.iconButton}
            aria-label="favourite"
            color="primary"
            onClick={handleRemoveFavouriteItem}
          >
            <div className={`${classes.unheart} ${isSelected ? classes.unheartActive : ''}`} />
          </IconButton>
        </div>
      </div>

      <Dialog fullWidth maxWidth="md" onClose={handleHideEnquiryForm} open={showEnquiryForm}>
        <div className={classes.productEnquiryContainer}>
          {sent ? (
            <Typography className={classes.sentText}>
              Thank you! Your enquiry has been sent. Please be patient and we will be in touch soon!
            </Typography>
          ) : (
            <>
              <Typography className={classes.productEnquiryText}>
                Request for more information about this item / What are your concerns?
              </Typography>

              <TextField
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                color="primary"
                onChange={handleSetEnquiryForm}
              />

              <div className={classes.productEnquiryFooter}>
                <Typography onClick={handleHideEnquiryForm}>Cancel</Typography>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.submitBtn}
                  disabled={enquiryForm === ''}
                  onClick={handleSubmitEnquiryForm}
                >
                  submit
                </Button>
              </div>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(FavouriteItemCard);
