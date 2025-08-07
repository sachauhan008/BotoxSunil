import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, token } = useSelector((state) => state.auth);

  if (!user || !token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
