import React from 'react'
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'
import styled from 'styled-components'
import PageLink from '../components/PageLink'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  ${tw`block w-full text-center m-auto pt-8`}
  a {
    ${tw`px-4 py-0`}
    color: rgba(0,0,0,0.65);
    font-size: 3rem;
    filter: drop-shadow(0 0.5px 1px rgba(0,0,0,0.3));
    &:hover, &:active {
      color: ${accent};
    }
    &:first-child {
      ${tw`pl-0`}
    }
    &:last-child {
      ${tw`pr-0`}
    }
  }
`

const Pagination = ({ path, current, numPages }) => {
  const isFirst = current === 1
  const isLast = current === numPages
  const prevPage = current - 1 === 1 ? '/' : (current - 1).toString()
  const nextPage = (current + 1).toString()
  return (
    <>
      <Wrapper>
        {!isFirst && (
          <PageLink to={`${path}/${prevPage}`} rel='prev'><FontAwesomeIcon icon={faArrowAltCircleLeft}/></PageLink>
        )}
        {!isLast && (
          <PageLink to={`${path}/${nextPage}`} rel='next'><FontAwesomeIcon icon={faArrowAltCircleRight}/></PageLink>
        )}
      </Wrapper>
    </>
  )
}

export default Pagination