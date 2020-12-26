import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../config/colorConfig';
import pieChart from "../images/pi_chart.png";
import privateCo from "../images/privateCo.png";
import publicCo from "../images/publicCo.png";
import investors from "../images/investors.png";

const Demo = styled.div`
    padding: 0.2em 0.2em;
    width: 8em;
    text-align: center;
    margin-left: 0.5%;
    margin-bottom: 1%;
    @media only screen and (max-width: 768px) {
        font-size: 0.7em;
        align-self: center;
        padding: 0.05em 0.05em; 
    }
    background-image: ${colors.gold};
    border-radius: 0.2em;
    box-shadow: 0 0.5em 0.5em 0 rgba(0, 0, 0, 0.616);

`;
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


const HomePage = ({ }) => { 
    return (
        <>
        <div className="rowFlex p2 my2x0 darkBg">
            <Column70Div>
                <h2 className="lightBlueFont">Why EquityX?</h2>
                <h1>Equity. Simplified.</h1>
                <p>EquityX helps companies and investors manage their cap tables, valuation, investments, and equity plans.</p>
                <Demo><a href="/">Request a Demo</a></Demo>
            </Column70Div>
            <Column30Div>
                <img src={pieChart} width="100%" alt="pie chart"/>
            </Column30Div>
        </div>
        <div className="rowFlex py2 px1 my2x0 goldBg">
            <Column33Div>
                <Row1ofColumn33>
                    <h3 className="fontColor1">Private Companies</h3>
                    <p className="bold">Streamline how you manage equity from founding to IPO</p>
                    <p>Cap table software, secondaries & 409 valuations</p>
                </Row1ofColumn33>
                <div className="centerDiv">
                    <img className="sectorImg" src={privateCo} alt="private companies"/>
                </div>
            </Column33Div>
            <Column33Div>
                <Row1ofColumn33>
                    <h3 className="fontColor2">Public Companies</h3>
                    <p className="bold">Streamline how you manage equity after IPO</p>
                    <p>Maintain your cap table and running quarterly 409A valuations</p>
                </Row1ofColumn33>
                <div className="centerDiv">
                    <img className="sectorImg" src={publicCo} alt="private companies"/>
                </div>
            </Column33Div>
            <Column33Div>
                <Row1ofColumn33>
                    <h3 className="fontColor3">Investors</h3>
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
            <div className="rowFlex rowFlexCenter greenBg">
                <Demo classNme = ""><a href="/">Request a Demo</a></Demo>
            </div>
        </div >
        <div className="rowFlex p2 darkBg">
            <div>
                <h3>COMPANIES</h3>
                <p><a src="/">Plans & pricing</a></p>
                <p><a src="/">Board consents</a></p>
                <p><a src="/">Liquidity</a></p>
                <p><a src="/">Products for public companies</a></p>
            </div>
            <div>
                <h3>INVESTORS</h3>
                <p><a src="/">Plans for investors</a></p>
                <p><a src="/">Fund administration</a></p>
                <p><a src="/">ASC 820</a></p>
                <p><a src="/">Capital call line of credit</a></p>
            </div>
            <div>
                <h3>RESOURCES</h3>
                <p><a src="/">Video tour</a></p>
                <p><a src="/">Support</a></p>
                <p><a src="/">Employee resources</a></p>
                <p><a src="/">Product release notes</a></p>
            </div>
            <div>
                <h3>PARTNERS</h3>
                <p><a src="/">Law firm partners</a></p>
                <p><a src="/">VC partners</a></p>
                <p><a src="/">Private Equity partners</a></p>
            </div>
            <div>
                <h3>ABOUT US</h3>
                <p><a src="/">Company</a></p>
                <p><a src="/">Careers</a></p>
                <p><a src="/">Press</a></p>
                <p><a src="/">Contact us</a></p>
            </div>
        </div>
        </>
    );

};
export default HomePage;