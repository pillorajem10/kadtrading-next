import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
} from 'react-share';

import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import EmailIcon from 'mdi-react/EmailIcon';
import ContentCopyIcon from 'mdi-react/ContentCopyIcon';

// Constant
import { environment } from 'constant/environmentConfig';

// Picture
import FacebookIcon from 'public/assets/icons/Facebook.png';
import WhatsappIcon from 'public/assets/icons/Whatsapp.png';
import TwitterIcon from 'public/assets/icons/Twitter.png';
import PinterestIcon from 'public/assets/icons/Pinterest.png';

import { withStyles } from '@material-ui/core/styles';

// Styling
import styles from './style';

const MobileShareOptions = ({ classes, product }) => {
  const shareUrl = `${environment.BASE_URL}/product/${product.id}`;
  const shareTitle = product.name;

  return (
    <Hidden smUp>
      <div className={classes.layout}>
        <Divider className={classes.divider} />

        <MenuList className={classes.menuList}>
          <MenuItem className={classes.menuItem}>
            <FacebookShareButton className={classes.shareButton} url={shareUrl} quote={shareTitle}>
              <Typography className={classes.menuText}>Facebook</Typography>
              <img src={FacebookIcon} height={20} width={20} alt="Facebook" />
            </FacebookShareButton>
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <WhatsappShareButton className={classes.shareButton} url={shareUrl} quote={shareTitle}>
              <Typography className={classes.menuText}>Whatsapp</Typography>
              <img src={WhatsappIcon} height={20} width={20} alt="Whatsapp" />
            </WhatsappShareButton>
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <TwitterShareButton className={classes.shareButton} url={shareUrl} quote={shareTitle}>
              <Typography className={classes.menuText}>Twitter</Typography>
              <img src={TwitterIcon} height={20} width={20} alt="Twitter" />
            </TwitterShareButton>
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <PinterestShareButton
              className={classes.shareButton}
              description={shareTitle}
              media={product.variants[0].images[0]}
              url={shareUrl}
            >
              <Typography className={classes.menuText}>Pinterest</Typography>
              <img src={PinterestIcon} height={20} width={20} alt="Pinterest" />
            </PinterestShareButton>
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <EmailShareButton className={classes.shareButton} url={shareUrl} quote={shareTitle}>
              <Typography className={classes.menuText}>Email</Typography>
              <EmailIcon className={classes.menuIcon} />
            </EmailShareButton>
          </MenuItem>

          <CopyToClipboard text={`${shareUrl}`}>
            <MenuItem className={classes.menuItem}>
              <Typography className={classes.menuText}>Copy link</Typography>
              <ContentCopyIcon className={classes.menuIcon} />
            </MenuItem>
          </CopyToClipboard>
        </MenuList>
      </div>
    </Hidden>
  );
};

export default withStyles(styles)(MobileShareOptions);
