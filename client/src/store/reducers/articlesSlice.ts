import { IArticles, IArticlesState } from './../../types/IArticles';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IArticlesState = {
	articles: []
};

export const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		getAllArticles(state, action: PayloadAction<IArticles[]>) {
			state.articles = action.payload;
		}
	}
});

export const articlesReducer = articlesSlice.reducer;

export const { getAllArticles } = articlesSlice.actions;
