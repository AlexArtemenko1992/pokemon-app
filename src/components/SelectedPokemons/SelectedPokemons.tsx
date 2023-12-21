import { useSelector } from "react-redux";
import { RootState } from "../../store/storeConfig";
import PokemonsList from "../PokemonsList/PokemonsList";
import { Loader } from "../../global";

const SelectedPokemons = () => {
  const pokemons = useSelector<RootState>((state) => state.pokemonsTypes.pokemonsOfSelectedTypes);
  const isLoading = useSelector<RootState>((state) => state.pokemonsTypes.isLoading);

  return <>{isLoading ? <Loader /> : <PokemonsList pokemons={pokemons} />}</>;
};

export default SelectedPokemons;
