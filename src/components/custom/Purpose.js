// purpose is who are we building for
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Purpose = () => {
  return (
    <div className="container-fluid purpose-container p-2">
      <div className="container mt-5">
        <div className="row h-100">
          <div className="col-sm-12 col-lg-6 d-flex align-items-center mx-auto">
            <div>
              <h2 className="text-center">Built for who?</h2>
              <p className="text-center text-secondary">
                lorem ipsum dolor amet!lorem ipsum dolor amet! lorem ipsum dolor
                amet! lorem ipsum dolor amet!
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mx-auto">
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="card  border rounded p-3 mb-1">
              <p>
                lorem dolor amet you ina hopeless place. now we here in a
                Hopeful state and abudance.
              </p>
              <a href="https://www.example.com">
                Learn more{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRightLong} color="blue" />
                </span>
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card  border rounded p-3">
              <p>
                lorem dolor amet you ina hopeless place. now we here in a
                Hopeful state and abudance.
              </p>
              <a href="https://www.example.com">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
