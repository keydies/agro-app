import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PlantIcon } from '../svg/PlantIcon';

export function Agriculture() {
	return (
		<Fragment>
			<h3 className='handbook__list-title'>Агрокультура</h3>
			<ul className='handbook__list'>
				<li className='handbook__list-item'>
					<Link to='/home/handbook/wheat'>
						<PlantIcon />
						Пшениця
						<span>
							:загальні рекомендації, ціноутворення, догляд
						</span>
					</Link>
				</li>
				<li className='handbook__list-item'>
					<PlantIcon />
					Сонях
					<span>
						:найкраща місцевість, строки посадки, рекомендації по
						догляду
					</span>
				</li>
				<li className='handbook__list-item'>
					<PlantIcon />
					Кукурудза
					<span>
						:ціни. Як виростити та зайнятись продажем кукурудзи?
					</span>
				</li>
				<li className='handbook__list-item'>
					<PlantIcon />
					Соя
					<span>
						:ціноутворення на ринку сої. Вигідно зараз вирощувати
						агрокультуру?
					</span>
				</li>
			</ul>
		</Fragment>
	);
}
