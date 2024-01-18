import { Link } from "react-router-dom";

const SubmittedPage = () => {
  return (
    <div className="h-screen flex flex-col gap-8 items-center shadow-sm bg-green-100">
      <div className="box-border h-auto w-auto p-20 pb-8 bg-stone-50 rounded-3xl my-24 space-y-4">
        <h3 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Submitted
          </span>
        </h3>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Your response has been submitted successfully.
        </p>
        <div className="mt-24">
          <Link
            to={"/new-form"}
            className="font-medium text-blue-600 underline"
          >
            Create your own form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubmittedPage;
