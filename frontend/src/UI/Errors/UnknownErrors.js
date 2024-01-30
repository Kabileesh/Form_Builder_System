import { Link } from "react-router-dom";

const UnknownErrors = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="flex flex-col items-center">
            <img
              className="h-1/2 w-1/2"
              src="/images/UnknownError_4xx.jpg"
              alt=""
            />
          </div>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, An unexpected error has been occurred. Kindly retry !
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/forms"}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default UnknownErrors;
