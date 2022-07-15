import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
 
   html, body {
        width: 100%;
        height: 100%;
        background-color: #000000;
        font-family: 'Roboto Condensed', sans-serif;
    }
`;

export default GlobalStyle;

//font-family: 'Big Shoulders Inline Text', cursive;