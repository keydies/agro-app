import { NavLink, Route, Routes } from 'react-router-dom';

import { Registration } from '../components/Authorization/Registration';
import { Login } from '../components/Authorization/Login';

import '../scss/Auth.scss';

export function Auth() {
	return (
		<div className='auth-page'>
			<div className='auth-page__container'>
				<div className='auth-page__links'>
					<NavLink
						className='auth-page__registration'
						to='registration'
					>
						Реєстрація
					</NavLink>
					<NavLink className='auth-page__login' to='login'>
						Авторизація
					</NavLink>
				</div>
				<Routes>
					<Route path='/'>
						<Route path='registration' element={<Registration />} />
						<Route path='login' element={<Login />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}
