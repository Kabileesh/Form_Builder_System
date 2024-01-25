import { Navigate, useNavigate } from "react-router-dom";

export const CheckAuth = () => {
  const navigate = useNavigate();

  if (window.sessionStorage.getItem("accessToken"))
    return <Navigate to={navigate(-1) ? navigate(-1) : "/forms"} />;
};
