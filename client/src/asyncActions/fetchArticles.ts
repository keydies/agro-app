import axios from 'axios';

import { AppDispatch } from '../store/store';
import { getAllArticles } from '../store/reducers/articlesSlice';

export const fetchArticles = () => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.get(
				'http://localhost:5000/api/articles'
			);
			dispatch(getAllArticles(response.data.articles));
		} catch (e) {}
	};
};
