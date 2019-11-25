import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
// Components
import PageLink from './PageLink'
import { accent } from '../../tailwind'

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
          <PageLink
            label='previous' rel='prev'
            direction={'left'}
            to={`/${path}/${prevPage}`}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </PageLink>
        )}
        {!isLast && (
          <PageLink
            label='next' rel='next'
            to={`/${path}/${nextPage}`}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </PageLink>
        )}
      </Wrapper>
    </>
  )
}

Pagination.propTypes = {
  path: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
}

export default Pagination
