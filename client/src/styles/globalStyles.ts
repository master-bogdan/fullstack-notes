import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Sans-Serif;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    margin-right: 20px;
  }

  a.active {
    color: rgba(255, 255, 255, 1);
  }
`;
