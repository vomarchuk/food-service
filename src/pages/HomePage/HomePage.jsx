import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as categoriesOperations from '../../redux/categories/categoriesOperations';
import { Container } from '../../components/Container';
import { CategoriesList } from '../../components/CategoriesList';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesOperations.fetchCategories());
  }, [dispatch]);
  return (
    <Container>
      <CategoriesList />
    </Container>
  );
};
