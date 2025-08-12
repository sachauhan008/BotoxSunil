import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalItem } from "../../modules/utils";

const RoleProtectedRoute = ({ allowedRoles, children }) => {
  const token = getLocalItem("token");
  const role = parseInt(getLocalItem("role"));

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    if (role === 4) return <Navigate to="/student-subscription" replace />;
    if (role === 2) return <Navigate to="/organization-subscription" replace />;
  }

  return children;
};

export default RoleProtectedRoute;
