import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/storeConfig";
import PokemonsList from "../PokemonsList/PokemonsList";
import Pagination from "../../global/Pagination/Pagination";
import { fetchPokemonsPerPage } from "../../slices/pokemonsPerPageSlice";
import { Loader } from "../../global";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const AllPokemons = () => {
  const [offset, setOffset] = useState<number>(0);
  const pokemons = useSelector<RootState>(
    (state) => state.pokemonPerPageReducer.pokemonsPerPageList
  );
  const isLoading = useSelector<RootState>((state) => state.pokemonPerPageReducer.isLoading);
  const dispatch = useDispatch<AppDispatch>();

  useDocumentTitle("Pokemon App");

  const nextStep = () => {
    setOffset((prev) => prev + 12);
  };

  const prevStep = () => {
    if (offset !== 0) {
      setOffset((prev) => prev - 12);
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(fetchPokemonsPerPage(offset));
  }, [offset]);

  return (
    <div className="all-pokemons">
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <PokemonsList pokemons={pokemons} />
          <Pagination nextStep={nextStep} prevStep={prevStep} />
        </>
      )}
    </div>
  );
};

export default AllPokemons;
