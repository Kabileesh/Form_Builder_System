import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FETCH_SUCCESS, FORM_CREATE_SUCCESS } from "../../Utils/constants";
import axios from "../../axios/axiosConfig";

const initialState = {
  formTitle: "",
  formDescription: "",
  formFields: [],
};

export const viewForms = createAsyncThunk("form/viewForms", async () => {
  try {
    const response = await axios.get("/view-forms", { params: {} });
    if (response.status === FETCH_SUCCESS.status) {
      return response.data;
    }
  } catch (err) {
    const error = err;
    error.message = err.response.data?.message;
    throw error;
  }
});

export const createForm = createAsyncThunk(
  "form/createForm",
  async (formDetails) => {
    try {
      const response = await axios.post("/create-form", formDetails);
      if (
        response?.status === FORM_CREATE_SUCCESS.status &&
        response?.data.message === FORM_CREATE_SUCCESS.message
      ) {
        return response?.data;
      }
    } catch (err) {
      const error = err;
      error.message = err.response.data?.message;
      throw error;
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    setFormTitle(state, action) {
      state.formTitle = action.payload;
    },
    setFormDescription(state, action) {
      state.formDescription = action.payload;
    },
    addFormField(state, action) {
      state.formFields.push(action.payload);
    },
    updateFormField(state, action) {
      state.formFields = action.payload;
    },
    removeFormField(state, action) {
      state.formFields = action.payload;
    },
    removeFormInfo(state) {
      state.formTitle = "";
      state.formDescription = "";
      state.formFields = [];
    },
  },
});

export const {
  setFormTitle,
  setFormDescription,
  addFormField,
  updateFormField,
  removeFormField,
  removeFormInfo,
} = formSlice.actions;

export const getFormFieldsState = (state) => state.form;

export const formReducer = formSlice.reducer;
