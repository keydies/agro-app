import axios from 'axios';

import { AppDispatch } from '../store/store';
import { getAllRegions } from '../store/reducers/regionsSlice';

export const fetchRegions = () => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.get(
				'http://localhost:5000/api/regions'
			);
			dispatch(getAllRegions(response.data.regions));
		} catch (e) {}
	};
};
