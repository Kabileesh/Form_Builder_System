import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import copy from "clipboard-copy";
import axios from "../../axios/axiosConfig";
import { FETCH_SUCCESS, toastConfig } from "../../Utils/constants";
import Header from "../../User/layouts/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingIcon from "../../Icons/LoadingIcon";
import ClipBoardIcon from "../../Icons/ClipBoardIcon";

const Forms = () => {
  const [isLoading, setLoading] = useState(false);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const getAllForms = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/view-forms", { params: {} });
        if (response.status === FETCH_SUCCESS.status) {
          setForms(response?.data);
          setLoading(false);
        }
      } catch (err) {
        const error = err;
        error.message = err.response.data?.message;
        throw error;
      }
    };
    getAllForms();
  }, []);

  const HandleCopyClick = (_id) => {
    copy(`http://localhost:3000/form/${_id}`);
    toast.success("Link Copied", toastConfig);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="text-center">
          <LoadingIcon />
        </div>
      ) : forms.length === 0 ? (
        <div>
          <p> No forms Yet...</p>
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-7 mx-8">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Form Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3">
                  Responses
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {form.title}
                    </th>
                    <td className="px-6 py-4">
                      {form.createdAt.split("T")[0]}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        className="hover:underline hover:text-blue-600"
                        to={`/forms/view-responses/${form._id}`}
                      >
                        View Responses
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => HandleCopyClick(form._id)}>
                        <ClipBoardIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Forms;
