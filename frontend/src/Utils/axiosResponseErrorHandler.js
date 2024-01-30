export const axiosReponseErrorHandler = (err) => {
  if (err.response.status === 500) {
    window.location.href = "/error/timed-out";
  }
  if (err.response.status === 400) {
    const formIdRegex = /^\/forms\/form\/\w+$/;
    if (formIdRegex.test(window.location.pathname)) {
      window.location.href = "/error/not-found";
    }
  }
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
};
