import React, { Fragment } from 'react';

// MUI Stuff
import { withStyles, Hidden, Typography } from '@material-ui/core';

// components
import TagBox from '../../components/TagBox';

const styles = (theme) => ({
  articleTagHeader: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 14,
  },
  articleTagWrapper: {
    width: '30%',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
});

const ArticleTagSection = ({ classes }) => {
  return (
    <Fragment>
      <Hidden smUp>
        <Typography className={classes.articleTagHeader}>TAGGED TOPICS</Typography>
      </Hidden>

      {/* Tag List */}
      <div className={classes.articleTagWrapper}>
        <TagBox tag="Modern" />
        <TagBox tag="Renovation" />
        <TagBox tag="Home Ideas" />
        <TagBox tag="Simple Article" />
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(ArticleTagSection);
