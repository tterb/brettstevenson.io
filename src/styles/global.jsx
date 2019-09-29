import { createGlobalStyle } from 'styled-components'
import { colors, accent } from '../../tailwind'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: ${colors['blue-black']};
    font-family: 'TT Norms', 'Product Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif;
    text-rendering: optimizeLegibility;
    width: 100%;
    height: 100%;
    margin: 0 !important;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
