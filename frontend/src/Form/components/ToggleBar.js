import { useState } from "react";
import NewForm from "../pages/NewForm";
import FormPreview from "../pages/FormPreview";
import Header from "../../User/layouts/Header";
import EditIcon from "../../UI/Icons/EditIcon";
import PreviewIcon from "../../UI/Icons/PreviewIcon";

const ToggleBar = () => {
  const [isEdit, setIsEdit] = useState(true);

  const EditHandler = () => {
    setIsEdit(true);
  };

  const PreviewHandler = () => {
    setIsEdit(false);
  };

  return (
    <div>
      <Header />
      <nav className="bg-gray-600 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            className="items-center justify-center w-full flex w-auto order-1"
            id="navbar-cta"
          >
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white ${
                  isEdit ? `bg-gray-800` : `bg-transparent`
                } border border-gray-200 rounded-s-lg hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white`}
                onClick={EditHandler}
              >
                <EditIcon />
                Edit
              </button>
              <button
                type="button"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white ${
                  !isEdit ? `bg-gray-800` : `bg-transparent`
                } border border-gray-200 rounded-e-lg hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white`}
                onClick={PreviewHandler}
              >
                <PreviewIcon />
                Preview
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isEdit ? <NewForm /> : <FormPreview />}
    </div>
  );
};

export default ToggleBar;
