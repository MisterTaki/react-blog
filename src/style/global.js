import { injectGlobal } from 'styled-components';
import { font } from './variables';
import { common } from './colors';

export default injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  html {
    font-size: ${font.htmlFontSize};
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    position: relative;
    margin: 0;
    background: ${common.white};
    font-family: ${font.fontFamily};
    font-size: ${font.fontSize};
    font-weight: ${font.fontWeight};
    line-height: ${font.lineHeight};
    color: ${common.black};
  }

  figcaption,
  figure,
  main,
  article,
  aside,
  footer,
  header,
  nav,
  section,
  details,
  menu {
    display: block;
  }

  a {
    color: ${common.black};
    background-color: transparent;
    text-decoration-skip: objects;
  }

  a:focus {
    color: ${common.black};
    outline: thin dotted;
  }

  a:active,
  a:hover {
    color: ${common.black};
    outline: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: 100%;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.25em;
  }

  ul,
  ol {
    list-style: none;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  img {
    border-style: none;
  }
`;
