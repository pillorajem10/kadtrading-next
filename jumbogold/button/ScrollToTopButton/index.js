import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import ScrollUpButton from 'react-scroll-up-button';

// MUI Stuff
import { Typography } from '@material-ui/core';

// Picture
import backToTop from 'public/assets/jumbo/backToTop.jpg';

const ScrollToTopButton = () => {
  const router = useRouter();
  const { asPath } = router;

  const isProductDetails = useMemo(() => asPath.includes('/product/'), [asPath]);

  const isRating = useMemo(() => asPath.includes('/rating'), [asPath]);

  const scrollUpButtonClassName = () => {
    let className = 'scrollContainer';

    if (isProductDetails) className = 'productDetailsScrollContainer';

    if (isRating) className = 'ratingScrollContainer';

    return className;
  };

  /*
      <div>
        <img src={backToTop} alt="トップに戻るアイコン" />
        <Typography>上</Typography>
      </div>
  */

  return (
    <ScrollUpButton
      ContainerClassName={scrollUpButtonClassName()}
      TransitionClassName="scrollTransition"
      AnimationDuration={1500}
    >

    </ScrollUpButton>
  );
};

export default ScrollToTopButton;
