import { useLocation } from "react-router-dom";
import Header from "../../User/layouts/Header";

const Response = (props) => {
  const { state } = useLocation();

  return (
    <>
      <Header />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-7 mx-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Question
              </th>
              <th scope="col" className="px-6 py-3">
                Answer
              </th>
            </tr>
          </thead>
          <tbody>
            {state.map((response, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {response.question}
                  </th>
                  <td className="px-6 py-4">
                    {Array.isArray(response.answer)
                      ? response.answer.map((option, index) => {
                          return option + ", ";
                        })
                      : response.answer}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Response;
