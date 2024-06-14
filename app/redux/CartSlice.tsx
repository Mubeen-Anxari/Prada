import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface UserState {
  cart: Product[];
  products: Product[];
}
export const getProducts = createAsyncThunk("cart/getProducts", async () => {
  const result = await axios.get("https://fakestoreapi.com/products");
  return result.data;
});
const initialState: UserState = {
  cart: [],
  products: [],
};

export const UserSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item?.id!== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const {addToCart,removeCart} = UserSlice.actions;

export default UserSlice.reducer;
