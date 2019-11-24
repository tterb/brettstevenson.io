const path = require('path')
const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise => promise.then(result => {
  if (result.errors) {
    throw result.errors
  }
  return result
})

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  // Only use MDX nodes
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    // If the frontmatter contains a "slug", use it
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    )
      slug = `/${_.kebabCase(node.frontmatter.slug)}`

    // Otherwise use the title for the slug
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    )
      slug = `/${_.kebabCase(node.frontmatter.title)}`

    createNodeField({ node, name: 'slug', value: slug })
    // Adds the name of "gatsby-source-filesystem" as field (in this case "projects" or "pages")
    createNodeField({ node, name: 'sourceInstanceName', value: fileNode.sourceInstanceName })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // page templates
  const blogTemplate = path.resolve('./src/templates/blog.jsx')
  const postTemplate = path.resolve('./src/templates/post.jsx')
  const tagTemplate = path.resolve('src/templates/tags.jsx')

  const result = await wrapper(
    graphql(`
      {
        posts: allMdx(filter: { fields: { sourceInstanceName: { eq: "posts" } } }
        sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `),
  )

  const posts = result.data.posts.edges
  posts.forEach((post, index) => {
    createPage({
      path: `/blog${post.node.fields.slug}/`,
      component: postTemplate,
      context: {
        // Pass "slug" through context so we can reference it in our query like "$slug: String!"
        // slug: post.node.slug,
        slug: post.node.fields.slug,
        prev: index === 0 ? null : posts[index - 1],
        next: index === result.length - 1 ? null : posts[index + 1],
      },
    })
  })

  // Handle blog pagination
  const postsPerPage = 4
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((x, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        count: posts.length,
      },
    })
  })

  // Iterate through posts collecting tags
  let allTags = []
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags'))
      allTags = _.concat(allTags, edge.node.frontmatter.tags)
  })
  const tags = _.countBy(allTags)

  for(var tag in tags) {
    const tagPageCount = Math.ceil(tags[tag]/postsPerPage)
    Array.from({ length: tagPageCount }).forEach((x, i) => {
      createPage({
        path: i === 0 ? `blog/tag/${_.kebabCase(tag)}/` : `blog/tag/${_.kebabCase(tag)}/${i + 1}`,
        component: tagTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          count: tags[tag],
          numPages: tagPageCount,
          tag: tag,
        }
      })
    })
  }
}

// Necessary changes to get gatsby-mdx and Cypress working
exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules = [
    ...config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/)),
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: modulePath => /node_modules/.test(modulePath) && !/node_modules\/gatsby-mdx/.test(modulePath),
    },
  ]

  actions.replaceWebpackConfig(config)
}
