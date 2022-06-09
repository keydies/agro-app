import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAreaState } from '../../types/IArea';

const initialState: IAreaState = {
	region: '',
	agriculture: '',
	squareSize: 0,
	cadastralNumber: 0
};

export const areaSlice = createSlice({
	name: 'area',
	initialState,
	reducers: {
		addRegion(state, action: PayloadAction<string>) {
			state.region = action.payload;
		},
		addAgriculture(state, action: PayloadAction<string>) {
			state.agriculture = action.payload;
		},
		addCadastralNumber(state, action: PayloadAction<number>) {
			state.cadastralNumber = action.payload;
		},
		addAreaSquare(state, action: PayloadAction<number>) {
			state.squareSize = action.payload;
		}
	}
});

export const areaReducer = areaSlice.reducer;

export const { addRegion, addAgriculture, addCadastralNumber, addAreaSquare } =
	areaSlice.actions;
