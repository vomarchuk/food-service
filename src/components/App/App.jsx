/* eslint-disable no-fallthrough */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useLocalStorage } from 'Hooks';
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

import '../BackToTop/BackToTop';
import { ToastContainer } from 'react-toastify';

import { categoriesOperations } from 'redux/categories';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesOperations.fetchCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryId" element={<ProductsPage />} />
        <Route path="/:categoryId/:productId" element={<ProductPage />} />
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
