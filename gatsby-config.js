const config = require(`./config/website`)
const styleVariables = require(`./src/styles/variables.js`)
const tailwindConfig = require(`./tailwind.config.js`)
const dotenv = require(`dotenv`)


const pathPrefix = config.pathPrefix === `/` ? `` : config.pathPrefix

if (process.env.ENVIRONMENT !== 'production')
  dotenv.config();

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const githubToken = process.env.GITHUB_TOKEN

module.exports = {
  /* General Information */
  siteMetadata: {
    title: `Brett Stevenson`,
    description: `Full-Stack Software Developer, Designer, and Student`,
    siteUrl: config.siteUrl + pathPrefix,
    author: `Brett Stevenson`,
    keywords: [
      `brett stevenson`, `full-stack`, `software`, `developer`,
      `design`, `portfolio`, `blog`, `python`, `javascript`,
      `react`, `gatsby`, `website optimization`,
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
        link: `https://tterb-design.netlify.app/`,
        external: true,
      },
      {
        name: `Blog`,
        link: `/blog/`,
        external: false,
      },
      {
        name: `Contact`,
        link: `/contact/`,
        external: false,
      },
    ],
  },
  /* Flags */
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    PARALLEL_SOURCING: true,
    FAST_DEV: true,
    DEV_SSR: true,
  },
  /* Plugins */
  plugins: [
    { resolve: `gatsby-plugin-image` },
    { resolve: `gatsby-plugin-netlify` },
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-plugin-sitemap` },
    { resolve: `gatsby-plugin-styled-components` },
    { resolve: `gatsby-plugin-sharp` },
    { resolve: `gatsby-transformer-sharp` },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `tterb-gatsby`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        optimizeId: config.googleOptimizeID,
        pageTransitionDelay: 1000,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`cloning`, `flattening`, `metadata`, `placeholders`, `shorthands`],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 820,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`,
            },
          },
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              class: `emoji`,
              size: 32,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`, // Implements PostCSS
      options: {
        postCssPlugins: [
          require(`autoprefixer`),
          require(`postcss-import`), // Add support for sass-like `@import`
          require(`postcss-nested`), // Add support for sass-like nesting of rules
          require(`postcss-simple-vars`)({ variables: styleVariables }),
          require(`postcss-calc`),
          require(`postcss-discard-comments`),
          require(`cssnano`), // Minify CSS
          require(`postcss-preset-env`)({
            stage: 3,  // More info about stages: https://cssdb.org/#staging-process
          }),
          require(`tailwindcss`)(tailwindConfig),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/*_.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/`,
        ignore: [`drafts/*.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects/`,
      },
    },
    /* Must be placed at the end */
    { resolve: `gatsby-plugin-offline` },
  ],
}
