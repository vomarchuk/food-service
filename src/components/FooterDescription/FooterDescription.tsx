import { Box, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useState } from 'react';

import { colors } from '../../constants';

import style from './FooterDescription.module.scss';

export const FooterDescription = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <Box sx={styles.forBox}>
      {' '}
      <h2 className={style.title}>Order sushi in Warsaw</h2>{' '}
      <div className={show ? style.descriptionFull : style.description}>
        {' '}
        <p className={style.text}>
          {' '}
          Restaurant "Sushi Store"offer our customers the most delicious sushi
          with delivery to the house, cooked according to classic and adapted to
          the European audience recipes, as well as our own experience of our
          chefs. We appreciate the time of our customers, so you can order sushi
          in Warsaw with delivery to the house or office.{' '}
        </p>{' '}
        <p className={style.text}>
          {' '}
          Our menu includes more than 20 kinds of sushi:{' '}
        </p>{' '}
        <ul className={style.list}>
          {' '}
          <li>Classic with raw salmon, tuna, perch.</li>{' '}
          <li>Exotic with tiger shrimp, scallop.</li>{' '}
          <li>Spicy with smoked salmon, eel</li>{' '}
        </ul>{' '}
        <p className={style.text}>
          {' '}
          The menu also includes Gunkans with red caviar filling and Tobico, as
          well as felixes, where Japanese mayonnaise is combined with fish,
          seafood, eel. Spicy food lovers can buy sushi with sauce spicy.
          Popular stuffing - smoked chicken, snow crab, shrimp, scallops, tuna,
          salmon and perch.{' '}
        </p>{' '}
        {!show && <div className={style.hiddenBox}></div>}
      </div>{' '}
      <Button
        variant="text"
        type="button"
        sx={styles.forButton}
        onClick={toggleShow}
        endIcon={show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        {' '}
        Read more{' '}
      </Button>{' '}
    </Box>
  );
};
interface Styles {
  [key: string]: { [key: string]: string | number };
}

const styles: Styles = {
  forBox: { marginTop: '20px' },
  forButton: {
    left: '50%',
    transform: 'translate(-50%)',
    color: colors.ACTIVE_ACCENT_COLOR,
    fontSize: '24px',
    fontFamily: 'Din Pro',
  },
};
