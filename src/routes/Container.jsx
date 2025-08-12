import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "../components/ScrollToTop";
import ScreenCheckWrapper from "../components/ScreenCheckWrapper";
import ErrorBoundary from "../components/layout/ErrorBoundary";
import PrivateRoute from "../components/layout/PrivateRoute";
import PublicRoute from "../components/layout/PublicRoute";
import PrivateLayout from "../components/layout/PrivateLayout";
import RoleProtectedRoute from "../components/layout/RoleProtectedRoute";
import Spinner from "../components/Spinner";
import PageNotAvailable from "../pages/PageNotAvailable";

const Login = lazy(() => import("../pages/Login"));
const StudentCreateAccount = lazy(() => import("../pages/StudentCreateAccount"));
const OrganizationCreateAccount = lazy(() => import("../pages/OrganizationCreateAccount"));
const SubscriptionStudent = lazy(() => import("../pages/SubscriptionStudent"));
const SubscriptionOrganization = lazy(() => import("../pages/SubscriptionOrganization"));
const Payment = lazy(() => import("../pages/Payment"));
const TrainingModules = lazy(() => import("../pages/TrainingModules"));
const Assignment = lazy(() => import("../pages/Assignment"));
const MySubscription = lazy(() => import("../pages/MySubscription"));
const EditProfile = lazy(() => import("../pages/EditProfile"));
const PaymentHistory = lazy(() => import("../pages/PaymentHistory"));
const StartNewAttempt = lazy(() => import("../pages/StartNewAttempt"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));

function Container() {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <ScreenCheckWrapper>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/student-register" element={<StudentCreateAccount />} />
                <Route path="/organization-register" element={<OrganizationCreateAccount />} />
                <Route path="/student-subscription" element={<RoleProtectedRoute allowedRoles={[4]}><SubscriptionStudent /></RoleProtectedRoute>} />
                <Route path="/organization-subscription" element={<RoleProtectedRoute allowedRoles={[2]}><SubscriptionOrganization /></RoleProtectedRoute>} />
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
                <Route path="*" element={<PageNotAvailable />} />
              </Routes>
            </Suspense>
          </ScreenCheckWrapper>
        </Router>
      </ErrorBoundary>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </>
  );
}

export default Container;
