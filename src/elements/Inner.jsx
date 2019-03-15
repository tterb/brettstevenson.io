import tw from 'tailwind.macro'
import styled from 'styled-components'

const Inner = styled.div`
  ${tw`w-full text-left xxl:w-2/3`};
  @media (max-width: 600px) {
    text-align: center;
  }
`

export default Inner
