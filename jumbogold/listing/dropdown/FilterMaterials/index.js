import React, { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Typography,
  MenuList,
  MenuItem,
  Checkbox,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// utils
import { addPropToQuery } from 'utils/listing';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// components
import EmptyFilter from '../../common/EmptyFilter';

// styling
import styles from './style';

const FilterMaterials = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showMaterialsList, setShowMaterialsList] = useState(false);
  const anchorRef = useRef();

  const handleToggleMaterialsList = () =>
    setShowMaterialsList((currentValue) => {
      return !currentValue;
    });

  const handleCloseMaterialsList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowMaterialsList(false);
  };

  const handleSelectMaterial = (selectedMaterial) => {
    router.push({
      pathname,
      query: addPropToQuery('materials', selectedMaterial, query),
    });
  };

  const renderMaterials = useCallback(() => {
    let renderer = <Typography>Materials</Typography>;

    if (params.materials) {
      renderer = (
        <div className={classes.selectedTagWrapper}>
          {params.materials?.map((material, index) => (
            <div key={index} className={classes.selectedTag}>
              <Typography>{decodeURIComponent(material)}</Typography>
            </div>
          ))}
        </div>
      );
    }

    return renderer;
  }, [params.materials]);

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterMaterials}
        onClick={handleToggleMaterialsList}
        style={{
          border: showMaterialsList || params.materials ? '1px solid #000' : 'solid 1px #e4e4e4',
        }}
      >
        {renderMaterials()}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showMaterialsList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showMaterialsList}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper id="menu-list-grow" className={classes.menuWrapper}>
              <ClickAwayListener onClickAway={handleCloseMaterialsList}>
                <MenuList className={classes.materialsListWrapper}>
                  {filter.Material?.length === 0 ? (
                    <EmptyFilter />
                  ) : (
                    filter.Material?.map((material, index) => {
                      const isInclude = params.materials?.includes(encodeURIComponent(material));

                      return (
                        <MenuItem
                          className={classes.menuItem}
                          key={index}
                          onClick={() => handleSelectMaterial(material)}
                        >
                          <Checkbox
                            checked={!!isInclude}
                            className={classes.checkbox}
                            disableRipple
                            color="primary"
                            size="small"
                          />
                          <Typography
                            style={{
                              color: isInclude ? '#000000' : 'rgba(0, 0, 0, 0.6)',
                              fontWeight: isInclude ? 500 : 'normal',
                            }}
                          >
                            {material}
                          </Typography>
                        </MenuItem>
                      );
                    })
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(FilterMaterials);
