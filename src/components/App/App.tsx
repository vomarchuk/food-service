import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  ProductsPage,
  CardPage,
  CartPage,
  CheckoutPage,
} from '../../pages';
import { Header } from '../Header';
import { Footer } from '../Footer';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="category/:categoryName" element={<ProductsPage />} />
          <Route
            path="category/:categoryName/:productId"
            element={<CardPage />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
