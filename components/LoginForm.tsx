import { ErrorMessage, Form, Formik } from "formik";
import Link from "next/link";
import InputField from "./Input";
import LoginValidationSchema from "../utils/formValidations/loginValidationSchema";

const LoginForm = () => {
  const tarik = "tarik";
  console.log(tarik);

  return (
    <div className="bg-black bg-opacity-80 min-h-[650px] w-[450px]">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors }) => (
          <Form>
            <div className="flex flex-col p-16">
              <div className="h-[352px]">
                <h1 className="text-3xl text-white">Sign in</h1>
                <div className="flex flex-col">
                  <InputField
                    name="email"
                    type="email"
                    label="Email or phone number"
                    className={`${
                      errors.email ? "mb-2 border-b-2 border-b-orange" : "mb-4"
                    }`}
                  />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <div className="text-orange mb-4 text-sm">{msg}</div>
                    )}
                  </ErrorMessage>
                  <InputField
                    name="password"
                    type="password"
                    label="Password"
                    className={`${
                      errors.password
                        ? "mb-2 border-b-2 border-b-orange"
                        : "mb-4"
                    }`}
                  />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <div className="text-orange mb-4 text-sm">{msg}</div>
                    )}
                  </ErrorMessage>
                  <button
                    className="text-cyan-100 bg-red-700 py-3 rounded-sm mt-10"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <div className="flex items-center w-full justify-between mt-3">
                    <div className="flex items-center w-fit">
                      <input type="checkbox" id="remember-me-input" />
                      <label
                        htmlFor="remember-me-input"
                        className="text-gray-lighter text-sm ml-2"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="blank"
                      className="text-gray-lighter text-sm text-end w-fit hover:underline"
                    >
                      Need help?
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-gray-standard">
                <div>
                  New to Netflix?
                  <Link href="/signup" className="text-white">
                    Sign up now.
                  </Link>
                </div>
                <p className="text-sm mt-4">
                  This page is protected by Google reCAPTCHA to ensure
                  you&apos;re not a bot.
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
