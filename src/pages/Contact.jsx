import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mob: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationErrors = validate();
    if (Object.keys(ValidationErrors).length > 0) {
      setErrors(ValidationErrors);
    } else {
      setErrors({});
      alert("Data Submitted");
    }
  };

  const handleClear = () => {
    setForm({ name: "", email: "", mob: "", message: "" });
    setErrors({});
  };

  return (
    <div>
      <div className="container my-3">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="imgs/contact.jpeg"
              className="img-fluid img-thumbnail shadow"
              alt="contact"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-muted">Contact</h2>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Enter Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter name here"
                  autoComplete="off"
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Enter Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email here"
                  autoComplete="off"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Mobile */}
              <div className="mb-3">
                <label htmlFor="mob" className="form-label">
                  Enter Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mob"
                  name="mob"
                  value={form.mob}
                  onChange={handleChange}
                  placeholder="Enter valid mobile number"
                  autoComplete="off"
                />
              </div>

              {/* Message */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Enter Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Buttons */}
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={handleClear}
              >
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
