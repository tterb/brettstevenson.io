import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import BlogLayout from 'components/BlogLayout';
// Hooks
import useWindowSize from 'hooks/useWindowSize';

const Category = ({ pageContext, data }) => {
  const windowSize = useWindowSize();
  return (
    <BlogLayout
      title={pageContext.category}
      posts={data.posts.nodes}
      categories={data.categories.group}
      isMobile={windowSize.isMobile}
    />
  );
};
Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }).isRequired,
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            image: PropTypes.object.isRequired,
          }).isRequired,
        })
      ).isRequired,
    }).isRequired,
    categories: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Category;

export const categoryQuery = graphql`
  query CategoryQuery($category: String!) {
    posts: allMdx(
      filter: {
        fields: { sourceInstanceName: { eq: "posts" } }
        frontmatter: { category: { eq: $category } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          date(formatString: "DD MMM YYYY")
          category
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: DOMINANT_COLOR
                height: 320
              )
            }
          }
        }
      }
    }
    categories: allMdx {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
