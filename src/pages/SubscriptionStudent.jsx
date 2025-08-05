import React from "react";
import "../assets/styles/SubscriptionStudent.css";
import logo1 from "../assets/images/subscriptionStudent/logo1.svg";
import icon from "../assets/images/subscriptionStudent/true.png";
import { useNavigate } from "react-router-dom";

const SubscriptionStudent = () => {
  const navigate = useNavigate();

  return (
    <main
      className="subscription-student vh-100 vw-100 d-flex"
      aria-label="Student Subscription Page"
    >
      <nav className="logo-container p-4" aria-label="Platform Logo">
        <img src={logo1} alt="Botox platform logo" className="logo" />
      </nav>

      <section
        className="flex-fill d-flex justify-content-center align-items-center"
        aria-label="Subscription Selection Section"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 text-center text-md-start column-1"
              aria-label="Subscription Introduction"
              tabIndex="0"
            >
              <h1 className="fw-semibold mb-2">
                Welcome to <span>Botox</span>
              </h1>
              <h2 className="fw-semibold mb-4">Choose a Plan</h2>
              <p className="first mb-3" tabIndex="0">
                Select a subscription to access the training platform.
              </p>
              <p className="second" tabIndex="0">
                Unlock expert-led modules, interactive 3D anatomy tools, and
                hands-on assessments designed to elevate your skills. Whether
                you're just starting or looking to deepen your expertise, our
                training platform supports your journey every step of the way.
              </p>
            </div>

            <div
              className="col-md-4 d-flex justify-content-center column-2"
              aria-label="Student Plan Card"
            >
              <section
                className="card shadow rounded-4 w-100"
                aria-label="Student Plan Details"
                tabIndex="0"
              >
                <h3 className="fw-bold text-center">Student Plan</h3>
                <div className="line" aria-hidden="true"></div>

                <h2 className="fw-semibold my-2 text-center">
                  $199<span className="text-dark fw-normal">/</span>
                  <span className="text-dark fw-normal text">year</span>
                </h2>

                <ul className="list-unstyled mt-4" aria-label="Student Plan Features">
                  <li>
                    <img src={icon} alt="" className="logo-1" aria-hidden="true" /> 1 user account
                  </li>
                  <li>
                    <img src={icon} alt="" className="logo-1" aria-hidden="true" /> Practice with 3D Anatomy
                  </li>
                  <li>
                    <img src={icon} alt="" className="logo-1" aria-hidden="true" /> Assessment and exam tool
                  </li>
                  <li>
                    <img src={icon} alt="" className="logo-1" aria-hidden="true" /> Master Admin Panel
                  </li>
                </ul>

                <button
                  type="button"
                  className="btn w-100"
                  aria-label="Choose Student Plan"
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        tier: "Student Plan",
                        price: 199,
                        duration: "12 months",
                        users: "1 user account",
                      },
                    })
                  }
                >
                  Choose Plan
                </button>
              </section>
            </div>
          </div>
        </div>
      </section>

      <div className="circle circle-1" aria-hidden="true"></div>
      <div className="circle circle-2" aria-hidden="true"></div>
      <div className="circle circle-3" aria-hidden="true"></div>
      <div className="circle circle-4" aria-hidden="true"></div>
    </main>
  );
};

export default SubscriptionStudent;