import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import style from './CardMenu.module.scss';

export const CardMenu = ({ categoryName, fullName, smallImage, soon }) => {
  // console.log(soon);
  return soon ? (
    <div className={style.link}>
      <img
        className={style.cardImage}
        src={smallImage.x1}
        alt={fullName}
        srcSet={`${smallImage.x1} 1x,
        ${smallImage.x2}2x `}
      />
      <Box>
        <h2 className={style.cardTitle}>{fullName}</h2>
        {soon && <p className={style.cardCoon}>Soon</p>}
      </Box>
    </div>
  ) : (
    <Link className={style.link} to={`/category/${categoryName}`}>
      <img
        className={style.cardImage}
        src={smallImage.x1}
        alt={fullName}
        srcSet={`${smallImage.x1} 1x,
        ${smallImage.x2}2x `}
      />
      <Box>
        <h2 className={style.cardTitle}>{fullName}</h2>
        {soon && <p className={style.cardCoon}>Soon</p>}
      </Box>
    </Link>
  );
};
