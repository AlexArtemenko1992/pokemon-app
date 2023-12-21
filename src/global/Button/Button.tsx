import style from "./Button.module.scss";
import { ButtonPropsInterface } from "./ButtonPropsInterface";

const Button = ({ children, onClick }: ButtonPropsInterface) => {
  return (
    <button onClick={onClick} className={style["pagination-btn"]}>
      {children}
    </button>
  );
};

export default Button;
