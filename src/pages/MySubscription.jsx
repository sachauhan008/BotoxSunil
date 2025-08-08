import React from "react";
import icon from "../assets/images/mySubscription/true.png";
import file from "../assets/images/mySubscription/file-text.svg";
import "../assets/styles/MySubscription.css";

function MySubscription() {
  const user = JSON.parse(localStorage.getItem("user"));
  const plan = user?.plan || {
    tier: "Student Plan",
    price: 199,
    duration: "12 months",
    users: "1 user account",
  };

  return (
    <>

        <main className="subscription" style={{ flex: 1, display: "flex", flexDirection: "column" }} aria-label="My Subscription Page">
          <section className="section-1 d-flex justify-content-center align-items-center" aria-label="Subscription Header">
            <div className="container d-flex justify-content-center align-item-center">
              <div className="text-center">
                <div className="slogan-box">
                  <h2 className="fw-semibold text-white mb-4" tabIndex="0">
                    My Subscriptions
                  </h2>
                  <p tabIndex="0">Join our platform and take your skills to the next level.</p>
                </div>
              </div>
              <div className="circle circle-1" aria-hidden="true"></div>
              <div className="circle circle-2" aria-hidden="true"></div>
              <div className="circle circle-3" aria-hidden="true"></div>
            </div>
          </section>

          <section className="container section-2 d-flex justify-content-center align-items-center py-5" aria-label="Current Plan Details">
            <div className="card shadow rounded-4 border-0 current-plan-card w-100">
              <h5 className="fw-semibold" tabIndex="0">Current Plan</h5>
              <p className="first m-0" tabIndex="0">Manage your Botox Training Plan</p>
              <div className="line" aria-hidden="true"></div>

              <div className="row">
                <div className="col-md-6">
                  <p>
                    <span>Plan:</span>{" "}
                    <span className="float-end">{plan.tier || "Student Plan"}</span>
                  </p>
                  <p>
                    <span>Price:</span>{" "}
                    <span className="fw-bold float-end">
                      ${plan.price} <span className="fw-bold">/ year</span>
                    </span>
                  </p>
                  <p>
                    <span>Duration:</span>{" "}
                    <span className="float-end">{plan.duration}</span>
                  </p>
                  <p className="m-0">
                    <span>Next Payment:</span>{" "}
                    <span className="float-end">{plan.nextPayment}</span>
                  </p>
                </div>

                <div className="col-md-6">
                  <ul className="list-unstyled ms-md-3" aria-label="Plan Features">
                    <li className="li">
                      <img src={icon} alt="" className="logo-1" aria-hidden="true" />
                      {plan.users}
                    </li>
                    <li className="li">
                      <img src={icon} alt="" className="logo-1" aria-hidden="true" />
                      Practice with 3D Anatomy
                    </li>
                    <li className="li">
                      <img src={icon} alt="" className="logo-1" aria-hidden="true" />
                      Assessment and exam tool
                    </li>
                    <li className="last">
                      <img src={icon} alt="" className="logo-1" aria-hidden="true" />
                      Master Admin Panel
                    </li>
                  </ul>
                </div>
              </div>
              <div className="line" aria-hidden="true"></div>

              <div className="d-flex justify-content-between flex-wrap gap-2">
                <button className="btn cancel" type="button" aria-label="Cancel Subscription">
                  Cancel Subscription
                </button>
                <div className="d-flex gap-2 ms-auto">
                  <button className="btn btn-link text-decoration-none invoice btn-sm" type="button" aria-label="Download Invoice">
                    Download Invoice <img src={file} alt="" className="invoice-logo" aria-hidden="true" />
                  </button>
                  <button className="btn upgrade btn-sm" type="button" aria-label="Upgrade Plan">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}

export default MySubscription;