import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/EquityX_Logo.png';

const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    @media only screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: left;
    }
`;

const Logo = styled.div`
    padding: 0 0.2em;
    width: 10em;
    align-self: flex-end;
    @media only screen and (max-width: 768px) {
        width: 5em;
        margin-right: 0.5%;
    }
`;

const Demo = styled.div`
    padding: 0 0.2em;
    width: 10em;
    align-self: center;
    @media only screen and (max-width: 768px) {
        width: 5em;
        margin-left: 0.5%;
    }
`;

const TabContainer = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    align-self: flex-end;
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
    padding: 1% 2.5%;
    justify-content: center;
    margin: 0 0.5%;
    
    @media only screen and (max-width: 768px) {
    }

    :hover ~ #productDropdown {
        display: none;
      }

    
`;

const TabLabel = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 1.1em;
    cursor: pointer;
    


    @media only screen and (max-width: 768px) {
        font-size: 0.5em;
    }
    
`;
const DropDownContent = styled.div`
    width: 42em;
    margin-left: 20%;
    background-color: white;
    position: absolute;
    font-size: 1em;
    border-top: 1px solid grey;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    
    @media only screen and (max-width: 768px) {
        font-size: 0.5em;
    }
    
`;

const NavBar = ({ setSelectedTab }) => {
    const [aboutSelected, setAboutSelected] = useState(true);
    const [toolSelected, setToolSelected] = useState(false);
    const [tutorialSelected, setTutorialSelected] = useState(false);
    const [adminSelected, setAdminSelected] = useState(false);
    const [isShown_productDropdown, setIsShown_productDropdown] = useState(false);
    const [isShown_resourceDropdown, setIsShown_resourceDropdown] = useState(false);

    const handleMouseEnter = (tab) => {
        if (tab == "products"){
            setIsShown_productDropdown(true)
        }
        else if (tab == "resources"){
            setIsShown_resourceDropdown(true)
        }
    };

    const handleMouseLeave= (tab, tabContent=null) => {
        if (tab == "products" && tabContent == null){
            setIsShown_productDropdown(false)
        }
        else if (tab == "products" && tabContent == 'productDropDownContent'){
            setIsShown_productDropdown(true)
        }
        else if (tab == "resources" && tabContent == null){
            setIsShown_resourceDropdown(false)
        }
        else if (tab == "resources" && tabContent == 'resourceDropDownContent'){
            setIsShown_resourceDropdown(true)
        }
     };


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
        <>
        <NavBarContainer>
            <Logo><img src={logo} alt="logo" width="100%"/></Logo>
            <TabContainer>
                <NavBarTab 
                    id = "products"
                    onMouseEnter={() => handleMouseEnter('products')}
                    onMouseLeave={() => handleMouseLeave('products')}
                    >
                    <TabLabel 
                        
                        className="tabLabel"
                        onClick={() => handleClick('about')}
                        selected={aboutSelected}
                        
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
                        About us
                    </TabLabel>
                </NavBarTab>
            </TabContainer>
        <Demo>
            <a href="/">Request a Demo</a>
        </Demo>
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
                            <th><a href="/">Private Companies</a></th>
                            <th><a href="/">Investors</a></th>
                            <th><a href="/">Public Companies</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/">Overview</a></td>
                            <td><a href="/">Overview</a></td>
                            <td><a href="/">Overview</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">Cap Table Management</a></td>
                            <td><a href="/">Fund Administration</a></td>
                            <td><a href="/">ESPP</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">Scenario Modeling</a></td>
                            <td><a href="/">Capital Call Line of Credit</a></td>
                            <td><a href="/">Transfer Agent</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">Private Company Liquidity</a></td>
                            <td><a href="/">Portfolio Insights</a></td>
                            <td><a href="/"></a></td>
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
                <table id="resourceDropdownTable">
                    <thead>
                        <tr>
                            <th><a href="/">EquityX Resouces</a></th>
                            <th><a href="/">Blog</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/">Customer Testimonials</a></td>
                            <td><a href="/">Blog</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">Events & Webinars</a></td>
                            <td><a href="/">Partner Stories</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">Supports</a></td>
                            <td><a href="/">Product Education</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">Product Release Notes</a></td>
                            <td><a href="/">How We Work</a></td>
                        </tr>
                    </tbody>
                </table>
            </DropDownContent>
        )}
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora distinctio dolore nisi repellat ea iure fugit, magnam laboriosam animi corrupti vero ex possimus reiciendis beatae velit rerum fuga ut!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad non totam debitis nesciunt aliquam, similique alias, quia tempore recusandae accusamus minus corrupti iure necessitatibus repellat provident nisi sequi amet ullam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora distinctio dolore nisi repellat ea iure fugit, magnam laboriosam animi corrupti vero ex possimus reiciendis beatae velit rerum fuga ut!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad non totam debitis nesciunt aliquam, similique alias, quia tempore recusandae accusamus minus corrupti iure necessitatibus repellat provident nisi sequi amet ullam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora distinctio dolore nisi repellat ea iure fugit, magnam laboriosam animi corrupti vero ex possimus reiciendis beatae velit rerum fuga ut!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad non totam debitis nesciunt aliquam, similique alias, quia tempore recusandae accusamus minus corrupti iure necessitatibus repellat provident nisi sequi amet ullam?</p>
        </div>
    </>
    );
};

export default NavBar;