import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`User Registered:\n${form.fullname} - ${form.email}`);
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* Left Side Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={"imgs/registre.jpg"} // replace with your own registration image
            alt="register"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Side Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light w-50">
          <div
            className="card shadow-lg p-4 w-100"
            style={{ maxWidth: "590px" }}
          >
            <h3 className="text-center text-success mb-3">Register</h3>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label fw-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter full name"
                  required
                />
              </div>

              {/* Username */}
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
                  placeholder="Choose a username"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>

              {/* Password */}
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

              {/* Confirm Password */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label fw-bold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Re-enter password"
                  required
                />
              </div>

              {/* Register Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-success fw-bold">
                  Register
                </button>
              </div>
            </form>

            {/* Login Link */}
            <p className="text-center mt-3 mb-0">
              Already have an account?{" "}
              <a href="#" className="text-decoration-none text-primary fw-bold">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
