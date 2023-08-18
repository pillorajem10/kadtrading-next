import React from 'react';

// MUI Stuff
import {
  withStyles,
  Typography,
} from '@material-ui/core';


// Layout
import PatternLayout from 'layout/PatternLayout';

// Styling
import styles from 'routes/terms/style';

// pics
import loginHeader from 'public/assets/jumbo/loginHeader.jpg';

const Terms = ({ classes }) => {
  return (
    <PatternLayout>
      <img className={classes.headerPic} src={loginHeader} alt="Header"/>
      <div className={classes.container}>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>1. Information About Us</Typography>
          <div className={classes.childCard}>
            <p>
              1.1 https://diamondtrader.com.sg/ is a site operated by Jumbo Gold & Diamonds.
              We are registered in Singapore under the Business Registration Number 200811512H
              and with our registered office at #33 Ubi Avenue 3, #06-50, Vertex Tower A Singapore 408868.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>2. Service Availability</Typography>
          <div className={classes.childCard}>
            <p>
              2.1 Our site is only intended for use by people residing,
              businesses, and companies in Singapore
              ("the Serviced Country"). We do not accept
              rders from individuals outside of the Serviced Country.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>3. Your Status</Typography>
          <div className={classes.childCard}>
            <p>
              3.1 By placing an order through our
              site or on the telephone, you warrant that:
            </p>
          </div>
          <div className={classes.subChildCard}>
            <p>
              3.1.1 You are legally capable of entering into binding contracts;
            </p>
            <p>
              3.1.2 You are resident in the Serviced Country.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>4. How the Contract is formed between You and Us</Typography>
          <div className={classes.childCard}>
            <p>
              4.1 After placing an online order, you will receive an e-mail from us acknowledging that we have received your order. Please note that this does not mean that your order has been accepted. Your order constitutes an offer to us to buy a Product. All telephone and on-line orders are subject to acceptance by us, and we will confirm such acceptance to you either during our telephone conversation or email. The contract between us (“the Contract”) will only be formed when we deliver the items to you.
            </p>
            <p>
              4.2 Subjected to actual stock availability, item orders may be replaced with alternatives subjected
              to a verbal or written confirmation with you. For items that cannot be replaced,
              we will contact you to give you the option to cancel. If payment has been made,
              you will be refunded of the amount paid.
            </p>
            <p>
              4.3 All orders placed online will be fulfilled within NUMBER_OF_DAYS business
              days unless otherwise advised. Business days exclude Saturday, Sunday and Public Holidays.
            </p>
            <p>
              4.4 You are obliged to make payment in FULL by the payment option you select when you check out your orders.
            </p>
            <p>
              4.5 Each batch of goods may differ due to manufacturing contraints.
              In the event if you are not satisfied with any products,
              you may return to us within NUMBER_OF_DAYS days after delivery.
              The Product must be unused in the Original condition and it must not be pre-order product.
              Please refer to our refund policy stated under "Our Refunds Policy"
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>5. Our Status</Typography>
          <div className={classes.childCard}>
            <p>
              5.1 We may provide links on our site to the websites of other companies,
              whether affiliated with us or not. We cannot give any undertaking that
              the products you purchase from companies to whose website we have provided
              a link will be of satisfactory quality.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>6. Price and Payment</Typography>
          <div className={classes.childCard}>
            <p>
              6.1 The price of any Products will be as quoted on our site from time to time, except in cases of obvious error.
            </p>
            <p>
              6.2 Our site contains a large number of Products and it is always possible that, despite our best efforts, some of the Products listed on our site may be incorrectly priced. We will normally verify prices as part of our dispatch procedures so that, where a Product's correct price is less than our stated price, we will charge the lower amount when dispatching the Product to you. If a Product’s correct price is higher than the price stated on our site we might at our discretion decide to honour the lower (incorrect) price or either contact you for instructions before dispatching the Product, or reject your order and notify you of such rejection.
            </p>
            <p>
              6.3 We are under no obligation to provide the Product to you at the incorrect (lower) price even after we have provided you with an email confirmation.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>7. Our Refunds Policy</Typography>
          <div className={classes.childCard}>
            <p>
              7.1 When you return a Product to us (for instance, because you have cancelled the Contract between us, or have notified us that you do not agree to any change in these Terms and Conditions or in any of our Policies, or because you claim that the Product is defective, or you are not satisfied with the Product), we will examine the returned Product. Provided we are satisfied with the condition of the Product following our examination, we will either replace the item (if returned owing to a defect) or provide you with a refund. If you have requested a refund we will usually refund any money received from you using the same method originally used to pay. We will process the refund as soon as possible.
            </p>
            <p>
              7.2 Products returned by you because of a defect or within the seven-day cooling-off period will be refunded in full after delivery costs have been deducted.
            </p>
            <p>
              7.3 A claim by you that the quantity of the Products delivered falls short of the quantity ordered shall be notified to us within 2 days from the date of delivery. If you do not notify us accordingly, we shall have no liability in respect of such shortfall and you shall be bound to pay the price as if the Products had been delivered in accordance with the Contract
            </p>
            <p>
              7.4 The cost of return transportation is at your expense.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>8. Our Liability</Typography>
          <div className={classes.childCard}>
            <p>
              8.1 We warrant to you that any Product purchased from us through our site is of satisfactory quality.
            </p>
            <p>
              8.2 Our liability in connection with any Product purchased through our site is strictly limited to the purchase price of that Product.
            </p>
            <p>
              8.3 Unless otherwise stated, all products warranty will be covered by the respective brand owner
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>9. Notices</Typography>
          <div className={classes.childCard}>
            <p>
              9.1 All notices given by you to us must be given to COMPANY_NAME at COMPANY_ADD. We may give notice to you either via an e-mail or postal address that you provided to us when placing an order.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>10. Events Outside our Control</Typography>
          <div className={classes.childCard}>
            <p>
              10.1 We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under a Contract that is caused by events outside our reasonable control (“Force Majeure Event”).
            </p>
            <p>
              10.2 A Force Majeure Event includes any act, event, non-happening, omission or accident beyond our reasonable control and includes in particular (without limitation) the following:
            </p>
          </div>
          <div className={classes.subChildCard}>
            <p>
              10.2.1 strikes, lock-outs or other industrial action;
            </p>
            <p>
              10.2.2 civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether declared or not) or threat or preparation for war;
            </p>
            <p>
              10.2.3 fire, explosion, storm, flood, earthquake, subsidence, epidemic or other natural disaster;
            </p>
            <p>
              10.2.4 impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or private transport;
            </p>
            <p>
              10.2.5 impossibility of the use of public or private telecommunications networks; or
            </p>
            <p>
              10.2.6 the acts, decrees, legislation, regulations or restrictions of any government.
            </p>
          </div>
          <div className={classes.childCard}>
            <p>
              10.3 Our performance under any Contract is deemed to be suspended for the period that the Force Majeure Event continues, and we will have an extension of time for performance for the duration of that period. We will use our reasonable endeavours to bring the Force Majeure Event to a close or to find a solution by which our obligations under the Contract may be performed despite the Force Majeure Event.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>11. Waiver</Typography>
          <div className={classes.childCard}>
            <p>
              11.1 If we fail, at any time during the term of a Contract, to insist upon the strict performance of any of your obligations under the Contract or any of these Terms and Conditions, or if we fail to exercise any of the rights or remedies to which we are entitled under the Contract, this shall not constitute a waiver of such rights or remedies and shall not relieve you from compliance with such obligations.
            </p>
            <p>
              11.2 A waiver by us of any default shall not constitute a waiver of any subsequent default.
            </p>
            <p>
              11.3 No waiver by us of any of these Terms and Conditions shall be effective unless it is expressly stated to be a waiver and is communicated to you in writing.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>12. Severability</Typography>
          <div className={classes.childCard}>
            <p>
              12.1 If any of these Terms and Conditions or any provisions of a Contract are determined by any competent authority to be invalid, unlawful or unenforceable to any extent, such term, condition or provision will to that extent be severed from the remaining terms, conditions and provisions which will continue to be valid to the fullest extent permitted by law.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>13. Entire Agreement</Typography>
          <div className={classes.childCard}>
            <p>
              13.1 These Terms and Conditions and any document expressly referred to in them represent the entire agreement between us in relation to the subject matter of any Contract and supersede any prior agreement, understanding or arrangement between us, whether oral or in writing.
            </p>
            <p>
              13.2 We each acknowledge that, in entering into a Contract, neither of us has relied on any representation, undertaking or promise given by the other and that nothing may be implied from anything said or written in negotiations between us prior to such Contract except as expressly stated in these Terms and Conditions.
            </p>
            <p>
              13.3 Neither of us shall have any remedy in respect of any untrue statement made by the other, whether orally or in writing, prior to the date of any Contract (unless such untrue statement was made fraudulently) and the other party’s only remedy shall be for breach of contract as provided in these Terms and Conditions.
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>14. Our Right to Vary these Terms and Conditions</Typography>
          <div className={classes.childCard}>
            <p>
              14.1 We have the right to revise and amend these Terms and Conditions from time to time.
            </p>
            <p>
              14.2 You will be subject to the Policies and Terms and Conditions in force at the time that you order Products from us, unless any change to those Policies or these Terms and Conditions is required to be made by law or governmental authority (in which case it will apply to orders previously placed by you), or if we notify you of the change to those Policies or these Terms and Conditions before we provide you with the Dispatch Confirmation (in which case we have the right to assume that you have accepted the change to the Terms and Conditions, unless you notify us to the contrary within seven working days of receipt by you of the Products).
            </p>
          </div>
        </div>
        <div className={classes.parentCard}>
          <Typography className={classes.paragraphTitle}>15. Law and Jurisdiction</Typography>
          <div className={classes.childCard}>
            <p>
              15.1 Contracts for the purchase of Products through our site will be governed by the Law of Singapore. Any dispute arising from, or related to, such Contracts shall be subject to the non-exclusive jurisdiction of the Courts of The Republic of Singapore.
            </p>
          </div>
        </div>
      </div>
    </PatternLayout>
  );
};

export default withStyles(styles)(Terms);
