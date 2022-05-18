import { FormEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import {
	changeEmailValue,
	changePasswordValue
} from '../../store/reducers/loginFormSlice';

import '../../scss/Auth.scss';
import { login } from '../../asyncActions/login';

export function Login() {
	const dispatch = useAppDispatch();
	const { email, password } = useAppSelector(state => state.loginFormReducer);
	const isLoading = useAppSelector(state => state.userReducer.isLoading);
	return (
		<form
			className='login-form'
			onSubmit={(event: FormEvent<HTMLFormElement>) =>
				event.preventDefault()
			}
		>
			<div className='login-form__email'>
				<label
					className='login-form__email-label'
					htmlFor='login-email'
				>
					Пошта:
				</label>
				<input
					className='login-form__email-input'
					id='login-email'
					value={email}
					onChange={(event: FormEvent<HTMLInputElement>) =>
						dispatch(changeEmailValue(event.currentTarget.value))
					}
					type='email'
					placeholder='Введіть свою пошту'
				/>
			</div>
			<div className='login-form__password'>
				<label
					className='login-form__password-label'
					htmlFor='login-password'
				>
					Пароль:
				</label>
				<input
					className='login-form__password-input'
					id='login-password'
					value={password}
					onChange={(event: FormEvent<HTMLInputElement>) =>
						dispatch(changePasswordValue(event.currentTarget.value))
					}
					type='password'
					placeholder='Введіть свій пароль'
				/>
			</div>
			<div className='login-form__sign-in'>
				{!isLoading ? (
					<button
						className='login-form__sign-in-button'
						onClick={() => dispatch(login(email, password))}
					>
						Увійти
					</button>
				) : (
					<div className='loading'>Loading...</div>
				)}
			</div>
		</form>
	);
}
