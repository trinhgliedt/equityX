import React, { useState } from 'react';
import { Link } from "@reach/router";
import styled from 'styled-components';
import logo from '../images/EquityX_Logo.png';
import colors from '../config/colorConfig';
import DemoButton from "./DemoButton";

const NavBarContainer = styled.div`
    width: 97.36%;
    display: flex;
    justify-content: space-between;
    background-image: ${colors.navbarBg};
    padding: 0.5em 1em 0 1em;
    @media only screen and (max-width: 768px) {
        padding: 0.1em 0.5em 0 0.5em;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
        padding: 0.1em 0.5em 0 0.5em;
    }
`;

const TabContainer = styled.div`
    height: 100%;
    width: 68%;
    display: flex;
    align-self: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    
    
    @media only screen and (max-width: 768px) {
        width: 60%;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
        width: 60%;
    }
`;
const NavBarTab = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 1% 2.5%;
    justify-content: center;
    margin: 0 0.5%;
`;

const TabLabel = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 1.1em;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
        font-size: 0.7em;
    }
`;
const DropDownContent = styled.div`
    width: 40em;
    margin-left: 24%;
    position: absolute;
    font-size: 1em;
    border-top: 1px solid grey;
    opacity: 1;
    animation: fade 0.8s linear;
    border-radius: 0 0 0.5em 0.5em;
    background-image: ${colors.dropdownMenuBg};
    box-shadow: 0 1em 1em 0 rgba(0,0,0,0.2);
    z-index: 1;
    
    @media only screen and (max-width: 768px) {
        margin-left: 0.1em;
        width: 82%;
    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
        margin-left: 0.3em;
        width: 90%;
    }
`;



