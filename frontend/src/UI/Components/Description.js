import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="box-border h-auto w-auto p-8 md:px-12 md:pt-12 md:pb-6 bg-sky-50 shadow-xl">
      <p className="font-semibold mb-2 flex gap-4">
        <img
          className="w-6 h-6 rounded-2xl self-center"
          src="/images/formLabLogo.png"
          alt=""
        />
        Welcome to FormLab - Create custom forms effortlessly
      </p>
      <Link
        className="text-blue-600 text-xs underline"
        to={"/forms"}
        target="_blank"
      >
        Create your forms
      </Link>
      <p className="text-sm mt-4">
        FormLab retains the right to moderate and remove forms that violate our
        terms of service or are deemed inappropriate. For more information,
        refer to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default Description;
