/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../components/TextInput";
import RadioInput from "../components/RadioInput";
import { useDispatch, useSelector } from "react-redux";
import {
  getForm,
  getFormState,
  setFieldValues,
  setFormDetails,
  submitResponse,
} from "../../store/slices/submissionSlice";
import CheckBoxInput from "../components/CheckBoxInput";
import LoadingIcon from "../../UI/Icons/LoadingIcon";
import Description from "../../UI/Components/Description";

const EntryForm = () => {
  const formDetails = useSelector(getFormState);

  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const title = formDetails.title;
  const description = formDetails.description;
  const formFields = formDetails.formFields;
  const fieldValues = formDetails.fieldValues;
  const error = formDetails.error;

  const dispatch = useDispatch();

  const { formId } = useParams();

  useEffect(() => {
    const getFormDetails = async () => {
      setLoading(true);
      const response = await dispatch(getForm(formId));
      if (error || !response?.payload) return;
      await dispatch(setFormDetails(response?.payload.data.form));
      setLoading(false);
    };
    getFormDetails();
  }, []);

  const HandleInputChange = async (fieldDetails) => {
    const existingAnswer = fieldValues.findIndex(
      (field) => field.id === fieldDetails.id
    );

    if (existingAnswer !== -1) {
      if (fieldDetails.answer === "") {
        const updatedFieldValues = [...fieldValues];
        updatedFieldValues.splice(existingAnswer, 1);
        const sortedFieldValue = updatedFieldValues.sort((a, b) => a.id - b.id);
        await dispatch(setFieldValues(sortedFieldValue));
      } else {
        const updatedFieldValues = [...fieldValues];
        updatedFieldValues[existingAnswer] = {
          ...updatedFieldValues[existingAnswer],
          answer: fieldDetails.answer,
        };

        const sortedFieldValue = updatedFieldValues.sort((a, b) => a.id - b.id);
        await dispatch(setFieldValues(sortedFieldValue));
      }
    } else {
      const newFieldValue = {
        id: fieldDetails.id,
        question: fieldDetails.question,
        answer: fieldDetails.answer,
      };
      const updatedFieldValues = [...fieldValues, newFieldValue];

      const sortedFieldValue = updatedFieldValues.sort((a, b) => a.id - b.id);
      await dispatch(setFieldValues(sortedFieldValue));
    }
  };

  const SubmitHandler = async () => {
    const submissionDetails = {
      formId: formId,
      fieldValues: fieldValues,
    };
    await dispatch(submitResponse(submissionDetails));
    navigate("/forms/success");
  };

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <LoadingIcon />
        </div>
      ) : (
        <div className="h-full flex flex-col justify-top gap-8 items-center shadow-sm bg-green-100">
          <Description />
          <div className="mt-2 sm:mx-auto sm:w-3/4 lg:w-3/4">
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
                          <span className="text-red-500 ml-2">*</span>
                        ) : null}
                      </p>
                      {(field.type === "text" || field.type === "email") && (
                        <TextInput
                          id={index}
                          field={field}
                          onInputChange={HandleInputChange}
                        />
                      )}
                      {field.type === "radio" && (
                        <RadioInput
                          id={index}
                          field={field}
                          onInputChange={HandleInputChange}
                        />
                      )}
                      {field.type === "checkbox" && (
                        <CheckBoxInput
                          id={index}
                          field={field}
                          onInputChange={HandleInputChange}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-8 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={SubmitHandler}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default EntryForm;
