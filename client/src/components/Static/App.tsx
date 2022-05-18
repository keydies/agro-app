import { useEffect } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { Auth } from '../../pages/Auth';
import { Home } from '../../pages/Home';

import '../../scss/App.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { auth } from '../../asyncActions/auth';

export function App(): JSX.Element {
	// TODO: add isAuth from DB
	const isAuth = useAppSelector(state => state.userReducer.isAuth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(auth());
	}, []);

	useEffect(() => {
		!isAuth
			? navigate('auth/login', { replace: true })
			: navigate('home', { replace: true });
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
