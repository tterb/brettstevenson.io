import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Title = styled.h1`
  ${tw`text-5xl lg:text-5xl font-title text-white my-6 ml-4 tracking-normal relative inline-block sm: ml-0`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  @media (min-width: 600px) {
    margin-left: 2.5rem;
  }
`

export const BigTitle = styled.h1`
  ${tw`sm:text-5xl md:text-6xl lg:text-7xl font-title text-white mt-4 mb-6 tracking-wide`};
  font-weight: 800;
  letter-spacing: 0.025em;
  line-height: 1.1;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  width: 100%;
`

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-3xl font-sans text-white mt-8 ml-2 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`
