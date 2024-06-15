import {
  getAllProductsAction,
  getProductAction,
  deleteProductAction,
} from './Actions';
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { ProductList: [], error: null, isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsAction.pending, (state, action) => {
      state.isLoading = true;
      console.log('pending');
    });
    builder.addCase(getAllProductsAction.fulfilled, (state, action) => {
      state.ProductList = action.payload;
      state.isLoading = false;
      console.log('fulfilled');
    });
    builder.addCase(getAllProductsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log('rejected');
    });
    builder.addCase(getProductAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductAction.fulfilled, (state, action) => {
      state.ProductList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProductAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteProductAction.fulfilled, (state, action) => {
      state.ProductList = state.ProductList.filter(
        (item) => item.id !== action.payload.id
      );
    });
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
