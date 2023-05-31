import { createSlice } from '@reduxjs/toolkit';
import fetchUser from './fetchUser';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, data: action.payload.data };
      }
      return { ...state, error: action.payload.err };
    });
  },
});

export default userSlice.reducer;
