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
              <label
                for="small-input"
                class="block mb-2 peer-focus:text-primary text-gray-900"
              >
                Form Title<span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
                value={formTitle}
              />
            </div>
            </div>
            <label
              for="message"
              class="block mb-2 peer-focus:text-primary text-gray-900"
            >
              Form Description <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the form description "
              value={formDescription}
            ></textarea>
            <div>
              <p>
                Enter your email address <span class="text-red-500">*</span>
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
