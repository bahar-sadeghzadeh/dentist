import React from "react";
import Localize from "./localize";

const services = [
  {
    icon: "fa-heartbeat",
    title: "Cardiology",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.1s",
  },
  {
    icon: "fa-x-ray",
    title: "Pulmonary",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.3s",
  },
  {
    icon: "fa-brain",
    title: "Neurology",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.5s",
  },
  {
    icon: "fa-wheelchair",
    title: "Orthopedics",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.1s",
  },
  {
    icon: "fa-tooth",
    title: "Dental Surgery",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.3s",
  },
  {
    icon: "fa-vials",
    title: "Laboratory",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.5s",
  },
];

const Service: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            <Localize text="services" isFirstLetterCapital={true} />
          </p>
          <h1>Health Care Solutions</h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i className={`fa ${service.icon} text-primary fs-4`}></i>
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="mb-4">{service.description}</p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
