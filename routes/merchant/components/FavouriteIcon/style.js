import favouriteSteps from 'public/assets/images/animation-button/favorite/favourite_step1.png';
import unfavouriteSteps from 'public/assets/images/animation-button/favorite/unfavourite_step.png';

const styles = () => ({
  iconButton: {
    display: 'flex',
    height: 38,
    width: 38,
    position: 'relative',

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  heart: {
    background: `url(${favouriteSteps})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    cursor: 'pointer',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transitionProperty: 'background-position',
    transitionTimingFunction: 'steps(39)',
    transitionDuration: '0s',
    width: '100%',
  },
  heartActive: {
    transitionDuration: '1s',
    backgroundPosition: '-1482px 0',
  },
  unheart: {
    background: `url(${unfavouriteSteps})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    cursor: 'pointer',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transitionProperty: 'background-position',
    transitionTimingFunction: 'steps(46)',
    transitionDuration: '0s',
    width: '100%',
  },
  unheartActive: {
    transitionDuration: '1s',
    backgroundPosition: '-1748px 0',
  },
});

export default styles;
