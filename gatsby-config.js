const config = require(`./config/website`)
const dotenv = require(`dotenv`)

const pathPrefix = config.pathPrefix === `/` ? `` : config.pathPrefix

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const { spaceId, accessToken } = process.env;

let contentfulConfig

// Load the Contentful config from the .contentful.json
try {
  contentfulConfig = require(`./.contentful`)
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig
const githubToken = process.env.GITHUB_TOKEN

if (!spaceId || !accessToken) {
  throw new Error(
    `Contentful spaceId and the delivery token need to be provided.`
  )
}

module.exports = {
  /* General Information */
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
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
          `gatsby-remark-emoji`,
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              class: `emoji`,
              size: 32,
            },
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    /* Must be placed at the end */
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `bearer ${githubToken}`,
        }
      },
    },
  ],
}
