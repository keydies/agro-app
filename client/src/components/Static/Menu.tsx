import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../store/reducers/userSlice';
import { useAppDispatch } from '../../hooks/redux';

import '../../scss/Home.scss';

export function Menu() {
	const dispatch = useAppDispatch();
	return (
		<nav className='menu__navigation'>
			<ul className='menu__navigation-list'>
				<NavLink to='/home/guide' className='menu__navigation-item'>
					Гайд
				</NavLink>
				<NavLink to='/home/plan' className='menu__navigation-item'>
					Створити план
				</NavLink>
				<NavLink to='/home/profile' className='menu__navigation-item'>
					Профіль
				</NavLink>
				<button
					className='menu__navigation-item'
					onClick={() => dispatch(logoutUser())}
				>
					Вийти
				</button>
			</ul>
		</nav>
	);
}
