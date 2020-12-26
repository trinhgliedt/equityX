// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import colors from '../src/config/colorConfig';
import NavBar from './components/NavBar.jsx'
import HomePage from './views/_01_home.jsx';

const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 0em 0em 0em;
    background-image: ${colors.containerBg};
    @media only screen and (max-width: 768px) {
      padding: 0;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
      padding: 0;
    }
`;


function App() {
  return (
      <Container className="App">
        <NavBar />
        <HomePage />

      </Container>
  );
}

export default App;
