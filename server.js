/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

// const target = 'http://localhost:3007';
const target = 'http://localhost:3007';

const devProxy = {
  '/3d-api': {
    target,
    changeOrigin: true,
  },
  '/product-api-v2': {
    target,
    changeOrigin: true,
  },
  '/transaction-api': {
    target,
    changeOrigin: true,
  },
  '/common-api': {
    target,
    changeOrigin: true,
  },
  '/account': {
    target,
    changeOrigin: true,
  },
  '/feed': {
    target,
    changeOrigin: true,
  },
  '/categories': {
    target,
    changeOrigin: true,
  },
  '/merchants': {
    target,
    changeOrigin: true,
  },
  '/calcv': {
    target,
    changeOrigin: true,
  },
  /*
  '/HTTP/JSON': {
    target: target2,
    changeOrigin: true,
  }
  */
};

// const port = parseInt(process.env.PORT, 10) || 3000;
const port = 3002;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    // Set up the proxy.
    if (dev && devProxy) {
      Object.keys(devProxy).forEach((context) => {
        server.use(context, createProxyMiddleware(devProxy[context]));
      });
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
