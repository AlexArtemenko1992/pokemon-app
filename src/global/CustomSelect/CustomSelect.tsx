import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/storeConfig";
import { fetchPokemonsByType, fetchPokemonsTypes } from "../../slices/pokemonsTypesSlice";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { selectTypeForPokemons } from "../../slices/pokemonsTypesSlice";
import { PokemonType } from "./CustomSelectInterface";

const CustomSelect = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const pokemonsTypes = useSelector<RootState>((store) => store.pokemonsTypes.pokemonsTypes);
  const selectedPokemonsType = useSelector<RootState>((state) => state.pokemonsTypes.selectedType);

  useEffect(() => {
    dispatch(fetchPokemonsTypes());
  }, []);

  useEffect(() => {
    if (selectedValue) {
      dispatch(fetchPokemonsByType(selectedValue));
    }
  }, [selectedValue]);

  useEffect(() => {
    if (selectedPokemonsType) {
      dispatch(fetchPokemonsByType(selectedPokemonsType));
      setSelectedValue(selectedPokemonsType);
    }
  }, [selectedPokemonsType]);

  const handleChange = (e: SelectChangeEvent<typeof selectedValue>) => {
    setSelectedValue(e.target.value);
    dispatch(selectTypeForPokemons(e.target.value));
  };

  return (
    <div>
      <DialogContent>
        <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-dialog-select-label">Pokemon Types</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={selectedValue}
              onChange={handleChange}
              input={<OutlinedInput label="Select Pokemon Type" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {(pokemonsTypes as PokemonType[]).map((type: PokemonType, idx: number) => {
                return (
                  <MenuItem value={type?.name} key={idx}>
                    {type?.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
    </div>
  );
};

export default CustomSelect;
