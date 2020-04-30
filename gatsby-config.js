const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: pkg.title,
    description: pkg.description,
    author: `@jesse_vermeulen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jesse Vermeulen`,
        short_name: `Jesse Vermeulen`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `Standalone`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
