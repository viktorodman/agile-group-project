import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import ROLE from "../../types/Role";

interface PrivateProps {
  component: React.ComponentType;
  roles: Array<ROLE>;
}

export const Private = ({ component: RouteComponent, roles }: PrivateProps) => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const userHasRequiredRole = user && roles.includes(user.role);
  const navigate = useNavigate();

  return (
    <>
      {isAuthenticated && userHasRequiredRole && <RouteComponent />}
      {isAuthenticated && !userHasRequiredRole && navigate("/home")}
      {!isAuthenticated && !userHasRequiredRole && navigate("/")}
    </>
  );
};

export default Private;
