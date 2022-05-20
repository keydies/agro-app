import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../store/reducers/userSlice';
import { useAppDispatch } from '../../hooks/redux';

import '../../scss/Home.scss';

interface IMenuProps {
	className: string;
}

export const Menu = ({ className }: IMenuProps) => {
	const dispatch = useAppDispatch();
	return (
		<nav className={`${className}__navigation`}>
			<ul className={`${className}__navigation-list`}>
				<NavLink
					to='/home/guide'
					className={`${className}__navigation-item`}
				>
					Гайд
				</NavLink>
				<NavLink
					to='/home/plan'
					className={`${className}__navigation-item`}
				>
					Створити план
				</NavLink>
				<NavLink
					to='/home/profile'
					className={`${className}__navigation-item`}
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
