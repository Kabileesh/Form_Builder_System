/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../components/TextInput";
import RadioInput from "../components/RadioInput";
import { useDispatch, useSelector } from "react-redux";
import {
  getForm,
  getFormState,
  setFormDetails,
} from "../../store/slices/submissionSlice";

const EntryForm = () => {
  const formDetails = useSelector(getFormState);

  const title = formDetails.title;
  const description = formDetails.description;
  const formFields = formDetails.formFields;

  const dispatch = useDispatch();

  const { formId } = useParams();

  useEffect(() => {
    const getFormDetails = async () => {
      const response = await dispatch(getForm(formId));
      await dispatch(setFormDetails(response?.payload.data.form));
    };
    getFormDetails();
  }, []);
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center shadow-sm bg-green-100">
        <div className="mt-10 sm:mx-auto sm:w-3/4 lg:w-3/4">
          <div className="space-y-6 mx-auto w-90">
            <div className="relative z-0 ml-auto">
              <div className="relative z-0 ml-auto">
                <h2 className="text-xl text-gray-700 font-bold">{title}</h2>
              </div>
            </div>
            <p className="text-base font-normal text-gray-700 lg:text-sm">
              {description}
            </p>
            <hr className="h-0.5 my-8 bg-gray-400"></hr>
            <div className="space-y-5">
              {formFields.map((field, index) => {
                return (
                  <div
                    key={index}
                    className="box-border h-auto w-auto p-6 bg-stone-50 rounded-3xl my-7 space-y-4"
                  >
                    <p>
                      {field.question}
                      {field.required ? (
                        <span className="text-red-500">*</span>
                      ) : null}
                    </p>
                    {(field.type === "text" || field.type === "email") && (
                      <TextInput field={field} />
                    )}
                    {field.type === "radio" && <RadioInput field={field} />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntryForm;
