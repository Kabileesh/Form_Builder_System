import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  },
});

export default store;
