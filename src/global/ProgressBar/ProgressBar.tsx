import { useState, useEffect } from "react";
import style from "./ProgressBar.module.scss";
import { ProgressBarPropsInterface } from "./ProgressBarTypes";

const ProgressBar = ({ progress }: ProgressBarPropsInterface) => {
  const [progresNumber, setProgressNumber] = useState(0);

  useEffect(() => {
    setProgressNumber(progress);
  }, []);

  return (
    <div className={style["progressbar"]}>
      <div className={style["progress"]} style={{ width: `${progresNumber}%` }} />
    </div>
  );
};

export default ProgressBar;
