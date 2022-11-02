import { CategoriesList } from '../../components/CategoriesList';
import { Container } from '../../components/Container';
////////////////////////////////////////////////
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/cart/constans';
import { addProduct } from '../../redux/cart/actions';
const StatesFilter = () => {
  const filter = useSelector((state) => state.filters);
  return (
    <div>
      <button>By default</button>
      <button selected={filter === statusFilters.asd}>By name</button>
      <button selected={filter === statusFilters.PRICE_LOW_TO_HIGH}>
        Price: low to high
      </button>
      <button selected={filter === statusFilters.WEIGHT}>Weight</button>
    </div>
  );
};
export const getSortProduct = (products, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.BY_NAME:
      return products.sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    case statusFilters.PRICE_LOW_TO_HIGH:
      return products.sort((a, b) => a.price - b.price);
    case statusFilters.PRICE_HIGH_TO_LOW:
      return products.sort((a, b) => b.price - a.price);
    case statusFilters.NUMBER_OF_PIECES:
      return products.sort((a, b) => a.chunks - b.chunks);
    case statusFilters.WEIGHT:
      return products.sort((a, b) => b.weight - a.weight);
    default:
      return products;
  }
};

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const statusFilter = useSelector((state) => state.filters.status);
  const sortProduct = getSortProduct(products, statusFilter);

  // console.log(statusFilters.BY_NAME);
  // console.log(addProduct(sortProduct[0]));
};
export const HomePage = () => {
  const products = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();

  ProductList();
  const testValue = useSelector((state) => state.products);

  return (
    <Container>
      <StatesFilter />
      <CategoriesList />
    </Container>
  );
};
