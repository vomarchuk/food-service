import { Container } from '../Container';
import { FooterNav } from '../FooterNav';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <FooterNav />
      </Container>
    </footer>
  );
};
