const Promise = require('bluebird')
const path = require('path')
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/post.jsx')
    const tagTemplate = path.resolve("src/templates/tags.jsx")
    resolve(
      graphql(
        `{
          allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
            edges {
              node {
                title
                id
                slug
                publishDate(formatString: "DD MMMM, YYYY")
                tags
                description {
                  childMarkdownRemark {
                    html
                    excerpt(pruneLength: 80)
                  }
                }
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        
        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(( post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: postTemplate,
            context: {
              slug: post.node.slug,
              prev: index === 0 ? null : posts[index - 1],
              next: index === result.length - 1 ? null : posts[index + 1],
            },
          })
        })
        
        // Create blog pagination
        const postsPerPage = 4
        const numPages = Math.ceil(posts.length/postsPerPage)
        Array.from({ length: numPages }).forEach((x, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/blog.jsx"),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
              count: posts.length
            },
          })
        })
        
        // Iterate through posts gathering tags
        let tags = {}
        _.each(posts, edge => {
          if (_.get(edge, "node.tags")) {
            // tags = tags.concat(edge.node.tags)
            edge.node.tags.forEach((tag) => {
              if (tag in tags)
                tags[tag]++
              else
                tags[tag] = 1
            })
          }
        })
        
        for(var tag in tags) {
          const tagPageCount = Math.ceil(tags[tag]/postsPerPage)
          Array.from({ length: tagPageCount }).forEach((x, i) => {
            createPage({
              path: i === 0 ? `blog/tags/${_.kebabCase(tag)}/` : `blog/tags/${_.kebabCase(tag)}/${i + 1}`,
              component: path.resolve("./src/templates/tags.jsx"),
              context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                currentPage: i + 1,
                count: tags[tag],
                numPages: tagPageCount,
                tag
              }
            })
          })
        }
      })
    )
  })
}
