import React from 'react';
import styled from 'styled-components';
import pieChart from "../images/pi_chart.png";
import privateCo from "../images/privateCo.png";
import publicCo from "../images/publicCo.png";
import investors from "../images/investors.png";
import DemoButton from "../components/DemoButton";

const Column70Div = styled.div`
    padding: 0;
    width: 65%;
    align-self: flex-start;
    @media only screen and (max-width: 768px) {
        width: 70%;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
        width: 78%;
    }
`;
const Column30Div = styled.div`
    padding: 0 4%;
    width: 30%;
    align-self: flex-start;
    @media only screen and (max-width: 768px) {
        width: 25%;
        align-self: center;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
        width: 18%;
        align-self: center;
    }
`;
const Column33Div = styled.div`
    padding: 0 2% 2% 2%;
    width: 30%;
    align-self: flex-start;
    margin: 0 1em;
    border: 1px solid silver;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
        margin: 0 0.2em;
        padding: 0 0.6% 1% 0.6%;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
        font-size: 1em;
        margin: 0 0.3em;
    }
`;

const Row1ofColumn33 = styled.div`
    @media only screen and (max-width: 768px) {
        min-height: 6em;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
        min-height: 8em;
    }
    
`;


const HomePage = ({ displayContactForm }) => { 
    // const [isShown_ContactForm, setIsShown_ContactForm] = useState(false);
    // const displayContactForm = (isDisplayed) => {
    //     if (isDisplayed === true & isShown_ContactForm === false) {
    //         setIsShown_ContactForm(true);
    //     }
    //     else if (isDisplayed === false & isShown_ContactForm === true) {
    //         setIsShown_ContactForm(false);
    //     }
    // };
    // console.log("isShown_ContactForm: ", isShown_ContactForm);
    let homePagePropsToDemoButton = {
        destination: "homePage",
        displayContactForm,
    }
    return (
        <>
        <div className="rowFlex rowSpaceBetweenContent p2 my2x0 darkBg">
            <Column70Div>
                <h2 className="lightGreenFont">Why EquityX?</h2>
                <h1>Equity. Simplified.</h1>
                <p>EquityX helps companies and investors manage their cap tables, valuation, investments, and equity plans.</p>
                <DemoButton {...homePagePropsToDemoButton} />
            </Column70Div>
            <Column30Div>
                <img src={pieChart} width="100%" alt="pie chart"/>
            </Column30Div>
        </div>
        <div className="rowFlex rowSpaceBetweenContent py2 px1 my2x0 goldBg">
            <Column33Div>
                <Row1ofColumn33>
                    <h3 className="yellowFont">Private Companies</h3>
                    <p className="bold">Streamline how you manage equity from founding to IPO</p>
                    <p>Cap table software, secondaries & 409 valuations</p>
                </Row1ofColumn33>
                <div className="centerDiv">
                    <img className="sectorImg" src={privateCo} alt="private companies"/>
                </div>
            </Column33Div>
            <Column33Div>
                <Row1ofColumn33>
                    <h3 className="lightGreenFont">Public Companies</h3>
                    <p className="bold">Streamline how you manage equity after IPO</p>
                    <p>Maintain your cap table and running quarterly 409A valuations</p>
                </Row1ofColumn33>
                <div className="centerDiv">
                    <img className="sectorImg" src={publicCo} alt="private companies"/>
                </div>
            </Column33Div>
            <Column33Div>
                <Row1ofColumn33>
                    <h3 className="darkRedFont">Investors</h3>
                    <p className="bold">Modernize how you manage your portfolio and back office</p>
                    <p>Fund admin, valuation, scenario modeling & portfolio insights</p>
                </Row1ofColumn33>
                <div className="centerDiv">
                    <img className="sectorImg" src={investors} alt="private companies"/>
                </div>
            </Column33Div>

        </div>
        <div className="p1 greenBg">
            <h3 className="lightBlueFont centerText m0">Join EquityX</h3>
            <h2 className="centerText">Get in touch to discuss plans and pricing</h2>
            <div className="rowFlex rowSpaceBetweenContent rowCenterContent greenBg">
                <DemoButton {...homePagePropsToDemoButton} />
            </div>
        </div >
        <div className="rowFlex rowSpaceBetweenContent p2 darkBg">
            <div>
                <h3 className="lightBlueFont">COMPANIES</h3>
                <p><a className="whiteFont lightBlueHover" href="/">Plans & pricing</a></p>
                <p><a className="whiteFont lightBlueHover" href="/">Board consents</a></p>
                <p><a className="whiteFont lightBlueHover" href="/">Liquidity</a></p>
                <p><a className="whiteFont lightBlueHover" href="/">Products for public companies</a></p>
            </div>
            <div>
                <h3 className="purpleFont">INVESTORS</h3>
                <p><a className="whiteFont purpleHover" href="/">Plans for investors</a></p>
                <p><a className="whiteFont purpleHover" href="/">Fund administration</a></p>
                <p><a className="whiteFont purpleHover" href="/">ASC 820</a></p>
                <p><a className="whiteFont purpleHover" href="/">Capital call line of credit</a></p>
            </div>
            <div>
                <h3 className="lightGreenFont">RESOURCES</h3>
                <p><a className="whiteFont lightGreenHover" href="/">Video tour</a></p>
                <p><a className="whiteFont lightGreenHover" href="/">Support</a></p>
                <p><a className="whiteFont lightGreenHover" href="/">Employee resources</a></p>
                <p><a className="whiteFont lightGreenHover" href="/">Product release notes</a></p>
            </div>
            <div>
                <h3 className="lightRedFont">PARTNERS</h3>
                <p><a className="whiteFont lightRedHover" href="/">Law firm partners</a></p>
                <p><a className="whiteFont lightRedHover" href="/">VC partners</a></p>
                <p><a className="whiteFont lightRedHover" href="/">Private Equity partners</a></p>
            </div>
            <div>
                <h3 className="orangeFont">ABOUT US</h3>
                <p><a className="whiteFont orangeHover" href="/">Company</a></p>
                <p><a className="whiteFont orangeHover" href="/">Careers</a></p>
                <p><a className="whiteFont orangeHover" href="/">Press</a></p>
                <p><a className="whiteFont orangeHover" href="/">Contact us</a></p>
            </div>
        </div>
        {/* {isShown_ContactForm && (
            <ContactForm />
        )} */}
        </>
    );

};
export default HomePage;