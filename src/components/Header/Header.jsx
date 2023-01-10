import { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import { IconButton, Modal, Box } from '@mui/material';

import { Container } from '../Container';
import { Logotype } from '../Logotype';
import { colors } from '../../constants';

import style from './Header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <header className={style.header}>
        <Container>
          <div className={style.headerWrapper}>
            <Link to="/">
              <Logotype />
            </Link>

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
                We work <br />
                from 10:00 to 00:00
              </p>
            </div>
            <IconButton
              aria-label="search"
              onClick={handleOpen}
              type={'button'}
              sx={{
                padding: '8px',
              }}
            >
              <LoginIcon
                sx={{
                  width: '30px',
                  height: '30px',
                  color: colors.SECONDARY_COLOR,
                }}
              />
            </IconButton>
            <Modal open={isOpen} onClose={handleClose}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  bgcolor: 'background.paper',
                  border: '2px, solid, #000',
                  width: 300,
                  // height: 200,

                  pt: '10px',
                  pb: '10px',
                  px: '10px',
                }}
              >
                <h3>Hello! I'm modal of login!!!!!!!!</h3>
              </Box>
            </Modal>
          </div>
        </Container>
      </header>
    </>
  );
};
