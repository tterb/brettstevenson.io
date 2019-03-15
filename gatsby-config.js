const config = require(`./config/website`)

module.exports = {
  /* General Information */
  siteMetadata: {
    siteUrl: config.siteUrl + '/',
    title: `Brett Stevenson`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`
      },
      {
        name: `Blog`,
        link: `/blog`
      },
    ]
  },
  /* Plugins */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    { 
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,  
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /* Must be placed at the end */
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
  ],
}
