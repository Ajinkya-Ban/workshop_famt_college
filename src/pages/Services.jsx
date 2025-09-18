import React from "react";

function Services() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="imgs/service.jpg"
            alt="Our Services"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">Our Services</h2>
          <p className="text-muted">
            At <strong>Byte Code</strong>, we offer a wide range of IT and
            software services tailored to meet your business needs. From idea to
            execution, we provide end-to-end solutions that ensure scalability,
            performance, and reliability.
          </p>
          <p className="text-muted">
            Our team of experts specializes in building modern, secure, and
            user-friendly applications that help businesses stay ahead in the
            digital era.
          </p>
          <button className="btn btn-success mt-3">Explore More</button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center mb-4">
          <img
            src="/imgs/c1.webp"
            alt="Web Development"
            className="img-fluid mb-3"
          />
          <h4>Web Development</h4>
          <p className="text-muted">
            Responsive, dynamic, and SEO-friendly websites built with the latest
            technologies to give your business a strong online presence.
          </p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img
            src="/imgs/c2.jpeg"
            alt="Mobile Apps"
            className="img-fluid mb-3"
          />
          <h4>Mobile Apps</h4>
          <p className="text-muted">
            Scalable and intuitive Android & iOS applications designed to engage
            users and enhance customer experiences.
          </p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img
            src="/imgs/c3.jpg"
            alt="Cloud Solutions"
            className="img-fluid mb-3"
          />
          <h4>Cloud Solutions</h4>
          <p className="text-muted">
            Secure cloud hosting, migration, and DevOps services to ensure your
            business is always available and future-ready.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4 text-center mb-4">
          <img
            src="/imgs/p3.png"
            alt="UI/UX Design"
            className="img-fluid mb-3"
          />
          <h4>UI/UX Design</h4>
          <p className="text-muted">
            Creative and user-focused designs that ensure seamless interaction
            and better customer satisfaction.
          </p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img
            src="/imgs/p5.png"
            alt="Digital Marketing"
            className="img-fluid mb-3"
          />
          <h4>Digital Marketing</h4>
          <p className="text-muted">
            Data-driven strategies including SEO, SEM, and social media
            marketing to grow your brand visibility.
          </p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img
            src="/imgs/p8.webp"
            alt="IT Consulting"
            className="img-fluid mb-3"
          />
          <h4>IT Consulting</h4>
          <p className="text-muted">
            Professional consulting services to help businesses choose the right
            technologies and strategies for success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
