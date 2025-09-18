import React, { useState, useEffect } from "react";

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <footer className="footer text-white">
        <div className="container p-4">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="footer-title">About Us</h5>
              <p className="footer-text">
                Byte Code is committed to building modern web and mobile
                solutions that help businesses thrive in the digital era.
              </p>
            </div>

            {/* Company Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="footer-title">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="footer-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/careers" className="footer-link">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="footer-title">Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/faq" className="footer-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/help" className="footer-link">
                    Help Desk
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="footer-link">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="footer-link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="footer-title">Live Updates</h5>
              <p className="footer-text">
                📅 {dateTime.toLocaleDateString()} <br />⏰{" "}
                {dateTime.toLocaleTimeString()}
              </p>
            </div>
          </div>

          <hr className="bg-light" />

          {/* Social Media */}
          <div className="text-center mb-3">
            <a className="social-btn" href="#!">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="social-btn" href="#!">
              <i className="fab fa-twitter" />
            </a>
            <a className="social-btn" href="#!">
              <i className="fab fa-google" />
            </a>
            <a className="social-btn" href="#!">
              <i className="fab fa-instagram" />
            </a>
            <a className="social-btn" href="#!">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="social-btn" href="#!">
              <i className="fab fa-github" />
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="text-center py-3 footer-bottom">
            © {new Date().getFullYear()}{" "}
            <span className="fw-bold">Byte Code</span> | All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
