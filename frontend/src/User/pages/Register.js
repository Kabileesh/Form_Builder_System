import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  clearError,
  getUserState,
  userRegister,
} from "../../store/slices/userSlice";
import {
  CONFIRM_PASSWORD,
  PASSWORD_MESSAGE,
  PASSWORD_REGEX,
  SUCCEEDED,
} from "../../Utils/constants";
import { CheckAuth } from "../../Utils/commonFunctions";
import LoadingIcon from "../../UI/Icons/LoadingIcon";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const { id, error: errMsg, status } = useSelector(getUserState);

  const nameRef = useRef();
  const usernameRef = useRef();
  const passRef = useRef();
  const confirmPass = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value.trim();
    const username = usernameRef.current.value.trim();
    const password = passRef.current.value.trim();
    const confirm_pass = confirmPass.current.value.trim();
    if (name === "") return;
    if (username === "") return;

    let regex = PASSWORD_REGEX;

    if (!regex.test(password)) {
      setError(PASSWORD_MESSAGE);
      return;
    }

    if (confirm_pass !== password) {
      setError(CONFIRM_PASSWORD);
      return;
    }

    setError("");

    const user = {
      name: name,
      username: username,
      password: password,
    };

    setLoading(true);

    await dispatch(userRegister(user));

    setLoading(false);

    if (status === SUCCEEDED && id) {
      navigate("/forms");
    }
  };

  CheckAuth();

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="images/myForms.png"
            alt=""
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  ref={usernameRef}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="text"
                  required
                  ref={nameRef}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={passRef}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="cnfrm_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="cnfrm_password"
                  name="cnfrm_password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={confirmPass}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <center>
              <p className="text-red-500 text-sm">{error ? error : errMsg}</p>
            </center>
            <div>
              <button
                type="submit"
                className={`${
                  isLoading ? "" : "hover:bg-indigo-500"
                } flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                onClick={submitHandler}
                disabled={isLoading}
                style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
              >
                {isLoading ? <LoadingIcon /> : "Sign up"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
