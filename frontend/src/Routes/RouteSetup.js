/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { removeInfo, verifyToken } from "../store/slices/userSlice";
import { IDLE, LOADING, SUCCEEDED } from "../Utils/constants";
import LoadingIcon from "../UI/Icons/LoadingIcon";
import { removeFormField } from "../store/slices/formSlice";
import { removeSubmissionInfo } from "../store/slices/submissionSlice";

const RouteSetup = () => {
  const [loading, setLoading] = useState(IDLE);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    await dispatch(removeInfo());
    await dispatch(removeFormField());
    await dispatch(removeSubmissionInfo());
    sessionStorage.clear();
    window.location.reload();
    navigate("/login");
  };

  useEffect(() => {
    const verifyUser = async () => {
      const accessToken = window.sessionStorage.getItem("accessToken");
      const response = await dispatch(verifyToken(accessToken));
      if (!response.payload) {
        logOutHandler();
      }
      setLoading(SUCCEEDED);
    };
    if (loading === IDLE) {
      verifyUser();
    }
  }, []);

  if (loading === LOADING) {
    return <LoadingIcon />;
  }
  if (loading === SUCCEEDED) {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
};

export default RouteSetup;
