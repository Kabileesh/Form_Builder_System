import { useDispatch, useSelector } from "react-redux";
import {
  addFormField,
  createForm,
  getFormFieldsState,
} from "../../../store/slices/formSlice";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddRadioFieldIcon from "../../../UI/Icons/AddRadioFieldIcon";
import AddCheckBoxIcon from "../../../UI/Icons/AddCheckBoxIcon";
import AddTextFieldIcon from "../../../UI/Icons/AddTextFieldIcon";
import LoadingIcon from "../../../UI/Icons/LoadingIcon";

const FormBuilder = () => {
  const idRef = useRef(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getFormDetails = useSelector(getFormFieldsState);

  const [isLoading, setLoading] = useState(false);

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

    setLoading(true);
    const response = await dispatch(createForm(formDetails));
    setLoading(false);
    if (response.payload) {
      navigate("/forms/view-forms");
    }
  };

  return (
    <div className="flex flex-row justify-center items-center w-full rounded-lg bg-white p-6 text-neutral-700 shadow-lg">
      <button
        data-tooltip-target="tooltip-default"
        className="hover:bg-white mr-10"
        onClick={() => handleAddField("text")}
      >
        <AddTextFieldIcon />
      </button>
      <button className=" mr-10" onClick={() => handleAddField("radio")}>
        <AddRadioFieldIcon />
      </button>
      <button className=" mr-10" onClick={() => handleAddField("checkbox")}>
        <AddCheckBoxIcon />
      </button>
      <button
        type="button"
        onClick={SubmitHandler}
        className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
      >
        {isLoading ? <LoadingIcon /> : "Create Form"}
      </button>
    </div>
  );
};

export default FormBuilder;
