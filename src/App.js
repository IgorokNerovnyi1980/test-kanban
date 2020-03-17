import React, {useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import {connect} from 'react-redux';
import {getTest} from './redux/actions';


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

  body{
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    color: #000000;
    font-weight: 400;
    min-width: 320px;
    overflow-x: hidden;
    background: #ffffff;
    line-height: normal;
  }

  input, textarea{
    outline: none;
  }

  @media (min-width: 1921px) {
  body {
    font-size: 16px;
  }
}
`;

function App({getData = () => { }}) {

   useEffect(() => {
    console.log(getData());
   },);

    return (
        <> 
        < GlobalStyle /> 
        <h1>My template react-redux-router</h1>
        </>
    );
}

const STP = state => (
    {test: state.test}
);

const DTP = dispatch => ({
    getData: () => dispatch(getTest()),
});

export default connect(STP, DTP,)(App);
