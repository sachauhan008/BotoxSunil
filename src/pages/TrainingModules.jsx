import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Facial from "../assets/images/trainingModules/facial.png";
import Play from "../assets/images/trainingModules/Play.svg";
import "../assets/styles/TrainingModules.css";
import { useNavigate } from "react-router-dom";

function TrainingModules() {  
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main className="training" style={{ flex: 1, display: "flex", flexDirection: "column" }} aria-label="Training Modules Page">
          <section className="section-1 d-flex justify-content-center align-items-center" aria-label="Assignment Section">
            <div className="container d-flex justify-content-center align-item-center">
              <div className="text-center">
                <div className="slogan-box mb-3">
                  <h2 className="fw-semibold text-white mb-4" tabIndex="0">Assignment</h2>
                  <p tabIndex="0">Join our platform and take your skills to the next level.</p>
                </div>
                <button
                  className="btn"
                  aria-label="Start General Assessment"
                  onClick={() => navigate("/assignment")}
                  type="button"
                >
                  General Assessment
                </button>
              </div>
              <div className="circle circle-1" aria-hidden="true"></div>
              <div className="circle circle-2" aria-hidden="true"></div>
              <div className="circle circle-3" aria-hidden="true"></div>
            </div>
          </section>

          <section className="container section-2 d-flex justify-content-center align-items-center py-5" aria-label="Facial Anatomy Module">
            <img src={Facial} alt="Facial anatomy illustration" className="facial" />
            <div className="card shadow-sm border-0 rounded-3" aria-label="Facial Anatomy Module Card">
              <div className="card-body d-flex flex-column justify-content-between p-3">
                <h5 className="card-title fw-semibold mb-3" tabIndex="0">
                  Facial Anatomy For <br />
                  Botox Application <br />
                  Treatment
                </h5>
                <button
                  className="btn w-100 overview"
                  type="button"
                  aria-label="View Overview of Facial Anatomy Module"
                  onClick={() => navigate("/assignment")}
                >
                  Overview <img src={Play} alt="" aria-hidden="true" />
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default TrainingModules;