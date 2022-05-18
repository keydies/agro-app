import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRegistrationState } from '../../types/IRegistration';

const initialState: IRegistrationState = {
	email: '',
	username: '',
	password: ''
};

export const registrationFormSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		changeEmailValue(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		changeUsernameValue(state, action: PayloadAction<string>) {
			state.username = action.payload;
		},
		changePasswordValue(state, action: PayloadAction<string>) {
			state.password = action.payload;
		},
		clearFields(state) {
			state.email = '';
			state.username = '';
			state.password = '';
		}
	}
});

export const registrationFormReducer = registrationFormSlice.reducer;

export const {
	changeEmailValue,
	changeUsernameValue,
	changePasswordValue,
	clearFields
} = registrationFormSlice.actions;
