import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MyComponentProps } from "../types/type";

const RequireAuth: React.FC<MyComponentProps> = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();
  if (!currentUser) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
