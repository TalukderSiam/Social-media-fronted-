import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerUserAction } from "../../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lirstName: "",
  email: "",
  password: "",
  gender: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lirstName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  gender: Yup.string().required("Gender is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (values, { resetForm }) => {
    console.log("Handle submit", values);
    dispatch(registerUserAction({ data: values })).then(() => {
      setSuccessMessage("Registration successful!");
      resetForm();
      setTimeout(() => {
        navigate("/login");
      }, 90000); // 2-second delay
    });
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-5 text-1px">
            <div>
              <Field
                as={TextField}
                name="firstName"
                placeholder="First Name"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 3 }, // Adjust the font size as needed
                }}
                InputProps={{
                  style: {
                    backgroundColor: "white", // Set the background color to white
                    border: "3px solid white", // Set the border color to white
                    borderRadius: "4px", // Optional: adjust border radius if needed
                  },
                }}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                style={{ color: "white" }}
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="lirstName"
                placeholder="Last Name"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 3 }, // Adjust the font size as needed
                }}
                InputProps={{
                  style: {
                    backgroundColor: "white", // Set the background color to white
                    border: "3px solid white", // Set the border color to white
                    borderRadius: "4px", // Optional: adjust border radius if needed
                  },
                }}
              />
              <ErrorMessage
                name="lirstName"
                component="div"
                style={{ color: "white" }}
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Enter your email"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 3 }, // Adjust the font size as needed
                }}
                InputProps={{
                  style: {
                    backgroundColor: "white", // Set the background color to white
                    border: "3px solid white", // Set the border color to white
                    borderRadius: "4px", // Optional: adjust border radius if needed
                  },
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "white" }}
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                type="password"
                placeholder="Enter your password"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 3 }, // Adjust the font size as needed
                }}
                InputProps={{
                  style: {
                    backgroundColor: "white", // Set the background color to white
                    border: "3px solid white", // Set the border color to white
                    borderRadius: "4px", // Optional: adjust border radius if needed
                  },
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "white" }}
              />
            </div>
            <div>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                onChange={(event) =>
                  setFieldValue("gender", event.target.value)
                }
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  label="Male"
                />
              </RadioGroup>
              <ErrorMessage
                name="gender"
                component="div"
                style={{ color: "white" }}
              />
            </div>
            <Button
              sx={{ padding: ".8rem 0rem" }}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>

      {successMessage && (
        <div className="text-center mt-4" style={{ color: "white" }}>
          {successMessage}
        </div>
      )}


      <div className="flex gap-2 items-center justify-center pt-5">
        <p>Already have an account?</p>
        <Button
          style={{ color: "white" }}
          className="bg-primary"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Register;
