import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';

const store = configureStore({
	reducer: userReducer
});

export default store;