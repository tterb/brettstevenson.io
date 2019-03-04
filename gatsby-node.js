const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/post.jsx')
    resolve(
      graphql(
        `{
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulProject {
              edges {
                node {
                  title
                  link
                  lang
                  image
                  description
                }
              }
            }
          }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const projects = result.data.allContentfulProject.edges
        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
