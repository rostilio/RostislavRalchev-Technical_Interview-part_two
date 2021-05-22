import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
	users: [],
};

const userSlice = createSlice({
	name: 'users',
	initialState: initialUserState,
	reducers: {
		getUsers(state, action) {
			state.users = action.payload;
		},
		setUserPosts(state, action) {
			// userIds start counting from 1
			const userIndex = action.payload.userId - 1;
			// finding the current user from state
			const triggeredUser = state.users[userIndex];
			// setting posts property
			triggeredUser.posts = action.payload.data;
			// setting state
			state.users[userIndex] = triggeredUser;
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
