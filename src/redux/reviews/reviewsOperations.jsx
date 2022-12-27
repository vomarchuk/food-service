import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as reviewsAPI from '../../services/reviews-API';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async () => {
    const reviews = await reviewsAPI.fetchReviews();
    return reviews;
  }
);
