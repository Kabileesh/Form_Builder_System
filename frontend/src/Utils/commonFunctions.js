import { Navigate } from "react-router-dom";

export const CheckAuth = () => {
  if (window.sessionStorage.getItem("accessToken"))
    return <Navigate to={window.history.length > 1 ? -1 : "/forms"} />;
};
