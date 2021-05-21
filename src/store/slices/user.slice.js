import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
	users: [],
	currentUserPosts: [],
};

const userSlice = createSlice({
	name: 'users',
	initialState: initialUserState,
	reducers: {
		getUsers(state, action) {
			state.users = action.payload;
		},
		setUserPosts(state, action) {
			const userIndex = action.payload.userId - 1;
			const triggeredUser = state.users[userIndex];
			triggeredUser.posts = action.payload.data;
			state.users[userIndex] = triggeredUser;
			state.currentUserPosts = action.payload.data;
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
