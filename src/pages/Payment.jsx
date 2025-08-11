import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo1 from "../assets/images/payment/logo1.svg";
import icon from "../assets/images/payment/true.png";
import visa from "../assets/images/payment/VISA.svg";
import mastercard from "../assets/images/payment/Mastercard.svg";
import amex from "../assets/images/payment/AMEX.svg";
import discover from "../assets/images/payment/Discover.svg";

import "../assets/styles/Payment.css";

function formatCardNumber(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value) {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 2) return cleaned;
  return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
}

const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .transform((value) => value.replace(/\s/g, ""))
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  expiry: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry must be in MM/YY format")
    .required("Expiry date is required"),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
  nameOnCard: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .required("Name on card is required"),
  zipcode: Yup.string()
    .matches(/^\d+$/, "Zipcode must be numbers only")
    .required("Zipcode is required"),
  saveCard: Yup.boolean(),
});

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state || {};

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiry: "",
      cvv: "",
      nameOnCard: "",
      zipcode: "",
      saveCard: false,
    },
    validationSchema,
    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        const now = new Date();
        const nextPaymentDate = new Date(
          now.setFullYear(now.getFullYear() + 1)
        );
        const nextPayment = nextPaymentDate.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        const planWithDate = { ...selectedPlan, nextPayment };

        user.plan = planWithDate;
        localStorage.setItem("user", JSON.stringify(user));

        const key = user.role === "organization" ? "organizations" : "students";
        const users = JSON.parse(localStorage.getItem(key)) || [];
        const idx = users.findIndex((u) => u.email === user.email);
        if (idx !== -1) {
          users[idx].plan = planWithDate;
          localStorage.setItem(key, JSON.stringify(users));
        }
      }

      navigate("/training-module");
      toast.success(`Payment of $${selectedPlan.price} completed!`);
      console.log("Payment Submitted:", values);
    },
  });


  return (
    <main className="payment" aria-label="Payment Page">
      <nav className="logo-container p-4" aria-label="Platform Logo">
        <img src={logo1} alt="Botox platform logo" className="logo" />
      </nav>

      <section
        className="vh-100 vw-100 d-flex justify-content-center align-items-center"
        aria-label="Payment Section"
      >
        <div className="payment-box d-flex">
          <section className="column-1" aria-label="Selected Plan Details">
            <div className="p-4">
              <h2 className="fw-semibold">Your Selected Plan</h2>
              <p className="first">
                Unlock full access to expert-led training and tools.
              </p>
              <div className="line" aria-hidden="true"></div>
              <p className="second d-flex justify-content-between">
                <span>Plan:</span> {selectedPlan.tier}
              </p>
              <p className="second d-flex justify-content-between">
                <span>Price:</span>{" "}
                <span className="fw-bold">${selectedPlan.price}/year</span>
              </p>
              <p className="second d-flex justify-content-between mb-3">
                <span>Duration:</span> {selectedPlan.duration}
              </p>
              <ul className="list-unstyled mt-4" aria-label="Plan Features">
                <li>
                  <img src={icon} alt="" className="logo-1" aria-hidden="true" />{" "}
                  {selectedPlan.users}
                </li>
                <li>
                  <img src={icon} alt="" className="logo-1" aria-hidden="true" /> Practice with
                  3D Anatomy
                </li>
                <li>
                  <img src={icon} alt="" className="logo-1" aria-hidden="true" /> Assessment
                  and exam tool
                </li>
                <li>
                  <img src={icon} alt="" className="logo-1" aria-hidden="true" /> Master Admin
                  Panel
                </li>
              </ul>
            </div>
          </section>

          <section className="column-2" aria-label="Payment Form Section">
            <div className="p-3">
              <h2 className="fw-semibold">Payment Information</h2>
              <p className="first">
                Enter your details to complete the purchase securely.
              </p>
              <div className="line" aria-hidden="true"></div>

              <form onSubmit={formik.handleSubmit} aria-label="Payment Form">
                <div className="mb-2">
                  <label htmlFor="cardNumber">Card Number</label>
                  <div className="input-group custom-input-group card-input-group">
                    <input
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      className="custom-input card-number-input"
                      placeholder="1234 5678 9101 1121"
                      value={formik.values.cardNumber}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        formik.setFieldValue("cardNumber", formatted);
                      }}
                      aria-required="true"
                      autoComplete="cc-number"
                      inputMode="numeric"
                    />
                    <div className="card-icons" aria-hidden="true">
                      <img src={visa} alt="Visa" />
                      <img src={mastercard} alt="MasterCard" />
                      <img src={amex} alt="Amex" />
                      <img src={discover} alt="Discover" />
                    </div>
                  </div>
                  {formik.touched.cardNumber && formik.errors.cardNumber && (
                    <div className="text-danger errormessage" role="alert">
                      {formik.errors.cardNumber}
                    </div>
                  )}
                </div>

                <div className="row mb-2">
                  <div className="col">
                    <label htmlFor="expiry">Expiration Date</label>
                    <div className="input-group custom-input-group">
                      <input
                        type="text"
                        name="expiry"
                        id="expiry"
                        className="custom-input"
                        placeholder="MM/YY"
                        value={formik.values.expiry}
                        onChange={(e) => {
                          const formatted = formatExpiry(e.target.value);
                          formik.setFieldValue("expiry", formatted);
                        }}
                        aria-required="true"
                        autoComplete="cc-exp"
                        inputMode="numeric"
                      />
                    </div>
                    {formik.touched.expiry && formik.errors.expiry && (
                      <div className="text-danger errormessage" role="alert">
                        {formik.errors.expiry}
                      </div>
                    )}
                  </div>
                  <div className="col">
                    <label htmlFor="cvv">CVV</label>
                    <div className="input-group custom-input-group">
                      <input
                        type="text"
                        name="cvv"
                        id="cvv"
                        className="custom-input"
                        placeholder="123"
                        value={formik.values.cvv}
                        onChange={(e) => {
                          const formatted = e.target.value.replace(/\D/g, "");
                          formik.setFieldValue("cvv", formatted);
                        }}
                        aria-required="true"
                        autoComplete="cc-csc"
                        inputMode="numeric"
                      />
                    </div>
                    {formik.touched.cvv && formik.errors.cvv && (
                      <div className="text-danger errormessage" role="alert">
                        {formik.errors.cvv}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col">
                    <label htmlFor="nameOnCard">Name On Card</label>
                    <div className="input-group custom-input-group">
                      <input
                        type="text"
                        name="nameOnCard"
                        id="nameOnCard"
                        className="custom-input"
                        placeholder="John Doe"
                        value={formik.values.nameOnCard}
                        onChange={(e) => {
                          const formatted = e.target.value.replace(
                            /[^a-zA-Z\s]/g,
                            ""
                          );
                          formik.setFieldValue("nameOnCard", formatted);
                        }}
                        aria-required="true"
                        autoComplete="cc-name"
                      />
                    </div>
                    {formik.touched.nameOnCard && formik.errors.nameOnCard && (
                      <div className="text-danger errormessage" role="alert">
                        {formik.errors.nameOnCard}
                      </div>
                    )}
                  </div>
                  <div className="col">
                    <label htmlFor="zipcode">Zipcode</label>
                    <div className="input-group custom-input-group">
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="custom-input"
                        placeholder="10001"
                        value={formik.values.zipcode}
                        onChange={(e) => {
                          const formatted = e.target.value.replace(/\D/g, "");
                          formik.setFieldValue("zipcode", formatted);
                        }}
                        aria-required="true"
                        autoComplete="postal-code"
                        inputMode="numeric"
                      />
                    </div>
                    {formik.touched.zipcode && formik.errors.zipcode && (
                      <div className="text-danger errormessage" role="alert">
                        {formik.errors.zipcode}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    name="saveCard"
                    checked={formik.values.saveCard}
                    onChange={formik.handleChange}
                    className="form-check-input"
                    id="saveCard"
                    aria-checked={formik.values.saveCard}
                  />
                  <label htmlFor="saveCard">Save card details</label>
                </div>

                <button
                  className="btn w-100 mb-1"
                  type="submit"
                  aria-label={`Pay $${selectedPlan.price}`}
                >
                  Pay ${selectedPlan.price}
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Payment;
