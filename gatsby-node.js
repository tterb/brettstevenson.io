const path = require('path')
const _ = require('lodash')


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  // Only use MDX nodes
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    // console.log('slug: ' + node.frontmatter.slug);
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

// graphql function doesn't throw an error so we have to check to check for the query.errors to throw manually
const queryWrapper = promise => promise.then(query => {
  if (query.errors) {
    throw query.errors
  }
  return query
})

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // page templates
  const blogTemplate = path.resolve('src/templates/blog.jsx')
  const postTemplate = path.resolve('src/templates/post.jsx')
  const categoryTemplate = path.resolve('src/templates/category.jsx')

  const postQuery = await queryWrapper(
    graphql(`
      {
        posts: allMdx(filter: { fields: { sourceInstanceName: { eq: "posts" } } }
        sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            frontmatter {
              category
              slug
              title
            }
            fields {
              slug
            }
          }
        }
      }
    `),
  )

  const posts = postQuery.data.posts.nodes
  const postCategories = []
  posts.forEach((post, index) => {
    postCategories.push(post.frontmatter.category)
    console.log('slug: ' + post.frontmatter.slug)
    if (!post.frontmatter.slug) {
      console.log('title: ' + post.frontmatter.title)
    }
    createPage({
      path: `/blog${post.frontmatter.slug}`,
      component: postTemplate,
      context: {
        // Pass "slug" through context so we can reference it in our query like "$slug: String!"
        slug: post.fields.slug,
        prevPost: index === 0 ? null : posts[index - 1],
        nextPost: index === postQuery.length - 1 ? null : posts[index + 1],
      },
    })
  })

  // Handle blog pagination
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((x, index) => {
    createPage({
      path: index === 0 ? `/blog` : `/blog/${index + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage: index + 1,
        count: posts.length,
        numPages,
      },
    })
  })

  // Create post-category pages
  const categories = _.countBy(postCategories)
  for (var name in categories) {
    const pageCount = Math.ceil(categories[name]/postsPerPage)
    Array.from({ length: pageCount }).forEach((x, index) => {
      console.log(name + ': ' + pageCount);
      createPage({
        path: index === 0 ? `blog/category/${_.kebabCase(name)}` : `blog/category/${_.kebabCase(name)}/${index + 1}`,
        component: categoryTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage: index + 1,
          count: categories[name],
          numPages: pageCount,
          category: name,
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
