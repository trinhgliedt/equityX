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
    padding: 0 0em 1em 0em;
    background-image: ${colors.containerBg};
    @media only screen and (max-width: 768px) {
      padding: 0 0.4em 0.2em 0.4em;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
      padding: 0 0.6em 0.3em 0.6em;
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
