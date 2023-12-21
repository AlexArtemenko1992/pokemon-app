import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchedPokemons } from "../../slices/pokemonsSearchSlice";
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import { ButtonBackBage } from "../../global";
import PokemonNotFound from "../../components/PokemonNotFound/PokemonNotFound";
import { Loader } from "../../global";

const PokemonDescriptionPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemonsSearch.searchedPokemon);
  const isLoading = useSelector((state) => state.pokemonsSearch.isLoading);
  const isError = useSelector((state) => state.pokemonsSearch.error);

  useEffect(() => {
    if (name) {
      dispatch(fetchSearchedPokemons(name));
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isError ? (
        <PokemonNotFound />
      ) : (
        <Container>
          <ButtonBackBage />
          {pokemon && <PokemonInfo pokemon={pokemon} />}
        </Container>
      )}
    </>
  );
};

export default PokemonDescriptionPage;
