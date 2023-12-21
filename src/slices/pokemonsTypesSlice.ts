import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonsTypes = createAsyncThunk("pokemonsTypes/fetchPokemonsTypes", async () => {
  const baseUrl = "https://pokeapi.co/api/v2/";

  const response = await axios.get(`${baseUrl}type`);
  const data = response.data;

  return data;
});

export const fetchPokemonsByType = createAsyncThunk(
  "pokemonsTypes/fetchPokemonsByType",
  async (type: string) => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const response = await axios.get(`${baseUrl}type/${type}`);
    const data = response.data.pokemon;

    if (!type) {
      return [];
    }

    const pokemonsByTypes = data?.map(async (item: any) => {
      const response = await axios.get(`${baseUrl}pokemon/${item?.pokemon.name}`);
      const data = response?.data;
      return data;
    });

    const pokemonsList = await Promise.all([...pokemonsByTypes]);

    return pokemonsList;
  }
);

const initialState: {
  pokemonsTypes: {}[];
  pokemonsOfSelectedTypes: {}[];
  selectedType: string;
  isLoading: boolean;
} = {
  pokemonsTypes: [],
  pokemonsOfSelectedTypes: [],
  selectedType: "",
  isLoading: false,
};

const pokemonsTypes = createSlice({
  name: "pokemonsTypes",
  initialState: initialState,
  reducers: {
    selectTypeForPokemons: (state, action) => {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonsTypes.fulfilled, (state, action) => {
        state.pokemonsTypes = action.payload.results;
      })
      .addCase(fetchPokemonsByType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonsByType.fulfilled, (state, action) => {
        state.pokemonsOfSelectedTypes = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPokemonsByType.rejected, (state) => {
        state.isLoading = false;
      })
      .addDefaultCase(() => {});
  },
});

export default pokemonsTypes.reducer;
export const { selectTypeForPokemons } = pokemonsTypes.actions;
