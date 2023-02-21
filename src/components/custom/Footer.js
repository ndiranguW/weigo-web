import React from "react";
import logo from "../../assets/logo1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container  p-2">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <img src={logo} alt="footer logo" className="footer-logo " />
            <div className="footer__contact-details">
              <div className="">
                <p>
                  <FontAwesomeIcon icon={faLocationPin} color="#fd7e14" />
                  &nbsp; Nairobi, Upperhill, Hospital Road
                </p>
                <p>(987654-12321)</p>
                <p>
                  <FontAwesomeIcon icon={faAt} color="#fd7e14" />
                  &nbsp; hello@weigo.io
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8 mt-5">
            <h4 style={{ color: "#fd7e14" }}>Quick Links</h4>
            <div className="navbar-nav p-0 text-primary">
              <NavLink to="/" exact="true" className={"nav-link "}>
                Home
              </NavLink>
              <NavLink to="about" className={"nav-link"}>
                About
              </NavLink>
              <NavLink to="blog" className={"nav-link"}>
                Blog
              </NavLink>
            </div>
          </div>
          <hr />
          <div className="footer-line">
            <div className=" d-flex justify-content-between">
              <small>&copy;2023 WeiGo All Rights Reserved.</small>
              <div>
                <a
                  href="https://www.twitter.com/Weigo_io"
                  className="footer-links me-5"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="#fd7e14" />
                </a>
                <a
                  href="https://www.linkedin.com/company/wweigo/"
                  className="footer-links"
                  target={"blank"}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    color="#fd7e14"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
