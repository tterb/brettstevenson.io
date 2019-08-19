import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors, accent } from '../../tailwind'
// Components
import PageLink from './PageLink'
// Icons
// import { Tag } from 'styled-icons/evil/Tag'
import Tag from '../images/tag'

const Container = styled.div`
  ${tw`w-14 h-14 rounded-full p-2`}
  background: none;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`

const TagWrapper = styled.div`
  ${tw`absolute text-base font-normal w-12 h-12 pin-t pin-l outline-none`}
  background: ${colors['grey-lightest']};
  top: 1.75rem;
  left: 3.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 1px 2px 5px -1px rgba(0,0,0,0.35);
  box-sizing: border-box;
  transition: width 400ms ease-in-out, border-radius 350ms ease-in-out 250ms, padding 200ms;
  transform: translate(-100%, -50%);
`

const TagButton = styled.button`
  ${tw`absolute w-10 h-10 pin-t pin-l rounded-full border-none p-0 outline-none cursor-pointer`}
  background: none;
  transition: all 350ms ease-in-out;
  overflow: visible;
  &.open {
    svg {
      left: 0.35rem;
      transform: rotate(-45deg);
      transition: all 350ms ease-in-out;
    }
  }
  svg {
    position: relative;
    color: ${colors['grey-dark']};
    stroke-color: ${colors['grey-dark']};
    top: 0.3rem;
    left: 0.3rem;
    transform: rotate(0deg);
    transition: all 350ms ease-in-out;
  }
`

const TagIcon = styled(Tag)`
  ${tw`relative w-12 h-12`}
  color: ${colors['grey-dark']};
  stroke-color: ${colors['grey-dark']};
  left: 1rem;
`

const ListWrapper = styled.div`
  ${tw`relative list-reset h-0 pin-t p-0 overflow-visible`}
  width: max-content;
  transition: all 450ms ease-in-out;
  &:before {
    ${tw`absolute w-3 h-0`}
    content: '';
    background: ${colors['grey-lighter']};
    top: 2.25rem;
    left: 0.5rem;
    box-shadow: 1px 0.5px 3px -0.5px rgba(0,0,0,0.5);
    transform: rotate(45deg);
  }
  &.open {
    &:before {
      ${tw`h-3`}
      // border-left: 8px solid transparent;
      // border-right: 8px solid transparent;
      // border-bottom: 8px solid ${colors['grey-lighter']};
    }
  }
`

const TagList = styled.ul`
  ${tw`relative list-reset h-0 pin-t p-0 overflow-scroll`}
  background: ${colors['grey-lighter']};
  width: max-content;
  top: 2.65rem;
  border-radius: 8px;
  box-shadow: -0.5px 2px 6px -2px rgba(0,0,0,0.35);
  transition: all 350ms ease-in-out;
  &.open {
    ${tw`h-64`}
    transition: all 350ms ease-in-out;
  }
  li:first-child, li:last-child {
    ${tw`py-1`}
  }
`

const TagItem = styled.li`
  ${tw`mx-2`}
  border-bottom: 0.5px solid rgba(0,0,0,0.2);
  padding: 0.175rem 0;
  a {
    color: ${colors['grey-darker']} !important;
    &:hover span {
      color: ${accent};
    }
  }
`

class TagMenu extends React.Component {
  
  state = {
    open: false,
  }
  
  handleOnClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }
  
  render() {
    return (
      <StaticQuery
        query={tags2Query}
        render={data => {
          const tags = _.orderBy(data.allContentfulBlogPost.group, [(tag) => tag.totalCount], ['desc'])
          // topTags = _.take(topTags, 12)
        return (
          <Container>
            <TagWrapper>
              <TagButton className={this.state.open ? 'open' : ''} onClick={this.handleOnClick}>
                <TagIcon />
              </TagButton>
              <ListWrapper className={this.state.open ? 'open' : ''}>
                <TagList className={this.state.open ? 'open' : ''}>
                  {tags.map((tag, index) => (
                    <TagItem key={index}>
                      <PageLink to={`/blog2/tag/${_.kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue} (<span>{tag.totalCount}</span>)
                      </PageLink>
                    </TagItem>
                  ))}
                </TagList>
              </ListWrapper>
            </TagWrapper>
          </Container>
        )}}
      />
    )
  }
}

export default TagMenu

const tags2Query = graphql`
  query Tags2($limit: Int) {
    allContentfulBlogPost(limit: $limit) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`

// return (
//   <StaticQuery
//     query={tags2Query}
//     render={data => {
//       const tags = data.allContentfulBlogPost.group
//       let topTags = _.orderBy(tags, [(tag) => tag.totalCount], ['desc'])
//       topTags = _.take(topTags, 12)
//     return (
//       <TagWrapper>
//         <TagIcon onClick={this.handleOnClick} />
//         <TagList>
//           {tags.map(tag => (
//             <TagItem key={tag}>
//               <PageLink to={`blog/tag/${_.kebabCase(tag.fieldValue)}/`}>
//                 { tag.fieldValue }
//               </PageLink>
//             </TagItem>
//           ))}
//         </TagList>
//       </TagWrapper>
//     )}}
//   />
// )
