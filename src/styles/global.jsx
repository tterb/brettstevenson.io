import { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'
import { accent } from '../../tailwind'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    background-color: #161719;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    ${tw`font-title w-full h-full m-0 p-0`}
  }
  a {
    ${tw`no-underline border-none cursor-pointer`}
    color: rgba(255,255,255,0.8);
    transition: all 300ms ease-in-out;
    &:hover,
    &.active a {
      color: ${accent};
    }
  }
`

export default GlobalStyle
