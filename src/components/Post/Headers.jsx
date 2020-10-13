import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const H1 = styled.h1`
  ${tw`leading-tighter mt-6 mb-5`}
  font-size: 3rem;
`

const H2 = styled.h2`
  ${tw`leading-tighter mt-6 mb-4`}
  font-size: 2.5rem;
  letter-spacing: -0.5px;
`

const H3 = styled.h3`
  ${tw`leading-tighter mt-6 mb-2`}
  font-size: 2rem;
`

const H4 = styled.h4`
  ${tw`text-2xl leading-none mt-5`}
`

const H5 = styled.h4`
  ${tw`text-xl leading-none mt-4`}
`

const Headers = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
}

export default Headers
