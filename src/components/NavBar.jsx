import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo_dark.JPG';

const NavBarContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: left;

    @media only screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: left;
    }
`;

const Logo = styled.div`
    padding: 0.1em 0.2em;
    width: 8em;

    @media only screen and (max-width: 768px) {
        width: 5em;
        margin-right: 0.5%;
    }
`;

const TabContainer = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;
const NavBarTab = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 1% 1%;
    justify-content: center;
    margin: 0 0.5%;

    @media only screen and (max-width: 768px) {
    }

    :hover ~ #productDropdown {
        transition: .4s ease-out 0s; 
        display: block;
      }

    
`;

const TabLabel = styled.div`
    padding-bottom: 1em;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    
    font-size: 1em;
    cursor: pointer;


    @media only screen and (max-width: 768px) {
        font-size: 0.5em;
    }
    
`;

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    font-size: 0.5em;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

const NavBar = ({ setSelectedTab }) => {
    const [aboutSelected, setAboutSelected] = useState(true);
    const [toolSelected, setToolSelected] = useState(false);
    const [tutorialSelected, setTutorialSelected] = useState(false);
    const [adminSelected, setAdminSelected] = useState(false);

    const handleClick = (tab) => {
        setAboutSelected(false);
        setToolSelected(false);
        setTutorialSelected(false);
        setAdminSelected(false);
        // if (tab === 'about') setAboutSelected(true);
        // else if (tab === 'tool') setToolSelected(true);
        // else if (tab === 'tutorial') setTutorialSelected(true);
        // else setAdminSelected(true);

        // setSelectedTab(tab);
    };
    return (
        <NavBarContainer>
            <Logo><img src={logo} alt="logo" width="100%"/></Logo>
            <TabContainer>
                <NavBarTab 
                    id = "products">
                    <TabLabel 
                        
                        className="tabLabel"
                        onClick={() => handleClick('about')}
                        selected={aboutSelected}
                    >
                        Products & Solutions
                    </TabLabel>
                </NavBarTab>
                <DropDownContent
                    id = "productDropdown"
                    >
                    <table>
                        <thead>
                            <th>Private Companies</th>
                            <th>Investors</th>
                        </thead>
                        <tr>
                            <td>Overview</td>
                            <td>Overview</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Cap Table Management</td>
                            <td>Cap Table Management</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Scenario Modeling</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </DropDownContent>
                <NavBarTab>
                    <TabLabel
                        className="tabLabel"
                        onClick={() => handleClick('about')}
                        selected={aboutSelected}
                    >
                        Resources
                    </TabLabel>
                </NavBarTab>
                <NavBarTab>
                    <TabLabel
                        className="tabLabel"
                        onClick={() => handleClick('about')}
                        selected={aboutSelected}
                    >
                        Partners
                    </TabLabel>
                </NavBarTab>
                <NavBarTab>
                    <TabLabel
                        className="tabLabel"
                        onClick={() => handleClick('about')}
                        selected={aboutSelected}
                    >
                        Resources
                    </TabLabel>
                </NavBarTab>
                <NavBarTab>
                    <TabLabel
                        className="tabLabel"
                        onClick={() => handleClick('about')}
                        selected={aboutSelected}
                    >
                        About us
                    </TabLabel>
                </NavBarTab>
            </TabContainer>
        </NavBarContainer>
    );
};

export default NavBar;