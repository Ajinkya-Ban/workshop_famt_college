import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="imgs/about1.jpg"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">About Us</h2>
          <p className="text-muted">
            Welcome to <strong>Byte Code</strong>, where innovation meets
            technology. We are a passionate team of developers, designers, and
            strategists dedicated to delivering modern digital solutions that
            drive success for businesses and individuals alike.
          </p>
          <p className="text-muted">
            Since our founding, we’ve worked with clients across diverse
            industries — from startups to enterprises — helping them bring their
            visions to life. Our expertise lies in crafting scalable, secure,
            and user-friendly applications that solve real-world problems.
          </p>
          <p className="text-muted">
            At Byte Code, we believe in teamwork, creativity, and a commitment
            to excellence. Every project we take on is treated as a journey
            where we collaborate with our clients every step of the way.
          </p>
          <button className="btn btn-primary mt-3">Learn More</button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h4>Our Mission</h4>
          <p className="text-muted">
            To empower businesses through cutting-edge software solutions that
            make technology accessible, efficient, and impactful.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Our Vision</h4>
          <p className="text-muted">
            To be a global leader in digital transformation, recognized for
            innovation, reliability, and customer-centric solutions.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Our Values</h4>
          <p className="text-muted">
            We believe in integrity, transparency, and continuous learning —
            building trust with clients while nurturing talent within our team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
