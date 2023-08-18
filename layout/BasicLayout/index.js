import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { user, common, merchant, product, transaction } from 'redux/actions';

// utils
import { evalBoolean } from 'utils/methods';

// constants
import { cart } from 'constant';

// Picture
import favIcon from 'public/favicon.png';
import websiteImage from '../../public/WizProdSite_MetaImg.png';

// Styling
import styles from './style';

// components
const Notifier = dynamic(() => import('jumbogold/common/Notifier'), { ssr: false });
const ScrollToTopButton = dynamic(() => import('jumbogold/button/ScrollToTopButton'), {
  ssr: false,
});
const NavBar = dynamic(() => import('./components/NavBar'), { ssr: false });
const MobileNavBar = dynamic(() => import('./components/MobileNavBar'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });
const Announcement = dynamic(() => import('./components/Announcement'), { ssr: false });
const RequestRoleModal = dynamic(() => import('jumbogold/modal/RequestRoleModal'), {
  ssr: false,
});
const FavouriteModal = dynamic(() => import('jumbogold/modal/FavouriteModal'), { ssr: false });
const Dialog3D = dynamic(() => import('jumbogold/view/Dialog3D'), { ssr: false });

const BasicLayout = ({ classes, children }) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { pathname, asPath } = router;

  const token = Cookies.get('token');
  const authenticated = evalBoolean(Cookies.get('authenticated'));

  if (token) {
    const decodedToken = jwtDecode(token);
    const account = JSON.parse(Cookies.get('account'));

    if (decodedToken.exp * 1000 < Date.now()) {
      dispatch(user.setUnAuthenticated());
      user.userLogout();
    } else {
      dispatch(user.setUserDetails(account));
      user.setAuthorizationHeader(token);
    }
  } else {
    let cartFromCookie = Cookies.get('cart');
    dispatch(user.setUnAuthenticated());
    dispatch(transaction.setTransactionCart(cartFromCookie ? JSON.parse(cartFromCookie) : cart));
  }

  const handleCheckAuthenticatedRoute = useCallback(() => {
    if (authenticated && pathname === '/login') router.push('/');
  }, [router, pathname]);

  useEffect(() => {
    handleCheckAuthenticatedRoute();

    window.scrollTo(0, 0);
    
    const currency = localStorage.getItem('currency');
    if (currency) {
      dispatch(common.setSystemCurrency(currency));
    }

    dispatch(common.getCurrencyRates());
    dispatch(merchant.getMerchantProfileById(process.env.NEXT_PUBLIC_MERCHANT_ID));

    // dispatch(common.getSettings());
    dispatch(product.getLevelOneProductCategory());
    if (authenticated) {
      dispatch(transaction.getTransactionCart());
    }
  }, [pathname, dispatch]);

  return (
    <>
      <Head>
        <title>Jumbo Gold & Diamonds</title>

        <link rel="shortcut icon" href={favIcon} />

        <meta
          name="description"
          content="JUMBO GOLD AND DIAMONDS is a leading trading Company in Singapore, offers you to buy and sell all types of jewelry at a fair price."
        />
        <meta
          name="keywords"
          content="Signature Ideal Diamonds. Showcase Diamonds. Showcase Gems. Wedding Bands. Browse Timeless Wedding Bands. Wedding."
        />

        <meta
          property="og:title"
          content="Jumbo Gold & Diamonds"
          key="title"
        />
        <meta
          property="og:description"
          content="JUMBO GOLD AND DIAMONDS is a leading trading Company in Singapore, offers you to buy and sell all types of jewelry at a fair price."
          key="description"
        />
        <meta property="og:image" content={websiteImage} key="image" />
        <meta
          property="og:site_name"
          content="JUMBO GOLD AND DIAMONDS"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hapichair.com" key="og:url" />

       {/* SEE rptrpt.txt for contents here 1011 */}
      </Head>

      <div className={classes.layout}>
        {/* Announcement & Nav bar */}
        {!asPath.includes('product-3d') && !asPath.includes('showroom') && (
          <>
            <Announcement />

            <Hidden xsDown>
              <NavBar />
            </Hidden>

            <Hidden smUp>
              <MobileNavBar />
            </Hidden>
          </>
        )}

        {/* Scroll To Top Button */}
        <ScrollToTopButton />

        <main>{children}</main>

        {/* Notification */}
        <Notifier />

        {/* Request Role Modal <RequestRoleModal /> */}


        {/* Favourite Modal <FavouriteModal /> */}


        {/* 3D Modal <Dialog3D /> */}


        {/* Footer */}
        {!asPath.includes('product-3d') && !asPath.includes('showroom') && <Footer />}
      </div>
    </>
  );
};

export default withStyles(styles)(BasicLayout);
