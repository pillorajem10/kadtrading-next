import React from 'react';

// MUI Stuff
import {
  withStyles,
  Typography,
} from '@material-ui/core';


// Layout
import PatternLayout from 'layout/PatternLayout';

// Styling
import styles from 'routes/privacy/style';

// pics
import loginHeader from 'public/assets/jumbo/loginHeader.jpg';

const Privacy = ({ classes }) => {
  return (
    <PatternLayout>
      <img className={classes.headerPic} src={loginHeader} alt="Header"/>
      <div className={classes.container}>
        <div className={classes.parentCard}>
          This Privacy Policy (the “Policy”) applies to the collection,
          use and disclosure of an individual customer’s Personal Data
          (hereinafter defined) arising from goods and/or
          services offered by Jumbo Gold & Diamonds.
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>1. What information do we collect?</Typography>
          <div className={classes.childCard}>
            <p>
              1.1. We collect information from you when you register on our site,
              place an order or subscribe to our newsletter.
            </p>
            <p>
              1.2. When ordering or registering on our site, as appropriate,
              you may be asked to enter your: name, e-mail address, mailing address or phone number.
              You may, however, visit our site anonymously.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>2. What do we use your information for?</Typography>
          <div className={classes.childCard}>
            <p>
              2.1 Any of the information we collect from you may be used in one of the following ways:
            </p>
          </div>
          <div className={classes.subChildCard}>
            <p>
              2.1.1. To personalize your experience (your information
              helps us to better respond to your individual needs)
            </p>
            <p>
              2.1.2. To improve our website (we continually strive to improve our website
              offerings based on the information and feedback we receive from you)
            </p>
            <p>
              2.1.3. To improve customer service
              (your information helps us to more effectively
              respond to your customer service requests and support needs)
            </p>
            <p>
              2.1.4. To process transactions (Your information, whether public or private,
              will not be sold, exchanged, transferred, or given to any
              other company for any reason whatsoever, without your consent,
              other than for the express purpose of delivering the purchased
              product or service requested).
            </p>
            <p>
              2.1.5. To send periodic emails (The email address
              you provide for order processing, will only
              be used to send you information and updates
              pertaining to your order).
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>3. How do we protect your information?</Typography>
          <div className={classes.childCard}>
            <p>
              3.1. We implement a variety of security measures to maintain the safety of
              your personal information when you place an order or enter,
              submit, or access your personal information.
            </p>
            <p>
              3.2. We offer the use of a secure server. All supplied sensitive/credit
              information is transmitted via Secure Socket Layer (SSL)
              technology and then encrypted into our Payment gateway
              providers database only to be accessible by those
              authorized with special access rights to such systems,
              and are required to keep the information confidential.
            </p>
            <p>
              3.3. After a transaction, your private information (credit cards, social
              security numbers, financials, etc.) will not be stored on our servers.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>4. Do we use cookies?</Typography>
          <div className={classes.childCard}>
            <p>
              4.1. Yes (Cookies are small files that a site or its service provider transfers to your
              computer’s hard drive through your Web browser (if you allow)
              that enables the sites or service providers systems to
              recognize your browser and capture and remember certain information.
            </p>
            <p>
              4.2. We use cookies to help us remember and process the items in your
              shopping cart and understand and save your preferences for future visits.
            </p>
            <p>
              4.3. If you prefer, you can choose to have your
              computer warn you each time a cookie is being sent, or you
              can choose to turn off all cookies via your browser settings.
              Like most websites, if you turn your cookies off, some of our
              services may not function properly. However, you can still place
              orders over the telephone or by contacting customer service.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>5. Do we disclose any information to outside parties?</Typography>
          <div className={classes.childCard}>
            <p>
              5.1. We do not sell, trade, or otherwise transfer to outside parties your personally
              identifiable information. This does not include trusted
              third parties who assist us in operating our website, conducting our business, or servicing
              you, so long as those parties agree to keep this information confidential.
              We may also release your information when we believe release is
              appropriate to comply with the law, enforce our site policies,
              or protect ours or others rights, property, or safety. However,
              non-personally identifiable visitor information may be provided to other parties
              for marketing, advertising, or other uses.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>6. Third party links</Typography>
          <div className={classes.childCard}>
            <p>
              6.1. Occasionally, at our discretion, we may include or offer third party
              products or services on our website. These third party sites have separate
              and independent privacy policies. We therefore have no responsibility or
              liability for the content and activities of these linked sites. Nonetheless,
              we seek to protect the integrity of our site and welcome any feedback about these sites.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>7. Personal Data Protection Act (Singapore)</Typography>
          <div className={classes.childCard}>
            <p>
              7.1. By using this site, you agree to allow us to collect or
              use your information in an appropriate manner in accordance
              to the Personal Data Protection Act of Singapore.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>8. Online Privacy Policy Only</Typography>
          <div className={classes.childCard}>
            <p>
              8.1. This online privacy policy applies only to information
              collected through our website and not to
              information collected offline.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>9. Terms and Conditions</Typography>
          <div className={classes.childCard}>
            <p>
              9.1. Please also visit our Terms and Conditions section establishing the use,
              disclaimers, and limitations of liability governing the use of our website.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>10. Your Consent</Typography>
          <div className={classes.childCard}>
            <p>
              10.1. By using our site, you consent to our website’s Privacy Policy.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>11. Changes to our Privacy Policy</Typography>
          <div className={classes.childCard}>
            <p>
              11.1. If we decide to change our privacy policy, we will post those
              changes on this page, and/or update the Privacy Policy modification date below.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>12. Contacting Us</Typography>
          <div className={classes.childCard}>
            <p>
              12.1. If there are any questions regarding this Privacy Policy you may contact us using the contact form.
            </p>
          </div>
        </div>
      </div>
    </PatternLayout>
  );
};

export default withStyles(styles)(Privacy);
