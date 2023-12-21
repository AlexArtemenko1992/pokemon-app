import { useNavigate } from "react-router-dom";
import style from "./ButtonBackPage.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ButtonBackBage = () => {
  const navigate = useNavigate();
  return (
    <button
      className={style["back-page-btn"]}
      onClick={(e) => {
        e.preventDefault();
        navigate("..");
      }}
    >
      <KeyboardBackspaceIcon />
      Back
    </button>
  );
};

export default ButtonBackBage;
