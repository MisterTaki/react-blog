import { injectGlobal, css } from 'styled-components';

import { media } from './mixins';
import { font } from './variables';
import { common } from './colors';

export default injectGlobal`
  #blog {
    height: 100%;
  }

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
    font-size: ${font.fontSize.pc};
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    ${media.pad(css`
      font-size: ${font.fontSize.pad};
    `)}
    ${media.phone(css`
      font-size: ${font.fontSize.phone};
    `)}
  }

  body {
    position: relative;
    margin: 0;
    background: ${common.white};
    font-family: ${font.fontFamily};
    font-size: ${font.fontSize.body};
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
    background-color: transparent;
    text-decoration: none;
    text-decoration-skip: objects;

    &:focus,
    &:active,
    &:hover {
      outline: 0;
    }
  }

  div[role="button"] {
    &:focus,
    &:active,
    &:hover {
      outline: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
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
