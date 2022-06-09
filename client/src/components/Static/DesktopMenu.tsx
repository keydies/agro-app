import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux';

import { logoutUser } from '../../store/reducers/userSlice';

import '../../scss/Home.scss';

export const DesktopMenu = () => {
	const dispatch = useAppDispatch();
	return (
		<nav className='header__navigation'>
			<ul className='header__navigation-list'>
				<NavLink to='/home/guide' className='header__navigation-item'>
					Гайд
				</NavLink>
				<NavLink
					to='/home/handbook'
					className='header__navigation-item'
				>
					Довідник
				</NavLink>
				<NavLink
					to='handbook/create-plan/region'
					className='header__navigation-item'
				>
					Створити план
				</NavLink>
				<NavLink to='/home/plans' className='header__navigation-item'>
					Ваші плани
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
};
