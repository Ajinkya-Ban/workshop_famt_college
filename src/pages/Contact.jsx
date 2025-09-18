import React, { useState } from "react";

function Contact() {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    mob: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let newErros = {};
    if (!forms.name.trim()) {
      newErros.name = "Name is required";
    }
    if (!forms.email) {
      newErros.email = "Email is required";
    }
    if (!forms.mob) {
      newErros.mob = "Mobile is required";
    } else if (!/^[0-9]{10}$/.test(forms.mob)) {
      newErros.mob = "Enter a valid 10-digit number";
    }
    if (!forms.message) {
      newErros.message = "Message is required";
    }
    return newErros;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationErrors = validate();
    if (Object.keys(ValidationErrors).length > 0) {
      setErrors(ValidationErrors);
    } else {
      setErrors({});
      alert("Form Submitted");
    }
  };

  const handleClear = () => {
    setForms({ name: "", email: "", mob: "", message: "" });
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
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Enter Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  placeholder="Enter name here"
                  autoComplete="off"
                  value={forms.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Enter Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  placeholder="Enter email here"
                  autoComplete="off"
                  value={forms.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="mob" className="form-label">
                  Enter Mobile Number
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.mob ? "is-invalid" : ""}`}
                  id="mob"
                  name="mob"
                  placeholder="Enter valid mobile number"
                  autoComplete="off"
                  value={forms.mob}
                  onChange={handleChange}
                />
                {errors.mob && (
                  <div className="invalid-feedback">{errors.mob}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Enter Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  value={forms.message}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

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
