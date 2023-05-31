import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import roomSlice from './room/roomSlice';
import reservationsSlice from './reservation/reservationsSlice';
import userSlice from './user/userSlice';

const store = configureStore({
  reducer: {
    room: roomSlice,
    reservations: reservationsSlice,
    user: userSlice,
  },
}, applyMiddleware(thunk));

export default store;
