import * as Yup from "yup";

const LoginValidationSchema = () =>
  Yup.object().shape({
    email: Yup.string().email().required("Please enter a valid email."),
    password: Yup.string().required("Password is required"),
  });
export default LoginValidationSchema;
