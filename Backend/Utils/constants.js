module.exports = {
  // 2XX status

  LOGIN_SUCCESS: {
    status: 200,
    message: "Logged in successfully",
  },

  RESPONSE_EDIT_SUCCESS: {
    status: 200,
    message: "Response modified successfully",
  },

  FORM_DELETE_SUCCESS: {
    status: 200,
    message: "Form deleted successfully",
  },

  FETCH_SUCCESS: {
    status: 200,
    message: "Fetched successfully",
  },

  SUCCEEDED: {
    status: 200,
  },

  REGISTER_SUCCESS: {
    status: 201,
    message: "Registered successfully",
  },

  FORM_CREATE_SUCCESS: {
    status: 201,
    message: "Form created successfully",
  },

  RESPONSE_SUBMIT_SUCCESS: {
    status: 201,
    message: "Response Submitted successfully",
  },

  NO_CONTENT: {
    status: 204,
    message: "No content available",
  },

  //4XX status

  EMAIL_ALREADY_EXIST: {
    status: 400,
    message: "Email is already taken",
  },

  INVALID_ID_VALUE: {
    status: 400,
    message: "Invalid id",
  },

  INVALID_FORM_ID: {
    status: 400,
    message: "Invalid Form Id",
  },

  UNAUTHORIZED: {
    status: 401,
    message: "Invalid credentials",
  },

  FORBIDDEN: {
    status: 403,
    message: "Unauthorized",
  },

  FORM_NOT_FOUND: {
    status: 404,
    message: "Sorry! Form not found",
  },

  NOT_FOUND: {
    status: 404,
    message: "Sorry! Page not found",
  },

  //5XX status

  ERROR_UNKNOWN: {
    status: 500,
    message: "Something went wrong!",
  },
};
