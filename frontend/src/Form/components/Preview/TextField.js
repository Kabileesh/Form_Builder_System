const TextField = () => {
  return (
    <div>
      <div className="mt-2 mx-7">
        <input
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent focus:outline-none border-0 border-b-2 border-gray-300 appearance-none peer"
          name="text"
          type="text"
          autoComplete="text"
        />
      </div>
    </div>
  );
};

export default TextField;
