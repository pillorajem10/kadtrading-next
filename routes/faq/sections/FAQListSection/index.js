import React, { useState } from 'react';

// MUI Stuff
import {
  withStyles,
  Typography,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

// Utils
import { faqs } from '../../utils/const';

// Styling
import styles from './style';

const FAQListSection = ({ classes }) => {
  const [selectedSection, setSelectedSection] = useState('');

  const handleScrollToFaq = (id) => {
    const selector = document.querySelector(id);

    setSelectedSection(id);

    if (selector) {
      selector.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderSubFaqList = (subFaqList) =>
    subFaqList.map((sub, index) => (
      <div key={index}>
        <Typography className={classes.faqSubtitle}>{sub.title}</Typography>

        {sub.list.map((list) => (
          <div key={list.id} id={list.id} className={classes.listWrapper}>
            <div className={classes.listQuestion}>
              <Typography>Q:</Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html: list.question,
                }}
              />
            </div>

            <div className={classes.listAnswer}>
              <Typography>A:</Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html: list.answer,
                }}
              />
            </div>

            {list.onboard && (
              <div className={classes.onboardingWrapper}>
                <Typography>{list.onboard.email}</Typography>
                <Typography>{list.onboard.acra}</Typography>
                <img src={list.onboard.image} alt="company card" />
              </div>
            )}
          </div>
        ))}
      </div>
    ));

  return (
    <div className={classes.faqListSection}>
      <Hidden xsDown>
        <div className={classes.container}>
          <div className={classes.faqListWrapper}>
            <div className={classes.stickyNav}>
              <div className={classes.stickyNavItem} onClick={() => handleScrollToFaq('#faq')}>
                <Typography
                  className={classes.nav}
                  style={{ fontWeight: selectedSection === '#faq' ? 'bold' : 'normal' }}
                >
                  Frequently asked question
                </Typography>
              </div>

              <div
                className={classes.stickyNavItem}
                onClick={() => handleScrollToFaq('#order-delivery')}
              >
                <Typography
                  className={classes.nav}
                  style={{ fontWeight: selectedSection === '#order-delivery' ? 'bold' : 'normal' }}
                >
                  Orders & Delivery
                </Typography>
              </div>
            </div>

            <div className={classes.faqList}>
              {faqs.map((faq) => (
                <div key={faq.id} id={faq.id} className={classes.faq}>
                  <Typography className={classes.faqTitle}>{faq.title}</Typography>

                  {renderSubFaqList(faq.sub)}
                </div>
              ))}

              <Typography className={classes.listAnswer}>
                Thank you for your patience while we continue to enhance the webpage for a better
                shopping experience.
              </Typography>
            </div>
          </div>
        </div>
      </Hidden>

      <Hidden smUp>
        {faqs.map(({ title, sub, icon }, index) => (
          <Accordion
            classes={{
              root: classes.Accordion,
              expanded: classes.expanded,
            }}
            expanded
            key={index}
          >
            <AccordionSummary
              className={classes.headerWrapper}
              aria-controls="toggle-panel-content"
              id="panel-header"
            >
              <div style={{ display: 'flex' }}>
                <img src={icon} alt="faq icon" className={classes.faqIcon} />

                <Typography className={classes.faqTitle}>{title}</Typography>
              </div>
            </AccordionSummary>

            <AccordionDetails className={classes.contentWrapper}>
              {renderSubFaqList(sub)}
            </AccordionDetails>
          </Accordion>
        ))}
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(FAQListSection);
