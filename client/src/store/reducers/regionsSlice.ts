import { IRegionState, IRegions } from './../../types/IRegions';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IRegionState = {
	regions: [],
	searchedRegion: [],
	searchActive: false
};

export const regionsSlice = createSlice({
	name: 'regions',
	initialState,
	reducers: {
		getAllRegions(state, action: PayloadAction<IRegions[]>) {
			state.regions = action.payload;
		},
		searchRegion(state, action: PayloadAction<IRegions[]>) {
			state.searchActive = true;
			state.searchedRegion = action.payload;
		},
		showAllRegionsAfterClearInput(state) {
			state.searchActive = false;
		}
	}
});

export const regionsReducer = regionsSlice.reducer;

export const { getAllRegions, searchRegion, showAllRegionsAfterClearInput } =
	regionsSlice.actions;
