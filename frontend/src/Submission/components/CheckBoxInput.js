const CheckBoxInput = (props) => {
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
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {option}
              </label>
            </div>
          );
        })}
    </>
  );
};

export default CheckBoxInput;
