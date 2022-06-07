import { IArticles, IArticlesState } from './../../types/IArticles';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IArticlesState = {
	articles: [],
	title: ''
};

export const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		getAllArticles(state, action: PayloadAction<IArticles[]>) {
			state.articles = action.payload;
		},
		getArticle(state, action: PayloadAction<string>) {
			state.title = action.payload;
		}
	}
});

export const articlesReducer = articlesSlice.reducer;

export const { getAllArticles, getArticle } = articlesSlice.actions;
