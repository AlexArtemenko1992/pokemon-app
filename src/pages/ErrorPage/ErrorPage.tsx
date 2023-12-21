import style from "./ErrorPage.module.scss";
import { Container } from "@mui/material";
import { ButtonBackBage } from "../../global";

const ErrorPage = () => {
  return (
    <>
      <Container>
        <div className={style["oopss"]}>
          <div className={style["error-text"]}>
            <ButtonBackBage />
            <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
            <span>Error 404</span>
            <p className={style["p-a"]}>
              Page not found! Looks like the URL went on a vacation without leaving a forwarding
              address. Let's hope it's enjoying some sunny beaches and will be back soon!
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
export default ErrorPage;
