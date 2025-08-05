import React from "react";
import logo1 from "../assets/images/subscriptionOrganization/logo1.svg";
import icon from "../assets/images/subscriptionOrganization/true.png";
import "../assets/styles/SubscriptionOrganization.css";
import { useNavigate } from "react-router-dom";

const plans = [
  { tier: "Tier 1", price: 999, users: "Up to 50 user account" },
  { tier: "Tier 2", price: 1999, users: "Up to 100 user account" },
  { tier: "Tier 3", price: 2999, users: "Up to 250 user account" },
  { tier: "Tier 4", price: 3999, users: "Up to 500 user account" },
  { tier: "Tier 5", price: 4999, users: "Up to 1000 user account" },
];

const SubscriptionOrganization = () => {
  const navigate = useNavigate();

  return (
    <main
      className="subscription-organization"
      aria-label="Organization Subscription Page"
    >
      <nav className="logo-container p-4" aria-label="Platform Logo">
        <img src={logo1} alt="Botox platform logo" className="logo" />
      </nav>

      <section
        className="flex-fill d-flex flex-column column-1"
        aria-label="Subscription Selection Section"
      >
        <div className="text-center mt-4 mb-3 first">
          <h1 className="fw-semibold" tabIndex="0">
            Welcome to <span>Botox</span> Choose a Plan
          </h1>
          <i className="description-1" tabIndex="0">
            Select a subscription to empower your team with advanced training
            tools.
          </i>
          <p className="description-2" tabIndex="0">
            Unlock team-wide access to expert-led modules, interactive 3D
            anatomy viewers, and practical assessments built to enhance clinical
            outcomes.
          </p>
        </div>

        <div className="column-2" aria-label="Organization Plans">
          {plans.map((plan, index) => (
            <section
              className="card shadow rounded-4"
              key={index}
              aria-label={`${plan.tier} Plan Details`}
              tabIndex="0"
            >
              <h2 className="fw-bold text-center">{plan.tier}</h2>
              <div className="line" aria-hidden="true"></div>

              <h3 className="fw-semibold my-2 text-center">
                ${plan.price}
                <span className="text-dark fw-normal">/</span>
                <span className="text-dark fw-normal text">year</span>
              </h3>

              <ul className="list-unstyled mt-4" aria-label={`${plan.tier} Plan Features`}>
                <li>
                  <img src={icon} alt="" className="logo-1" aria-hidden="true" /> {plan.users}
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
                className="btn w-100"
                aria-label={`Choose ${plan.tier} Plan`}
                type="button"
                onClick={() =>
                  navigate("/payment", {
                    state: {
                      tier: plan.tier,
                      price: plan.price,
                      duration: "12 months",
                      users: plan.users,
                    },
                  })
                }
              >
                Choose Plan
              </button>
            </section>
          ))}
        </div>
      </section>
      <div className="circle circle-1" aria-hidden="true"></div>
      <div className="circle circle-2" aria-hidden="true"></div>
      <div className="circle circle-3" aria-hidden="true"></div>
      <div className="circle circle-4" aria-hidden="true"></div>
    </main>
  );
};

export default SubscriptionOrganization;