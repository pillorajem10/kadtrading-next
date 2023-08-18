import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// Layout
import PatternLayout from 'layout/PatternLayout';

// Styling
import styles from 'routes/register/style';

// pics
import loginHeader from 'public/assets/jumbo/loginHeader.jpg';

// Form
import Form from 'routes/forgetpassword/section/form'


const ForgotPass = ({ classes }) => {
  return (
    <>
      <img className={classes.headerPic} src={loginHeader} alt="Header"/>
      <Form/>
    </>
  )
};

export default withStyles(styles)(ForgotPass);