const NavBar = ({ displayContactForm }) => {
    const [isShown_productDropdown, setIsShown_productDropdown] = useState(false);
    const [isShown_resourceDropdown, setIsShown_resourceDropdown] = useState(false);
    const [isShown_partnerDropdown, setIsShown_partnerDropdown] = useState(false);
    const [isShown_aboutUsDropdown, setIsShown_aboutUsDropdown] = useState(false);

    let navBarPropsToDemoButton = {
        destination: "navBar",
        displayContactForm,
    }

    const handleMouseEnter = (tab) => {
        if (tab === "products"){
            setIsShown_productDropdown(true)
        }
        else if (tab === "resources"){
            setIsShown_resourceDropdown(true)
        }
        else if (tab === "partners"){
            setIsShown_partnerDropdown(true)
        }
        else if (tab === "aboutUs"){
            setIsShown_aboutUsDropdown(true)
        }
    };

    const handleMouseLeave= (tab, tabContent=null) => {
        if (tab === "products" && tabContent === null){
            setIsShown_productDropdown(false)
        }
        else if (tab === "products" && tabContent === 'productDropDownContent'){
            setIsShown_productDropdown(true)
        }
        else if (tab === "resources" && tabContent === null){
            setIsShown_resourceDropdown(false)
        }
        else if (tab === "resources" && tabContent === 'resourceDropDownContent'){
            setIsShown_resourceDropdown(true)
        }
        else if (tab === "partners" && tabContent === null){
            setIsShown_partnerDropdown(false)
        }
        else if (tab === "partners" && tabContent === 'partnerDropDownContent'){
            setIsShown_partnerDropdown(true)
        }
        else if (tab === "aboutUs" && tabContent === null){
            setIsShown_aboutUsDropdown(false)
        }
        else if (tab === "aboutUs" && tabContent === 'aboutUsDropDownContent'){
            setIsShown_aboutUsDropdown(true)
        }
    };

    return (
        <div className="sticky">
        <NavBarContainer>
            {/* <Logo><img src={logo} alt="logo" width="100%" height="auto"/></Logo> */}
            <div id="logoContainer">
            <img src={logo} alt="logo" height="100%"/>
            </div>
            <TabContainer>
                <NavBarTab 
                    id = "products"
                    onMouseEnter={() => handleMouseEnter('products')}
                    onMouseLeave={() => handleMouseLeave('products')}
                    >
                    <TabLabel 
                        className="tabLabel"
                    >
                        Products & Solutions
                    </TabLabel>
                </NavBarTab>
                <NavBarTab
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={() => handleMouseLeave('resources')}
                >
                    <TabLabel
                        className="tabLabel"
                    >
                        Resources
                    </TabLabel>
                </NavBarTab>
                <NavBarTab
                onMouseEnter={() => handleMouseEnter('partners')}
                onMouseLeave={() => handleMouseLeave('partners')}
                >
                    <TabLabel
                        className="tabLabel"
                    >
                        Partners
                    </TabLabel>
                </NavBarTab>
                <NavBarTab
                onMouseEnter={() => handleMouseEnter('aboutUs')}
                onMouseLeave={() => handleMouseLeave('aboutUs')}
                >
                    <TabLabel
                        className="tabLabel"
                    >
                        About us
                    </TabLabel>
                </NavBarTab>
            </TabContainer>
            <DemoButton {...navBarPropsToDemoButton} />
        </NavBarContainer>
        {isShown_productDropdown && (
            <DropDownContent
            id = "productDropdown"
            onMouseEnter={() => handleMouseLeave('products', 'productDropDownContent')}
            onMouseLeave={() => handleMouseLeave('products')}
            >
                <table>
                    <thead>
                        <tr>
                            <th><Link to="/sample">Private Companies</Link></th>
                            <th><Link to="/sample">Investors</Link></th>
                            <th><Link to="/sample">Public Companies</Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/sample">Overview</Link></td>
                            <td><Link to="/sample">Overview</Link></td>
                            <td><Link to="/sample">Overview</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/sample">Cap Table Management</Link></td>
                            <td><Link to="/sample">Fund Administration</Link></td>
                            <td><Link to="/sample">ESPP</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/sample">Scenario Modeling</Link></td>
                            <td><Link to="/sample">Capital Call Line of Credit</Link></td>
                            <td><Link to="/sample">Transfer Agent</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/sample">Private Company Liquidity</Link></td>
                            <td><Link to="/sample">Portfolio Insights</Link></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </DropDownContent>
        )}
        {isShown_resourceDropdown && (
            <DropDownContent
            id = "resourceDropdown"
            onMouseEnter={() => handleMouseLeave('resources', 'resourceDropDownContent')}
            onMouseLeave={() => handleMouseLeave('resources')}
            >
                <table>
                    <thead>
                        <tr>
                            <th><Link to="/sample">EquityX Resources</Link></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/sample">&#128172; Customer Testimonials</Link></td>
                            <td><Link to="/sample">&#9997; Blog</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/sample">&#128197; Events & Webinars</Link></td>
                            <td><Link to="/sample">&#x2B50; Partner Stories</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/sample">&#128718;&#65039; Supports</Link></td>
                            <td><Link to="/sample">&#128214; Product Education</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/sample">&#128177; Product Release Notes</Link></td>
                            <td><Link to="/sample">&#128269; How We Work</Link></td>
                        </tr>
                    </tbody>
                </table>
            </DropDownContent>
        )}
        {isShown_partnerDropdown && (
            <DropDownContent
            id = "partnerDropdown"
            onMouseEnter={() => handleMouseLeave('partners', 'partnerDropDownContent')}
            onMouseLeave={() => handleMouseLeave('partners')}
            >
                <table>
                    <thead>
                        <tr>
                            <th><Link to="/sample">Partner Resources</Link></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/sample">&#9878; Law Partners</Link></td>
                            <td><Link to="/sample">&#9072; Why partner with EquityX</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/sample">&#65130; VC Partners</Link></td>
                            <td><Link to="/sample">&#129309; Become a partner</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/sample">&#128195; Private Equity Partners</Link></td>
                            <td><Link to="/sample">&#128273; Partner Resource Center</Link></td>
                        </tr>
                    </tbody>
                </table>
            </DropDownContent>
        )}
        {isShown_aboutUsDropdown && (
            <DropDownContent
            id = "aboutUsDropdown"
            onMouseEnter={() => handleMouseLeave('aboutUs', 'aboutUsDropDownContent')}
            onMouseLeave={() => handleMouseLeave('aboutUs')}
            >   
                <table>
                    <thead>
                        <tr>
                            <th><Link to="/sample">About EquityX</Link></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/sample">&#128104;&#127997;&#8205;&#128188; Company Info</Link></td>
                            <td><Link to="/sample">&#128240; Press</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/sample">&#128236; Contact EquityX</Link></td>
                            <td><Link to="/sample">&#128526; Careers</Link></td>
                        </tr>
                    </tbody>
                </table>
                
            </DropDownContent>
        )}
    </div>
    );
};

export default NavBar;