import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemExists = state?.find((item) => item._id === action.payload._id);
      if (itemExists) {
        itemExists.count++;
      } else {
        const tempProductItem = { ...action.payload, count: 1 };
        state.push(tempProductItem);
      }
    },

    addQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.count++;
    },

    subQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.count === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.count--;
      }
    },

    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },

    emptyCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addItemToCart, addQuantity, subQuantity, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
