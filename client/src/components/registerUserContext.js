import { createContext, useContext, useState } from "react";

const registerUserContext = createContext();

const RegisterUserProvider = ({ children }) => {
  const [registerDetails, setRegisterDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    mobileNumber: "",
  });
  const [access, setAccess] = useState(false)

  return (
    <registerUserContext.Provider
      value={{ registerDetails, setRegisterDetails, access, setAccess }}
    >
      {children}
    </registerUserContext.Provider>
  );
};

const useRegisterUser = () => {
  return useContext(registerUserContext);
};

export { useRegisterUser, RegisterUserProvider };
