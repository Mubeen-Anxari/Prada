import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
interface Rating {
  rate: number;
  count: number;
}

interface Product {
  quantity:number;
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
    addQuantity: (state, action) => {
      const currentState=current(state)
      const update=currentState?.cart?.map((item)=>{
        if(item?.id===action?.payload){
          return{
          ...item,
          quantity:(item?.quantity || 0) +1
          }
          }
        else{
          return item
        }
      })
      state.cart=update

    },
    removeQuantity: (state, action) => {
      const currentState=current(state)
      const update=currentState?.cart?.map((item)=>{
        if(item?.id===action?.payload){
          return{
          ...item,
          quantity:(item?.quantity || 0) -1
          }
          }
        else{
          return item
        }
      })
      state.cart=update

    },
    addToCart: (state, action) => {
      state.cart = [...state.cart,{...action.payload}];
      
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { addToCart, removeCart,addQuantity,removeQuantity } = UserSlice.actions;

export default UserSlice.reducer;
