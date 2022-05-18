import axios from 'axios';
import { authUser } from '../store/reducers/userSlice';
import { AppDispatch } from '../store/store';

export const auth = () => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.get(
				`http://localhost:5000/api/auth/auth`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}
				}
			);
			dispatch(authUser(response.data.user));
			localStorage.setItem('token', response.data.token);
		} catch (e) {
			localStorage.removeItem('token');
		}
	};
};
