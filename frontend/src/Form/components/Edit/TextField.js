const TextField = (props) => {
  return (
    <>
      <div>
        <div className="mt-2 mx-7">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent focus:outline-none border-0 border-b-2 border-gray-300 appearance-none peer"
            id={props.id}
            name="text"
            type="text"
            autoComplete="text"
            required={props.required ? true : false}
          />
        </div>
      </div>
    </>
  );
};

export default TextField;
