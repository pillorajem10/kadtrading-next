import React, { useState, Fragment } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Grow, IconButton, Paper, Popper, Typography } from '@material-ui/core';

// MUI Icons
import ShareIcon from '@material-ui/icons/Share';

// Redux
import { useSelector } from 'react-redux';

// Utils
import regExp from 'utils/regExp';

// components
import { ProductLabel, FavIcon } from 'jumbogold/product';
import ShareOptions from '../ShareOptions';

// Styling
import styles from './style';

const ProductNameInfo = ({ classes }) => {
  const { merchant, productDetails, variant } = useSelector((state) => state.product);
  const { profile } = useSelector((state) => state.merchant);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleShowShareOptions = (event) => setAnchorEl(anchorEl ? null : event.currentTarget);

  const handleCloseShareOptions = () => setAnchorEl(null);

  const openShareOptions = Boolean(anchorEl);
  const shareOptionsId = openShareOptions ? 'transitions-popper' : undefined;

  return (
    <div className={classes.productNameInfo}>
      <div className={classes.productLabelsWrapper}>
        {/* Featured Tag */}
        {productDetails.featured && <ProductLabel label="FEATURED" color="WHITE" />}        

        {/* Product Labels */}
        {productDetails.labels?.map(({ name, id, colorTheme }) => (
          <ProductLabel label={name} color={colorTheme} key={id} />
        ))}
      </div>

      {/* SKU */}
      {/*(productDetails.sku || variant.sku) && (
        <Typography className={classes.productSKU}>
          SKU: {productDetails.sku || variant.sku}
        </Typography>
      )*/}

      <div className={classes.productInfoWrapper}>
        <div>
          {/* Product Name */}
          <Typography className={classes.productName}>{productDetails.name}</Typography>

          {/* Merchant */}
          <div className={classes.merchantWrapper}>

            {/*
            <Typography className={classes.merchantLabel}>From</Typography>
            <Link href={`/merchant?merchantIds=${profile.account_id}`}>
              <a>
                <Typography className={classes.merchantText}>
                  {profile.company}
                </Typography>
              </a>
            </Link>            
            */}

            {productDetails.represent !== 'setting' && productDetails.has_cert_file &&
              <>
                <Typography
                  style={{ cursor: 'pointer' }}
                  onClick={(event) => {
                    event.preventDefault();
                    window.open(`http://www.diamondselections.com/GetCertificate.aspx?diamondid=${productDetails.id}`, '_blank');
                  }}            
                  className={classes.merchantLabel}>{productDetails.cert_num} | Graded By {productDetails.lab}</Typography>
              </>
            }

            {/* if no brand, then no need show */}
            {!regExp.isEmpty(productDetails.brand) && (
              <>
                <Typography className={classes.merchantLabel}>|</Typography>
                <Typography className={classes.merchantLabel}>Brand</Typography>


                <Link href={`/listing?brands=${encodeURIComponent(productDetails.brand)}`}>
                  <a>
                    <Typography className={classes.merchantText}>{productDetails.brand}</Typography>
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Options */}
        <div className={classes.optionsWrapper}>
          {/* Favoraite Button 
          <IconButton className={classes.iconButton}>
            <FavIcon productId={productDetails.id} />
          </IconButton>          
          */}


          {/* Share Button */}
          <IconButton
            className={classes.iconButton}
            aria-describedby={shareOptionsId}
            onClick={handleShowShareOptions}
          >
            <ShareIcon />
          </IconButton>

          {/* Share Options Dropdown List */}
          <Popper id={shareOptionsId} open={openShareOptions} anchorEl={anchorEl} transition>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper id="menu-list-grow">
                  <ShareOptions handleClose={handleCloseShareOptions} />
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProductNameInfo);
