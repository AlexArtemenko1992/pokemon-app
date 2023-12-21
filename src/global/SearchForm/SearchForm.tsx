import { useState } from "react";
import style from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { fetchSearchedPokemons } from "../../slices/pokemonsSearchSlice";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHanlder = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(fetchSearchedPokemons(inputValue.toLowerCase()));
      setInputValue("");
      navigate(`/pokemon/${inputValue.toLowerCase()}`);
    }
  };

  return (
    <form className={style["searh-form"]} onSubmit={onSubmitHanlder}>
      <input
        className={style["search-input"]}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Search pokemon..."
      />
      <button className={style["search-button"]}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
