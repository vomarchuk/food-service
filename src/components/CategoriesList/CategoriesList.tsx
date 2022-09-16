import { Grid, Paper, styled } from '@mui/material';

import { beckEnd } from '../../goods';

import style from './CategoriesList.module.scss';

export const CategoriesList = () => {
  console.log(beckEnd.categories);
  return (
    <Grid container justifyContent="space-between" spacing={1}>
      {beckEnd.categories.map((category) => {
        console.log(category);
        return (
          <Grid item xs={6} spacing={1}>
            <Paper
              sx={{
                with: '162px',
                height: '157px',
              }}
            >
              <img
                src={category.smallImage.x1}
                alt=""
                width="162px"
                height="157px"
                srcSet={`${category.smallImage.x1},
                ${category.smallImage.x2} 2x
               `}
              />
              <p>Title</p>
              <p>Soon</p>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};
