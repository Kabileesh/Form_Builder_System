import { useSelector } from "react-redux";
import { getFormFieldsState } from "../../../store/slices/formSlice";
import TextField from "./TextField";
import CheckBox from "./CheckBox";
import RadioField from "./RadioField";

const FormField = () => {
  const formFields = useSelector(getFormFieldsState).formFields;

  return (
    <>
      {formFields.length !== 0
        ? formFields.map((field, index) => (
            <div
              className="box-border h-auto w-auto p-6 bg-stone-50 rounded-3xl my-7"
              key={index}
            >
              <p className="mb-3">
                {field.question}
                {field.required ? (
                  <span className="text-red-500 m-2">*</span>
                ) : (
                  <span className="text-white">*</span>
                )}
              </p>
              <div className="container mx-auto px-4">
                {field.type === "text" ? (
                  <TextField field={field} />
                ) : field.type === "checkbox" ? (
                  <CheckBox field={field} />
                ) : field.type === "radio" ? (
                  <RadioField field={field} />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))
        : ""}
    </>
  );
};

export default FormField;
