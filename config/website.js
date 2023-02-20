module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `Brett Stevenson`, // Navigation and Site Title
  siteTitleAlt: `Brett Stevenson - Software Engineer and Designer`, // Alternative Site title for SEO
  siteTitleShort: `Brett Stevenson`, // short_name for manifest
  siteHeadline: `Software Engineer and Designer`, // Headline for schema.org JSONLD
  siteUrl: `https://brettstevenson.io`, // Domain of your site. No trailing slash!
  siteKeywords: [`brett stevenson`, `brett`, `stevenson`, `fullstack`, `software`, `engineer`, `developer`, `design`, `portfolio`, `blog`, `python`, `javascript`, `react`],
  siteLanguage: `en`, // Language Tag on <html> element
  siteLogo: `/logo.png`, // Used for SEO and manifest
  siteDescription: `Brett Stevenson. Full-stack software engineer and designer with a passion for using technology to create unique and memorable experiences`,
  author: {
    name: `Brett Stevenson`,
    bio: `Software engineer and designer with a passion for exploring new ideas, platforms, and web-technologies, while creating tools that myself and other enjoy.`,
    github: `https://github.com/tterb`,
    dribbble: `https://dribbble.com/tterb`,
    twitter: `https://twitter.com/bstevensondev`,
    linkedIn: `https://www.linkedin.com/in/brett-stevenson/`,
  },
  menuLinks: [
    {
      name: `Home`,
      link: `/`,
      external: false,
    },
    {
      name: `Design`,
      link: `https://brettstevenson.io/design`,
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
  disqusShortname: `tterb-gatsby`,
  // siteFBAppID: '123456789', // Facebook App ID - Optional
  twitterUsername: `@bstevensondev`, // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: `UA-82760104-1`, // Google Analytics ID
  googleOptimizeID: `GTM-P9NNBQ3`, // Google Optimize container ID
  // Manifest and Progress color
  backgroundColor: `#23262B`,
}
