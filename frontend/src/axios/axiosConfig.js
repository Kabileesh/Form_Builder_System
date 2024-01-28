import axios from "axios";

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
    if (err.response.status === 404) {
      window.location.href = "/error/not-found";
    }
    if (
      err.response.status === 401 ||
      err.response.status === 403 ||
      err.response.data.err
    ) {
      sessionStorage.clear();
      if (
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/register"
      )
        window.location.reload();
    }
    return Promise.reject(err);
  }
);

export default axios;
