import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Play from "../assets/images/assignment/Play.svg";
import assignmentlogo from "../assets/images/assignment/assignment-logo.svg";
import assignmentOverview from "../assets/images/assignment/assignment-overview.png";
import assignmentOverviewFrame from "../assets/images/assignment/assignment-overview-frame.png";
import timeLine from "../assets/images/assignment/time-line.svg";
import duration from "../assets/images/assignment/duration.svg";
import trueImg from "../assets/images/assignment/true-img.svg";
import circleLine from "../assets/images/assignment/checkbox-circle-line.svg";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Assignment.css";

function Assignment() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="assignment">
        <div className="container">
          <section
            className="section-1 text-white rounded d-flex justify-content-between align-items-center flex-wrap"
            aria-label="Assignment Header"
          >
            <div className="d-flex align-items-center">
              <img src={assignmentlogo} alt="Course Logo" className="me-5" />
              <div className="fw-semibold">
                <div className="first">Facial Anatomy For</div>
                <div className="first">Botox Application Treatment</div>
              </div>
            </div>
            <div>
              <button
                className="text-white text-decoration-none second btn btn-link"
                aria-label="Go Back"
                type="button"
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>
            </div>
          </section>

          <section className="section-2" aria-label="Assignment Overview">
            <h4 className="fw-semibold" tabIndex="0">
              Assignment Overview
            </h4>
            <div className="line" aria-hidden="true"></div>
            <div className="row align-items-start g-5">
              <div className="col-md-6">
                <div className="position-relative">
                  <img
                    src={assignmentOverview}
                    alt="Assignment Overview Illustration"
                    className="main img-fluid"
                  />
                  <img
                    src={assignmentOverviewFrame}
                    alt=""
                    className="position-absolute top-0 start-0 logo-overlay"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 d-flex gap-3 justify-content-center">
                  <button className="btn btn-1" type="button" aria-label="Continue Last Attempt">
                    Continue Last Attempt
                    <img src={Play} alt="" className="play" aria-hidden="true" />
                  </button>
                  <button
                    className="btn btn-2"
                    type="button"
                    aria-label="Start New Attempt"
                    onClick={() => navigate("/start-new-attempt")}
                  >
                    Start New Attempt
                    <img src={Play} alt="" className="play" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <h6 className="fw-semibold" tabIndex="0">
                  Assignment Description
                </h6>
                <p className="first" tabIndex="0">
                  Study the facial muscle and vascular anatomy necessary for
                  Botox administration. Learn to identify safe injection zones,
                  avoid high-risk areas, and understand muscle functionality for
                  aesthetic treatments.
                </p>
                <p className="second">
                  <img src={timeLine} alt="" className="timeline" aria-hidden="true" />{" "}
                  75–90 minutes
                </p>
                <p className="second m-0">
                  <img src={duration} alt="" className="timeline" aria-hidden="true" />{" "}
                  <strong>Opens:</strong> August 1, 2024 at 12:00 AM
                </p>
                <p className="second second1">
                  <strong>Due:</strong> August 31, 2024 at 11:59 PM
                </p>

                <h6 className="fw-semibold mt-4" tabIndex="0">
                  What to Expect Upon Completion
                </h6>
                <ul className="list-unstyled" aria-label="Completion Benefits">
                  <li>
                    <img src={trueImg} alt="" className="play" aria-hidden="true" /> Instant
                    access to detailed performance results
                  </li>
                  <li>
                    <img src={trueImg} alt="" className="play" aria-hidden="true" /> Ability to
                    review and retry before the due date
                  </li>
                  <li>
                    <img src={trueImg} alt="" className="play" aria-hidden="true" />{" "}
                    Flexibility to choose your best attempt
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section-3" aria-label="Assignment Attempts">
            <h4 className="fw-semibold" tabIndex="0">
              Assignment Attempts
            </h4>
            <div className="line" aria-hidden="true"></div>
            <div className="table-responsive">
              <table className="table align-middle custom-table m-0">
                <thead>
                  <tr>
                    <th scope="col">Created</th>
                    <th scope="col">Last Updated</th>
                    <th scope="col">Result</th>
                    <th scope="col">Time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>29 Sep 2024, 12:15 PM</td>
                    <td>29 Sep 2024, 02:15 PM</td>
                    <td>100%</td>
                    <td>107 min</td>
                    <td>
                      <span className="status-badge bg-light-success">
                        Completed
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-1 btn-dark btn-sm" type="button" aria-label="Turn In Attempt">
                        Turn In <img src={circleLine} alt="" className="circle" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>29 Sep 2024, 12:15 PM</td>
                    <td>29 Sep 2024, 02:15 PM</td>
                    <td>100%</td>
                    <td>–</td>
                    <td>
                      <span className="status-badge bg-light-warning">
                        In Progress
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-2 btn-sm" type="button" aria-label="Resume Attempt">
                        Resume <img src={Play} alt="" className="play-button" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="section-4" aria-label="Activity Descriptions">
            <h4 className="fw-semibold" tabIndex="0">
              Activity Descriptions
            </h4>
            <div className="line" aria-hidden="true"></div>
            <div className="p-4 box">
              <h6 className="fw-semibold m-0" tabIndex="0">
                Video Tutorial
              </h6>
              <p>
                Watch the required video to understand facial anatomy relevant to Botox treatments, including safe injection zones and critical muscle groups
              </p>
              <h6 className="fw-semibold m-0" tabIndex="0">
                Facial Anatomy Assessment
              </h6>
              <p className="m-0">
                Review detailed facial anatomy through interactive models and guided visuals. Learn to identify key muscles, vessels, and nerves involved in Botox procedures. This assignment is designed to be completed in 75–90 minutes on average.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Assignment;