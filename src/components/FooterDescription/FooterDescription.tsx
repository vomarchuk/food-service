import { Box, Button } from '@mui/material';

import { useState } from 'react';
import style from './FooterDescription.module.scss';

export const FooterDescription = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <Box>
      <h2 className={style.title}>Order sushi in Warsaw</h2>
      <div className={show ? style.descriptionFull : style.description}>
        <p className={style.s}>
          Restaurant "Sushi Store"offer our customers the most delicious sushi
          with delivery to the house, cooked according to classic and adapted to
          the European audience recipes, as well as our own experience of our
          chefs. We appreciate the time of our customers, so you can order sushi
          in Warsaw with delivery to the house or office.
        </p>
        <p>Our menu includes more than 20 kinds of sushi:</p>
        <ul>
          <li>Классические с сырым лососем, тунцом, окунем.</li>
          <li>Экзотические с тигровой креветкой, морским гребешком.</li>
          <li>Пикантные с копченым лососем, угрем</li>
        </ul>
        <p>
          В меню также представлены гунканы: с начинкой из красной икры и
          тобико, а также феликсы, где японский майонез сочетается с рыбой,
          морепродуктами, угрем. Любители острых блюд могут купить суши с соусом
          спайси. Популярные начинки — копченая курица, снежный краб, креветки,
          гребешки, тунец, лосось и окунь.
        </p>
        {!show && <div className={style.hiddenBox}></div>}
      </div>
      {/* <Button
          type="button"
          sx={styles.forButtonDetails}
          // endIcon={show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          onClick={toggleShow}
        >
        </Button> */}
      <Button variant="text" type="button" onClick={toggleShow}>
        Read more
      </Button>
    </Box>
  );
};
