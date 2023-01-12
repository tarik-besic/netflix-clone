import { ErrorMessage, Field, Form, Formik } from "formik";
import InputField from "./Input";
const LoginForm = () => {
  return (
    <div className="bg-black bg-opacity-70 h-fit">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          console.log(values);
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required!";
          }
          if (!values.password) {
            errors.email = "Password is required!";
          }
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col p-14">
              <h1 className="text-3xl text-white mb-6">Sign in</h1>
              <div className="flex flex-col">
                <InputField
                  name="email"
                  label="Email or phone number"
                  className="mb-2"
                />
                <InputField name="password" type="password" label="Password" />
                {/* <Field type="password" name="password" placeholder="Password" /> */}
                <button className="text-cyan-100" type="submit">
                  Sign in
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
