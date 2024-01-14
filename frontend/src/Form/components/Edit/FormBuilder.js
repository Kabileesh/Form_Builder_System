import { useDispatch, useSelector } from "react-redux";
import {
  addFormField,
  getFormFieldsState,
} from "../../../store/slices/formSlice";
import { useRef } from "react";
import axios from "../../../axios/axiosConfig";
import { FORM_CREATE_SUCCESS } from "../../../Utils/constants";
import { useNavigate } from "react-router-dom";

const FormBuilder = () => {
  const idRef = useRef(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getFormDetails = useSelector(getFormFieldsState);

  const handleAddField = async (fieldType) => {
    let newField;
    switch (fieldType) {
      case "text":
        newField = {
          id: `${idRef.current}`,
          type: "text",
          question: "",
          required: false,
        };
        break;
      case "radio":
        newField = {
          id: `${idRef.current}`,
          type: "radio",
          question: "",
          options: [],
          required: false,
        };
        break;
      case "checkbox":
        newField = {
          id: `${idRef.current}`,
          type: "checkbox",
          question: "",
          options: [],
          required: false,
        };
        break;
      default:
        return;
    }
    idRef.current++;
    dispatch(addFormField(newField));
  };

  const SubmitHandler = async () => {
    const emailField = {
      id: "email",
      type: "email",
      question: "Enter your email address ",
      required: true,
    };
    const formFields = [emailField].concat(getFormDetails.formFields);
    const updatedFormFields = formFields.map(({ id, ...rest }) => rest);
    const formDetails = {
      ...getFormDetails,
      formFields: updatedFormFields,
    };
    try {
      const response = await axios.post("/create-form", formDetails);
      if (
        response?.status === FORM_CREATE_SUCCESS.status &&
        response?.data.message === FORM_CREATE_SUCCESS.message
      ) {
        navigate("/view-forms");
      }
    } catch (err) {
      const error = err;
      error.message = err.response.data?.message;
      throw error;
    }
  };

  return (
    <div className="flex flex-row justify-center items-center w-full rounded-lg bg-white p-6 text-neutral-700 shadow-lg">
      <button
        data-tooltip-target="tooltip-default"
        className="hover:bg-white mr-10"
        onClick={() => handleAddField("text")}
      >
        <svg
          className="w-[17px] h-[17px] text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M3 1h8M1 5h12M3 9h8M1 13h12"
          />
        </svg>
      </button>
      <button className=" mr-10" onClick={() => handleAddField("radio")}>
        <svg
          className="w-7 h-7 text-grey-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="text-grey-500"
            cx="12"
            cy="12"
            r="9"
            fill="currentColor"
          ></circle>
          <circle
            className="text-white"
            cx="12"
            cy="12"
            r="4"
            fill="currentColor"
          ></circle>
        </svg>
      </button>
      <button className=" mr-10" onClick={() => handleAddField("checkbox")}>
        <svg
          className="w-7 h-7 text-grey-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            className="text-grey-500"
            fill="currentColor"
          ></rect>
          <path d="M9 12l2 2 4-4" className="text-white"></path>
        </svg>
      </button>
      <button
        type="button"
        onClick={SubmitHandler}
        className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
      >
        Create Form
      </button>
    </div>
  );
};

export default FormBuilder;
