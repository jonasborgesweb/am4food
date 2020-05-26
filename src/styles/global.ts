import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html{
    font-size: 62.5%;
  }

  body,
  input,
  button {
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
  }

  button{
    cursor: pointer;
  }

`;