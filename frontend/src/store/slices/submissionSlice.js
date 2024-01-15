import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/axiosConfig";
import { FETCH_SUCCESS, RESPONSE_SUBMIT_SUCCESS } from "../../Utils/constants";

const initialState = {
  _id: null,
  title: null,
  description: null,
  formFields: [],
  fieldValues: [],
};

export const getForm = createAsyncThunk(
  "submission/getForm",
  async (formId) => {
    try {
      const response = await axios.get("/get-form", { params: { formId } });
      if (
        response?.status === FETCH_SUCCESS.status &&
        response.data?.message === FETCH_SUCCESS.message
      ) {
        return response;
      }
      return response;
    } catch (err) {
      const error = err;
      error.message = err.response.data?.message;
      throw error;
    }
  }
);

export const submitResponse = createAsyncThunk(
  "submission/submitResponse",
  async (submissionDetails) => {
    try {
      const response = await axios.post("/submit-response", {
        formId: submissionDetails.formId,
        formData: submissionDetails.fieldValues,
      });
      if (
        response?.status === RESPONSE_SUBMIT_SUCCESS.status &&
        response.data?.message === RESPONSE_SUBMIT_SUCCESS.message
      ) {
        return response.data;
      }
    } catch (err) {
      const error = err;
      error.message = err.response.data?.message;
      throw error;
    }
  }
);

const submissionSlice = createSlice({
  name: "submission",
  initialState: initialState,
  reducers: {
    setFormDetails(state, action) {
      state._id = action.payload._id;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.formFields = action.payload.fields;
    },
    setFieldValues(state, action) {
      state.fieldValues = action.payload;
    },
  },
});

export const { setFormDetails, setFieldValues } = submissionSlice.actions;

export const getFormState = (state) => state.submission;

export const submissionReducer = submissionSlice.reducer;
