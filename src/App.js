import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {variables} from './variables';
//pages
import Board from './pages/Board';


const GlobalStyle = createGlobalStyle `
  * {
    box-sizing: border-box;
  }

  *:after, *:before {
    box-sizing: inherit;
  }

  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: normal;
  }
  input, textarea, button{
    outline: none;
    border:none;
  }
  body{
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    color:${variables.mainClr};
    font-weight: 400;
    min-width: 320px;
    overflow-x: hidden;
    background: #ffffff;
    line-height: normal;
  }

  @media (min-width: 1921px) {
  body {
    font-size: 16px;
  }
}
`;

function App() {

    return (
        <> 
        < GlobalStyle /> 
          <Board />
        </>
    );
}

export default App;
