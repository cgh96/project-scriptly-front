import { createGlobalStyle } from 'styled-components';

import type { Theme } from '@/shared/types/styles.types';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  html {
    font-size: 100%;
  }


  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif, system-ui, Avenir, Helvetica;
    line-height: ${(props) => props.theme.lineHeights.normal};
    transition: background-color 0.2s ease, color 0.2s ease;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Remove list styles */
  ol,
  ul {
    list-style: none;
  }

  /* Remove quotes from blockquotes */
  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: "";
    content: none;
  }

  /* Table reset */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Form elements reset */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  /* Remove default button styles */
  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  /* Remove default input styles */
  input,
  textarea {
    border: none;
    outline: none;
  }

  /* Remove default link styles */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Image reset */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Remove default margins */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Make sure textareas without a rows attribute are not tiny */
  textarea:not([rows]) {
    min-height: 10em;
  }

  /* Anything that has been anchored to should have extra scroll margin */
  :target {
    scroll-margin-block: 5ex;
  }

`;
