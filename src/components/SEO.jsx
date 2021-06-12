import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
// Config
import config from 'config/website'


const Head = props => {
  const {
    data: {
      site: {
        siteMetadata,
        buildTime
      },
    },
  } = props

  const title = config.siteTitle
  const description = config.siteDescription
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  const homeURL = `${config.siteUrl}${realPrefix}`
  const image = `${homeURL}${config.siteLogo}`

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
  const schemaOrgWebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: homeURL,
    headline: config.siteHeadline,
    inLanguage: 'en',
    mainEntityOfPage: homeURL,
    description: config.siteDescription,
    name: config.siteTitle,
    author: {
      '@type': 'Person',
      name: config.author.name,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: config.author.name,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: config.author.name,
    },
    publisher: {
      '@type': 'Person',
      name: config.author.name,
    },
    datePublished: '2019-01-17',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  // Initial breadcrumb list
  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': homeURL,
        name: 'Homepage',
      },
      position: 1,
    },
  ]
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <link rel='apple-touch-icon' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <meta name='Brett Stevenson' content='Developer, Designer, Student' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=yes' />
      <meta name='msapplication-TileColor' content={config.backgroundColor} />
      <meta name='msapplication-config' content='browserconfig.xml' />
      <meta name='description' content={description} />
      <meta name='image' content={image} />
      <meta property='og:locale' content={config.ogLanguage} />
      <meta property='og:site_name' content={config.ogSiteName} />
      <meta property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:alt' content={description} />
      {config.siteFBAppID && <meta property='fb:app_id' content={config.siteFBAppID} />}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={config.twitterUsername ? config.twitterUsername : ''} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={description} />
      <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      <script type='application/ld+json'>{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}
Head.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      buildTime: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

const SEO = props => (
  <StaticQuery query={querySEO} render={data => <Head {...props} data={data} />} />
)

export default SEO

const querySEO = graphql`
  query SEO {
    site {
      siteMetadata {
        author
        description
        siteUrl
        keywords
      }
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`
