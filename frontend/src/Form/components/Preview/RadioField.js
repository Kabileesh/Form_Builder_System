const RadioField = (props) => {
  return (
    <div className="space-y-3">
      {props.field.options.map((option, index) => (
        <div key={index}>
          <input
            id={index}
            type="radio"
            value={option}
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={index}
            className="ml-2 text-sm font-medium text-black-900"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioField;
