import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Checkbox,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// utils
import { addPropToQuery } from 'utils/listing';

// styling
import styles from './style';

const FilterStyles = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const [tagsArray, setTagsArray] = useState(undefined);

  const router = useRouter();
  const { query, pathname } = router;

  /*const handleTags = (selectedStyle) => {
    router.push({
      pathname,
      query: addPropToQuery('tags', selectedStyle, query),
    });
  };*/

  const handleTags = (value) => {
    if (!tagsArray.includes(value)) {
      setTagsArray([...tagsArray, value]);
    } else {
      const filtered = tagsArray.filter(shape => value !== shape);
      setTagsArray(filtered);
    }

    if(!params.tags) {
      router.push({
        pathname,
        query: addPropToQuery('tags', value, query),
      });
    }
  };

  useEffect(() => {
    if (tagsArray) {
      if (tagsArray.length >= 1) {
        if(query.tags) {
          router.push({
            pathname,
            query: {
              ...query,
              tags: tagsArray.join(','),
            },
          });
        }
      }

      if (tagsArray.length <= 0) {
        if (query.tags && query.tags.split(',').length === 1) {
          router.push({
            pathname,
            query: addPropToQuery('tags', query.tags, query),
          });
        }
      }
   }
 }, [tagsArray])

  useEffect(() => {
    setTagsArray([]);
    if(params.tags) {
      setTagsArray(decodeURIComponent(params.tags).split(','))
    }
  }, [params.tags]);

  return (
    <Accordion
      className={classes.layout}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Tags</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <div className={classes.listItem}>
          <Checkbox
            checked={params.tags?.includes(encodeURIComponent("4 Clove Marquise Bracelet"))}
            onChange={() => handleTags("4 Clove Marquise Bracelet")}
            className={classes.checkbox}
            disableRipple
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: params.tags?.includes(encodeURIComponent("4 Clove Marquise Bracelet"))
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            4 Clove Marquise Bracelet
          </Typography>
        </div>

        <div className={classes.listItem}>
          <Checkbox
            checked={params.tags?.includes(encodeURIComponent("B2 Bracelet"))}
            onChange={() => handleTags("B2 Bracelet")}
            className={classes.checkbox}
            disableRipple
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: params.tags?.includes(encodeURIComponent("B2 Bracelet"))
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            B2 Bracelet
          </Typography>
        </div>

        <div className={classes.listItem}>
          <Checkbox
            checked={params.tags?.includes(encodeURIComponent("Cathedral"))}
            onChange={() => handleTags("Cathedral")}
            className={classes.checkbox}
            disableRipple
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: params.tags?.includes(encodeURIComponent("Cathedral"))
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Cathedral
          </Typography>
        </div>

        <div className={classes.listItem}>
          <Checkbox
            checked={params.tags?.includes(encodeURIComponent("Round Halo Classic"))}
            onChange={() => handleTags("Round Halo Classic")}
            className={classes.checkbox}
            disableRipple
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: params.tags?.includes(encodeURIComponent("Round Halo Classic"))
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Round Halo Classic
          </Typography>
        </div>

        <div className={classes.listItem}>
          <Checkbox
            checked={params.tags?.includes(encodeURIComponent("Country"))}
            onChange={() => handleTags("Country")}
            className={classes.checkbox}
            disableRipple
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: params.tags?.includes(encodeURIComponent("Country"))
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Country
          </Typography>
        </div>

        <div className={classes.listItem}>
          <Checkbox
            checked={params.tags?.includes(encodeURIComponent("Middle Thin Satin & Sloped Half Eternity"))}
            onChange={() => handleTags("Middle Thin Satin & Sloped Half Eternity")}
            className={classes.checkbox}
            disableRipple
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: params.tags?.includes(encodeURIComponent("Middle Thin Satin & Sloped Half Eternity"))
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Middle Thin Satin & Sloped Half Eternity
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterStyles);
