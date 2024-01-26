/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../../User/layouts/Header";
import LoadingIcon from "../../UI/Icons/LoadingIcon";
import { getFormState, getResponses } from "../../store/slices/submissionSlice";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../UI/Components/BackButton";
import { ErrorHandler } from "../../Utils/ErrorHandler";

const ResponseList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState([]);

  const dispatch = useDispatch();
  const { error } = useSelector(getFormState);

  const { formId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await dispatch(getResponses(formId));
      setResponses(response.payload);
      ErrorHandler(error);
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch, formId]);

  return (
    <>
      <Header />
      {isLoading || !responses ? (
        <div className="text-center">
          <LoadingIcon />
        </div>
      ) : responses.length === 0 ? (
        <div className="text-center p-20">
          <p className="m-8"> No Responses Yet...</p>
          <BackButton />
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-7 mx-8">
          <BackButton />
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Submitted At
                </th>
                <th scope="col" className="px-6 py-3">
                  Responses
                </th>
              </tr>
            </thead>
            <tbody>
              {responses.map((response, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {response.formData[0].answer}
                    </th>
                    <td className="px-6 py-4">
                      {response.submittedAt.split("T")[0]}&nbsp;&nbsp;&nbsp;
                      {response.submittedAt.split("T")[1].split(".")[0]}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        className="hover:underline hover:text-blue-600"
                        to={"/forms/response"}
                        state={response.formData}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ResponseList;
