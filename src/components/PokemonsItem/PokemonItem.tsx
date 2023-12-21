import "./PokemonItem.scss";
import NoImg from "../../assets/images/no-img.jpeg";
import { Link } from "react-router-dom";
import { firstLetterToUpperCase } from "../../helpers/helpers";
import { PokemonItemPropsInterface } from "./PokemonItemPropsInterface";

const PokemonItem = ({ id, name, imgUrl, types }: PokemonItemPropsInterface) => {
  return (
    <Link className="card-pokemon" to={`/pokemon-app/pokemon/${name}`}>
      <div className="card-img">
        {imgUrl ? (
          <img src={imgUrl} alt={`Pokemon ${name}`} />
        ) : (
          <img src={NoImg} alt={`Pokemon ${name}`} />
        )}
      </div>
      <div className="card-info">
        <span className="pokemon-id">N° {id}</span>
        <h3>{firstLetterToUpperCase(name)}</h3>
        <div className="card-types">
          {types.map((type: any) => (
            <span key={type.type.name} className={`${type.type.name} card-type`} id={type}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonItem;
