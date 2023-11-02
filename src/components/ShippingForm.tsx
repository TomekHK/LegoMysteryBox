import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import postData from "../helpers/postData";
import { useNavigate } from "react-router-dom";
import formValidationSchema from "../helpers/formValidationSchema";

interface FormData {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const initialValues: FormData = {
  name: "",
  surname: "",
  phoneNumber: "",
  email: "",
  dateOfBirth: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

function ShippingForm() {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const result = await postData(postData);

      if (result.success) {
        navigate("/success");
      } else {
        navigate("/error");
      }
    } catch (error) {
      console.error("An error occurred: " + error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <Typography variant="h3" align="center" color="#555555" gutterBottom>
            Shipping details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                variant="filled"
              />
              <ErrorMessage name="name">
                {(errorMsg) => (
                  <Typography variant="caption" color={"error"}>
                    {errorMsg}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                name="surname"
                label="Surname"
                fullWidth
                variant="filled"
              />
              <ErrorMessage name="surname">
                {(errorMsg) => (
                  <Typography variant="caption" color={"error"}>
                    {errorMsg}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                variant="filled"
              />
              <ErrorMessage name="email">
                {(errorMsg) => (
                  <Typography variant="caption" color={"error"}>
                    {errorMsg}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
              <Field
                as={TextField}
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                variant="filled"
              />
              <ErrorMessage name="phoneNumber">
                {(errorMsg) => (
                  <Typography variant="caption" color={"error"}>
                    {errorMsg}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Grid item xs={6}>
              <Field
                as={TextField}
                name="dateOfBirth"
                label="Date of Birth"
                type="date"
                fullWidth
                variant="filled"
                InputLabelProps={{ shrink: true }}
              />
              <ErrorMessage name="dateOfBirth">
                {(errorMsg) => (
                  <Typography variant="caption" color={"error"}>
                    {errorMsg}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
              <Field
                as={TextField}
                name="address"
                label="Address"
                fullWidth
                variant="filled"
              />
              <ErrorMessage name="address">
                {(errorMsg) => (
                  <Typography variant="caption" color={"error"}>
                    {errorMsg}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
              <Field
                as={TextField}
                name="city"
                label="City"
                fullWidth
                variant="filled"
              />
              <ErrorMessage name="city">
                {(errorMsg) => (
                  <Typography variant="caption" color={"error"}>
                    {errorMsg}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
              <Field
                as={TextField}
                name="state"
                label="State"
                fullWidth
                variant="filled"
              />
              <ErrorMessage name="state">
                {(errorMsg) => (
                  <Typography variant="caption" color={"error"}>
                    {errorMsg}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
              <Field
                as={TextField}
                name="zipCode"
                label="Zip Code"
                fullWidth
                variant="filled"
              />
              <ErrorMessage name="zipCode">
                {(errorMsg) => (
                  <Typography variant="caption" color={"error"}>
                    {errorMsg}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>
          </Grid>
          <Box mt={2} display="flex" justifyContent="center">
            <Button
              size="large"
              variant="contained"
              color="primary"
              type="submit"
              disabled={!dirty || !isValid || isSubmitting}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default ShippingForm;
