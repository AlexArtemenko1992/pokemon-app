import style from "./PokemonsList.module.scss";
import { PokemonItem } from "..";
import { PokemonsListPropsInterface } from "./PokemonsListPropsInterface";

const PokemonsList = ({ pokemons }: any) => {
  return (
    <div className={style["pokemons-list"]}>
      {pokemons.map((pokemon: PokemonsListPropsInterface) => {
        return (
          <PokemonItem
            id={pokemon?.id}
            key={pokemon?.id}
            name={pokemon?.name}
            imgUrl={pokemon?.sprites.other.dream_world.front_default}
            types={pokemon?.types}
          />
        );
      })}
    </div>
  );
};

export default PokemonsList;
