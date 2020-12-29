// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Link, Router } from "@reach/router";
import styled from 'styled-components';
import colors from '../src/config/colorConfig';
import NavBar from './components/NavBar.jsx'
import HomePage from './views/_01_home.jsx';
import ContactForm from "./components/ContactForm";
import SamplePage from "./views/_02_sample.jsx";

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
  const [isShown_ContactForm, setIsShown_ContactForm] = useState(false);
  const displayContactForm = (isDisplayed) => {
    if (isDisplayed === true & isShown_ContactForm === false) {
        setIsShown_ContactForm(true);
    }
    else if (isDisplayed === false & isShown_ContactForm === true) {
        setIsShown_ContactForm(false);
    }
  };
  console.log("isShown_ContactForm: ", isShown_ContactForm);

  let homePagePropsfromApp = { displayContactForm };
  let navBarPropsfromApp = { displayContactForm };
  let contactFormPropsfromApp = { displayContactForm };


  return (
    <div className="externalBg pb10">
      <Container className="App">
        <NavBar {...navBarPropsfromApp} />
        <Link to="/sample">Sample Link</Link>
        <Link to="/home">Home</Link>
        <Router>
          <HomePage {...homePagePropsfromApp} path="/home" />
          <SamplePage path="/sample" />
        </Router>
        {isShown_ContactForm && (
          <ContactForm {...contactFormPropsfromApp}/>
          )}
      </Container>
    </div>
  );
}

export default App;
