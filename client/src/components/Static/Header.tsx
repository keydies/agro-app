import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { Menu } from './Menu';

import { handleModal } from '../../store/reducers/headerBurgerSlice';

export function Header() {
	const className = useAppSelector(
		state => state.headerBurgerReducer.className
	);
	const openModal = useAppSelector(
		state => state.headerBurgerReducer.openModal
	);
	const dispatch = useAppDispatch();
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__logo'>Agro App</div>
				<Menu className='header' />
				<div
					className={className}
					onClick={() => dispatch(handleModal())}
				>
					<span></span>
				</div>
			</div>
			{openModal ? <Menu className='menu' /> : null}
		</header>
	);
}
