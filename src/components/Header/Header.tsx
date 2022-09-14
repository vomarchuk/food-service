import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { Container } from '../Container';
import { Logotype } from '../Logotype';
import { colors } from '../../constants';

import style from './Header.module.scss';

const handleClick = (e: any) => {
  return console.log(e.currentTarget);
};

export const Header = () => {
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
            {/* <Autocomplete
              // classes={style.searchInput}
              onChange={() => {}}
              disablePortal
              onClose={() => {}}
              id="searchProduct"
              options={products}
              // sx={styles.forFormForSearchProduct}
              renderInput={(params) => (
                <TextField {...params} label="Enter to search" />
              )}
            /> */}
          </div>
        </Container>
      </header>
    </>
  );
};

const products = [{ label: 'sushi1' }, { label: 'sushi2' }];
