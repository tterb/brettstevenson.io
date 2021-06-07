import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import orderBy from 'lodash/orderBy'
// Components
import PageLink from 'components/PageLink'


const CategoryWrapper = styled.div`
  border-radius: 50%;
  box-shadow: 1px 2px 5px -1px rgba(0,0,0,0.35);
  transition: width 400ms ease-in-out, padding 200ms;
  transform: translate(-100%, -50%);
`

const CategoryButton = styled.button`
  &.open {
    .close {
      &::before, &::after {
        display: flex;
        height: 1.5rem;
        top: 0.5rem;
        opacity: 1;
        transform-origin: center;
        transition: opacity 100ms ease-in-out 300ms, transform 400ms ease-in-out 500ms, height 200ms ease-in-out 200ms, top 200ms ease-in-out 200ms;
      }
      &::before {
        transform: scale(0.9) rotate(-45deg);
      }
      &::after {
        transform: scale(0.9) rotate(45deg);
      }
    }
  }
`

const Icon = styled.span`
  column-gap: 0.15rem;
  row-gap: 0.15rem;
`

const Square = styled.span`
  border-radius: 3px;
`

const CloseIcon = styled.span`
	&::before, &::after {
		content: '';
		position: absolute;
		background: #677486;
		width: 0.25rem;
		height: 2rem;
		top: 4px;
		border-radius: 4px;
		opacity: 0;
		transform: scale(1) rotate(0);
    transform-origin: center;
		transition: opacity 100ms ease-in-out 300ms, transform 400ms ease-in-out 150ms, height 200ms ease-in-out 0ms, top 200ms ease-in-out 0ms;
	}
`

const ListWrapper = styled.div`
  width: max-content;
  &:before {
    content: '';
    position: absolute;
    background: #FFF;
    width: 0.75rem;
    height: 0;
    top: 2.25rem;
    right: 4.7rem;
    box-shadow: 1px 0.5px 3px -0.5px rgba(0,0,0,0.5);
    transform: rotate(45deg);
  }
  &.open {
    &:before {
      height: 0.75rem;
    }
  }
`

const Menu = styled.ul`
  top: 2.65rem;
  left: -30%;
  border-radius: 8px;
  box-shadow: -0.5px 2px 6px -2px rgba(0,0,0,0.35);
  li:last-child a {
    border-bottom: none;
  } 
`

const CategoryLink = styled.a`
  border-bottom: 0.5px solid rgba(0,0,0,0.1);
`

const CategoryIcon = ({ isOpen }) => (
  <span className='category-wrapper absolute flex text-base-600 items-center justify-center w-9 h-9'>
    <Icon className={`category absolute grid grid-cols-2 gap-1 text-base-600 transition-transform ease-in-out transform ${isOpen ? 'duration-400 delay-200 scale-x-0' : 'duration-300 delay-400 scale-90'}`}>
      {Array(4).fill(0).map((_) => (
        <Square className={`square bg-transparent w-3 h-3 border-3 border-solid border-base-600 rounded transform transition-transform ease-in-out ${isOpen ? 'duration-300 delay-0 -rotate-45' : 'duration-200 delay-400 rotate-0'}`} />
      ))}
    </Icon>
  </span>
)


const CategoryMenu = (props) => {

  const [open, setOpen] = useState(false)
  const truncatedCategories = props.categories.map((category) => {
    if (category.fieldValue === 'Web Development') {
      category.fieldValue = 'Web Dev'
    }
    return category
  })
  const categories = orderBy(truncatedCategories, [category => category.totalCount], ['desc'])

  return (
    <div className='relative group-hover:bg-none w-14 h-14 items-center justify-center rounded-full p-2'>
      <CategoryWrapper className='absolute flex bg-white text-base font-normal items-center justify-center w-12 h-12 top-7 left-13 outline-none box-border'>
        <CategoryButton className={`absolute flex bg-none items-center justify-center w-10 h-10 rounded-full border-none p-0 outline-none transition-all duration-300 ease-in-out overflow-visible cursor-pointer focus:outline-none${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
          <CategoryIcon isOpen={open} />
          <CloseIcon className='close flex bg-none text-base-600 items-center justify-center w-10 h-10 mx-auto' />
        </CategoryButton>
        <ListWrapper className={`relative list-reset h-0 top-0 p-0 overflow-visible${open ? ' open' : ''}`}>
          <Menu className={`relative bg-white list-reset w-44 h-0 top-0 p-0 overflow-scroll transition-all duration-300 ease-in-out${open ? ' open h-64 py-1' : ''}`}>
            {categories.map((category, index) => (
              <li key={index} className='hover:bg-gray-900 transition-all duration-200 ease-in-out'>
                <CategoryLink
                  className='group flex text-base-400 font-medium w-auto mx-2 p-2 hover:text-base-300'
                  label={category.fieldValue}
                  to={`/blog/category/${kebabCase(category.fieldValue)}`}
                >
                  {category.fieldValue} <span className='text-base-600 font-normal ml-auto group-hover:text-accent'>{category.totalCount}</span>
                </CategoryLink>
              </li>
            ))}
          </Menu>
        </ListWrapper>
      </CategoryWrapper>
    </div>
  )
}
CategoryMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    fieldValue: PropTypes.string.isRequired,
    totalCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
}

export default CategoryMenu