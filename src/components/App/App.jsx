/* eslint-disable no-fallthrough */
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

import { ToastContainer } from 'react-toastify';
import { addBackToTop } from 'vanilla-back-to-top';

function App() {
  addBackToTop({
    backgroundColor: '#ff9846',
    cornerOffset: 20,
    diameter: 56,
    id: 'back-to-top',
    onClickScrollTo: 0,
    scrollContainer: document.body,
    scrollDuration: 300,
    showWhenScrollTopIs: 100,
    textColor: '#f2f2f2',
    zIndex: 1,
  });
  return (
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
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
