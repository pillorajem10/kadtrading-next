import React from 'react';
import Iframe from 'react-iframe'

const ShowroomFrame = ({ showroomRoute }) => {
  return (
    <Iframe url={`https://bangjeep-enterprise.com:3323/${showroomRoute}/`}
      width="100%"
      height="100%"
      display="initial"
    />
  );
};

export default ShowroomFrame;
