import React from 'react'
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'
import styled from 'styled-components'
import PageLink from '../components/PageLink'
import PostTags from '../components/PostTags'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTags, faArchive } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  ${tw`relative inline-block w-1/4 float-right pt-0`}
`

const SidebarIcons = styled.ul`
  ${tw`text-left list-reset w-4/5 mx-auto my-6 p-0 pl-2`}
  font-size: 2rem;
  li {
    ${tw`inline-block mr-5`}
    margin-right: 1.05rem;
    a svg {
      color: rgba(0,0,0,0.7);
      transition: all 350ms ease-in-out;
      &:hover {
        color: ${accent};
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const Separator = styled.hr`
  ${tw`w-4/5 border-none mt-4 mx-auto mb-2`}
  height: 0;
  border-bottom: 2px solid rgba(0,0,0,0.095);
`

const Sidebar = () => (
  <Wrapper className='sidebar'>
    <SidebarIcons>
      <li><PageLink to='../search'><FontAwesomeIcon icon={faSearch} /></PageLink></li>
      <li><PageLink to='../tags'><FontAwesomeIcon icon={faTags} /></PageLink></li>
      <li><PageLink to='../archive'><FontAwesomeIcon icon={faArchive} /></PageLink></li>
    </SidebarIcons>
    <Separator />
    <PostTags className='sidebar-tags' limit={8} />
  </Wrapper>
)

export default Sidebar