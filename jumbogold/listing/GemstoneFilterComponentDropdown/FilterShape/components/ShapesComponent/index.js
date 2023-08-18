import React from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles  } from '@material-ui/core';

import round from 'public/assets/shapeIcons/brilliant.png'
import marquise from 'public/assets/shapeIcons/marquis.png'
import emerald from 'public/assets/shapeIcons/emerald.png'
import princess from 'public/assets/shapeIcons/princess.png'
import oval from 'public/assets/shapeIcons/oval.png'
import radiant from 'public/assets/shapeIcons/radiant.png'
import pear from 'public/assets/shapeIcons/pear.png'
import heart from 'public/assets/shapeIcons/heart.png'
import cushion from 'public/assets/shapeIcons/cushion.png'
import asscher from 'public/assets/shapeIcons/asscher.png'

// useDebounce
import { useDebounce } from 'utils/methods' ;

// styling
import styles from './style';

const FilterShape = ({ classes, shape, commit }) => {
  const router = useRouter();
  const { query } = router;

  const handleShapes = useDebounce((value) => {
    commit(value)
  }, 500);

  let shapePhoto;
  let style;
  let background;

  if (shape === 'Round') {
    background = query.shapes && query.shapes.includes('Round') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = round
    style = classes.roundDiamond;
  } else if (shape === 'Marquise') {
    style = classes.marquiseDiamond;
    background = query.shapes && query.shapes.includes('Marquise') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = marquise
  } else if (shape === 'Emerald') {
    style = classes.emeraldDiamond;
    background = query.shapes && query.shapes.includes('Emerald') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = emerald
  } else if (shape === 'Princess') {
    style = classes.princessDiamond;
    background = query.shapes && query.shapes.includes('Princess') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = princess
  } else if (shape === 'Oval') {
    style = classes.ovalDiamond;
    background = query.shapes && query.shapes.includes('Oval') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = oval
  } else if (shape === 'Radiant') {
    style = classes.roundDiamond;
    background = query.shapes && query.shapes.includes('Radiant') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = radiant
  } else if (shape === 'Pear') {
    style = classes.pearDiamond;
    background = query.shapes && query.shapes.includes('Pear') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = pear
  } else if (shape === 'Heart') {
    style = classes.emeraldDiamond;
    background = query.shapes && query.shapes.includes('Heart') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = heart
  }  else if (shape === 'Cushion') {
    style = classes.princessDiamond;
    background = query.shapes && query.shapes.includes('Cushion') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = cushion
  }  else if (shape === 'Asscher') {
    style = classes.ovalDiamond;
    background = query.shapes && query.shapes.includes('Asscher') ? classes.diamondBackgroundRed : classes.diamondBackgroundBlack;
    shapePhoto = asscher
  }



  return (
    <>
      <div onClick={() => handleShapes(shape)} className={background}>
        <img className={style} src={shapePhoto} alt="diamond"/>
      </div>
    </>
  )
}
export default withStyles(styles)(FilterShape);
