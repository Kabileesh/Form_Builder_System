const TextInput = (props) => {
  return (
    <>
      <div className="mt-2">
        <input
          type={props.field.type}
          autoComplete={props.field.type}
          className="block w-full rounded-md border-2 border-slate-300 px-2 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

export default TextInput;
