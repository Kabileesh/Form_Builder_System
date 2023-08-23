// 2XX status

module.export =  LOGIN_SUCCESS = {
  status: 200,
  message: "Logged in successfully",
};

module.export =  RESPONSE_EDIT_SUCCESS = {
  status: 200,
  message: "Response modified successfully",
};

module.export =  FORM_DELETE_SUCCESS = {
  status: 200,
  message: "Form deleted successfully",
};

module.export =  FETCH_SUCCESS = {
  status: 200,
};

module.export =  REGISTER_SUCCESS = {
  status: 201,
  message: "Registered successfully",
};

module.export =  FORM_CREATE_SUCCESS = {
  status: 201,
  message: "Form created successfully",
};

module.export =  RESPONSE_SUBMIT_SUCCESS = {
  status: 201,
  message: "Response Submitted successfully",
};

module.export =  NO_CONTENT = {
  status: 204,
  message: "No content available",
};

//4XX status

module.export =  EMAIL_ALREADY_EXIST = {
  status: 400,
  message: "Email is already taken",
};

module.export =  INVALID_FORM_ID = {
  status: 400,
  message: "Invalid Form Id",
};

module.export =  UNAUTHORIZED = {
  status: 401,
  message: "Invalid credentials",
};

module.export =  FORBIDDEN = {
  status: 403,
  message: "Unauthorized",
};

module.export =  FORM_NOT_FOUND = {
  status: 404,
  message: "Sorry! Form not found",
};

module.export =  NOT_FOUND = {
  status: 404,
  message: "Sorry! Page not found",
};

//5XX status

module.export =  ERROR_UNKNOWN = {
  status: 500,
  message: "Something went wrong!",
};
