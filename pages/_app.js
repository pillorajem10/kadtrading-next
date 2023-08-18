import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStore } from 'redux/store';
import theme from 'public/assets/styles/theme';
import { SnackbarProvider } from 'notistack';

// Layout
import BasicLayout from 'layout/BasicLayout';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// MUI Icons
import CheckIcon from '@material-ui/icons/Check';

// Piture
import errorIcon from 'public/assets/icons/white-error.svg';

// Styling
import 'public/assets/styles/globals.css';
import 'public/assets/styles/spinner.css';
import 'public/assets/styles/scrollTopButton.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const styles = () => ({
  success: {
    backgroundColor: '#b4e3a9 !important',
    color: '#0c610e !important',
    fontSize: '14px !important',

    '& svg': {
      marginRight: 10,
    },
  },
  error: {
    backgroundColor: '#fc2929 !important',
    fontSize: '14px !important',

    '& img': {
      marginRight: 10,
    },
  },
});

function MyApp({ Component, pageProps, classes }) {
  const store = useStore(pageProps.initialReduxState);

  const [notificationPosition, setNotificationPosition] = useState({
    vertical: 'top',
    horizontal: 'center',
  });

  useEffect(() => {
    // Remove server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (window.innerWidth > 400) {
      setNotificationPosition({
        vertical: 'bottom',
        horizontal: 'center',
      });
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider
            classes={{
              variantSuccess: classes.success,
              variantError: classes.error,
            }}
            anchorOrigin={notificationPosition}
            iconVariant={{
              success: <CheckIcon />,
              error: <img src={errorIcon} alt="error icon" />,
            }}
          >
            <BasicLayout>
              <Component {...pageProps} />
            </BasicLayout>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default withStyles(styles)(MyApp);
