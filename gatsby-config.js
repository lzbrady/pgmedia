/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Pretty Good Media`,
    description: `Video production based in Boston, MA. Wedding videos, short films, advertisements, and more.`,
    author: `Pretty Good Media`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `Source Sans Pro`],
        display: 'swap',
      },
    },
  ],
};
