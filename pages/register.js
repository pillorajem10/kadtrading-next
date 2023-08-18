import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Layout
import PatternLayout from 'layout/PatternLayout';

// Styling
import styles from 'routes/register/style';

// pics
import loginHeader from 'public/assets/jumbo/loginHeader.jpg';

// Form
import Form from 'routes/register/section/form'

// Redux
import { useSelector } from 'react-redux';

const Register = ({ classes }) => {
  const { authenticated } = useSelector((state) => state.user);

  if (authenticated) Router.push('/');

  return (
    <PatternLayout>
      <img className={classes.headerPic} src={loginHeader} alt="Header"/>
      <Typography className={classes.header}>Register Account</Typography>

      <center className={classes.linksContainer}>
        <div className={classes.links}>
          <Typography>
            If you already have an account with us, please login at the <Link href="/login"><a>login page</a></Link>
          </Typography>
        </div>
      </center>
      <Form/>
    </PatternLayout>
  )
};

export default withStyles(styles)(Register);
