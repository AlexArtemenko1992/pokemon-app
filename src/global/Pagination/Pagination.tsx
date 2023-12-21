import style from "./Pagination.module.scss";
import Button from "../../global/Button/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PaginationPropsInterface } from "./PaginationPropsInterface";

const Pagination = ({ prevStep, nextStep }: PaginationPropsInterface) => {
  return (
    <div className={style["pagination-buttons"]}>
      <Button className="pagination-btn" onClick={prevStep}>
        <ArrowBackIcon />
      </Button>
      <Button className="pagination-btn" onClick={nextStep}>
        <ArrowForwardIcon />
      </Button>
    </div>
  );
};

export default Pagination;
