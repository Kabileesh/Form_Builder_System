import axios from "axios";
import { axiosReponseErrorHandler } from "../Utils/axiosResponseErrorHandler";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use(function (config) {
  const accessToken = sessionStorage.getItem("accessToken");
  if (
    config.url !== "login" &&
    config.url !== "register" &&
    config.url !== "verify-token"
  ) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    axiosReponseErrorHandler(err);
    return Promise.reject(err);
  }
);

export default axios;
