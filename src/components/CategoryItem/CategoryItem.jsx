import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import style from './CategoryItem.module.scss';

export const CategoryItem = ({
  categoryId,
  categoryName,
  fullName,
  smallImage,
  soon,
}) => {
  return soon ? (
    <div className={style.link}>
      <img className={style.cardImage} src={smallImage} alt={fullName} />
      <Box>
        <h2 className={style.cardTitle}>{fullName}</h2>
        {soon && <p className={style.cardSoon}>Soon</p>}
      </Box>
    </div>
  ) : (
    <Link className={style.link} to={`/${categoryId}`}>
      <img className={style.cardImage} src={smallImage} alt={fullName} />
      <Box>
        <h2 className={style.cardTitle}>{fullName}</h2>
      </Box>
    </Link>
  );
};
