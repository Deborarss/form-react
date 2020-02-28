import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: Roboto, sans-serif;
    background-image: linear-gradient(120deg, #3498db, #8e44ad)
  }

  button {
    cursor: pointer;
  }
`;

export default Base;
