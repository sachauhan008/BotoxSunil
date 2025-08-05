import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/organizationCreateAccount/logo.svg";
import general from "../assets/images/organizationCreateAccount/girl.svg";
import Email from "../assets/images/organizationCreateAccount/email.png";
import Password from "../assets/images/organizationCreateAccount/lock.svg";
import phone from "../assets/images/organizationCreateAccount/phone.png";
import User from "../assets/images/organizationCreateAccount/user.png";
import organization from "../assets/images/organizationCreateAccount/organization.png";
import "../assets/styles/Login.css";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  orgName: Yup.string().required("Organization name is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  agreed: Yup.boolean().oneOf([true], "You must agree to terms"),
});


function OrganizationCreateAccount() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      orgName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreed: false,
    },
    validationSchema,
    onSubmit: (values) => {
      const orgs = JSON.parse(localStorage.getItem("organizations")) || [];
      const newOrg = { ...values, role: "organization" };
      orgs.push(newOrg);
      localStorage.setItem("organizations", JSON.stringify(orgs));
      localStorage.setItem("token", "org-token-123");
      localStorage.setItem("user", JSON.stringify(newOrg));
      toast.success("Organization account created successfully!");
      navigate("/organization-subscription");
    },
  });

  return (
    <main
      className="vw-100 vh-100 d-flex justify-content-center align-items-center p-0 m-0 overflow-hidden main-page"
      aria-label="Organization Registration Page"
    >
      <div className="row w-100 h-100">
        <section
          className="col-md-6 left-section d-flex align-items-center justify-content-center text-white position-relative p-0"
          aria-label="Welcome Section"
        >
          <div
            className="w-100 d-flex align-items-center justify-content-center"
            style={{ maxWidth: "640px" }}
          >
            <div className="position-absolute logo" aria-hidden="true">
              <img src={logo} alt="Botox logo" className="logo-img" />
            </div>
            <div
              className="slogan-box text-md-start text-center"
              aria-label="Platform Slogan"
              tabIndex="0"
            >
              <h2 className="slogan-box-text fw-semibold mb-0">Continue</h2>
              <h2 className="slogan-box-text fw-semibold mb-0">learning and</h2>
              <h2 className="slogan-box-text fw-semibold">exploring</h2>
              <h2 className="slogan-box-text fw-semibold">treatments.</h2>
            </div>
          </div>
          <img
            src={general}
            alt=""
            className="girl-img position-absolute bottom-0"
            aria-hidden="true"
          />
          <div className="circle circle-1" aria-hidden="true"></div>
          <div className="circle circle-2" aria-hidden="true"></div>
        </section>

        <section
          className="col-md-6 d-flex justify-content-center align-items-center position-relative p-0"
          aria-label="Registration Form Section"
        >
          <div className="w-100 right-section mt-5">
            <nav className="position-absolute help" aria-label="Help Navigation">
              <a href="#" tabIndex="0" aria-label="Need Help?">
                Need Help?
              </a>
            </nav>

            <header>
              <h3 className="fw-semibold" tabIndex="0">
                Create Your Account
              </h3>
              <p className="text-muted" tabIndex="0">
                Join our platform and take your skills to the next level.
              </p>
            </header>
            <hr className="line" aria-hidden="true" />

            <form onSubmit={formik.handleSubmit} aria-label="Organization Registration Form">
              <div className="field">
                <label htmlFor="orgName">Organization Name</label>
                <div className="input-group custom-input-group">
                  <span className="custom-input-icon m-0" aria-hidden="true">
                    <img src={organization} alt="" />
                  </span>
                  <input
                    id="orgName"
                    type="text"
                    name="orgName"
                    className="custom-input"
                    placeholder="Enter your organization name"
                    value={formik.values.orgName}
                    onChange={formik.handleChange}
                    aria-required="true"
                  />
                </div>
                {formik.touched.orgName && formik.errors.orgName && (
                  <div className="text-danger errormessage" role="alert">
                    {formik.errors.orgName}
                  </div>
                )}
              </div>

              <div className="d-flex w-100 gap-2 m-0">
                <div className="w-50 field p-0">
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0" aria-hidden="true">
                      <img src={User} alt="" />
                    </span>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      className="custom-input"
                      placeholder="Enter your first name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      aria-required="true"
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-danger errormessage" role="alert">
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>

                <div className="w-50 field p-0">
                  <label htmlFor="lastName">Last Name</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0" aria-hidden="true">
                      <img src={User} alt="" />
                    </span>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      className="custom-input"
                      placeholder="Enter your last name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      aria-required="true"
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-danger errormessage" role="alert">
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>
              </div>

              <div className="d-flex w-100 gap-2 m-0">
                <div className="w-50 field p-0">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0" aria-hidden="true">
                      <img src={Email} alt="" />
                    </span>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="custom-input"
                      placeholder="Enter your email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      aria-required="true"
                      autoComplete="username"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger errormessage" role="alert">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className="w-50 field p-0">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0" aria-hidden="true">
                      <img src={phone} alt="" />
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="custom-input"
                      placeholder="Enter your phone number"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      aria-required="true"
                      autoComplete="tel"
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-danger errormessage" role="alert">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>
              </div>

              <div className="d-flex w-100 gap-2 m-0">
                <div className="w-50 field p-0">
                  <label htmlFor="password">Password</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0" aria-hidden="true">
                      <img src={Password} alt="" />
                    </span>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="custom-input"
                      placeholder="Enter your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      aria-required="true"
                      autoComplete="new-password"
                    />
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-danger errormessage" role="alert">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                <div className="w-50 field p-0">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0" aria-hidden="true">
                      <img src={Password} alt="" />
                    </span>
                    <input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      className="custom-input"
                      placeholder="Confirm your password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      aria-required="true"
                      autoComplete="new-password"
                    />
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="text-danger errormessage" role="alert">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formik.values.agreed}
                  onChange={formik.handleChange}
                  className="form-check-input me-2"
                  id="agreed"
                  aria-checked={formik.values.agreed}
                  aria-required="true"
                />
                <label className="form-check-label" htmlFor="agreed">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="privacy"
                    aria-label="Read Terms and Conditions and Privacy Policy"
                    tabIndex="0"
                  >
                    Terms & Conditions and Privacy Policy
                  </a>
                </label>
                {formik.touched.agreed && formik.errors.agreed && (
                  <div className="text-danger errormessage" role="alert">
                    {formik.errors.agreed}
                  </div>
                )}
              </div>

              <button
                className="btn btn-primary w-100 mb-3"
                type="submit"
                aria-label="Create Account"
              >
                Create Account
              </button>

              <Link
                to="/student-register"
                className="d-block mb-2"
                aria-label="Register as Student"
                tabIndex="0"
              >
                Register as Student →
              </Link>

              <div className="text-center">
                <p className="text-muted">
                  Already have an account?{" "}
                  <Link to="/" aria-label="Log In" tabIndex="0">
                    Log In
                  </Link>
                </p>
              </div>
            </form>
          </div>

          <div className="circle circle-3" aria-hidden="true"></div>
          <div className="circle circle-4" aria-hidden="true"></div>
        </section>
      </div>
    </main>
  );
}

export default OrganizationCreateAccount;