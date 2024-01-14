/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFormFieldsState,
  updateFormField,
} from "../../../store/slices/formSlice";

const CheckBox = (props) => {
  const dispatch = useDispatch();
  const formFields = useSelector(getFormFieldsState).formFields;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const QuesField = formFields.filter((field) => field.id === props.id);
    if (QuesField[0].type === "radio" || QuesField[0].type === "checkbox")
      setOptions(QuesField[0].options);
  }, []);

  const addOptionHandler = () => {
    const updatedFormFields = formFields.map((field) =>
      field.id === props.id && field.type === "checkbox"
        ? { ...field, options: [...field.options, ""] }
        : field
    );
    dispatch(updateFormField(updatedFormFields));
    const opt = updatedFormFields.filter((field) => {
      return field.id === props.id;
    });
    setOptions(opt[0].options);
  };

  const optionValueHandler = (event) => {
    const id = event.target.id;
    const newOpt = [...options];
    newOpt[id] = event.target.value;
    const updatedFormFields = formFields.map((field) => {
      if (field.id === props.id && field.type === "checkbox") {
        return { ...field, options: [...newOpt] };
      }
      return field;
    });
    dispatch(updateFormField(updatedFormFields));
    setOptions(newOpt);
  };

  const removeOptionHandler = (index) => {
    const newOpt = [...options];
    newOpt.splice(index, 1);
    const updatedFormFields = formFields.map((field) => {
      if (field.id === props.id && field.type === "checkbox") {
        return { ...field, options: [...newOpt] };
      }
      return field;
    });
    dispatch(updateFormField(updatedFormFields));
    setOptions(newOpt);
  };

  return (
    <>
      {options.map((option, index) => {
        return (
          <div className="flex items-center space-x-4 mb-4" key={index}>
            <button onClick={() => removeOptionHandler(index)}>
              <svg
                className="w-[17px] h-[17px] text-red-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <input
              id={index}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <input
                type="text"
                id={index}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent focus:outline-none border-0 border-b-2 border-gray-300 appearance-none peer"
                placeholder=""
                value={option}
                onChange={optionValueHandler}
              />
            </label>
          </div>
        );
      })}
      <button onClick={addOptionHandler}>
        <svg
          className="w-5 h-5 text-green-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </>
  );
};

export default CheckBox;
