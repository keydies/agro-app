import { createSlice } from '@reduxjs/toolkit';

import { IBurgerModal } from '../../types/IBurgerModal';

const initialState: IBurgerModal = {
	openModal: false,
	burgerClassName: 'header__burger',
	active: false
};

export const headerBurgerSlice = createSlice({
	name: 'burgerModalWindow',
	initialState,
	reducers: {
		handleModal(state) {
			state.openModal = !state.openModal;
			state.active = !state.active;
			state.active
				? (state.burgerClassName = 'header__burger active')
				: (state.burgerClassName = 'header__burger');
		}
	}
});

export const headerBurgerReducer = headerBurgerSlice.reducer;

export const { handleModal } = headerBurgerSlice.actions;
