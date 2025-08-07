import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const PublicRoute = ({ children }) => {
  const {  token } = useSelector((state) => state.auth);
  const location = useLocation();

  const allowedPaths = ["/organization-subscription"];

  if ( token && !allowedPaths.includes(location.pathname)) {
    return <Navigate to="/training-module" replace />;
  }

  return children;
};

export default PublicRoute;