import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILogin } from '../../types/ILogin';

const initialState: ILogin = {
	email: '',
	password: ''
};

export const loginFormSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		changeEmailValue(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		changePasswordValue(state, action: PayloadAction<string>) {
			state.password = action.payload;
		},
		clearFields(state) {
			state.email = '';
			state.password = '';
		}
	}
});

export const loginFormReducer = loginFormSlice.reducer;

export const { changeEmailValue, changePasswordValue, clearFields } =
	loginFormSlice.actions;
