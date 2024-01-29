import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axiosConfig";
import {
  FAILED,
  IDLE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  SUCCEEDED,
  SUCCEESS,
} from "../../Utils/constants";

const initialState = {
  username: "",
  name: "",
  id: "",
  status: IDLE,
  error: "",
};

export const userLogin = createAsyncThunk("user/userLogin", async (user) => {
  try {
    const response = await axios.post("/login", user);
    if (
      response?.status === LOGIN_SUCCESS.status &&
      response?.data.message === LOGIN_SUCCESS.message
    ) {
      sessionStorage.setItem("accessToken", response?.data.accessToken);
      return response.data.user;
    }
  } catch (err) {
    const error = err;
    error.message = err.response.data?.message;
    throw error;
  }
});

export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (user) => {
    try {
      const response = await axios.post("/register", user);
      if (
        response?.status === REGISTER_SUCCESS.status &&
        response?.data.message === REGISTER_SUCCESS.message
      ) {
        sessionStorage.setItem("accessToken", response?.data.accessToken);
        return response?.data.user;
      }
    } catch (err) {
      const error = err;
      error.message = err.response.data?.message;
      throw error;
    }
  }
);

export const verifyToken = createAsyncThunk(
  "user/verifyToken",
  async (accessToken) => {
    try {
      const response = await axios.post("/verify-token", {
        token: accessToken,
      });
      if (response?.status === SUCCEESS.status) {
        return response;
      }
    } catch (err) {
      const error = err;
      error.message = err.response.data?.message;
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addInfo(state, action) {
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.id = action.payload._id;
      state.status = SUCCEEDED;
      state.error = null;
    },
    removeInfo(state) {
      state.username = null;
      state.name = null;
      state.id = null;
      state.status = IDLE;
      state.error = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.name = action.payload.name;
        state.id = action.payload._id;
        state.status = SUCCEEDED;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.error = action.error.message;
        state.name = null;
        state.id = null;
        state.username = null;
        state.status = FAILED;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.name = action.payload.name;
        state.id = action.payload._id;
        state.status = SUCCEEDED;
        state.error = null;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.error = action.error.message;
        state.name = null;
        state.id = null;
        state.username = null;
        state.status = FAILED;
      });
  },
});

export const { addInfo, removeInfo, clearError } = userSlice.actions;

export const getUserState = (state) => state.user;

export const userReducer = userSlice.reducer;
