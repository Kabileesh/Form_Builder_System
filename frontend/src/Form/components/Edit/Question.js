/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import {
  getFormFieldsState,
  removeFormField,
  updateFormField,
} from "../../../store/slices/formSlice";
import TextField from "./TextField";
import RadioField from "./RadioField";
import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import TrashIcon from "../../../Icons/TrashIcon";

const Question = (props) => {
  const formFields = useSelector(getFormFieldsState).formFields;
  const [isRequired, setRequired] = useState(props.required);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    setRequired((prevIsRequired) => !prevIsRequired);
  };

  useEffect(() => {
    const updatedFormFields = formFields.map((field) =>
      field.id === props.id ? { ...field, required: isRequired } : field
    );
    dispatch(updateFormField(updatedFormFields));
  }, [isRequired]);

  const handleInputChange = async (event) => {
    const updatedFormFields = formFields.map((field) =>
      field.id === props.id ? { ...field, question: event.target.value } : field
    );
    await dispatch(updateFormField(updatedFormFields));
  };

  const handleRemoveClick = async () => {
    const filteredFormFields = formFields.filter(
      (field) => field.id !== props.id
    );
    await dispatch(removeFormField(filteredFormFields));
  };

  return (
    <>
      <div className="box-border h-auto w-auto p-6 bg-stone-50 rounded-3xl my-7">
        <div className="flex items-center space-x-4 mb-4">
          <button onClick={handleRemoveClick}>
            <TrashIcon />
          </button>
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent focus:outline-none border-0 border-b-2 border-gray-300 appearance-none peer"
            name="question"
            type="text"
            autoComplete="off"
            placeholder="Enter your question..."
            value={props.question}
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
              value={isRequired}
              checked={isRequired}
              onChange={toggleHandler}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-white peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-black">
              Required
            </span>
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
