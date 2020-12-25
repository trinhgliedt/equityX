// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import colors from '../src/config/colorConfig';
import NavBar from './components/NavBar.jsx'
import HomePage from './views/_01_home.jsx';

const Container = styled.div`
    margin: 0 0.5% 0 0.5%;
    
    padding: 0 2em 1em 2em;
    background-image: ${colors.containerBg};
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
