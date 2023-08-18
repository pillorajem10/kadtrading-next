const withImages = require('next-images');
const withFonts = require('next-fonts');
const withVideos = require('next-videos');

module.exports = withVideos(withFonts(
  withImages({
    env: {
      // showHead: process.env.SHOW_HEAD,
    },
  })
));

/*
    serverRuntimeConfig: {
      basePath: '/jumbogold',
    },
    publicRuntimeConfig: {
      basePath: '/jumbogold',
    },    
*/