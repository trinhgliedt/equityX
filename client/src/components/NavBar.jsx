import React, { useState } from 'react';
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

const Logo = styled.div`
    width: 12em;
    display: flex;
    align-self: flex-end;
    margin-bottom: 0.2em;
    @media only screen and (max-width: 768px) {
        margin-top: 0.2em;
        margin-bottom: 0.1em;
        width: 5em;
        height: auto;
        align-self: center;

    }
    @media only screen and (min-width: 769px) and (max-width: 900px) {
        margin-top: 0.5em;
        margin-bottom: 0.1em;
        width: 8em;

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
            <img src={logo} alt="logo" width="100%" height="auto"/>
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
                            <th><a href="/sample">Private Companies</a></th>
                            <th><a href="/sample">Investors</a></th>
                            <th><a href="/sample">Public Companies</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/sample">Overview</a></td>
                            <td><a href="/sample">Overview</a></td>
                            <td><a href="/sample">Overview</a></td>
                        </tr>
                        <tr>
                            <td><a href="/sample">Cap Table Management</a></td>
                            <td><a href="/sample">Fund Administration</a></td>
                            <td><a href="/sample">ESPP</a></td>
                        </tr>
                        <tr>
                            <td><a href="/sample">Scenario Modeling</a></td>
                            <td><a href="/sample">Capital Call Line of Credit</a></td>
                            <td><a href="/sample">Transfer Agent</a></td>
                        </tr>
                        <tr>
                            <td><a href="/sample">Private Company Liquidity</a></td>
                            <td><a href="/sample">Portfolio Insights</a></td>
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
                            <th><a href="/sample">EquityX Resources</a></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/sample">&#128172; Customer Testimonials</a></td>
                            <td><a href="/sample">&#9997; Blog</a></td>
                        </tr>
                        <tr>
                            <td><a href="/sample">&#128197; Events & Webinars</a></td>
                            <td><a href="/sample">&#x2B50; Partner Stories</a></td>
                        </tr>
                        <tr>
                            <td><a href="/sample">&#128718;&#65039; Supports</a></td>
                            <td><a href="/sample">&#128214; Product Education</a></td>
                        </tr>
                        <tr>
                            <td><a href="/sample">&#128177; Product Release Notes</a></td>
                            <td><a href="/sample">&#128269; How We Work</a></td>
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
                            <th><a href="/sample">Partner Resources</a></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/sample">&#9878; Law Partners</a></td>
                            <td><a href="/sample">&#9072; Why partner with EquityX</a></td>
                        </tr>
                        <tr>
                            <td><a href="/sample">&#65130; VC Partners</a></td>
                            <td><a href="/sample">&#129309; Become a partner</a></td>
                        </tr>
                        <tr>
                            <td><a href="/sample">&#128195; Private Equity Partners</a></td>
                            <td><a href="/sample">&#128273; Partner Resource Center</a></td>
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
                            <th><a href="/sample">About EquityX</a></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/sample">&#128104;&#127997;&#8205;&#128188; Company Info</a></td>
                            <td><a href="/sample">&#128240; Press</a></td>
                        </tr>
                        <tr>
                            <td><a href="/sample">&#128236; Contact EquityX</a></td>
                            <td><a href="/sample">&#128526; Careers</a></td>
                        </tr>
                    </tbody>
                </table>
                
            </DropDownContent>
        )}
    </div>
    );
};

export default NavBar;