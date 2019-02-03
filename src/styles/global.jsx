import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    color: #2AAE4A;
    text-decoration: none;
    transition: all 350ms ease-in-out;
    border: none;
    border-bottom: 2px dotted transparent;
    &:hover {
      color: #7BEF96;
      border-bottom-color: #2AAE4AB3;
    }
  }
`

export default GlobalStyle
