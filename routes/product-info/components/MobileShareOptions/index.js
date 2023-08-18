import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
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
import { withStyles, MenuItem, MenuList, Typography } from '@material-ui/core';

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

const MobileShareOptions = ({ classes, closeShareOptions }) => {
  const { productDetails } = useSelector((state) => state.product);

  const router = useRouter();

  useEffect(() => {
    return () => {
      closeShareOptions();
    };
  }, [router.pathanme, closeShareOptions]);

  const shareUrl = window.location.href;
  const shareTitle = productDetails.name;

  return (
    <div className={classes.layout} elevation={3}>
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
        <MenuItem className={classes.menuItem}>
          <PinterestShareButton
            className={classes.shareButton}
            description={shareTitle}
            media={
              productDetails.variants.length > 0
                ? productDetails.variants[0].images[0]
                : 'https://gravatar.com/avatar/?s=200&d=404'
            }
            url={shareUrl}
          >
            <Typography className={classes.menuText}>Pinterest</Typography>
            <img src={PinterestIcon} height={20} width={20} alt="Pinterest" />
          </PinterestShareButton>
        </MenuItem>

        {/* Email */}
        <MenuItem className={classes.menuItem}>
          <EmailShareButton className={classes.shareButton} url={shareUrl} quote={shareTitle}>
            <Typography className={classes.menuText}>Email</Typography>
            <EmailIcon className={classes.menuIcon} />
          </EmailShareButton>
        </MenuItem>

        {/* Copy Link */}
        <CopyToClipboard text={`${shareUrl}`}>
          <MenuItem className={classes.menuItem}>
            <Typography className={classes.menuText}>Copy link</Typography>
            <ContentCopyIcon className={classes.menuIcon} />
          </MenuItem>
        </CopyToClipboard>
      </MenuList>
    </div>
  );
};

export default withStyles(styles)(MobileShareOptions);
