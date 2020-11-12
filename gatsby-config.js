// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const clientConfig = require('./client-config');

const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: `EF Kids & Teens Brand Launch`,
    description: `Showcasing the launch of the updated EF Kids & Teens brand.`,
    author: `@chrish-d`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
  ],
};
