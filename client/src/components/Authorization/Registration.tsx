import { FormEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import {
	changeEmailValue,
	changePasswordValue,
	changeUsernameValue
} from '../../store/reducers/registrationFormSlice';

import '../../scss/Auth.scss';

export function Registration(): JSX.Element {
	const { email, username, password } = useAppSelector(
		state => state.registrationFormReducer
	);
	const dispatch = useAppDispatch();
	return (
		<form
			className='registration-form'
			onSubmit={(event: FormEvent<HTMLFormElement>) =>
				event.preventDefault()
			}
		>
			<div className='registration-form__email'>
				<label
					className='registration-form__email-label'
					htmlFor='registration-email'
				>
					Email:
				</label>
				<input
					className='registration-form__email-input'
					id='registration-email'
					value={email}
					onChange={(event: FormEvent<HTMLInputElement>) =>
						dispatch(changeEmailValue(event.currentTarget.value))
					}
					type='email'
					placeholder='Введіть свою пошту'
				/>
			</div>
			<div className='registration-form__username'>
				<label
					className='registration-form__username-label'
					htmlFor='registration-name'
				>
					Ім'я:
				</label>
				<input
					className='registration-form__username-input'
					id='registration-name'
					value={username}
					onChange={(event: FormEvent<HTMLInputElement>) =>
						dispatch(changeUsernameValue(event.currentTarget.value))
					}
					type='name'
					placeholder='Введіть своє ім`я'
				/>
			</div>
			<div className='registration-form__password'>
				<label
					className='registration-form__password-label'
					htmlFor='registration-password'
				>
					Пароль:
				</label>
				<input
					className='registration-form__password-input'
					id='registration-password'
					value={password}
					onChange={(event: FormEvent<HTMLInputElement>) =>
						dispatch(changePasswordValue(event.currentTarget.value))
					}
					type='password'
					placeholder='Введіть свій пароль'
				/>
			</div>
			<div className='registration-form__sign-in'>
				<button className='registration-form__sign-in-button'>
					Зареєструватись
				</button>
			</div>
		</form>
	);
}
