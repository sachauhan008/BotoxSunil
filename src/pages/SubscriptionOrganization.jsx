import React, { useEffect } from "react";
import logo1 from "../assets/images/subscriptionOrganization/logo1.svg";
import icon from "../assets/images/subscriptionOrganization/true.png";
import "../assets/styles/SubscriptionOrganization.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlans } from "../reduxAPI/reducer/plan"; 

const SubscriptionOrganization = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { plans, loading } = useSelector((state) => state.plan);

  useEffect(() => {
    dispatch(fetchPlans());
  }, [dispatch]);

  const organizationPlans = plans.filter((p) => p.type === "organization");

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
          <h1 className="fw-semibold" >
            Welcome to <span>Botox</span> Choose a Plan
          </h1>
          <i className="description-1">
            Select a subscription to empower your team with advanced training
            tools.
          </i>
          <p className="description-2">
            Unlock team-wide access to expert-led modules, interactive 3D
            anatomy viewers, and practical assessments built to enhance clinical
            outcomes.
          </p>
        </div>

        <div className="column-2" aria-label="Organization Plans">
          {loading ? (
            <>
            <div className="text-center py-5">
              <p className="fw-semibold">Loading plans...</p>
            </div>
            </>
          ) : organizationPlans.length > 0 ? (
            organizationPlans.map((plan) => (
              <section
                className="card shadow rounded-4"
                key={plan.id}
                aria-label={`${plan.name} Plan Details`}
              >
                <h2 className="fw-bold text-center">{plan.name}</h2>
                <div className="line" aria-hidden="true"></div>

                <h3 className="fw-semibold my-2 text-center">
                  ${parseFloat(plan.price).toFixed(0)}
                  <span className="text-dark fw-normal">/</span>
                  <span className="text-dark fw-normal text">year</span>
                </h3>

                <ul
                  className="list-unstyled mt-4"
                  aria-label={`${plan.name} Plan Features`}
                >
                  <li>
                    <img src={icon} alt="" className="logo-1" />{" "}
                    Up to {plan.total_accounts} user account
                  </li>
                  <li>
                    <img src={icon} alt="" className="logo-1" /> Practice with
                    3D Anatomy
                  </li>
                  <li>
                    <img src={icon} alt="" className="logo-1" /> Assessment and
                    exam tool
                  </li>
                  <li>
                    <img src={icon} alt="" className="logo-1" /> Master Admin
                    Panel
                  </li>
                </ul>

                <button
                  className="btn w-100"
                  aria-label={`Choose ${plan.name} Plan`}
                  type="button"
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        tier: plan.name,
                        price: parseFloat(plan.price),
                        duration: "12 months",
                        users: `Up to ${plan.total_accounts} user account`,
                      },
                    })
                  }
                >
                  Choose Plan
                </button>
              </section>
            ))
          ) : (
            <div className="text-center py-5">
              <p>No organization plans available.</p>
            </div>
          )}
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
