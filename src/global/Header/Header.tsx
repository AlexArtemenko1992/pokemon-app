import style from "./Header.module.scss";
import { Container } from "@mui/material";
import CustomSelect from "../CustomSelect/CustomSelect";
import PokemonLogo from "../../assets/icons/pokemon-logo.svg";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <header className={style["header"]}>
      <Container>
        <div className={style["header-content"]}>
          <div className={style["header-logo-wrapper"]}>
            <img className={style["header-logo"]} src={PokemonLogo} alt="pokemon-logo" />
            <p>Pokemon App</p>
          </div>
          <SearchForm />
          <CustomSelect />
        </div>
      </Container>
    </header>
  );
};

export default Header;
