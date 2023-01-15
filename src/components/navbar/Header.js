import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./logo.svg";
import Modal from "../modal";

const Header = () => {
  // set hook for popup-form button
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="header top-nav">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink to="/" className={""} exact="true">
            <img src={logo} alt="weigo logo" className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar__collapse"
            aria-controls="navbar__collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbar__collapse"
          >
            <div className="navbar-nav p-0">
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
                  className={"btn btn-outline-primary btn-sm m-1 "}
                  onClick={() => setShowModal(true)}
                >
                  Request Demo
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
