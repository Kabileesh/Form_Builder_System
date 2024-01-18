import { useSelector } from "react-redux";
import FormField from "../components/Preview/FormField";
import { getFormFieldsState } from "../../store/slices/formSlice";

const FormPreview = () => {
  const formDetails = useSelector(getFormFieldsState);
  const formTitle = formDetails.formTitle;
  const formDescription = formDetails.formDescription;
  return (
    <>
      <div className="flex flex-col justify-center items-center shadow-sm bg-green-100">
        <div className="mt-10 sm:mx-auto sm:w-3/4 lg:w-3/4">
          <form
            className="space-y-6 mx-auto w-90"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="relative z-0 ml-auto">
              <div className="relative z-0 ml-auto">
                <h2 className="text-xl text-gray-700 font-bold">{formTitle}</h2>
              </div>
            </div>
            <p className="text-base font-normal text-gray-700 lg:text-sm">
              {formDescription}
            </p>
            <hr className="h-0.5 my-8 bg-gray-400"></hr>
            <div>
              <p>
                Enter your email address <span className="text-red-500">*</span>
              </p>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <FormField />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPreview;
