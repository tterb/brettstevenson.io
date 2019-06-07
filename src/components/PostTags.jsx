import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { accent } from '../../tailwind'
import PageLink from './PageLink'

const TagList = styled.ul`
  ${tw `list-reset text-left text-lg p-0 pl-3 pr-5`}
`

const Tag = styled.li`
  ${tw `inline-block`}
  a {
    ${tw `mb-2`}
    display: grid;
    color: rgba(0,0,0,0.4);
    span {
      ${tw `inline-block text-left m-0 mr-2 mb-1 opacity-100 z-999`}
      background: #efefef;
      color: rgba(0,0,0,0.5);
      font-size: 0.9rem;
      grid-area: 1 / 1;
      border-radius: 6px;
      box-shadow: 0 1.5px 4px -2px rgba(0,0,0,0.1);
      transition: all 350ms ease-in-out;
      padding: 6px 8px;
    }
    .active {
      ${tw `opacity-0 z-0`}
      transition: color 350ms ease-in-out, opacity 450ms ease-in-out;
    }
    &:hover {
      box-shadow: none !important;
      span {
        ${tw `opacity-0`}
      }
      .active {
        background: linear-gradient(-25deg, SlateBlue, DeepSkyBlue);
        color: white;
        box-shadow: 0 2px 4.5px -2px rgba(0,0,0,0.7);
        opacity: 1 !important;
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={tagsQuery}
    render={data => {
      const tags = data.allContentfulBlogPost.group
      let topTags = _.orderBy(tags, ['totalCount'], ['desc'])
      topTags = _.take(topTags, 12)
      return (
        <TagList>
          {topTags.map(tag => (
            <Tag key={tag.fieldValue}>
              <PageLink to={`blog/tags/${_.kebabCase(tag.fieldValue)}/`}>
                <span>{tag.fieldValue} ({tag.totalCount})</span>
                <span className='active'>{tag.fieldValue} ({tag.totalCount})</span>
              </PageLink>
            </Tag>
          ))}
        </TagList>
      )
    }}
  />
)

const tagsQuery = graphql`
  query Tags($limit: Int) {
    allContentfulBlogPost(limit: $limit) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`