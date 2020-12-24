// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx'
import styled from 'styled-components';


const Container = styled.div`
    margin: 0 0.5% 0 0.5%;
    height: calc(90vh);
    padding: 0 2em 1em 2em;
`;

function App() {
  return (
      <Container className="App">
        <NavBar />
        {/* <h1>Test</h1> */}

      </Container>
  );
}

export default App;
