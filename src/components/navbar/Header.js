import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./logo.png";
import Modal from "../modal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  // set hook for request-demo-form button and collapsed menu
  const [showModal, setShowModal] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="container-fluid top-nav__container ps-4 pe-4">
      <nav className="top-nav navbar navbar-expand-lg bg-light">
        <div className="container">
          <div className="top-nav__logo">
            <NavLink to="/" className="" exact="true">
              <img src={logo} alt="weigo logo" className="navbar-logo" />
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCollapsed}
            aria-controls="navbar__collapse"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
          >
            {collapsed ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )}
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              collapsed ? "" : "show"
            }`}
            id="navbar__collapse"
          >
            <div className="navbar-nav  p-0">
              <NavLink to="/" exact="true" className={"nav-link "}>
                Home
              </NavLink>
              <NavLink to="about" className={"nav-link"}>
                About
              </NavLink>
              <NavLink to="blog" className={"nav-link"}>
                Blog
              </NavLink>

              <div>
                <button
                  className={"demo-btn m-1 "}
                  onClick={() => setShowModal(true)}
                >
                  Join Waitlist
                </button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
