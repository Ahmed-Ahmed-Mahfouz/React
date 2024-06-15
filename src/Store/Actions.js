import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../api/productAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProductsAction = createAsyncThunk(
  'products/getAllProductsAction',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await getAllProducts();
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProductAction = createAsyncThunk(
  'products/getProductAction',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await getProduct(id);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewProductAction = createAsyncThunk(
  'products/addNewProductAction',
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await createProduct(product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateProductAction = createAsyncThunk(
  'products/updateProductAction',
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await updateProduct(product.id, product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProductAction = createAsyncThunk(
  'products/deleteProductAction',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await deleteProduct(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
