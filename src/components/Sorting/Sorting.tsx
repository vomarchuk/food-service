import * as React from 'react';

import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { typesSort } from '../../goods';

export const Sorting = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const {
    DEFAULT,
    BY_NAME,
    PRICE_LOW_TO_HIGH,
    PRICE_HIGH_TO_LOW,
    NUMBER_OF_PRICES,
    WEIGHT,
  } = typesSort;
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={age}
          autoWidth
          onChange={handleChange}
          // sx={{ backgroundColor: 'tomato' }}
        >
          <MenuItem value={10}>{DEFAULT}</MenuItem>
          <MenuItem value={20}>{BY_NAME}</MenuItem>
          <MenuItem value={30}>{PRICE_LOW_TO_HIGH}</MenuItem>
          <MenuItem value={40}>{PRICE_HIGH_TO_LOW}</MenuItem>
          <MenuItem value={50}>{NUMBER_OF_PRICES}</MenuItem>
          <MenuItem value={60}>{WEIGHT}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
