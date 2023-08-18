import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const ArticleCard = ({ classes, article }) => {
  return (
    <div className={classes.articleContainer}>
      <img src={article.image} alt={article.title} className={classes.articleImage} />
      <Typography className={classes.articleTitle}>{article.title}</Typography>
      <Typography className={classes.articleContent}>{article.content}</Typography>
      <Typography className={classes.readMoreLink}>READ MORE</Typography>
    </div>
  );
};

export default withStyles(styles)(ArticleCard);
