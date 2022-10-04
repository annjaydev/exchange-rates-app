import { createGlobalStyle } from 'styled-components'

import PoppinsRegular from './fonts/Poppins-Regular.ttf'
import PoppinsMedium from './fonts/Poppins-Medium.ttf'
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular});
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMedium});
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBold});
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif !important;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
