import { useState } from "react";

const CheckBoxInput = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const CheckBoxInputHandler = (event) => {
    const optionValue = event.target.value;
    const isChecked = event.target.checked;

    setSelectedOptions((prevOptions) => {
      if (isChecked) {
        return [...prevOptions, optionValue];
      } else {
        return prevOptions.filter((option) => option !== optionValue);
      }
    });

    const fieldDetails = {
      id: props.id,
      question: props.field.question,
      answer: isChecked
        ? [...selectedOptions, optionValue]
        : selectedOptions.filter((option) => option !== optionValue),
    };

    props.onInputChange(fieldDetails);
  };

  return (
    <>
      {props.field &&
        props.field.options.map((option, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                value={option}
                className="w-4 h-4 m-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={CheckBoxInputHandler}
                checked={selectedOptions.includes(option)}
              />
              <label className="ml-2 text-sm font-medium text-gray-900">
                {option}
              </label>
            </div>
          );
        })}
    </>
  );
};

export default CheckBoxInput;
