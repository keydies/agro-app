import { Link } from 'react-router-dom';
import { WorkTypesIcon } from '../svg/WorkTypesIcon';

export function WorkTypes() {
	return (
		<ul className='handbook__list'>
			<h3 className='handbook__list-title'>Види робіт</h3>
			<li className='handbook__list-item'>
				<Link to='/home/handbook/article'>
					<WorkTypesIcon />
					Підготовка грунту
				</Link>
			</li>
			<li className='handbook__list-item'>
				<Link to='/home/handbook/article'>
					<WorkTypesIcon />
					Посів
				</Link>
			</li>
			<li className='handbook__list-item'>
				<Link to='/home/handbook/article'>
					<WorkTypesIcon />
					Захист рослини
				</Link>
			</li>
			<li className='handbook__list-item'>
				<Link to='/home/handbook/article'>
					<WorkTypesIcon />
					Збирання врожаю
				</Link>
			</li>
		</ul>
	);
}
