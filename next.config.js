/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/dist/shared/lib/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Joey',
        mongodb_password: 'vnctYD83VJNFa30J',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'myBlog-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'Joey',
      mongodb_password: 'vnctYD83VJNFa30J',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'myBlog',
    },
  };
};
