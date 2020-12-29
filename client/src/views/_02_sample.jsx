import React from 'react';
// import CoderImg from "../images/coderImg.png"

const SamplePage = () => {
    
    return (
        <div className="sampleContainer p2 pb30">
            <div className="rowFlex rowCenterContent">
                {/* <img id="coderImg" src={CoderImg} /> */}
            </div>
            <div className="rowFlex rowCenterContent">
                <p className="centerText">All the links in the home page are for demonstration purpose only and detail pages are not yet built. It can be done per your request.</p>
            </div>
            <div className="rowFlex rowCenterContent">
                <a href="/" className="blueFont bold">Back to home page</a>
            </div>
        </div>
    );
};
export default SamplePage;
