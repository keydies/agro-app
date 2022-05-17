import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser, IUserState } from '../../types/IUser';

const initialState: IUserState = {
	currentUser: {
		email: '',
		name: ''
	},
	error: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		authUser(state, action: PayloadAction<IUser>) {
			state.currentUser = action.payload;
		}
	}
});

export const userReducer = userSlice.reducer;
