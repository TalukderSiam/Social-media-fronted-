import { Button, TextField } from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUserAction } from "../../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";
const iniatialValues = { email: "", password: "" };
const validationSchema = {
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be length at least 7 character ")
    .required("Password is required"),
};
const Loginn = () => {
  const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleSubmit = (values) => {
    console.log("hangle submit", values);
    dispatch(loginUserAction({ data: values }));
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        //validationSchema={validationSchema}
        initialValues={iniatialValues}
      >
        <Form className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="email"
              placeholder="Enter your email "
             
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
            <ErrorMessage name="email" component={"div"} className="text-red" />
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
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Form>
      </Formik>
      <div className="flex gap-2 items-center justify-center pt-5">
        <p>If you don't have an account?</p>
        <Button style={{ color: "white" }} className="bg-primary"
        onClick={()=>navigate("/register")}
        >
          Register
        </Button>
      </div>
    </>
  );
};

export default Loginn;
