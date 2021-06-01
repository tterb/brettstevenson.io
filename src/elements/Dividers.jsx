import styled from 'styled-components'


export const Divider = styled.div`
  position: relative;
  background: ${props => props.bg};
  clip-path: ${props => props.clipPath};
  width: 100%;
  height: 100%;
  svg {
    fill: ${props => props.fill};
  }
`

export const DividerStatic = styled.div`
  background: ${props => props.bg};
  clip-path: ${props => props.clipPath};
  width: 100%;
  height: 100%;
  svg {
    fill: ${props => props.fill};
  }
`

export const DividerMiddle = styled(Divider)`
  clip-path: ${props => props.clipPath ? props.clipPath : 'polygon(0 15%, 100% 25%, 100% 85%, 0 75%)'};
`
