import React, { useState } from "react";
import "../assets/styles/Login.css";
import logo from "../assets/images/login/logo.svg";
import general from "../assets/images/login/girl.svg";
import Email from "../assets/images/login/email.png";
import Password from "../assets/images/login/lock.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function ForgotPassword() {
      const navigate = useNavigate();
  const [step, setStep] = useState(1); 

  const [form, setForm] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

      const sendOtp = () => {
    if (!form.email) {
      toast.error("Please enter your email");
      return;
    }

    toast.success(`OTP sent to ${form.email}`);
  };

  const verifyOtp = () => {
    if (form.otp) {
      toast.success("OTP Verified");
      setStep(2);
    } else {
      toast.error("Invalid OTP");
    }
  };

  const resetPassword = () => {
    if (form.newPassword !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Password reset successfully");
    navigate("/login");
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

            <h3 className="fw-semibold">Forgot Password</h3>
            <p className="text-muted">Recover your account below</p>
            <hr className="line" />

            {step === 1 && (
              <>
                <div className="field">
                  <label>Email</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon">
                      <img src={Email} alt="email" />
                    </span>
                    <input
                      type="email"
                      name="email"
                       value={form.email}
                      onChange={handleChange}
                      className="custom-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <button className="btn btn-sm w-100 mt-2" type="button" onClick={sendOtp}>
                    Send OTP
                  </button>
                </div>
                <div className="field ">
                  <label>OTP</label>
                  <div className="custom-input-group">
                    <span className="custom-input-icon">
                      <img src={Password} alt="lock" />
                    </span>
                    <input
                      type="text"
                      name="otp"
                       value={form.otp}
                      onChange={handleChange}
                      className="custom-input"
                      placeholder="Enter OTP"
                    />
                  </div>
                  <button className="btn btn-sm w-100 mt-2" type="button" onClick={verifyOtp}>
                    Verify OTP
                  </button>
                </div>{" "}
              </>
            )}

            {step === 2 && (
              <>
                <div className="field ">
                  <label>New Password</label>
                  <div className="custom-input-group">
                    <span className="custom-input-icon">
                      <img src={Password} alt="lock" />
                    </span>
                    <input
                      type="password"
                      name="newPassword"
                         value={form.newPassword}
                      onChange={handleChange}
                      className="custom-input"
                      placeholder="New password"
                    />
                  </div>
                </div>

                <div className="field ">
                  <label>Confirm Password</label>
                  <div className="custom-input-group">
                    <span className="custom-input-icon">
                      <img src={Password} alt="lock" />
                    </span>
                    <input
                      type="password"
                      name="confirmPassword"
                       value={form.confirmPassword}
                      onChange={handleChange}
                      className="custom-input"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>

                <button className="btn w-100 " type="button" onClick={resetPassword}>
                  Reset Password
                </button>
              </>
            )}
          </div>

          <div className="circle circle-3" aria-hidden="true"></div>
          <div className="circle circle-4" aria-hidden="true"></div>
        </section>
      </div>
    </main>
  );
}

export default ForgotPassword;
