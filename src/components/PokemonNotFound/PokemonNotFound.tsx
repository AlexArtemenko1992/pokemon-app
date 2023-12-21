import style from "./PokemonNotFound.module.scss";
import { Container } from "@mui/material";
import { ButtonBackBage } from "../../global";
import Image from "../../assets/images/pikachu-crying-pokemon-pikachu.png";
import { useParams } from "react-router-dom";

const PokemonNotFound = () => {
  const { name } = useParams();
  return (
    <>
      <Container>
        <div className={style["oopss"]}>
          <div className={style["error-text"]}>
            <ButtonBackBage />
            <img src={Image} alt="404" />
            <span>
              Pokemon <span style={{ color: "red" }}>{name}</span>
              <br /> not found! :(
            </span>
            <p className={style["p-a"]}>Please try again!</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PokemonNotFound;
