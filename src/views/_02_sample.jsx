import React, { useEffect } from "react";
import CoderImg from "../images/coderImg.png";
import { Link } from "@reach/router";

const SamplePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="sampleContainer p2 pb10">
      <div className="rowFlex rowCenterContent">
        <img id="coderImg" src={CoderImg} height="100%" alt="Coder" />
      </div>
      <div className="rowFlex rowCenterContent">
        <p className="centerText smallFont">
          All the links in the home page are for demonstration purpose only and
          detail pages are not built.{" "}
        </p>
      </div>
      <div className="rowFlex rowCenterContent">
        <Link to="/" className="smallFont blueFont bold">
          Back to home page
        </Link>
      </div>
    </div>
  );
};
export default SamplePage;
