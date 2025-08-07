import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerStudentUser } from "../reduxAPI/reducer/authSlice";
import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
import logo from "../assets/images/studentCreateAccount/logo.svg";
import general from "../assets/images/studentCreateAccount/girl.svg";
import Email from "../assets/images/studentCreateAccount/email.png";
import Password from "../assets/images/studentCreateAccount/lock.svg";
import User from "../assets/images/studentCreateAccount/user.png";
import phone from "../assets/images/studentCreateAccount/phone.png";
import "../assets/styles/Login.css";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  agreed: Yup.boolean().oneOf([true], "You must agree to terms"),
});

function StudentCreateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      agreed: false,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      await dispatch(
        registerStudentUser({ ...values, role: "student" }, navigate)
      );
      setSubmitting(false);
    },
  });

  return (
    <main
      className="vw-100 vh-100 d-flex justify-content-center align-items-center p-0 m-0 overflow-hidden main-page"
      aria-label="Student Registration Page"
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
            <nav
              className="position-absolute help"
              aria-label="Help Navigation"
            >
              <a href="#" tabIndex="0" aria-label="Need Help?">
                Need Help?
              </a>
            </nav>

            <header>
              <h3 className="fw-semibold">Create Your Account</h3>
              <p className="text-muted">
                Join our platform and take your skills to the next level.
              </p>
            </header>
            <hr className="line" aria-hidden="true" />

            <form
              onSubmit={formik.handleSubmit}
              aria-label="Student Registration Form"
            >
              <div className="d-flex w-100 gap-2 m-0 ">
                <div className="w-50 field p-0 ">
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0" aria-hidden="true">
                      <img src={User} alt="" />
                    </span>
                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      className="custom-input"
                      placeholder="Enter your first name"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      aria-required="true"
                    />
                  </div>
                  {formik.touched.first_name && formik.errors.first_name && (
                    <div className="text-danger errormessage" role="alert">
                      {formik.errors.first_name}
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
                      id="last_name"
                      type="text"
                      name="last_name"
                      className="custom-input"
                      placeholder="Enter your last name"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      aria-required="true"
                    />
                  </div>
                  {formik.touched.last_name && formik.errors.last_name && (
                    <div className="text-danger errormessage" role="alert">
                      {formik.errors.last_name}
                    </div>
                  )}
                </div>
              </div>

              <div className="field">
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

              <div className="field">
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

              <div className="d-flex  w-100 gap-2 m-0">
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
                      id="password_confirmation"
                      type="password"
                      name="password_confirmation"
                      className="custom-input"
                      placeholder="Confirm your password"
                      value={formik.values.password_confirmation}
                      onChange={formik.handleChange}
                      aria-required="true"
                      autoComplete="new-password"
                    />
                  </div>
                  {formik.touched.password_confirmation &&
                    formik.errors.password_confirmation && (
                      <div className="text-danger errormessage" role="alert">
                        {formik.errors.password_confirmation}
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
                className="btn btn-primary w-100 mb-3 d-flex justify-content-center align-items-center gap-2"
                type="submit"
                aria-label="Create Account"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>

              <Link
                to="/organization-register"
                className="d-block mb-2"
                aria-label="Register as Organization"
                tabIndex="0"
              >
                Register as Organization →
              </Link>

              <div className="text-center">
                <p className="text-muted">
                  Already have an account?{" "}
                  <Link to="/login" aria-label="Log In" tabIndex="0">
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

export default StudentCreateAccount;
