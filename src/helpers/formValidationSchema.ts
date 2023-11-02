import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^\d{9}$/,
      "Invalid phone number. Enter 9 digits with no other characters"
    ),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string()
    .required("Zip code is required")
    .matches(
      /^\d{5}$/,
      "Invalid zip code. Enter 5 digits with no other characters"
    ),
});

export default formValidationSchema;
