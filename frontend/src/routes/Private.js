import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  return user ? children : <Navigate to="/login" />;
};
export default Private;
