import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchedPokemons = createAsyncThunk(
  "pokemonsSearch/fetchSearchedPokemons",
  async (value: string) => {
    const baseUrl = "https://pokeapi.co/api/v2/";

    const response = await axios.get(`${baseUrl}pokemon/${value}`);

    if (response.status !== 200) {
      throw new Error("Error");
    }

    const data = response.data;
    return data;
  }
);

const initialState: { isLoading: boolean; searchedPokemon: null | {}; error: null | string } = {
  isLoading: false,
  searchedPokemon: null,
  error: null,
};

const pokemonsSearch = createSlice({
  name: "pokemonsSearch",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchedPokemons.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSearchedPokemons.fulfilled, (state, action) => {
        state.searchedPokemon = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchSearchedPokemons.rejected, (state) => {
        state.isLoading = false;
        state.error = "Error";
      })
      .addDefaultCase(() => {});
  },
});

export default pokemonsSearch.reducer;

// export const { nextPokemonsGroup, prevPokemonsGroup } = pokemonsPerPage.actions;
