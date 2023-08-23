import axios from "axios";

axios.defaults.baseURL = "http://localhost:5050";

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
    if (err.response.status === 401 || err.response.data.err) {
      sessionStorage.clear();
      window.location.reload();
    }
    return Promise.reject(err);
  }
);

export default axios;
