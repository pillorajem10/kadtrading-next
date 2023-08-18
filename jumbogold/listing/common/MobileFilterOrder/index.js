import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Dialog,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

const MobileFilterOrder = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [selected, setSelected] = useState('');
  const [showOrderList, setShowOrderList] = useState(false);

  useEffect(() => {
    if (params.sort_by && params.sort_direction) {
      setSelected(`${decodeURIComponent(params.sort_by)},${params.sort_direction}`);
    } else {
      setSelected('');
    }
  }, [params.sort_by, params.sort_direction]);

  const handleToggleOrderList = () => setShowOrderList(true);

  const handleCloseOrderList = () => setShowOrderList(false);

  const handleSelectOrder = (event) => {
    const splitValue = event.target.value.split(',');
    
    router.push({
      pathname,
      query: {
        ...query,
        sort_by: splitValue[0],
        sort_direction: splitValue[1],
      },
    });

    handleCloseOrderList();
  };

  const handleRenderSelectedResult = () => {
    let renderer = <Typography className={classes.filterOrderText}>Default</Typography>;

    if (selected === 'Size,Asc')
      renderer = <Typography className={classes.filterOrderText}>Name: Ascending</Typography>;

    if (selected === 'Weight,Asc')
      renderer = <Typography className={classes.filterOrderText}>Name: Ascending</Typography>;

    if (selected === 'name,Asc')
      renderer = <Typography className={classes.filterOrderText}>Name: Ascending</Typography>;



    if (selected === 'Size,Desc')
      renderer = <Typography className={classes.filterOrderText}>Name: Descending</Typography>;

    if (selected === 'Weight,Desc')
      renderer = <Typography className={classes.filterOrderText}>Name: Descending</Typography>;

    if (selected === 'name Desc')
      renderer = <Typography className={classes.filterOrderText}>Name: Descending</Typography>;



    if (selected === 'Price ,sc')
      renderer = <Typography className={classes.filterOrderText}>Price: Low - High</Typography>;

    if (selected === 'Inhouse Price,Asc')
      renderer = <Typography className={classes.filterOrderText}>Price: Low - High</Typography>;

    if (selected === 'retailPrice,Asc')
      renderer = <Typography className={classes.filterOrderText}>Price: Low - High</Typography>;



    if (selected === 'Price,Desc')
      renderer = <Typography className={classes.filterOrderText}>Price: High - Low</Typography>;

    if (selected === 'Inhouse Price,Desc')
      renderer = <Typography className={classes.filterOrderText}>Price: High - Low</Typography>;

    if (selected === 'retailPrice,Desc')
      renderer = <Typography className={classes.filterOrderText}>Price: High - Low</Typography>;


    return renderer;
  };

  return (
    <>
      <div className={classes.mobileFilterOrder} onClick={handleToggleOrderList}>
        {handleRenderSelectedResult()}

        <img src={expandIcon} alt="expand icon" className={classes.mobileFilterOrderIcon} />
      </div>

      <Dialog onClose={handleCloseOrderList} open={showOrderList}>
        <RadioGroup
          aria-label="select sort by"
          name="selectSortBy"
          className={classes.radioGroup}
          value={selected}
          onChange={handleSelectOrder}
        >
          { query.type === "globald" && (
          <>
              <FormControlLabel
                className={classes.radioLabel}
                control={<Radio className={classes.radio} color="primary" />}
                label="Name: Ascending"
                labelPlacement="start"
                value="Size,Asc"
              />
              <FormControlLabel
                className={classes.radioLabel}
                control={<Radio className={classes.radio} color="primary" />}
                label="Name: Descending"
                labelPlacement="start"
                value="Size,Desc"
              />
              <FormControlLabel
                className={classes.radioLabel}
                control={<Radio className={classes.radio} color="primary" />}
                label="Price: Low to High"
                labelPlacement="start"
                value="Price,Asc"
              />
              <FormControlLabel
                className={classes.radioLabel}
                control={<Radio className={classes.radio} color="primary" />}
                label="Price: High to Low"
                labelPlacement="start"
                value="Price,Desc"
              />
            </>
          )}

          { query.type === "inhouse" && (
            <>
                <FormControlLabel
                  className={classes.radioLabel}
                  control={<Radio className={classes.radio} color="primary" />}
                  label="Name: Ascending"
                  labelPlacement="start"
                  value="Weight,Asc"
                />
                <FormControlLabel
                  className={classes.radioLabel}
                  control={<Radio className={classes.radio} color="primary" />}
                  label="Name: Descending"
                  labelPlacement="start"
                  value="Weight,Desc"
                />
                <FormControlLabel
                  className={classes.radioLabel}
                  control={<Radio className={classes.radio} color="primary" />}
                  label="Price: Low to High"
                  labelPlacement="start"
                  value="Inhouse Price,Asc"
                />
                <FormControlLabel
                  className={classes.radioLabel}
                  control={<Radio className={classes.radio} color="primary" />}
                  label="Price: High to Low"
                  labelPlacement="start"
                  value="Inhouse Price,Desc"
                />
              </>
            )}

          { query.type === "product" && (
              <>
                  <FormControlLabel
                    className={classes.radioLabel}
                    control={<Radio className={classes.radio} color="primary" />}
                    label="Name: Ascending"
                    labelPlacement="start"
                    value="name,Asc"
                  />
                  <FormControlLabel
                    className={classes.radioLabel}
                    control={<Radio className={classes.radio} color="primary" />}
                    label="Name: Descending"
                    labelPlacement="start"
                    value="name,Desc"
                  />
                  <FormControlLabel
                    className={classes.radioLabel}
                    control={<Radio className={classes.radio} color="primary" />}
                    label="Price: Low to High"
                    labelPlacement="start"
                    value="retailPrice,Asc"
                  />
                  <FormControlLabel
                    className={classes.radioLabel}
                    control={<Radio className={classes.radio} color="primary" />}
                    label="Price: High to Low"
                    labelPlacement="start"
                    value="retailPrice,Desc"
                  />
                </>
              )}
        </RadioGroup>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(MobileFilterOrder);
