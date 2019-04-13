const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Brett Stevenson', // Navigation and Site Title
  siteTitleAlt: 'Brett', // Alternative Site title for SEO
  siteTitleShort: 'Brett', // short_name for manifest
  siteHeadline: 'Full-Stack Software Developer, Designer, Student', // Headline for schema.org JSONLD
  siteUrl: 'https://tterb-gatsby.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Developer, Designer, Student',
  author: 'Brett Stevenson', // Author for schema.org JSONLD
  disqusShortname: `tterb-gatsby`,
  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@bstevensondev', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-82760104-2', // GA tracking ID.
  // Manifest and Progress color
  themeColor: tailwind.colors.green,
  backgroundColor: tailwind.colors.blue,
}
