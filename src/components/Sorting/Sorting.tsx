import * as React from 'react';

import {
  styled,
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputBase,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { typesSort } from '../../goods';

import style from './Sorting.module.scss';

const {
  DEFAULT,
  BY_NAME,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
  NUMBER_OF_PRICES,
  WEIGHT,
} = typesSort;

const CustomInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'white',
    border: 'none',
    fontSize: '24px',
    padding: '10px 26px 0px 12px',
    color: 'tomato',
    fontFamily: 'DIN Pro',
  },
}));

export const Sorting = () => {
  const [sortType, setSortType] = React.useState(DEFAULT);
  console.log(sortType);

  const handleChange = (event: SelectChangeEvent) => {
    console.log('hello');

    setSortType(event.target.value);
  };

  return (
    <Box sx={styles.forBox} className={style.box}>
      <FormControl sx={styles.forFormControl} className={style.forFormControl}>
        <InputLabel focused={false} id="demo-simple-select-error-label">
          Sorting
        </InputLabel>
        <Select
          // className={style.select}
          value={sortType}
          labelId="demo-simple-select-error-label"
          label="Sorting"
          autoWidth
          onChange={handleChange}
          input={<CustomInput />}
        >
          <MenuItem value={DEFAULT}>{DEFAULT}</MenuItem>
          <MenuItem value={BY_NAME}>{BY_NAME}</MenuItem>
          <MenuItem value={PRICE_LOW_TO_HIGH}>{PRICE_LOW_TO_HIGH}</MenuItem>
          <MenuItem value={PRICE_HIGH_TO_LOW}>{PRICE_HIGH_TO_LOW}</MenuItem>
          <MenuItem value={NUMBER_OF_PRICES}>{NUMBER_OF_PRICES}</MenuItem>
          <MenuItem value={WEIGHT}>{WEIGHT}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const styles = {
  forBox: {
    display: 'flex',
    justifyContent: 'center',
    mt: '15px',
  },
  forFormControl: {
    minWidth: '100%',
    mt: '15px',
  },
};
