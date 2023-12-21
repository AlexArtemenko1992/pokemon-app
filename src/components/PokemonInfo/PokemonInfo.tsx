import style from "./PokemonInfo.module.scss";
import ProgressBar from "../../global/ProgressBar/ProgressBar";
import { firstLetterToUpperCase } from "../../helpers/helpers";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectTypeForPokemons } from "../../slices/pokemonsTypesSlice";

const PokemonInfo = ({ pokemon }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useDocumentTitle(`Pokemon App | ${firstLetterToUpperCase(pokemon.name)}`);

  const redirectToSelectedType = (e) => {
    navigate("/");
    dispatch(selectTypeForPokemons(e.target.id));
  };

  return (
    <main className={style["main-pokemon"]}>
      <div className={style["header-main-pokemon"]}>
        <span className={style["number-pokemon"]}>#{pokemon.id}</span>
        <div className={style["container-img-pokemon"]}>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon?.name}`}
          />
        </div>

        <div className={style["container-info-pokemon"]}>
          <h1>{firstLetterToUpperCase(pokemon.name)}</h1>
          <div className={`${style["card-types"]} ${style["info-pokemon-type"]}`}>
            {pokemon.types.map((type: any) => (
              <span
                onClick={redirectToSelectedType}
                id={type.type.name}
                key={type.type.name}
                className={style[type.type.name]}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <div className={style["info-pokemon"]}>
            <div className={style["group-info"]}>
              <p>Height</p>
              <span>{pokemon.height}</span>
            </div>
            <div className={style["group-info"]}>
              <p>Weight</p>
              <span>{pokemon.weight}KG</span>
            </div>
          </div>
        </div>
      </div>

      <div className={style["container-stats"]}>
        <h1>STATS</h1>
        <div className={style["stats"]}>
          <div className={style["stat-group"]}>
            <span>Hp</span>
            <ProgressBar progress={pokemon.stats[0].base_stat} />
            <span className={style["counter-stat"]}>{pokemon.stats[0].base_stat}%</span>
          </div>
          <div className={style["stat-group"]}>
            <span>Attack</span>
            <ProgressBar progress={pokemon.stats[1].base_stat} />
            <span className={style["counter-stat"]}>{pokemon.stats[1].base_stat}%</span>
          </div>
          <div className={style["stat-group"]}>
            <span>Defense</span>
            <ProgressBar progress={pokemon.stats[2].base_stat} />
            <span className={style["counter-stat"]}>{pokemon.stats[2].base_stat}%</span>
          </div>
          <div className={style["stat-group"]}>
            <span>Special Attack</span>
            <ProgressBar progress={pokemon.stats[3].base_stat} />
            <span className={style["counter-stat"]}>{pokemon.stats[3].base_stat}%</span>
          </div>
          <div className={style["stat-group"]}>
            <span>Special Defense</span>
            <ProgressBar progress={pokemon.stats[4].base_stat} />
            <span className={style["counter-stat"]}>{pokemon.stats[4].base_stat}%</span>
          </div>
          <div className={style["stat-group"]}>
            <span>Speed</span>
            <ProgressBar progress={pokemon.stats[5].base_stat} />
            <span className={style["counter-stat"]}>{pokemon.stats[5].base_stat}%</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PokemonInfo;
