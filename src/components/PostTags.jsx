import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import orderBy from 'lodash/orderBy'
import take from 'lodash/take'
import styled from 'styled-components'
// Components
import PageLink from 'components/PageLink'


const Tag = styled.li`
  a span {
    background: #efefef;
    font-size: 0.9rem;
    grid-area: 1 / 1;
    box-shadow: 0 1.5px 4px -2px rgba(0,0,0,0.1);
    padding: 6px 8px;
  }
  .active {
    transition: color 350ms ease-in-out, opacity 250ms ease-in-out;
  }
  &:hover {
    box-shadow: none !important;
    .active {
      background: linear-gradient(-25deg, SlateBlue, DeepSkyBlue);
      box-shadow: 0 2px 4.5px -2px rgba(0,0,0,0.7);
    }
  }
`

const PostTags = () => (
  <StaticQuery
    query={tagsQuery}
    render={data => {
      const tags = data.allMdx.group
      let topTags = orderBy(tags, [(tag) => tag.totalCount], ['desc'])
      topTags = take(topTags, 12)
      return (
        <ul className='list-reset text-left text-base p-0 pl-3 pr-5'>
          {topTags.map(tag => (
            <Tag key={tag.fieldValue} className='inline-block'>
              <PageLink
                className='group grid text-black text-opacity-40 no-underline mb-2'
                to={`/tag/${kebabCase(tag.fieldValue)}/`}
                label={tag.fieldValue}
              >
                <span className='inline-block text-black text-opacity-50 text-left rounded m-0 mr-2 mb-1 transition-all duration-300 ease-in-out opacity-100 z-999 hover:shadow-none group-hover:opacity-0 '>
                  {tag.fieldValue} ({tag.totalCount})
                </span>
                <span className='active inline-block text-black text-opacity-50 text-left rounded m-0 mr-2 mb-1 transition-all duration-300 ease-in-out opacity-0 z-0 group-hover:text-white group-hover:opacity-100'>
                  {tag.fieldValue} ({tag.totalCount})
                </span>
              </PageLink>
            </Tag>
          ))}
        </ul>
      )
    }}
  />
)

const tagsQuery = graphql`
  query Tags($limit: Int) {
    allMdx(limit: $limit) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default PostTags
