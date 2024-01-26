import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const HandleBackNavigation = () => {
    navigate(-1);
  };

  return (
    <button
      className="rounded-md bg-red-700 px-3.5 py-2 mb-7 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      onClick={HandleBackNavigation}
    >
      <span aria-hidden="true">&larr; &nbsp;</span>
      Back
    </button>
  );
};

export default BackButton;
