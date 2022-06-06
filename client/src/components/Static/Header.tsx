import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { DesktopMenu } from './DesktopMenu';

import { handleModal } from '../../store/reducers/headerBurgerSlice';
import { ResponsiveMenu } from './ResponsiveMenu';

export function Header() {
	const burgerClassName = useAppSelector(
		state => state.headerBurgerReducer.burgerClassName
	);
	const openModal = useAppSelector(
		state => state.headerBurgerReducer.openModal
	);
	const dispatch = useAppDispatch();
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__logo'>Agro App</div>
				<DesktopMenu />
				<div
					className={burgerClassName}
					onClick={() => dispatch(handleModal())}
				>
					<span></span>
				</div>
			</div>
			{openModal ? <ResponsiveMenu /> : null}
		</header>
	);
}
