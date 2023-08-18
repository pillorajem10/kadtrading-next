import React, { useState } from 'react';
import Link from 'next/link';

// MUI Stuff
import { Typography, withStyles, InputBase, IconButton, Hidden } from '@material-ui/core';

// MUI Icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { common, ui } from 'redux/actions';

// hooks
import useWindowSize from 'hooks/useWindowSize';

// Utils
import regExp from 'utils/regExp';

import colored from 'public/assets/jumbo/colored-transparent.png';

// Styling
import cod from 'public/assets/jumbo/developersLogo.png';
import styles from './style';


const Footer = ({ classes }) => {
  const dispatch = useDispatch();
  const size = useWindowSize();  
  const { settings } = useSelector((state) => state.common);

  const [email, setEmail] = useState('');

  const handleSetEmail = (event) => {
    event.persist();

    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    /*
    if (regExp.isEmail(email)) {
      const payload = { email, platform: '' };

      dispatch(common.sendSubscription(payload));

      setEmail('');
    } else {
      dispatch(ui.errorNotification({ message: 'Please enter a valid email.' }));
    }
    */
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.merchantLink}>
              <Typography>
                <Link href="/about"><a>About Us</a></Link>
              </Typography>
          </div>
          <div className={classes.merchantLink}>
            <Typography>
              <Link href="/delivery"><a>Delivery Information</a></Link>
            </Typography>
          </div>
          <div className={classes.merchantLink}>
            <Typography>
              <Link href="/privacy"><a>Privacy Policy</a></Link>
            </Typography>
          </div>
          <div className={classes.merchantLink}>
            <Typography>
              <Link href="/terms"><a>Term & Conditions</a></Link>
            </Typography>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.merchantLink}>
            <Typography>
              Contact Us
            </Typography>
          </div>
          <div className={classes.merchantLink}>
            <Typography>
              Site Map
            </Typography>
          </div>
          <div className={classes.merchantLink}>
            <Typography>
              Returns
            </Typography>
          </div>
          <div className={classes.merchantLink}>
            <Typography>
              Faqs
            </Typography>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.merchantLink}>
            <Typography>
              Manufacturer
            </Typography>
          </div>
          <div className={classes.merchantLink}>
            <Typography>
              Promotions
            </Typography>
          </div>
        </div>
        <div className={classes.card}>
          <Typography className={classes.footerHeader}>
            JUMBO GOLD & DIAMONDS
          </Typography>
          <div className={classes.contactContainer}>
            <LocationOnIcon/>
            <Typography className={classes.contactDetails}>
              #33 Ubi Avenue 3, #06-50, Vertex Tower A<br/> Singapore 408868
            </Typography>
          </div>
          <div className={classes.contactContainer}>
            <PhoneIcon/>
            <Typography className={classes.contactDetails}>
              65 6294 8878
            </Typography>
          </div>
          <div className={classes.contactContainer}>
            <EmailIcon/>
            <Typography className={classes.contactDetails}>
              jumbojew@gmail.com
            </Typography>
          </div>
        </div>
      </div>

      <div className={classes.copyrightContainer}>
       <Typography className={classes.copyright}>
         © 2021 JUMBO GOLD & DIAMONDS. ALL RIGHTS RESERVED.<br/>
         [W: {size.width} H: {size.height}]
       </Typography>
       
       {/*
       <Typography className={classes.copyright1}>
         <img src={cod} alt="developers logo" className={classes.developersLogo}/>Developed By Plvndr Boiz
       </Typography>       
       */}
     </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
