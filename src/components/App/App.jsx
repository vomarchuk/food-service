import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  ProductsPage,
  ProductPage,
  CartPage,
  CheckoutPage,
  FeedbackPage,
} from '../../pages';
import { Header } from '../Header';
import { Footer } from '../Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="category/:categoryName" element={<ProductsPage />} />
          <Route
            path="category/:categoryName/:productId"
            element={<ProductPage />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;