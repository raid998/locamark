import { Navigate } from "react-router";
import { UserState } from "../types";
const ProtectedRoute = ({
  children,
  user,
}: {
  children: JSX.Element;
  user: UserState["user"];
}) => {
  if (!user) return <Navigate to={"/connexion"} />;
  return children;
};

export default ProtectedRoute;
