import favouriteSteps from 'public/assets/images/animation-button/favorite/fav-strips.png';

const styles = () => ({
  iconButton: {
    position: 'relative',
    width: 26,
    height: 26,
    color: '#ffffff',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  optionIconButton: {
    position: 'relative',
    width: 26,
    height: 26,
    marginTop: 10,
    margin: '0 7px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  whiteFavIcon: {
    height: 40,
    width: 40,
    color: '#ffffff',
    position: 'relative',
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
    transitionDuration: '2s',
    backgroundPosition: '-975px 0',
  },
  isBlackIcon: {
    color: '#8a8a8a',
  },
  isBlackSvg: {
    filter: 'brightness(0) invert(1);',
  },
});

export default styles;
