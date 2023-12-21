import { combineReducers } from "@reduxjs/toolkit";
import pokemonPerPageReducer from "../slices/pokemonsPerPageSlice";
import pokemonsTypes from "../slices/pokemonsTypesSlice";
import pokemonsSearch from "../slices/pokemonsSearchSlice";

const rootReducer = combineReducers({ pokemonPerPageReducer, pokemonsTypes, pokemonsSearch });

export default rootReducer;
