import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser, IUserState } from '../../types/IUser';

const initialState: IUserState = {
	currentUser: {
		id: '',
		email: '',
		username: ''
	},
	isAuth: false,
	isLoading: false,
	error: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		authUser(state, action: PayloadAction<IUser>) {
			state.currentUser = action.payload;
			state.isAuth = true;
		},
		logoutUser(state) {
			localStorage.removeItem('token');
			state.currentUser.id = '';
			state.currentUser.email = '';
			state.currentUser.username = '';
			state.isAuth = false;
		},
		onLoading(state) {
			state.isLoading = true;
		},
		offLoading(state) {
			state.isLoading = false;
		}
	}
});

export const userReducer = userSlice.reducer;
export const { authUser, onLoading, offLoading, logoutUser } =
	userSlice.actions;
