import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    _id: '',
    isLoggedIn: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.name = '';
      state.email = '';
      state._id = '';
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
