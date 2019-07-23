import { createGlobalStyle } from 'styled-components'
import { colors, accent } from '../../tailwind'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    background-color: ${colors['blue-black']};
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    font-family: 'Product Sans', 'Titillium Web', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    border: none;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    &:hover,
    &.active a {
      color: ${accent};
    }
  }
`

export default GlobalStyle
