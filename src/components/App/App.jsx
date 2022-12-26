/* eslint-disable no-fallthrough */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../../Hooks';
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

import * as categoriesOperations from '../../redux/categories/categoriesOperations';

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
        <Route path="/:categoryName/:productId" element={<ProductPage />} />
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
