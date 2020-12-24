import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/EquityX_Logo.png';
import colors from '../config/colorConfig';

const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    background-image: ${colors.navbarBg};
    padding: 0.5em 0 0 0;
    @media only screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: left;
    }
`;

const Logo = styled.div`
    padding: 0 0 0 1em;
    width: 10em;
    align-self: flex-end;
    @media only screen and (max-width: 768px) {
        width: 7em;
        align-self: center;
    }
`;

const Demo = styled.div`
    padding: 0 0.2em;
    width: 10em;
    align-self: flex-end;
    margin-left: 0.5%;
    margin-bottom: 1%;
    @media only screen and (max-width: 768px) {
        font-size: 0.7em;
        align-self: center;
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
    
    @media only screen and (max-width: 768px) {
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
        font-size: 0.7em;
    }
    
`;
const DropDownContent = styled.div`
    width: 42em;
    margin-left: 20%;
    background-color: white;
    position: absolute;
    font-size: 1em;
    border-top: 1px solid grey;
    opacity: 1;
    animation: fade 0.8s linear;
    border-radius: 0 0 0.5em 0.5em;
    background-image: ${colors.navbarBg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    
    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
    
`;

const NavBar = ({ setSelectedTab }) => {
    const [aboutSelected, setAboutSelected] = useState(true);
    const [toolSelected, setToolSelected] = useState(false);
    const [tutorialSelected, setTutorialSelected] = useState(false);
    const [adminSelected, setAdminSelected] = useState(false);
    const [isShown_productDropdown, setIsShown_productDropdown] = useState(false);
    const [isShown_resourceDropdown, setIsShown_resourceDropdown] = useState(false);
    const [isShown_partnerDropdown, setIsShown_partnerDropdown] = useState(false);
    const [isShown_aboutUsDropdown, setIsShown_aboutUsDropdown] = useState(false);

    const handleMouseEnter = (tab) => {
        if (tab == "products"){
            setIsShown_productDropdown(true)
        }
        else if (tab == "resources"){
            setIsShown_resourceDropdown(true)
        }
        else if (tab == "partners"){
            setIsShown_partnerDropdown(true)
        }
        else if (tab == "aboutUs"){
            setIsShown_aboutUsDropdown(true)
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
        else if (tab == "partners" && tabContent == null){
            setIsShown_partnerDropdown(false)
        }
        else if (tab == "partners" && tabContent == 'partnerDropDownContent'){
            setIsShown_partnerDropdown(true)
        }
        else if (tab == "aboutUs" && tabContent == null){
            setIsShown_aboutUsDropdown(false)
        }
        else if (tab == "aboutUs" && tabContent == 'aboutUsDropDownContent'){
            setIsShown_aboutUsDropdown(true)
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
                <table>
                    <thead>
                        <tr>
                            <th><a href="/">EquityX Resources</a></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/">&#128172; Customer Testimonials</a></td>
                            <td><a href="/">&#9997; Blog</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">&#128197; Events & Webinars</a></td>
                            <td><a href="/">&#x2B50; Partner Stories</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">&#128718;&#65039; Supports</a></td>
                            <td><a href="/">&#128214; Product Education</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">&#128177; Product Release Notes</a></td>
                            <td><a href="/">&#128269; How We Work</a></td>
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
                            <th><a href="/">Partner Resources</a></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/">&#9878; Law Partners</a></td>
                            <td><a href="/">&#9072; Why partner with EquityX</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">&#65130; VC Partners</a></td>
                            <td><a href="/">&#129309; Become a partner</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">&#128195; Private Equity Partners</a></td>
                            <td><a href="/">&#128273; Partner Resource Center</a></td>
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
                            <th><a href="/">About EquityX</a></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/">&#128104;&#127997;&#8205;&#128188; Company Info</a></td>
                            <td><a href="/">&#128240; Press</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">&#128236; Contact EquityX</a></td>
                            <td><a href="/">&#128526; Careers</a></td>
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
// https://www.amp-what.com/unicode/search/share