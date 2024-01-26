import { Navigate } from "react-router-dom";

export const ErrorHandler = (error) => {
  if (error) {
    <Navigate to={"/error/unknown"} />;
  } else return;
};
