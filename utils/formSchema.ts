import * as yup from "yup";

const formSchema = yup.object().shape({
  full_name: yup.string().required("Please enter your full name"),
  email_address: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email address"),
  subject: yup.string().max(45).required("Please enter a subject"),
  message: yup.string().max(200).required("Enter your message"),
});

export default formSchema;
