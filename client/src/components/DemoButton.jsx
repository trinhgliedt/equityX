import React from 'react';


const DemoButton = ({destination, displayContactForm}) => {
    const handleDemoRequest=() => {
        displayContactForm( true )
    };

    return (
        <>
        {destination === "navBar" &&
            (<div className="demoNavBar"
            onClick={() => handleDemoRequest()}
            >Request a Demo</div>
            )}
        {destination === "homePage" &&
            (<div className="demoHome"
            onClick={() => handleDemoRequest()}
            >Request a Demo</div>
            )}
        </>
    );
};

export default DemoButton;