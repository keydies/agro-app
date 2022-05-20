import { useState } from 'react';
import { Menu } from './Menu';

export function Header() {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [className, setClassName] = useState<string>('header__burger');
	const [active, setActive] = useState<boolean>(false);

	const handleModal = () => {
		setOpenModal(!openModal);
		setActive(!active);
		!active
			? setClassName('header__burger active')
			: setClassName('header__burger');
	};
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__logo'>Agro App</div>
				<Menu className='header' />
				<div className={className} onClick={handleModal}>
					<span></span>
				</div>
			</div>
			{openModal ? <Menu className='menu' /> : null}
		</header>
	);
}
