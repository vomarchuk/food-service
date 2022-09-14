import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Container } from '../Container';
import { Logotype } from '../Logotype';
import { colors } from '../../constants';

import style from './Header.module.scss';
import { useState } from 'react';

import { alpha, styled } from '@mui/material/styles';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const getValueForSearch = (e: any, value: any) => console.log(value.label);
  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <header className={style.header}>
        <Container>
          <div className={style.headerWrapper}>
            <Logotype />
            <div className={style.headerContacts}>
              <p className={style.headerText}>Our phones</p>
              <a className={style.headerPhone} href="tel:+996705188955">
                +996 705 188 955
              </a>
              <a className={style.headerPhone} href="tel:+996555188955">
                +996 555 188 955
              </a>
            </div>
            <div className={style.headerTimeWorksBox}>
              <div className={style.iconWatches}></div>
              <p className={style.headerTimeWorks}>
                We're working <br />
                from 10:00 to 00:00
              </p>
            </div>
            <IconButton
              aria-label="search"
              onClick={handleClick}
              type={'button'}
              sx={{
                padding: '8px',
              }}
            >
              <SearchIcon
                sx={{
                  width: '30px',
                  height: '30px',
                  color: colors.SECONDARY_COLOR,
                }}
              />
            </IconButton>
            {isOpen && (
              <div className={style.searchForm}>
                <Autocomplete
                  className={style.searchInput}
                  onChange={getValueForSearch}
                  disablePortal
                  onClose={handleClose}
                  id="searchProduct"
                  options={products}
                  sx={{
                    width: 330,
                    backgroundColor: colors.MAIN_LIGHT_COLOR,
                  }}
                  renderInput={(params) => (
                    <CssTextField {...params} label="Enter to search" />
                  )}
                />
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

const products = [{ label: 'sushi1' }, { label: 'sushi2' }];

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: colors.MAIN_DARK_COLOR,
    fontSize: '20px',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: colors.SECONDARY_COLOR,
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.MAIN_ACCENT_COLOR,
    },
  },
});
