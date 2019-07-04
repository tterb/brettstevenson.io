import styled from 'styled-components'
import tw from 'tailwind.macro'

export const BigTitle = styled.h1`
  ${tw`sm:text-6xl ml-0 md:text-6xl lg:text-7xl font-title mt-4 mb-6 tracking-wide`}
  color: rgba(255,255,255,0.95);
  font-size: 3em;
  font-weight: 800;
  letter-spacing: 0.025em;
  line-height: 1.1;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  width: 100%;
`

export const Title = styled.h1`
  ${tw`relative inline-block text-5xl lg:text-5xl font-title my-6 ml-3 tracking-normal sm:ml-0`}
  color: rgba(255,255,255,0.9);
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
  @media (min-width: 600px) {
    margin-left: 2.5rem;
  }
`

export const Subtitle = styled.p`
  ${tw`text-2xl sm:mt-2 lg:text-3xl font-sans text-white lg:mt-8 ml-2 xxl:w-3/4`}
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`
