const path = require('path')
const env = require('dotenv')
const _ = require('lodash')


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  let published = false
  // Only use MDX nodes
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)

    // Add 'slug' field
    // if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')
    //   && Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
    //   // If the frontmatter contains a "slug", use it
    //   slug = node.frontmatter.slug
    // } else if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')
    //   && Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')) {
    //   // Otherwise use the title for the slug
    //   slug = `/${_.kebabCase(node.frontmatter.title)}`
    // }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      // Add 'slug' field
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
        // If the frontmatter contains a 'slug', use it
        slug = node.frontmatter.slug
      } else if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')) {
        // Otherwise use the title for the slug
        slug = `/${_.kebabCase(node.frontmatter.title)}`
      }

      // Add 'published' field
      if (process.env.NODE_ENV === 'development') {
        published = true
      } else if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'published')) {
        published = node.frontmatter.published
      }
    }

    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'published', value: published })

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
              published
            }
            fields {
              slug
            }
          }
        }
      }
    `),
  )

  let posts = postQuery.data.posts.nodes
  if (process.env.NODE_ENV !== 'development') {
    posts = posts.filter(post => post.frontmatter.published === true)
  }

  const postCategories = []
  posts.forEach((post, index) => {
    postCategories.push(post.frontmatter.category)
    createPage({
      path: `/blog${post.frontmatter.slug}`,
      component: postTemplate,
      context: {
        // Pass "slug" through context so we can reference it in our query like "$slug: String!"
        slug: post.fields.slug,
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
