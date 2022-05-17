import { useEffect } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { Auth } from '../../pages/Auth';
import { Home } from '../../pages/Home';

import '../../scss/App.scss';

export function App(): JSX.Element {
	// TODO: add isAuth from DB
	const isAuth = false;
	const navigate = useNavigate();

	useEffect(() => {
		!isAuth
			? navigate('auth/login', { replace: true })
			: navigate('home', { replace: true });
	}, []);

	return (
		<div className='container'>
			<Routes>
				<Route path='/'>
					{!isAuth ? (
						<Route path='auth/*' element={<Auth />} />
					) : (
						<Route path='home/*' element={<Home />} />
					)}
				</Route>
			</Routes>
		</div>
	);
}
