import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { handleModal } from '../../store/reducers/headerBurgerSlice';
import { logoutUser } from '../../store/reducers/userSlice';

import '../../scss/Home.scss';

export function ResponsiveMenu() {
	const dispatch = useAppDispatch();
	return (
		<nav className='menu__navigation'>
			<ul className='menu__navigation-list'>
				<NavLink
					to='/home/guide'
					className='menu__navigation-item'
					onClick={() => dispatch(handleModal())}
				>
					Гайд
				</NavLink>
				<NavLink
					to='/home/handbook'
					className='menu__navigation-item'
					onClick={() => dispatch(handleModal())}
				>
					Довідник
				</NavLink>
				<NavLink
					to='/home/plan'
					className='menu__navigation-item'
					onClick={() => dispatch(handleModal())}
				>
					Створити план
				</NavLink>
				<NavLink
					to='/home/profile'
					className='menu__navigation-item'
					onClick={() => dispatch(handleModal())}
				>
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