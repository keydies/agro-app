import { Navigation } from './Navigation';

export function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__logo'>Agro App</div>
				<Navigation />
			</div>
		</header>
	);
}
