import { createGlobalStyle } from 'styled-components'
import { colors } from '../../tailwind'
import fonts from './fonts.jsx'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'TTNorms';
    font-style: normal;
    font-weight: 300;
    font-display: auto;
    src: local('TTNorms Light'), local('TTNorms-Light'), url(${fonts.TTNormsLightWOFF2}) format('woff2'), url(${fonts.TTNormsLightWOFF}) format('woff');
  }

  @font-face {
    font-family: 'TTNorms';
    font-style: italic;
    font-weight: 300;
    font-display: auto;
    src: local('TTNorms LightItalic'), local('TTNorms-LightItalic'), url(${fonts.TTNormsLightItalicWOFF2}) format('woff2'), url(${fonts.TTNormsLightItalicWOFF}) format('woff');
  }

  @font-face {
    font-family: 'TTNorms';
    font-style: normal;
    font-weight: normal;
    font-display: auto;
    src: local('TTNorms'), local('TTNorms-Regular'), url(${fonts.TTNormsRegularWOFF2}) format('woff2'), url(${fonts.TTNormsRegularWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: italic;
    font-weight: normal;
    font-display: auto;
    src: local('TTNorms Italic'), local('TTNorms-Italic'), url(${fonts.TTNormsItalicWOFF2}) format('woff2'), url(${fonts.TTNormsItalicWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: normal;
    font-weight: 500;
    font-display: auto;
    src: local('TTNorms Medium'), local('TTNorms-Medium'), url(${fonts.TTNormsMediumWOFF2}) format('woff2'), url(${fonts.TTNormsMediumWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: italic;
    font-weight: 500;
    font-display: auto;
    src: local('TTNorms MediumItalic'), local('TTNorms-MediumItalic'), url(${fonts.TTNormsMediumItalicWOFF2}) format('woff2'), url(${fonts.TTNormsMediumItalicWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: normal;
    font-weight: bold;
    font-display: auto;
    src: local('TTNorms Bold'), local('TTNorms-Bold'), url(${fonts.TTNormsBoldWOFF2}) format('woff2'), url(${fonts.TTNormsBoldWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: italic;
    font-weight: bold;
    font-display: auto;
    src: local('TTNorms BoldItalic'), local('TTNorms-BoldItalic'), url(${fonts.TTNormsBoldItalicWOFF2}) format('woff2'), url(${fonts.TTNormsBoldItalicWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: normal;
    font-weight: 800;
    font-display: auto;
    src: local('TTNorms ExtraBold'), local('TTNorms-ExtraBold'), url(${fonts.TTNormsExtraBoldWOFF2}) format('woff2'), url(${fonts.TTNormsExtraBoldWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: italic;
    font-weight: 800;
    font-display: auto;
    src: local('TTNorms ExtraBoldItalic'), local('TTNorms-ExtraBoldItalic'), url(${fonts.TTNormsExtraBoldItalicWOFF2}) format('woff2'), url(${fonts.TTNormsExtraBoldItalicWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: normal;
    font-weight: 900;
    font-display: auto;
    src: local('TTNorms Heavy'), local('TTNorms-Heavy'), url(${fonts.TTNormsHeavyWOFF2}) format('woff2'), url(${fonts.TTNormsHeavyWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: italic;
    font-weight: 900;
    font-display: auto;
    src: local('TTNorms HeavyItalic'), local('TTNorms-HeavyItalic'), url(${fonts.TTNormsHeavyItalicWOFF2}) format('woff2'), url(${fonts.TTNormsHeavyItalicWOFF}) format('woff');
  }
  
  @font-face {
    font-family: 'TTNorms';
    font-style: normal;
    font-weight: 1000;
    font-display: auto;
    src: local('TTNorms Black'), local('TTNorms-Black'), url(${fonts.TTNormsBlackWOFF2}) format('woff2'), url(${fonts.TTNormsBlackWOFF}) format('woff');
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${colors['blue-black']};
    font-family: 'TTNorms', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif;
    font-weight: normal;
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
