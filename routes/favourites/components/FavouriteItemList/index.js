import React, { useState } from 'react';
import Link from 'next/link';

//  MUI Stuff
import { withStyles, Typography, Button, Collapse, IconButton, TextField } from '@material-ui/core';

// MUI Icons
import EmailIcon from '@material-ui/icons/Email';

// components
import { ThreeDButton } from 'jumbogold/button';
import { Image } from 'jumbogold/common';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { common, updateThreeDProductId } from 'redux/actions';

// Utils
import { formatPrice } from 'utils/methods';

// Styling
import styles from './style';

const FavouriteItemList = ({ classes, fav, removeFavouriteItem }) => {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.user);

  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState('');
  const [sent, setSent] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleEnquiryForm = () => {
    if (showEnquiryForm) {
      setEnquiryForm('');
    }

    setShowEnquiryForm((prevValue) => !prevValue);
  };

  const handleSetEnquiryForm = (event) => {
    event.persist();

    setEnquiryForm(event.target.value);
  };

  const handleCloseEnquiryForm = () => {
    setShowEnquiryForm(false);
    setEnquiryForm('');
  };

  const handleSubmitEnquiryForm = async () => {
    const payload = {
      userId: account.id,
      msg: enquiryForm,
      productId: fav.productId,
    };

    handleCloseEnquiryForm();

    const res = await dispatch(common.sendProductEnquiry(payload));
    const { success } = res;

    if (success) {
      setSent(true);

      setTimeout(() => {
        setSent(false);
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
    <div key={fav.id} className={classes.favouriteItem}>
      <Link href="/product/[productId]" as={`/product/${fav.productId}`}>
        <a>
          <Image src={fav.image} alt="" className={classes.productImage} />
        </a>
      </Link>

      <div className={classes.container}>
        <div className={classes.productInfoContainer}>
          <div>
            <Link href="/product/[productId]" as={`/product/${fav.productId}`}>
              <a>
                <Typography className={classes.productName}>{fav.name}</Typography>
              </a>
            </Link>

            <div className={classes.merchantContainer}>
              <Typography>Merchant</Typography>

              <Link href={`/listing?keyword=${encodeURIComponent(fav.merchantName)}`}>
                <a>
                  <Typography>{fav.merchantName}</Typography>
                </a>
              </Link>
            </div>

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

            <Typography className={classes.productPrice}>{formatPrice(fav.price)}</Typography>
          </div>

          <div className={classes.iconGroup}>
            {/* Favourite Icon */}
            <div>
              <IconButton
                className={classes.iconButton}
                aria-label="favourite"
                color="primary"
                onClick={handleRemoveFavouriteItem}
              >
                <div className={`${classes.unheart} ${isSelected ? classes.unheartActive : ''}`} />
              </IconButton>
            </div>

            {/* Product Enquiry Icon */}
            <EmailIcon className={classes.emailIcon} onClick={handleToggleEnquiryForm} />

            {/* 3D Button */}
            {fav.enable3D && (
              <div className={classes.threeDButton} onClick={handleOption3dDialog}>
                <ThreeDButton />
              </div>
            )}
          </div>
        </div>

        {/* Product Enquiry Form */}
        <Collapse in={showEnquiryForm} timeout={500}>
          <div className={classes.productEnquiryContainer}>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              color="primary"
              onChange={handleSetEnquiryForm}
              value={enquiryForm}
            />

            <div className={classes.productEnquiryFooter}>
              <Typography onClick={handleCloseEnquiryForm}>Cancel</Typography>
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
          </div>
        </Collapse>

        {sent && (
          <div className={classes.sentContainer}>
            <Typography>
              Thank you! Your enquiry has been sent. Please be patient and we will be in touch soon!
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(FavouriteItemList);
