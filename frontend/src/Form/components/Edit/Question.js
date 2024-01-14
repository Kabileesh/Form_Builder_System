import { useDispatch, useSelector } from "react-redux";
import {
  getFormFieldsState,
  removeFormField,
  updateFormField,
} from "../../../store/slices/formSlice";
import TextField from "./TextField";
import RadioField from "./RadioField";
import { useState } from "react";
import CheckBox from "./CheckBox";

const Question = (props) => {
  const formFields = useSelector(getFormFieldsState).formFields;
  const [ques, setQues] = useState("");
  const [isRequired, setRequired] = useState(false);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    setRequired((isRequired) => !isRequired);
    const updatedFormFields = formFields.map((field) =>
      field.id === props.id ? { ...field, required: isRequired } : field
    );
    dispatch(updateFormField(updatedFormFields));
  };

  const handleInputChange = (event) => {
    setQues(event.target.value);
    const updatedFormFields = formFields.map((field) =>
      field.id === props.id ? { ...field, question: event.target.value } : field
    );
    dispatch(updateFormField(updatedFormFields));
  };

  const handleRemoveClick = () => {
    const filteredFormFields = formFields.filter(
      (field) => field.id !== props.id
    );
    dispatch(removeFormField(filteredFormFields));
  };

  return (
    <>
      <div className="box-border h-auto w-auto p-6 bg-stone-50 rounded-3xl my-7">
        <div className="flex items-center space-x-4 mb-4">
          <button onClick={handleRemoveClick}>
            <svg
              className="w-4 h-4 text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
            </svg>
          </button>
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent focus:outline-none border-0 border-b-2 border-gray-300 appearance-none peer"
            name="question"
            type="text"
            autoComplete="off"
            placeholder="Enter your question..."
            value={ques}
            onChange={handleInputChange}
          />
          {isRequired ? (
            <span className="text-red-500">*</span>
          ) : (
            <span className="text-white">*</span>
          )}
          <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input
              type="checkbox"
              value=""
              onClick={toggleHandler}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-white peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-black">Required</span>
          </label>
        </div>
        <div className="container mx-auto px-4">
          {props.type === "text" ? (
            <TextField id={props.id} />
          ) : props.type === "radio" ? (
            <div>
              <RadioField id={props.id} />
            </div>
          ) : props.type === "checkbox" ? (
            <div>
              <CheckBox id={props.id} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Question;
