// SideContainer.js
import React from "react";
import Visitorcounting from "../VisitorCounting/Visitorcounting";
import helpline from "../images/hotline.png";
import Audio from "./Audio";
import Calendar from "./Calendar";
import ImportantLinks from "./ImportantLinks";
import PrincipleMessage from "./PrincipleMessage";
import "./SideContainer.css";

function SideContainer() {
  return (
    <div className="side-container">
      <PrincipleMessage limit={100} />
      <ImportantLinks></ImportantLinks>
      <Audio></Audio>

      <div className="help_h3">
        <h3> Emergency Hotline</h3>
        <div className="help">
          <img src={helpline} alt="" />
        </div>
      </div>
      <Calendar></Calendar>

      <Visitorcounting></Visitorcounting>
    </div>
  );
}

export default SideContainer;
