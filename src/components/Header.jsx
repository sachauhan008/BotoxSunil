import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Header.css";
import logo1 from "../assets/images/header/logo1.svg";
import edit from "../assets/images/header/edit.svg";
import history from "../assets/images/header/history.svg";
import settings from "../assets/images/header/settings.svg";
import Signout from "../assets/images/header/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reduxAPI/reducer/authSlice";
import { getUserProfile } from "../reduxAPI/reducer/profile";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profileData);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <header className="shadow" aria-label="Site Header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center first">
          <div
            onClick={() => navigate("/training-module")}
            style={{ cursor: "pointer" }}
            aria-label="Go to Training Module"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate("/training-module");
              }
            }}
          >
            <img src={logo1} alt="Botox logo" className="logo-img" />
          </div>

          <nav className="d-none d-md-flex gap-4" aria-label="Main Navigation">
            <NavLink
              to="/training-module"
              className={({ isActive }) =>
                isActive
                  ? "fw-semibold text-decoration-none nav-link-active"
                  : "fw-semibold text-decoration-none"
              }
              aria-label="Go to Assessments"
              tabIndex={0}
            >
              Assessments
            </NavLink>

            <NavLink
              to="/my-subscription"
              className={({ isActive }) =>
                isActive
                  ? "fw-semibold text-decoration-none nav-link-active"
                  : "fw-semibold text-decoration-none"
              }
              aria-label="Go to My Subscriptions"
              tabIndex={0}
            >
              My Subscriptions
            </NavLink>
          </nav>

          <div className="position-relative" ref={dropdownRef}>
            <div
              className="d-flex align-items-center gap-2"
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
              aria-label="Open user menu"
              tabIndex={0}
              role="button"
              aria-haspopup="true"
              aria-expanded={showMenu}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleToggle();
                }
              }}
            >
              <span className="fw-bold text-dark">
                {user?.first_name && user?.last_name
                  ? `${user.first_name} ${user.last_name}`
                  : "User"}
              </span>
              <div className="profile-image" aria-label="User Initial">
                {user?.first_name
                  ? user.first_name.charAt(0).toUpperCase()
                  : "U"}
              </div>
            </div>

            {showMenu && (
              <div
                className="dropdown-menu-custom position-absolute end-0 mt-2 p-1 shadow rounded"
                role="menu"
                aria-label="User Menu"
              >
                <button
                  className="dropdown-item d-flex align-items-center gap-3"
                  onClick={() => {
                    navigate("/edit-profile");
                  }}
                  aria-label="Edit Profile"
                  tabIndex={0}
                  type="button"
                >
                  <img
                    src={edit}
                    alt=""
                    className="dropdown"
                    aria-hidden="true"
                  />
                  Edit Profile
                </button>
                <button
                  className="dropdown-item d-flex align-items-center gap-3"
                  onClick={() => {
                    navigate("/payment-history");
                  }}
                  aria-label="View Payment History"
                  tabIndex={0}
                  type="button"
                >
                  <img
                    src={history}
                    alt=""
                    className="dropdown"
                    aria-hidden="true"
                  />
                  View Payment History
                </button>
                <button
                  className="dropdown-item d-flex align-items-center gap-3"
                  aria-label="Edit Preferences"
                  tabIndex={0}
                  type="button"
                >
                  <img
                    src={settings}
                    alt=""
                    className="dropdown"
                    aria-hidden="true"
                  />
                  Edit Preferences
                </button>
                <div className="line" aria-hidden="true"></div>
                <button
                  className="dropdown-item d-flex align-items-center gap-3"
                  onClick={() => setShowLogoutModal(true)}
                  style={{ cursor: "pointer" }}
                  aria-label="Sign Out"
                  tabIndex={0}
                  type="button"
                >
                  <img
                    src={Signout}
                    alt=""
                    className="dropdown"
                    aria-hidden="true"
                  />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showLogoutModal && (
        <>
          <div className="custom-modal-overlay" aria-hidden="true" />

          <div
            className="custom-modal-container"
            role="dialog"
            aria-modal="true"
            aria-label="Sign Out Confirmation"
          >
            <div className="custom-modal shadow">
              <div className="modal-header border-0">
                <h5 className="modal-title" tabIndex={0}>
                  Confirm Signout
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLogoutModal(false)}
                  aria-label="Close dialog"
                ></button>
              </div>
              <div className="modal-body">
                <p tabIndex={0}>Are you sure you want to sign out?</p>
              </div>
              <div className="modal-footer border-0 d-flex justify-content-end gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowLogoutModal(false)}
                  style={{ marginLeft: "5px" }}
                  aria-label="Cancel"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setShowLogoutModal(false);
                    handleLogout();
                  }}
                  aria-label="Sign out"
                  type="button"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
