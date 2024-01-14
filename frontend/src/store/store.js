import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { formReducer } from "./slices/formSlice";
import { submissionReducer } from "./slices/submissionSlice";

const defaultMiddlewareConfig = {
  serializableCheck: false,
};

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
    submission: submissionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(defaultMiddlewareConfig),
});

export default store;
