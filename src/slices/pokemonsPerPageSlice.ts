import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonsPerPage = createAsyncThunk(
  "pokemonsPerPage/fetchPokemonsPerPage",
  async (offset: number) => {
    const baseUrl = "https://pokeapi.co/api/v2/";

    const response = await axios.get(`${baseUrl}pokemon?limit=12&offset=${offset}`);

    const data = response.data;
    const pokemonsDescription = data?.results.map(async (pokemon: any) => {
      const response = await axios.get(pokemon?.url);
      const data = response?.data;
      return data;
    });
    const pokemonsList = await Promise.all([...pokemonsDescription]);

    return pokemonsList;
  }
);

const initialState: { isLoading: boolean; pokemonsPerPageList: {}[] } = {
  isLoading: false,
  pokemonsPerPageList: [],
};

const pokemonsPerPage = createSlice({
  name: "pokemonsPerPage",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonsPerPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonsPerPage.fulfilled, (state, action) => {
        state.pokemonsPerPageList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPokemonsPerPage.rejected, (state) => {
        state.isLoading = false;
      })
      .addDefaultCase(() => {});
  },
});

export default pokemonsPerPage.reducer;

// export const { nextPokemonsGroup, prevPokemonsGroup } = pokemonsPerPage.actions;
