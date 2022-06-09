import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../asyncActions/auth';
import { useAppSelector } from '../../hooks/redux';

import '../../scss/UserPlans.scss';

export function UserPlans() {
	const dispatch = useDispatch();

	useEffect(() => {
		//@ts-ignore
		dispatch(auth());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const userPlans = useAppSelector(
		state => state.userReducer.currentUser.areas
	);
	return (
		<div className='user-plans'>
			<h2 className='user-plans__title'>Ваші плани</h2>
			<div className='user-plans__inner'>
				<div>
					{userPlans.map((plan, index) => (
						<div
							className='user-plans__plan'
							key={plan.planData._id}
						>
							<div className='user-plans__plan-title'>
								{`${index + 1}. `}
								{`Кадастровий номер: ${plan.planData.cadastralNumber}`}
								<div className='info'>
									<h3 className='info__title'>Інформація</h3>
									<div className='info__region'>{`Регіон: ${plan.planData.region}`}</div>
									<div className='info__agriculture'>{`Агрокультура: ${plan.planData.agriculture}`}</div>
								</div>
								<div className='user-plans__details'>
									<div className='user-plans__detail'>
										{`Пальне: ${plan.planData.DT} грн.`}
									</div>
									<div className='user-plans__detail'>
										{`Насіння: ${plan.planData.seed} грн.`}
									</div>
									<div className='user-plans__detail'>
										{`Міндобрива: ${plan.planData.fertilizers} грн.`}
									</div>
									<div className='user-plans__detail'>
										{`Сульфат амонію: ${plan.planData.sulfate} грн.`}
									</div>
									<div className='user-plans__detail'>
										{`Селітра аміачна: ${plan.planData.saltpeter} грн.`}
									</div>
									<div className='user-plans__detail'>
										{`Гербіцид: ${plan.planData.herbicide} грн.`}
									</div>
									<div className='user-plans__detail'>
										{`Мікро
									мінерали: ${plan.planData.microMinerals} грн.`}
									</div>
									<div className='user-plans__detail'>
										{`Інсектицид: ${plan.planData.insecticide} грн.`}
									</div>
									<div className='user-plans__detail'>
										{`Карбамід: ${plan.planData.urea} грн.`}
									</div>
									<div className='user-plans__detail'>
										{`Цинк ${plan.planData.zinc} грн.`}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
