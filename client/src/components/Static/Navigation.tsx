import { useAppDispatch } from '../../hooks/redux';

import { logoutUser } from '../../store/reducers/userSlice';
import { NavLink } from 'react-router-dom';

import '../../scss/Home.scss';

export function Navigation() {
	const dispatch = useAppDispatch();
	return (
		<nav className='header__navigation'>
			<ul className='header__navigation-list'>
				<NavLink to='/guide' className='header__navigation-item'>
					Гайд
				</NavLink>
				<NavLink to='/plan' className='header__navigation-item'>
					Створити план
				</NavLink>
				<NavLink to='/profile' className='header__navigation-item'>
					Профіль
				</NavLink>
				<button
					className='header__navigation-item'
					onClick={() => dispatch(logoutUser())}
				>
					Вийти
				</button>
			</ul>
		</nav>
	);
}
