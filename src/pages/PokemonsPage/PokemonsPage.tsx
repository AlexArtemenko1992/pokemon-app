import style from "./PokemonsPage.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/storeConfig";
import AllPokemons from "../../components/AllPokemons/AllPokemons";
import SelectedPokemons from "../../components/SelectedPokemons/SelectedPokemons";

const PokemonsPage = () => {
  const selectedType = useSelector<RootState>((state) => state.pokemonsTypes.selectedType);

  return (
    <div className={style["pokemon-page"]}>
      {!selectedType ? <AllPokemons /> : <SelectedPokemons />}
    </div>
  );
};

export default PokemonsPage;
