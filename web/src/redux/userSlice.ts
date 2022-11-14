import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    userName: '',
    twitter: '',
    instagram: '',
    address: '',
    about: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    profile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { profile } = userSlice.actions;

export default userSlice.reducer;
