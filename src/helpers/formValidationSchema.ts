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
      /^(\d{6}|\d{2}-\d{3})$/,
      "Invalid zip code. Enter 6 digits or 2 digits, hyphen, and 3 digits (e.g., 99-300)"
    ),
});

export default formValidationSchema;
