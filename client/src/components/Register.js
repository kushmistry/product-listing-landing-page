import { Dialog } from "@mui/material";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "./registerUserContext";

const Register = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const { setAccess } = useRegisterUser();

  const dialogBoxHandler = () => {
    setOpen(false);
  };

  const handleGuest = () => {
    navigate("/order");
  };

  const handleRegister = () => {
    setAccess(true)
    navigate("/register");
  };

  return (
    <div className="containet">
      <Dialog
        className="register-dialog"
        open={open}
        onClose={dialogBoxHandler}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <div className="main-section">
          <p className="text" onClick={handleGuest}>
            Checkout as a Guest
          </p>
          <p>OR</p>
          <p className="text" onClick={handleRegister}>
            Registration
          </p>
        </div>
      </Dialog>
    </div>
  );
};
export default Register;
