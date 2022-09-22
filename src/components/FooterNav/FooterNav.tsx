import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import { MenuIcon, CartIcon, FeedBackIcon } from '../Icons';

import { colors } from '../../constants';

import style from './FooterNav.module.scss';
export const FooterNav = () => {
  return (
    <Box sx={styles.forBox}>
      <Stack direction="row" spacing={'35px'} sx={styles.forBottomNav}>
        <Link sx={styles.forLink} className={style.bottomNavLink} href="/">
          <MenuIcon /> <p className={style.navText}>Menu</p>
        </Link>
        <Link sx={styles.forLink} className={style.bottomNavLink} href="/cart">
          <CartIcon /> <p className={style.navText}>Cart</p>
        </Link>
        <Link
          sx={styles.forLink}
          className={style.bottomNavLink}
          href="/feedback"
        >
          <FeedBackIcon /> <p className={style.navText}>FeedBack</p>
        </Link>
      </Stack>
    </Box>
  );
};

const styles = {
  forBox: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '360px',
    margin: '0 auto',
    backgroundColor: colors.MAIN_LIGHT_COLOR,
    borderTop: `1px solid ${colors.SECONDARY_COLOR}`,
  },
  forBottomNav: {
    height: '72px',
    padding: '11px 66px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forLink: {
    textDecoration: 'none',
    color: colors.MAIN_DARK_COLOR,
  },
};
