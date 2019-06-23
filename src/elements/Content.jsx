import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons'

const Content = styled(Parallax.Layer)`
  ${tw`flex p-6 md:p-16 lg:p-24 justify-center items-center z-50`};
`

export default Content
