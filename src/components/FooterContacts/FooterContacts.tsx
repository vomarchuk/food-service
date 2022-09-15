import { Box, Link } from '@mui/material';

import { WhatsappIcon } from '../Icons/WhatsappIcon';
import { TelegramIcon } from '../Icons/TelegramIcon';
import { InstagramIcon } from '../Icons/InstagramIcon';

import style from './FooterContacts.module.scss';
export const FooterContacts = () => {
  return (
    <Box sx={styles.forBox}>
      <p className={style.footerContactsTitle}>
        Choose a convenient messenger to communicate
      </p>
      <ul className={style.contactIconsList}>
        <li className={style.item}>
          <Link
            sx={styles.forLink}
            href="https://api.whatsapp.com/send/?phone=996705188955&text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappIcon />
          </Link>
        </li>
        <li className={style.item}>
          <Link
            sx={styles.forLink}
            href="tg://resolve?domain=VolodymyrMarchuk"
            target="_blank"
            rel="noreferrer"
          >
            <TelegramIcon />
          </Link>
        </li>
        <li className={style.item}>
          <Link
            sx={styles.forLink}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="tel:+996 705 188 955">Tel:+996 705 188 955</Link>
        </li>
        <li>
          <Link href="tel:+996 555 188 955">Tel:+996 555 188 955</Link>
        </li>
        <li>
          <Link
            href="https://www.google.com/maps/d/edit?mid=1pz-Wjck-X5Qq49qcGQkXwLtXivJdXlg&usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            address
          </Link>
        </li>
      </ul>
    </Box>
  );
};

const styles = {
  forBox: {
    // textAlign: 'center',
  },
  forLink: {
    opacity: 0.55,
    ':hover': { opacity: 1 },
    transition: '0.5s',
  },
};
