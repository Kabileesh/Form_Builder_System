import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import copy from "clipboard-copy";
import axios from "../../axios/axiosConfig";
import { FETCH_SUCCESS, toastConfig } from "../../Utils/constants";
import Header from "../../User/layouts/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
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
                      <Link to={"/view-responses"}>View Responses</Link>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => HandleCopyClick(form._id)}>
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2M5 5h8m-8 5h8m-8 4h8"
                          />
                        </svg>
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
