import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/addons.cjs'

export const Divider = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  clip-path: ${props => props.clipPath};
  svg {
    fill: ${props => props.fill};
  }
`

export const DividerStatic = styled.div`
  background: ${props => props.bg};
  clip-path: ${props => props.clipPath};
  svg {
    fill: ${props => props.fill};
  }
`

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`