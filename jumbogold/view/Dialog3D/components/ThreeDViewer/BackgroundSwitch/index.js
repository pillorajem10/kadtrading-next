import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

// MUI Stuff
import { withStyles, Grow, Hidden, IconButton, Paper, Popper } from '@material-ui/core';

// MUI Icons
import SettingsIcon from '@material-ui/icons/Settings';

// Picture
import LightOnIcon from 'public/assets/icons/lighton.svg';
import LightOffIcon from 'public/assets/icons/lightoff.svg';

// Styling
import styles from './style';

const BackgroundSwitch = (props) => {
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
      <div className={classes.headerUnit}>
        <div className={classes.grow} />
        <div className={classes.iconUnit}>


          {openColors && (
            <div className={classes.backgroundPallete}>
              <div onClick={(e) => handleChangeBg(e, 0x000000)} className={classes.bg1} />

              <div onClick={(e) => handleChangeBg(e, 0x909090)} className={classes.bg2} />

              <div onClick={(e) => handleChangeBg(e, 0xffffff)} className={classes.bg3} />
            </div>
          )}

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
              <SettingsIcon />
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
              />
            </IconButton>
          </Hidden>


        </div>
      </div>
    </div>
  );
};


export default withStyles(styles)(BackgroundSwitch);
