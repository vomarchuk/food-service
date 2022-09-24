import * as React from 'react';

import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { typesSort } from '../../goods';

const {
  DEFAULT,
  BY_NAME,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
  NUMBER_OF_PRICES,
  WEIGHT,
} = typesSort;

export const Sorting = () => {
  const [age, setAge] = React.useState(DEFAULT);
  console.log(age);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select value={age} autoWidth onChange={handleChange}>
          <MenuItem value={DEFAULT}>{DEFAULT}</MenuItem>
          <MenuItem value={BY_NAME}>{BY_NAME}</MenuItem>
          <MenuItem value={PRICE_LOW_TO_HIGH}>{PRICE_LOW_TO_HIGH}</MenuItem>
          <MenuItem value={PRICE_HIGH_TO_LOW}>{PRICE_HIGH_TO_LOW}</MenuItem>
          <MenuItem value={NUMBER_OF_PRICES}>{NUMBER_OF_PRICES}</MenuItem>
          <MenuItem value={WEIGHT}>{WEIGHT}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
