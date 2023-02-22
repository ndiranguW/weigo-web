import React from "react";
import logo from "../../assets/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container  p-2">
        <div className="row">
          <div className="col-sm-4 col-md-6 col-lg-4 ">
            <img src={logo} alt="footer logo" className="footer-logo " />
            <div className="footer__contact-details">
              <div className="">
                <p>
                  <FontAwesomeIcon icon={faLocationPin} color="#fd7e14" />
                  &nbsp; Nairobi, Kenya
                </p>
                <p>
                  <FontAwesomeIcon icon={faAt} color="#fd7e14" />
                  &nbsp; hello@weigo.io
                </p>
                <div className="socials">
                  <a
                    href="https://www.facebook.com/profile.php?id=100090567519450&mibextid=LQQJ4d"
                    className="footer-links"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      color="#fd7e14"
                      className="fs-4"
                    />
                  </a>
                  &nbsp; &middot; &nbsp;
                  <a
                    href="https://www.linkedin.com/company/wweigo/"
                    className="footer-links"
                    target={"blank"}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      color="#fd7e14"
                      className="fs-4"
                    />
                  </a>
                  &nbsp; &middot; &nbsp;
                  <a
                    href="https://www.twitter.com/Weigo_io"
                    className="footer-links"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      color="#fd7e14"
                      className="fs-4"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-8 mt-5">
            <h4 style={{ color: "#fd7e14" }}>Quick Links</h4>
            <div className="navbar-nav p-0">
              <NavLink
                to="/"
                exact="true"
                className={"nav-link footer-nav text-light"}
              >
                Home
              </NavLink>
              <NavLink to="about" className={"nav-link text-light"}>
                About
              </NavLink>
              <NavLink to="blog" className={"nav-link text-light"}>
                Blog
              </NavLink>
            </div>
          </div>
          <hr />
          <div className="footer-line">
            <div className="text-center">
              <small>&copy;2023 WeiGo All Rights Reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
