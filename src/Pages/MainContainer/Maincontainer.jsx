// MainContainer.js
import React from "react";
import Notice from "../Notice/Notice";
import AboutCollege from "./AboutCollege";
import Carousel from "./Carousel";
import "./MainContainer.css";

function Maincontainer() {
  return (
    <div className="main-container">
      <Carousel></Carousel>
      <AboutCollege></AboutCollege>
      <Notice></Notice>
    </div>
  );
}

export default Maincontainer;
