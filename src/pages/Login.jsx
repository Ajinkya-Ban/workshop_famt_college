import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${form.username}\nPassword: ${form.password}`);
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 align-items-center">
        <div className="col-md-6 d-none d-md-block p-0">
          <img src={"imgs/log.jpg"} alt="login" className="img-fluid" />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg p-4 w-75 h-50"
            style={{ maxWidth: "500px" }}
          >
            <h3 className="text-center text-primary mb-3">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter username"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <a href="#" className="text-decoration-none small text-primary">
                  Forgot Password?
                </a>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-bold">
                  Login
                </button>
              </div>
            </form>

            <p className="text-center mt-3 mb-0">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-decoration-none text-success fw-bold"
              >
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
