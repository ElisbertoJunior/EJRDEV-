import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;


  }

  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 8px;
  }

  span {
    color: ${(props) => props.theme.blueColor};
    font-weight: bold;
  }
`
export default GlobalStyle
