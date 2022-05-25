import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux';

import { logoutUser } from '../../store/reducers/userSlice';
import { handleModal } from '../../store/reducers/headerBurgerSlice';

import { IMenuProps } from '../../types/IMenuProps';

import '../../scss/Home.scss';

export const Menu = ({ className }: IMenuProps) => {
	const dispatch = useAppDispatch();
	return (
		<nav className={`${className}__navigation`}>
			<ul className={`${className}__navigation-list`}>
				<NavLink
					to='/home/guide'
					className={`${className}__navigation-item`}
					onClick={() => dispatch(handleModal())}
				>
					Гайд
				</NavLink>
				<NavLink
					to='/home/plan'
					className={`${className}__navigation-item`}
					onClick={() => dispatch(handleModal())}
				>
					Створити план
				</NavLink>
				<NavLink
					to='/home/profile'
					className={`${className}__navigation-item`}
					onClick={() => dispatch(handleModal())}
				>
					Профіль
				</NavLink>
				<button
					className={`${className}__navigation-item`}
					onClick={() => dispatch(logoutUser())}
				>
					Вийти
				</button>
			</ul>
		</nav>
	);
};
