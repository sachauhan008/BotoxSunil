import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Play from "../assets/images/assignment/Play.svg";
import assignmentlogo from "../assets/images/newAttempt/assignment-logo.svg";
import assignmentOverview from "../assets/images/newAttempt/assignment-overview.png";
import logo2 from "../assets/images/newAttempt/logo2.svg";
import "../assets/styles/StartNewAttempt.css";
import { useNavigate } from "react-router-dom";

function StartNewAttempt() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="new-attempt">
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

          <section className="section-2" aria-label="Assignment Descriptions">
            <h4 className="fw-semibold" tabIndex="0">Descriptions</h4>
            <div className="line" aria-hidden="true"></div>
            <div className="p-4 box">
              <h6 className="fw-semibold m-0" tabIndex="0">Video Tutorial</h6>
              <p>
                Watch the required video to understand facial anatomy relevant
                to Botox treatments, including safe injection zones and critical
                muscle groups
              </p>
              <h6 className="fw-semibold m-0" tabIndex="0">Facial Anatomy Assessment</h6>
              <p className="m-0">
                Review detailed facial anatomy through interactive models and
                guided visuals. Learn to identify key muscles, vessels, and
                nerves involved in Botox procedures. This assignment is designed
                to be completed in 75–90 minutes on average.
              </p>
            </div>
          </section>

          <section className="section-3" aria-label="Introduction Video">
            <h4 className="fw-semibold" tabIndex="0">Introduction Video</h4>
            <div className="line" aria-hidden="true"></div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="video-wrapper d-flex flex-column">
                <div className="assignment-video-wrapper d-flex justify-content-center">
                  <div className="assignment-video-container position-relative">
                    <img
                      src={assignmentOverview}
                      alt="Course Overview"
                      className="assignment-overview-img"
                    />
                    <img src={Play} alt="Play button" className="play-btn" />
                    <img src={logo2} alt="Logo" className="logo2-img" aria-hidden="true" />
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <button
                    className="btn"
                    type="button"
                    aria-label="Go to Next Step"
                    onClick={() => navigate("/next-step")}
                  >
                    Next<span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StartNewAttempt;