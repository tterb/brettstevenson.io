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
    title: `Brett Stevenson`,
    description: `Full-Stack Software Developer, Designer, and Student`,
    siteUrl: config.siteUrl + pathPrefix,
    author: `Brett Stevenson`,
    keywords: [
      `brett stevenson`, `full-stack`, `software`, `developer`, `design`, `portfolio`, `blog`, `python`, `javascript`, `react`, `gatsby`, `website optimization`
    ],
    disqusShortname: `tterb-gatsby`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
        external: false,
      },
      {
        name: `Design`,
        link: `https://brettstevenson.design/`,
        external: true,
      },
      {
        name: `Blog`,
        link: `/blog`,
        external: false,
      },
      {
        name: `Contact`,
        link: `/contact`,
        external: false,
      },
    ],
    algolia: {
      appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : ``,
      searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY
        ? process.env.ALGOLIA_SEARCH_ONLY_API_KEY
        : ``,
      indexName: process.env.ALGOLIA_INDEX_NAME ? process.env.ALGOLIA_INDEX_NAME : ``
    },
  },
  /* Plugins */
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`cloning`, `flattening`, `metadata`, `placeholders`, `shorthands`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/*_\.*`],
      },
    },
    { 
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: `bash` },
            },
          },
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
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `tterb-gatsby`,
      },
    },
    /* Must be placed at the end */
    `gatsby-plugin-offline`,
  ],
}
