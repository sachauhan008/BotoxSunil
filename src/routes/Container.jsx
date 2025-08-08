import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "../pages/Login";
import StudentCreateAccount from "../pages/StudentCreateAccount";
import OrganizationCreateAccount from "../pages/OrganizationCreateAccount";
import SubscriptionStudent from "../pages/SubscriptionStudent";
import SubscriptionOrganization from "../pages/SubscriptionOrganization";
import Payment from "../pages/Payment";
import TrainingModules from "../pages/TrainingModules";
import Assignment from "../pages/Assignment";
import MySubscription from "../pages/MySubscription";
import EditProfile from "../pages/EditProfile";
import PaymentHistory from "../pages/PaymentHistory";
import StartNewAttempt from "../pages/StartNewAttempt";
import ForgotPassword from "../pages/ForgotPassword";

import ScrollToTop from "../components/ScrollToTop";
import ScreenCheckWrapper from "../components/ScreenCheckWrapper";
import ErrorBoundary from "../components/layout/ErrorBoundary";
import PrivateRoute from "../components/layout/PrivateRoute";
import PublicRoute from "../components/layout/PublicRoute";
import PrivateLayout from "../components/layout/PrivateLayout";

function Container() {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <ScreenCheckWrapper>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />

              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/student-register" element={<StudentCreateAccount />} />
              <Route path="/organization-register" element={<OrganizationCreateAccount />} />
              <Route path="/student-subscription" element={<SubscriptionStudent />} />
              <Route path="/organization-subscription" element={<SubscriptionOrganization />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route element={<PrivateRoute><PrivateLayout /></PrivateRoute>}>
                <Route path="/training-module" element={<TrainingModules />} />
                <Route path="/assignment" element={<Assignment />} />
                <Route path="/my-subscription" element={<MySubscription />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/payment-history" element={<PaymentHistory />} />
                <Route path="/start-new-attempt" element={<StartNewAttempt />} />
              </Route>
            </Routes>
          </ScreenCheckWrapper>
        </Router>
      </ErrorBoundary>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar="true" />
    </>
  );
}

export default Container;
