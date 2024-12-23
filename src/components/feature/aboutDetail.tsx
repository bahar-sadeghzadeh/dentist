import React from "react";
import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";
import Localize from "../ui/localize";

const AboutDetail: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex flex-column">
              <img
                className="img-fluid rounded w-75 align-self-end"
                src={about1}
                alt="About 1"
              />
              <img
                className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                src={about2}
                alt="About 2"
                style={{ marginTop: "-25%" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="d-inline-block border rounded-pill py-1 px-4">
              <Localize text="about Us" isFirstLetterCapital={true} />
            </p>
            <h1 className="mb-4">
              <Localize text="a2" isFirstLetterCapital={true} />
            </h1>
            <p>
              <Localize text="a3" />
            </p>
            <p className="mb-4">
              <Localize text="a4" />
            </p>
            <p className="mb-4">
              <Localize text="a5" />
            </p>
            <p className="mb-4">
              <Localize text="a6" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;