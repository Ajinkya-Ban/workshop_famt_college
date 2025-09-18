import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Byte Code
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/service">
                  Service
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form
              className="d-flex flex-column flex-lg-row mt-2 mt-lg-0"
              role="search"
            >
              <button
                className="btn btn-outline-primary me-2"
                onClick={handleLogin}
              >
                Login
              </button>

              <button
                className="btn btn-outline-success mt-2 mt-lg-0"
                onClick={handleRegister}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
