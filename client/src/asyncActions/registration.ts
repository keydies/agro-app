import axios from 'axios';
import { AppDispatch } from '../store/store';
import { clearFields } from '../store/reducers/registrationFormSlice';

export const registration = (
	email: string,
	username: string,
	password: string
) => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.post(
				`http://localhost:5000/api/auth/registration`,
				{
					email,
					username,
					password
				}
			);
			dispatch(clearFields());
			alert(response.data.message);
		} catch (e) {}
	};
};
