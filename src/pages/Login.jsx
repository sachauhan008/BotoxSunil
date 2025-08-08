import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reduxAPI/reducer/authSlice";
import "../assets/styles/Login.css";
import logo from "../assets/images/login/logo.svg";
import general from "../assets/images/login/girl.svg";
import Email from "../assets/images/login/email.png";
import Password from "../assets/images/login/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        loginUser(
          {
            email: formData.email,
            password: formData.password,
          },
          navigate
        )
      );
    } catch (err) {
      toast.error("An error occurred");
    }
  };

  return (
    <main
      className="vw-100 vh-100 d-flex justify-content-center align-items-center p-0 m-0 overflow-hidden main-page"
      aria-label="Login Page"
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
          aria-label="Login Form Section"
        >
          <div className="w-100 right-section">
            <nav
              className="position-absolute help"
              aria-label="Help Navigation"
            >
              <a href="#" tabIndex="0" aria-label="Need Help?">
                Need Help?
              </a>
            </nav>

            <header>
              <h3 className="fw-semibold">Welcome Back</h3>
              <p className="text-muted">
                Sign in to continue your training journey.
              </p>
            </header>
            <hr className="line" aria-hidden="true" />

            <form
              onSubmit={handleSubmit}
              aria-label="Login Form"
              autoComplete="on"
            >
              <div className="field">
                <label htmlFor="login-email">Email Address</label>
                <div className="input-group custom-input-group">
                  <span className="custom-input-icon m-0" aria-hidden="true">
                    <img src={Email} alt="" />
                  </span>
                  <input
                    id="login-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="custom-input"
                    placeholder="Enter your email address"
                    autoComplete="username"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="login-password">Password</label>
                <div className="custom-input-group">
                  <span className="custom-input-icon m-0" aria-hidden="true">
                    <img src={Password} alt="" />
                  </span>
                  <input
                    id="login-password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="custom-input"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="form-check-input me-2"
                    id="rememberMe"
                    aria-checked={formData.rememberMe}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <Link
                  to="/forgot-password"
                  tabIndex="0"
                  aria-label="Forgot Password?"
                >
                  Forgot Password?
                </Link>
              </div>

              {loading ? (
                <div className="w-100 mb-3 d-flex justify-content-center align-items-center">
                  <div
                    className="spinner-border"
                    style={{ width: "1.5rem", height: "1.5rem", color: "#072bf2" }}
                    role="status"
                    aria-label="Logging in..."
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <button
                  className="btn w-100 mb-3 d-flex justify-content-center align-items-center gap-2"
                  type="submit"
                  aria-label="Log In"
                >
                  Log In
                </button>
              )}

              

              <p className="text-center text-muted">
                <span>Don’t have an account? </span>
                <Link
                  to="/organization-register"
                  tabIndex="0"
                  aria-label="Create Account"
                >
                  Create Account
                </Link>
              </p>
            </form>
          </div>

          <div className="circle circle-3" aria-hidden="true"></div>
          <div className="circle circle-4" aria-hidden="true"></div>
        </section>
      </div>
    </main>
  );
}

export default Login;
