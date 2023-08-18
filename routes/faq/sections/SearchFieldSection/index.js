import React from 'react';

// MUI Stuff
import { withStyles, Typography, Button, Hidden } from '@material-ui/core';

// Picture
import faqWizzo from 'public/assets/images/wizzo/shi.jpg';
import faqPic from 'public/assets/images/shi.jpg';
import searchIcon from 'public/assets/icons/search.svg';

// Styling
import styles from './style';

const SearchFieldSection = ({
  classes,
  search,
  searchResult,
  handleSearch,
  handleSetSearch,
  handleSelectSearch,
  inputFocus,
  setInputFocus,
}) => {
  return (
    <div className={classes.searchFieldSection}>
      <div className={classes.container}>
        <Typography className={classes.faqSearchHeader}>How can we help?</Typography>

        <Hidden xsDown>
          <div className={classes.faqSearchFieldWrapper}>
            <div className={classes.faqSearchFieldContainer}>
              <input
                className={
                  search.length === 0 || searchResult.length === 0
                    ? classes.faqSearchField
                    : classes.faqSearch
                }
                placeholder=" Ask a question…"
                value={search}
                onFocus={() => setInputFocus(true)}
                onChange={handleSetSearch}
              />

              {search.length !== 0 && inputFocus && searchResult.length !== 0 && (
                <div className={classes.searchList}>
                  {searchResult.map((item) => (
                    <div
                      key={item.id}
                      className={classes.searchListItem}
                      onClick={() => handleSelectSearch(item)}
                    >
                      <Typography>{item.question}</Typography>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button className={classes.faqSearchButton} onClick={handleSearch}>
              SEARCH
            </Button>
          </div>
        </Hidden>

        <Hidden smUp>
          <div className={classes.faqSearchFieldWrapper}>
            <div className={classes.faqSearchFieldContainer}>
              <input
                className={
                  search.length === 0 || searchResult.length === 0
                    ? classes.faqSearchField
                    : classes.faqSearch
                }
                placeholder="Ask a question…"
                value={search}
                onFocus={() => setInputFocus(true)}
                onChange={handleSetSearch}
              />

              <img
                src={searchIcon}
                alt="search icon"
                className={classes.searchIcon}
                onClick={handleSearch}
              />
            </div>
          </div>
        </Hidden>
      </div>

      <Hidden xsDown>
        <img src={faqWizzo} alt="faq wizzo" className={classes.faqPic} />
      </Hidden>
      <Hidden smUp>
        <img src={faqPic} alt="faq wizzo" className={classes.faqPic} />
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(SearchFieldSection);
