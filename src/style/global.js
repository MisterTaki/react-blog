import { injectGlobal } from 'styled-components';
import { base } from './theme';

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
    font-size: 10px;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    position: relative;
    margin: 0;
    background: ${base.backgroundColor};
    font-family: ${base.fontFamily};
    font-size: ${base.fontSize};
    font-weight: ${base.fontWeight};
    line-height: ${base.lineHeight};
    color: ${base.textColor};
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
    color: ${base.linkColor};
    background-color: transparent;
    text-decoration-skip: objects;
  }

  a:focus {
    color: ${base.linkHoverColor};
    outline: thin dotted;
  }

  a:active,
  a:hover {
    color: ${base.linkHoverColor};
    outline: 0;
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
`;
