import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formTitle: "",
  formDescription: "",
  formFields: [],
};

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
  },
});

export const {
  setFormTitle,
  setFormDescription,
  addFormField,
  updateFormField,
  removeFormField,
} = formSlice.actions;

export const getFormFieldsState = (state) => state.form;

export const formReducer = formSlice.reducer;
