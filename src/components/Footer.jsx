import React from "react";
import "../assets/styles/Footer.css";
import logo1 from "../assets/images/footer/logo1.svg";
import Email from "../assets/images/footer/email1.png";
import linkedin from "../assets/images/footer/linkedin.png";
import twitter from "../assets/images/footer/twitter.png";
import instagram from "../assets/images/footer/instagram.png";

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start footer">
        <small tabIndex="0" aria-label="Copyright">
          © 2025 Botox. All rights reserved.
        </small>

        <img src={logo1} alt="Botox logo" className="logo-img" />

        <nav
          className="text-center text-md-end"
          aria-label="Footer Navigation"
        >
          <div
            className="d-flex justify-content-center justify-content-md-end gap-3 mb-2"
            aria-label="Contact and Social Links"
          >
            <a
              href="mailto:support@botox.com"
              aria-label="Email support@botox.com"
              tabIndex="0"
            >
              <img src={Email} alt="" className="footer-icon" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="Visit our LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="0"
            >
              <img src={linkedin} alt="" className="footer-icon" aria-hidden="true" />
            </a>
            <a
              href="https://x.com"
              aria-label="Visit our Twitter/X"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="0"
            >
              <img src={twitter} alt="" className="footer-icon" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Visit our Instagram"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="0"
            >
              <img src={instagram} alt="" className="footer-icon" aria-hidden="true" />
            </a>
          </div>

          <div
            className="d-flex justify-content-center justify-content-md-end gap-3"
            aria-label="Legal Links"
          >
            <a
              href="#privacy"
              className="fw-semibold term text-decoration-none"
              aria-label="Privacy Policy"
              tabIndex="0"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="fw-semibold term text-decoration-none"
              aria-label="Terms of Service"
              tabIndex="0"
            >
              Terms of Service
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;