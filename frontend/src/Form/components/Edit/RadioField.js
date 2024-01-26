/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import {
  getFormFieldsState,
  updateFormField,
} from "../../../store/slices/formSlice";
import { useEffect, useState } from "react";
import RemoveOptionIcon from "../../../UI/Icons/RemoveOptionIcon";
import AddOptionIcon from "../../../UI/Icons/AddOptionIcon";

const RadioField = (props) => {
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
      field.id === props.id && field.type === "radio"
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
      if (field.id === props.id && field.type === "radio") {
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
      if (field.id === props.id && field.type === "radio") {
        return { ...field, options: [...newOpt] };
      }
      return field;
    });
    dispatch(updateFormField(updatedFormFields));
    setOptions(newOpt);
  };

  return (
    <div>
      {options.map((option, index) => {
        return (
          <div className="flex items-center space-x-4 mb-4" key={index}>
            <button onClick={() => removeOptionHandler(index)}>
              <RemoveOptionIcon />
            </button>
            <input
              id={index}
              type="radio"
              value={option}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={index}
              className="ml-2 text-sm font-medium text-black-900"
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
        <AddOptionIcon />
      </button>
    </div>
  );
};

export default RadioField;
