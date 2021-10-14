import React from "react";
import useUser from "../../Hooks/useUser";
import "./NavBar.css";
import logo from "./prosecto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function Navigation() {
  const { isLogged, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="imageLogoContainer">
            <img className="imageLogo" src={logo} alt="" />
          </div>
          <span className="logo"> Portal Ambiental</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/map">
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  size="2x"
                  color="green"
                ></FontAwesomeIcon>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/profile">
                <FontAwesomeIcon
                  icon={faEdit}
                  size="2x"
                  color="green"
                ></FontAwesomeIcon>
              </Link>
            </li>
            {isLogged ? (
              <li className="nav-item">
                <Link onClick={logout} className="nav-link" to="/">
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    size="2x"
                    color="red"
                  ></FontAwesomeIcon>
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <FontAwesomeIcon
                    icon={faSignInAlt}
                    size="2x"
                    color="green"
                  ></FontAwesomeIcon>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
