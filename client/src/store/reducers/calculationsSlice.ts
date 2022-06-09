import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICalculateState } from '../../types/ICalculate';

const initialState: ICalculateState = {
	wheat: {
		t: 70,
		n1: 10,
		p: 20,
		s: 20,
		c: 28,
		g: 1000,
		f: 800,
		m: 350,
		i: 1000,
		k: 34
	},
	corn: {
		t: 70,
		n1: 5000,
		p: 20,
		s: 20,
		c: 28,
		g: 1000,
		f: 800,
		m: 350,
		i: 1000,
		k: 34,
		x: 400
	},
	sunflower: {
		t: 70,
		n1: 3000,
		p: 20,
		s: 20,
		c: 28,
		g: 1000,
		f: 800,
		m: 350,
		i: 1000,
		k: 34
	},
	totalPrice: {
		totalPrice: 0,
		DT: 0,
		seed: 0,
		fertilizers: 0,
		sulfate: 0,
		saltpeter: 0,
		herbicide: 0,
		fungicide: 0,
		microMinerals: 0,
		insecticide: 0,
		urea: 0,
		zinc: 0
	}
};

export const calculationsSlice = createSlice({
	name: 'calculation',
	initialState,
	reducers: {
		calculateWheatPrice(state, action: PayloadAction<number>) {
			state.totalPrice.totalPrice =
				action.payload *
				(20 * state.wheat.t +
					5 * state.wheat.t +
					3 * state.wheat.t +
					(200 * state.wheat.n1 + 150 * state.wheat.p) +
					100 * state.wheat.s +
					150 * state.wheat.c +
					(0.5 * state.wheat.g +
						0.15 * state.wheat.i +
						0.2 * state.wheat.m +
						state.wheat.t) +
					(0.5 * state.wheat.f +
						0.15 * state.wheat.i +
						state.wheat.t) +
					(0.5 * state.wheat.f + 12 * state.wheat.k + state.wheat.t) +
					12 * state.wheat.t);
		},
		calculateCornPrice(state, action: PayloadAction<number>) {
			state.totalPrice.totalPrice =
				action.payload *
				(150 * state.corn.p +
					state.corn.t +
					20 * state.corn.t +
					(200 * state.corn.p + state.corn.t) +
					4 * state.corn.t +
					5 * state.corn.t +
					(3 * state.corn.t + state.corn.n1) +
					(1.2 * state.corn.g + 0.2 * state.corn.m + state.corn.t) +
					(0.5 * state.corn.x + 0.15 * state.corn.i + state.corn.t) +
					12 * state.corn.t);
		},
		calculateSunflowerAndSoyPrice(state, action: PayloadAction<number>) {
			state.totalPrice.totalPrice =
				action.payload *
				(150 * state.corn.p +
					20 * state.corn.t +
					(200 * state.corn.p + state.corn.t) +
					4 * state.corn.t +
					5 * state.corn.t +
					(3 * state.corn.t + state.corn.n1) +
					(1.2 * state.corn.g + 0.2 * state.corn.m + state.corn.t) +
					(0.5 * state.corn.x + 0.15 * state.corn.i + state.corn.t) +
					12 * state.corn.t);
		},
		showWheatDetails(state, action: PayloadAction<number>) {
			state.totalPrice.DT =
				action.payload *
				(20 * state.wheat.t +
					5 * state.wheat.t +
					3 * state.wheat.t +
					state.wheat.t +
					state.wheat.t +
					state.wheat.t);
			state.totalPrice.seed = action.payload * (200 * state.wheat.n1);
			state.totalPrice.fertilizers =
				action.payload * (150 * state.wheat.p);
			state.totalPrice.sulfate = action.payload * (100 * state.wheat.s);
			state.totalPrice.saltpeter = action.payload * (150 * state.wheat.c);
			state.totalPrice.herbicide = action.payload * (0.5 * state.wheat.g);
			state.totalPrice.fungicide =
				action.payload * (0.5 * state.wheat.f + 0.5 * state.wheat.f);
			state.totalPrice.microMinerals =
				action.payload * (0.2 * state.wheat.m);
			state.totalPrice.insecticide =
				action.payload * (0.15 * state.wheat.i + 0.15 * state.wheat.i);
			state.totalPrice.urea = action.payload * (12 * state.wheat.k);
		},
		showCornDetails(state, action: PayloadAction<number>) {
			state.totalPrice.DT =
				action.payload *
				(state.corn.t +
					20 * state.corn.t +
					state.corn.t +
					4 * state.corn.t +
					5 * state.corn.t +
					3 * state.corn.t +
					state.corn.t +
					state.corn.t +
					12 * state.corn.t);
			state.totalPrice.seed = action.payload * state.corn.n1;
			state.totalPrice.fertilizers =
				action.payload * (150 * state.corn.p + 200 * state.corn.p);
			state.totalPrice.herbicide = action.payload * (1.2 * state.corn.g);
			state.totalPrice.microMinerals =
				action.payload * (1.2 * state.corn.m);
			state.totalPrice.insecticide =
				action.payload * (0.15 * state.corn.i);
			state.totalPrice.zinc = action.payload * (0.5 * state.corn.x);
		},
		showSunflowerAndSoyDetails(state, action: PayloadAction<number>) {
			state.totalPrice.DT =
				action.payload *
				(state.corn.t +
					20 * state.corn.t +
					state.corn.t +
					4 * state.corn.t +
					5 * state.corn.t +
					3 * state.corn.t +
					state.corn.t +
					state.corn.t +
					12 * state.corn.t);
			state.totalPrice.seed = action.payload * state.corn.n1;
			state.totalPrice.fertilizers =
				action.payload * (150 * state.corn.p + 200 * state.corn.p);
			state.totalPrice.herbicide = action.payload * (1.2 * state.corn.g);
			state.totalPrice.microMinerals =
				action.payload * (1.2 * state.corn.m);
			state.totalPrice.insecticide =
				action.payload * (0.15 * state.corn.i);
			state.totalPrice.zinc = action.payload * (0.5 * state.corn.x);
		}
	}
});

export const calculationsReducer = calculationsSlice.reducer;

export const {
	calculateWheatPrice,
	calculateCornPrice,
	calculateSunflowerAndSoyPrice,
	showWheatDetails,
	showCornDetails,
	showSunflowerAndSoyDetails
} = calculationsSlice.actions;
