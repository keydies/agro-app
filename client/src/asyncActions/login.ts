import axios from 'axios';

import { AppDispatch } from '../store/store';
import { authUser, offLoading, onLoading } from '../store/reducers/userSlice';
import { clearFields } from '../store/reducers/loginFormSlice';

export const login = (email: string, password: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(onLoading());
			const response = await axios.post(
				`http://localhost:5000/api/auth/login`,
				{
					email,
					password
				}
			);
			dispatch(authUser(response.data.user));
			localStorage.setItem('token', response.data.token);
			dispatch(clearFields());
			dispatch(offLoading());
		} catch (e) {}
	};
};
