import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./logo.png";
import Modal from "../modal";

const Header = () => {
  // set hook for popup-form button
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-fluid top-nav__container ps-4 pe-4">
      <nav className="top-nav navbar navbar-expand-lg">
        <div className="container">
          <div className="top-nav__logo">
            <NavLink to="/" className="" exact="true">
              <img src={logo} alt="weigo logo" className="navbar-logo" />
            </NavLink>
          </div>
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
                Learn more
              </NavLink>

              <div className="dropdown">
                <NavLink
                  className={"nav-link drop-down"}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Drop me
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="www.example.com">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.example.com">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.example.com">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  className={"demo-btn m-1 "}
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
