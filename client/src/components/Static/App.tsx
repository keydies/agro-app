import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { auth } from '../../asyncActions/auth';

import { Auth } from '../../pages/Auth';
import { Home } from '../../pages/Home';

import '../../scss/App.scss';

export function App(): JSX.Element {
	const isAuth = useAppSelector(state => state.userReducer.isAuth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(auth());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		!isAuth
			? navigate('auth/login', { replace: true })
			: navigate('home/guide', { replace: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth]);

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
