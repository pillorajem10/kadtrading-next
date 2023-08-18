import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

// MUI Stuff
import { withStyles, Grow, Hidden, IconButton, Paper, Popper, Typography } from '@material-ui/core';

// MUI Icons
import ShareIcon from '@material-ui/icons/Share';
import SettingsIcon from '@material-ui/icons/Settings';

// Picture
import LightOnIcon from 'public/assets/icons/lighton.svg';
import LightOffIcon from 'public/assets/icons/lightoff.svg';

// Components
import { ProductLabel, FavIcon } from 'jumbogold/product';
import ShareOptions from '../ShareOptions';

// Styling
import styles from './style';

const ProfileInfo = (props) => {
  const { classes, product } = props;
  const [open, setOpen] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [isBlack, setIsBlack] = useState(false);
  const [isGray, setIsGray] = useState(false);
  const [el, setEl] = useState(null);

  const anchorRef = useRef();

  const handleChangeBg = (e, v) => {
    props.handleChangeBg(e, v);
    if (v === 0x000000) {
      setIsGray(false);
      setIsBlack(true);
    }
    if (v === 0x909090) {
      setIsGray(true);
      setIsBlack(false);
    }
    if (v === 0xffffff) {
      setIsGray(false);
      setIsBlack(false);
    }
  };

  const showBackgroundColors = () => {
    setOpenColors(!openColors);
  };

  const onClickShare = (e) => {
    setEl(e.currentTarget);
    setOpen(!open);
    props.handleOpenShare(!open);
  };

  const handleCloseModal = () => props.handleClose();

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return null;
    }
    return true;
  };

  useEffect(() => {
    const { background3D } = product;
    if (background3D === 'BLACK') {
      setIsGray(false);
      setIsBlack(true);
    }
    if (background3D === 'GREY') {
      setIsGray(true);
      setIsBlack(false);
    }
    if (background3D === null || background3D === 'WHITE') {
      setIsGray(false);
      setIsBlack(false);
    }
  }, []);

  if (!product) return null;

  return (
    <div className={classes.layout}>
      <div className={classes.flexContainer}>
        {product.featured && <ProductLabel label="FEATURED" color="WHITE" />}

        {product.labels &&
          product.labels.map(({ name, id, colorTheme }) => (
            <ProductLabel label={name} color={colorTheme} key={id} />
          ))}
      </div>

      <div className={classes.headerUnit}>
        <div className={classes.header}>
          <Typography className={`${classes.name} ${isBlack ? classes.isBlack : ''}`}>
            {product.name}
          </Typography>

          <Hidden smUp>
            <div className={classes.margin} />
          </Hidden>

          <div className={classes.merchantUnit}>
            <div className={classes.merchantRow}>
              <Typography className={`${classes.merchantLabel} ${isBlack ? classes.isBlack : ''}`}>
                From
              </Typography>

              <Link href={`/merchant?merchantIds=${product.merchantId}`}>
                <a onClick={handleCloseModal} className={classes.peow}>
                  <Typography
                    className={`${classes.merchant} ${isBlack ? classes.isBlack : ''} ${
                      isGray ? classes.isGray : ''
                    }`}
                  >
                    {product.merchantName}
                  </Typography>
                </a>
              </Link>
            </div>

            <Hidden xsDown>
              <Typography className={`${classes.merchantLabel} ${isBlack ? classes.isBlack : ''}`}>
                |
              </Typography>
            </Hidden>

            <div className={classes.merchantRow}>
              <Typography className={`${classes.merchantLabel} ${isBlack ? classes.isBlack : ''}`}>
                Brand
              </Typography>

              <Link href={`/listing?brands=${encodeURIComponent(product.brand)}`}>
                <a onClick={handleCloseModal} className={classes.peow}>
                  <Typography
                    className={`${classes.merchant} ${isBlack ? classes.isBlack : ''} ${
                      isGray ? classes.isGray : ''
                    }`}
                  >
                    {product.brand}
                  </Typography>
                </a>
              </Link>
            </div>
          </div>

          {product.salePrice ? (
            <>
              <Typography className={`${classes.priceFrom} ${isBlack ? classes.isBlack : ''}`}>
                {product.priceRange ? 'Price from' : ''}
              </Typography>

              <div className={classes.saleUnit}>
                <Typography
                  className={`${classes.saleText} ${isBlack ? classes.isBlack : ''} ${
                    isGray ? classes.isGray : ''
                  }`}
                >
                  {product.salePrice === 0 ? (
                    `$ -`
                  ) : (
                    <NumberFormat
                      decimalScale={2}
                      fixedDecimalScale
                      value={product.salePrice}
                      displayType="text"
                      thousandSeparator
                      prefix="$"
                    />
                  )}
                </Typography>
                <Typography className={`${classes.originalText} ${isBlack ? classes.isBlack : ''}`}>
                  {product.originalPrice === 0 ? (
                    `$ -`
                  ) : (
                    <NumberFormat
                      decimalScale={2}
                      fixedDecimalScale
                      value={product.originalPrice}
                      displayType="text"
                      thousandSeparator
                      prefix="$"
                    />
                  )}
                </Typography>
              </div>
              {product.gst && (
                <Typography className={`${classes.gstLabel} ${isBlack ? classes.isBlack : ''}`}>
                  (GST Included)
                </Typography>
              )}
            </>
          ) : (
            <>
              <Typography className={`${classes.priceText} ${isBlack ? classes.isBlack : ''}`}>
                <Typography className={`${classes.priceFrom} ${isBlack ? classes.isBlack : ''}`}>
                  {product.priceRange ? 'Price from' : ''}
                </Typography>

                {product.originalPrice === 0 ? (
                  `$ -`
                ) : (
                  <NumberFormat
                    decimalScale={2}
                    fixedDecimalScale
                    value={product.originalPrice}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                  />
                )}
              </Typography>
              {product.gst && (
                <Typography className={`${classes.gstLabel} ${isBlack ? classes.isBlack : ''}`}>
                  (GST Included)
                </Typography>
              )}
            </>
          )}
          {product.priceRemark && (
            <Typography className={`${classes.priceRemark} ${isBlack ? classes.isBlack : ''}`}>
              {product.priceRemark}
            </Typography>
          )}
        </div>
        <div className={classes.grow} />

        <div className={classes.iconUnit}>
          <IconButton className={classes.shareIconButton}>
            <FavIcon productId={product.id} isBlack={isBlack} />
          </IconButton>

          <IconButton
            className={`${classes.iconButton} ${isBlack ? classes.isBlackIcon : ''} ${
              isGray ? classes.isGrayIcon : ''
            }`}
            aria-controls="menu-list-grow"
            aria-label="share"
            aria-haspopup="true"
            disableRipple
            onClick={onClickShare}
          >
            <ShareIcon fontSize="small" />
          </IconButton>

          <Hidden mdUp>
            <IconButton
              style={{ color: openColors ? '#000' : '#8a8a8a' }}
              className={classes.iconButton}
              ref={anchorRef}
              aria-controls="menu-list-grow"
              aria-label="share"
              aria-haspopup="true"
              disableRipple
              onClick={showBackgroundColors}
            >
              <SettingsIcon fontSize="small" />
            </IconButton>
          </Hidden>

          <Hidden smDown>
            <IconButton
              className={classes.iconButton}
              ref={anchorRef}
              aria-controls="menu-list-grow"
              aria-label="share"
              aria-haspopup="true"
              disableRipple
              onClick={showBackgroundColors}
            >
              <img
                className={`${classes.lightSvg} ${
                  isBlack ? (openColors ? '' : classes.isBlackSvg) : ''
                }`}
                src={openColors ? LightOnIcon : LightOffIcon}
                alt="show background"
              />
            </IconButton>
          </Hidden>

          {openColors && (
            <div className={classes.backgroundPallete}>
              <div onClick={(e) => handleChangeBg(e, 0x000000)} className={classes.bg1} />

              <div onClick={(e) => handleChangeBg(e, 0x909090)} className={classes.bg2} />

              <div onClick={(e) => handleChangeBg(e, 0xffffff)} className={classes.bg3} />
            </div>
          )}

          <Hidden xsDown>
            <Popper
              anchorEl={el}
              className={classes.popper}
              disablePortal
              keepMounted
              open={open}
              transition
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper id="menu-list-grow">
                    <ShareOptions product={product} handleClose={handleClose} />
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Hidden>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProfileInfo);
