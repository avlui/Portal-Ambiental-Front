import React from "react";
import "./topbar.css";
import logo from "../../../../../../../../../../../../Users/gabri/Desktop/dashboard/src/img/prosecto.png";
import { Room } from "@material-ui/icons";
import {Login} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="imageLogoContainer" ><img className="imageLogo" src={logo} alt=""/></div>
          <span className="logo">Portal Ambiental</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Room />
          </div>
          <div className="topbarIconContainer">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
