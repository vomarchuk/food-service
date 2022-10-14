import { Box, Link } from '@mui/material';

import { WhatsappIcon, TelegramIcon, InstagramIcon } from '../Icons';

import { colors } from '../../constants';

import style from './FooterContacts.module.scss';
export const FooterContacts = () => {
  return (
    <Box sx={styles.forBox} className={style.footerContactBox}>
      <p className={style.footerContactsTitle}>
        Choose a convenient messenger to communicate
      </p>
      <ul className={style.contactIconsList}>
        <li className={style.item}>
          <Link
            sx={styles.forIconLink}
            href="https://api.whatsapp.com/send/?phone=996705188955&text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappIcon />
          </Link>
        </li>
        <li className={style.item}>
          <Link
            sx={styles.forIconLink}
            href="tg://resolve?domain=VolodymyrMarchuk"
            target="_blank"
            rel="noreferrer"
          >
            <TelegramIcon />
          </Link>
        </li>
        <li className={style.item}>
          <Link
            sx={styles.forIconLink}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </Link>
        </li>
      </ul>

      <ul className={style.contactList}>
        <li className={style.contactItem}>
          <Link
            sx={styles.forContactsLink}
            className={style.contactLink}
            href="tel:+996 705 188 955"
          >
            Tel:<span>+996 705 188 955</span>
          </Link>
        </li>
        <li className={style.contactItem}>
          <Link
            sx={styles.forContactsLink}
            className={style.contactLink}
            href="tel:+996 555 188 955"
          >
            Tel:<span>+996 555 188 955</span>
          </Link>
        </li>
        <li className={style.contactItem}>
          <Link
            sx={styles.forContactsLink}
            className={style.contactLink}
            href="https://www.google.com/maps/d/edit?mid=1pz-Wjck-X5Qq49qcGQkXwLtXivJdXlg&usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <address>Floriańska 6/U-7, 03-707 Warsaw</address>
          </Link>
        </li>
      </ul>
    </Box>
  );
};

const styles = {
  forBox: {
    textAlign: 'center',
    paddingBottom: '105px',
  },
  forIconLink: {
    opacity: 0.55,
    ':hover': { opacity: 1 },
    transition: '0.5s',
  },
  forContactsLink: {
    textDecoration: 'none',
    color: colors.SECONDARY_COLOR,
  },
};
