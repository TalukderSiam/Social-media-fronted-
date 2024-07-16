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

const iniatialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
};
const validationSchema = {
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be length at least 7 character ")
    .required("Password is required"),
};
const Registerr = () => {
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    values.gender = gender;
    console.log("hangle submit", values);
    dispatch(registerUserAction({ data: values }));
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        //validationSchema={validationSchema}
        initialValues={iniatialValues}
      >
        <Form className="space-y-5 text-1px ">
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
                  //padding: '10px', // Optional: adjust padding if needed
                  borderRadius: "4px", // Optional: adjust border radius if needed
                },
              }}
            />
            <ErrorMessage
              name="firstname"
              component={"div"}
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="lastName"
              placeholder="Last Name "
              text-white
              fullWidth
              InputLabelProps={{
                shrink: true,
                style: { fontSize: 3 }, // Adjust the font size as needed
              }}
              InputProps={{
                style: {
                  backgroundColor: "white", // Set the background color to white
                  border: "3px solid white", // Set the border color to white
                  //padding: '10px', // Optional: adjust padding if needed
                  borderRadius: "4px", // Optional: adjust border radius if needed
                },
              }}
            />
            <ErrorMessage
              name="lastname"
              component={"div"}
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="email"
              placeholder="Enter your email "
              text-white
              fullWidth
              InputLabelProps={{
                shrink: true,
                style: { fontSize: 3 }, // Adjust the font size as needed
              }}
              InputProps={{
                style: {
                  backgroundColor: "white", // Set the background color to white
                  border: "3px solid white", // Set the border color to white
                  //padding: '10px', // Optional: adjust padding if needed
                  borderRadius: "4px", // Optional: adjust border radius if needed
                },
              }}
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="password"
              placeholder="Enter your password "
              text-white
              fullWidth
              InputLabelProps={{
                shrink: true,
                style: { fontSize: 3 }, // Adjust the font size as needed
              }}
              InputProps={{
                style: {
                  backgroundColor: "white", // Set the background color to white
                  border: "3px solid white", // Set the border color to white
                  //padding: '10px', // Optional: adjust padding if needed
                  borderRadius: "4px", // Optional: adjust border radius if needed
                },
              }}
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-red-500"
            />
          </div>
          <div>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              onChange={handleChange}
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
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-red-500"
              />
            </RadioGroup>
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
      </Formik>

      <div className="flex gap-2 items-center justify-center pt-5">
        <p>Already has an account?</p>
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

export default Registerr;
