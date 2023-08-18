import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// React Share
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
} from 'react-share';

// MUI Stuff
import { withStyles, ClickAwayListener, MenuItem, MenuList, Typography } from '@material-ui/core';

// MUI Icons
import EmailIcon from 'mdi-react/EmailIcon';
import ContentCopyIcon from 'mdi-react/ContentCopyIcon';

// Picture
import FacebookIcon from 'public/assets/icons/Facebook.png';
import WhatsappIcon from 'public/assets/icons/Whatsapp.png';
import TwitterIcon from 'public/assets/icons/Twitter.png';
import PinterestIcon from 'public/assets/icons/Pinterest.png';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const ShareOptions = ({ classes, handleClose }) => {
  const { productDetails } = useSelector((state) => state.product);

  const shareUrl = window.location.href;
  const shareTitle = productDetails.name;

  return (
    productDetails && (
      <ClickAwayListener onClickAway={handleClose}>
        <MenuList className={classes.menuList}>
          {/* Facebook */}
          <MenuItem className={classes.menuItem}>
            <FacebookShareButton className={classes.shareButton} url={shareUrl} quote={shareTitle}>
              <Typography className={classes.menuText}>Facebook</Typography>
              <img src={FacebookIcon} height={20} width={20} alt="Facebook" />
            </FacebookShareButton>
          </MenuItem>

          {/* Whatsapp */}
          <MenuItem className={classes.menuItem}>
            <WhatsappShareButton className={classes.shareButton} url={shareUrl} quote={shareTitle}>
              <Typography className={classes.menuText}>Whatsapp</Typography>
              <img src={WhatsappIcon} height={20} width={20} alt="Whatsapp" />
            </WhatsappShareButton>
          </MenuItem>

          {/* Twitter */}
          <MenuItem className={classes.menuItem}>
            <TwitterShareButton className={classes.shareButton} url={shareUrl} quote={shareTitle}>
              <Typography className={classes.menuText}>Twitter</Typography>
              <img src={TwitterIcon} height={20} width={20} alt="Twitter" />
            </TwitterShareButton>
          </MenuItem>

          {/* Pinterest */}
          {productDetails.variants !== undefined && productDetails.variants[0] && (
            <MenuItem className={classes.menuItem}>
              <PinterestShareButton
                className={classes.shareButton}
                description={shareTitle}
                media={productDetails.variants[0].images[0]}
                url={shareUrl}
              >
                <Typography className={classes.menuText}>Pinterest</Typography>
                <img src={PinterestIcon} height={20} width={20} alt="Pinterest" />
              </PinterestShareButton>
            </MenuItem>
          )}

          {/* Email */}
          <MenuItem className={classes.menuItem}>
            <EmailShareButton className={classes.shareButton} url={shareUrl} quote={shareTitle}>
              <Typography className={classes.menuText}>Email</Typography>
              <EmailIcon className={classes.menuIcon} />
            </EmailShareButton>
          </MenuItem>

          {/* Copy Link */}
          <CopyToClipboard text={shareUrl}>
            <MenuItem className={classes.menuItem}>
              <Typography className={classes.menuText}>Copy link</Typography>
              <ContentCopyIcon className={classes.menuIcon} />
            </MenuItem>
          </CopyToClipboard>
        </MenuList>
      </ClickAwayListener>
    )
  );
};

export default withStyles(styles)(ShareOptions);
