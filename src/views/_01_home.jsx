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
    align-self: flex-end;
    text-align: center;
    margin-left: 0.5%;
    margin-bottom: 1%;
    @media only screen and (max-width: 768px) {
        font-size: 0.7em;
        align-self: center;
    }
    background-image: ${colors.gold};
    border-radius: 0.2em;
    box-shadow: 0 0.5em 0.5em 0 rgba(0, 0, 0, 0.616);
    z-index: 1;

`;
const Column70Div = styled.div`
    padding: 0;
    width: 65%;
    align-self: flex-start;
    margin-left: 0;
    margin-bottom: 0;
    @media only screen and (max-width: 768px) {
        
    }
`;
const Column30Div = styled.div`
    padding: 0 4%;
    width: 30%;
    align-self: flex-start;
    margin-left: 0;
    margin-bottom: 0;
    @media only screen and (max-width: 768px) {
        
    }
`;
const Column33Div = styled.div`
    padding: 0 2% 2% 2%;
    width: 30%;
    align-self: flex-start;
    margin: 0 1em;
    border: 1px solid silver;
    @media only screen and (max-width: 768px) {
        
    }
`;
const HomePage = ({ }) => { 
    return (
        <>
        <div className="rowDiv darkBg">
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
        <div className="rowDiv goldBg">
            <Column33Div>
                <h3 className="fontColor1">Private Companies</h3>
                <p className="bold">Streamline how you manage equity from founding to IPO</p>
                <p>Cap table software, secondaries & 409 valuations</p>
                <div className="centerDiv">
                    <img src={privateCo} height="160em" alt="private companies"/>
                </div>
            </Column33Div>
            <Column33Div>
                <h3 className="fontColor2">Public Companies</h3>
                <p className="bold">Streamline how you manage equity after IPO</p>
                <p>ESPP and transfer agent</p>
                <div className="centerDiv">
                    <img src={publicCo} height="160em" alt="private companies"/>
                </div>
            </Column33Div>
            <Column33Div>
                <h3 className="fontColor3">Investors</h3>
                <p className="bold">Modernize how you manage your portfolio and back office</p>
                <p>Fund admin, valuation, scenario modeling & portfolio insights</p>
                <div className="centerDiv">
                    <img src={investors} height="160em" alt="private companies"/>

                </div>
            </Column33Div>

        </div>
        </>
    );

};
export default HomePage;