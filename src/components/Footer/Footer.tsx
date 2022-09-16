import { Container } from '../Container';
import { FooterContacts } from '../FooterContacts';
import { FooterDescription } from '../FooterDescription';
import { FooterNav } from '../FooterNav';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <FooterDescription />
        <FooterContacts />
        <FooterNav />
      </Container>
    </footer>
  );
};
