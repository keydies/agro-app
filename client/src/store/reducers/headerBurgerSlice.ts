import { createSlice } from '@reduxjs/toolkit';

import { IBurger } from '../../types/IBurger';

const initialState: IBurger = {
	openModal: false,
	className: 'header__burger',
	active: false
};

export const headerBurgerSlice = createSlice({
	name: 'burger',
	initialState,
	reducers: {
		handleModal(state) {
			state.openModal = !state.openModal;
			state.active = !state.active;
			state.active
				? (state.className = 'header__burger active')
				: (state.className = 'header__burger');
		}
	}
});

export const headerBurgerReducer = headerBurgerSlice.reducer;

export const { handleModal } = headerBurgerSlice.actions;
