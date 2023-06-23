import { TextField, Button } from "@mui/material";
import "../css/registeruser.css";
import { useRegisterUser } from "./registerUserContext";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterUser = () => {
  const { registerDetails, setRegisterDetails } = useRegisterUser();
  const navigate = useNavigate();

  const registerDetailsHandler = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const registerHandler = () => {
    if (
      registerDetails.firstname === "" ||
      registerDetails.lastname === "" ||
      registerDetails.username === "" ||
      registerDetails.email === "" ||
      registerDetails.password === "" ||
      registerDetails.mobileNumber === ""
    ) {
      toast.error("Please Fillup all the Details.");
    } else {
      navigate("/order");
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <p style={{ fontSize: "24px", fontWeight: "600", textAlign: "center" }}>
          Registration Form
        </p>
        <TextField
          label="Enter Firstname"
          onChange={(e) => {
            registerDetailsHandler(e);
          }}
          name="firstname"
          variant="standard"
        />
        <TextField
          style={{ marginTop: "10px" }}
          onChange={(e) => {
            registerDetailsHandler(e);
          }}
          label="Enter lastname"
          name="lastname"
          variant="standard"
        />
        <TextField
          style={{ marginTop: "10px" }}
          onChange={(e) => {
            registerDetailsHandler(e);
          }}
          label="Enter Username"
          name="username"
          variant="standard"
        />
        <TextField
          style={{ marginTop: "10px" }}
          onChange={(e) => {
            registerDetailsHandler(e);
          }}
          label="Enter Email"
          type="email"
          name="email"
          variant="standard"
        />
        <TextField
          style={{ marginTop: "10px" }}
          onChange={(e) => {
            registerDetailsHandler(e);
          }}
          label="Enter Password"
          type="password"
          name="password"
          variant="standard"
        />
        <TextField
          style={{ marginTop: "10px" }}
          onChange={(e) => {
            registerDetailsHandler(e);
          }}
          label="Enter Mobile number"
          name="mobileNumber"
          variant="standard"
        />
        <Button
          style={{ marginTop: "2rem" }}
          variant="contained"
          onClick={registerHandler}
        >
          Continue
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterUser;
