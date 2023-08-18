import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

// Picture
// import productCardSkeleton from 'public/assets/jumbo/about2.png';
import productCardSkeleton from 'public/assets/jumbo/about3.jpg';
// import productCardSkeleton from 'public/assets/images/longload.gif';

const Image = ({ src, width, height, alt = '', className, style }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [image, setImage] = useState(productCardSkeleton);

  useEffect(() => {
    setImage(src || productCardSkeleton);
  }, [src]);

  return (
    <LazyLoad>
      <img
        src={isLoad ? image : productCardSkeleton}
        width={width}
        height={height}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
        onLoad={() => setIsLoad(true)}
        onError={() => setImage(productCardSkeleton)}
      />
    </LazyLoad>
  );
};

export default Image;
