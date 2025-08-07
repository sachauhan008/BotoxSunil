import MySubscription from "../pages/MySubscription";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "../pages/Payment";
import SubscriptionOrganization from "../pages/SubscriptionOrganization";
import SubscriptionStudent from "../pages/SubscriptionStudent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login";
import StudentCreateAccount from "../pages/StudentCreateAccount";
import OrganizationCreateAccount from "../pages/OrganizationCreateAccount";
import ScreenCheckWrapper from "../components/ScreenCheckWrapper";
import TrainingModules from "../pages/TrainingModules";
import Assignment from "../pages/Assignment";
import ScrollToTop from "../components/ScrollToTop";
import EditProfile from "../pages/EditProfile";
import PaymentHistory from "../pages/PaymentHistory";
import StartNewAttempt from "../pages/StartNewAttempt";
import ErrorBoundary from "../components/layout/ErrorBoundary";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRoute from "../components/layout/PrivateRoute";
import PublicRoute from "../components/layout/PublicRoute";


function Container() {
  return (
    <>
      <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <ScreenCheckWrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/student-register" element={<StudentCreateAccount />} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/organization-register" element={<OrganizationCreateAccount />} />
            <Route path="/student-subscription" element={<SubscriptionStudent />} />
            <Route
              path="/organization-subscription"
              element={<SubscriptionOrganization />}
            />
            <Route path="/payment" element={<Payment />} />
            <Route path="/training-module" element={    <PrivateRoute><TrainingModules /></PrivateRoute>} />
            <Route path="/assignment" element={<PrivateRoute><Assignment /></PrivateRoute>} />
            <Route path="/my-subscription" element={<PrivateRoute><MySubscription /></PrivateRoute>} />
            <Route path="/edit-profile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
            <Route path="/payment-history" element={<PrivateRoute><PaymentHistory /></PrivateRoute>} />
            <Route path="/start-new-attempt" element={<PrivateRoute><StartNewAttempt /></PrivateRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </ScreenCheckWrapper>
      </Router>
        </ErrorBoundary>

      <ToastContainer position="top-right" autoClose={2000}       hideProgressBar= "true" />
    </>
  );
}

export default Container;
