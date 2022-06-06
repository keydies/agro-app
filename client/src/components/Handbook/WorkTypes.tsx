import { WorkTypesIcon } from '../svg/WorkTypesIcon';

export function WorkTypes() {
	return (
		<ul className='handbook__list'>
			<h3 className='handbook__list-title'>Види робіт</h3>
			<li className='handbook__list-item'>
				<WorkTypesIcon />
				Підготовка грунту
				<span>
					:головний етап перед посівною. Що потрібно зробити, щоб
					отримати багатий врожай?
				</span>
			</li>
			<li className='handbook__list-item'>
				<WorkTypesIcon />
				Посів
				<span>
					:період для посівної, рекомендації для окремих агрокультур
				</span>
			</li>
			<li className='handbook__list-item'>
				<WorkTypesIcon />
				Захист рослини
				<span>
					:рекомендації наших фахівців з приводу захисту культур, які
					ви вирощуєте
				</span>
			</li>
			<li className='handbook__list-item'>
				<WorkTypesIcon />
				Збирання врожаю
				<span>:строки, рекомендації, додаткова інформація</span>
			</li>
		</ul>
	);
}
