import axios from 'axios';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Plan } from './Plan';

export function FinalPlan() {
	const [saved, setSaved] = useState(false);
	const totalPriceData = useAppSelector(
		state => state.calculationsReducer.totalPrice
	);
	const planInfo = useAppSelector(state => state.areaReducer);
	const planCalculateData = useAppSelector(
		state => state.calculationsReducer.totalPrice
	);
	const userId = useAppSelector(state => state.userReducer.currentUser.id);

	const savePlan = async () => {
		await axios.post(`http://localhost:5000/api/area-plan`, {
			...planInfo,
			...planCalculateData,
			_id: userId
		});
		setSaved(true);
	};

	return (
		<div className='final-plan'>
			{!saved ? (
				<div className='final-plan__inner'>
					<div className='final-plan__title title'>План</div>
					<Plan />
					<h2 className='final-plan__title'>Деталі</h2>
					<div className='final-plan__details'>
						<div className='final-plan__detail'>
							Загальна вартість: {totalPriceData.totalPrice} грн.
						</div>
						<div className='final-plan__detail'>
							Витрати пального: {totalPriceData.DT} грн.
						</div>
						<div className='final-plan__detail'>
							Насіння: {totalPriceData.seed} грн.
						</div>
						<div className='final-plan__detail'>
							Міндобрива: {totalPriceData.fertilizers} грн.
						</div>
						<div className='final-plan__detail'>
							Сульфат амонію: {totalPriceData.sulfate} грн.
						</div>
						<div className='final-plan__detail'>
							Селітра аміачна: {totalPriceData.saltpeter} грн.
						</div>
						<div className='final-plan__detail'>
							Гербіцид: {totalPriceData.herbicide} грн.
						</div>
						<div className='final-plan__detail'>
							Фунгіцид: {totalPriceData.fungicide} грн.
						</div>
						<div className='final-plan__detail'>
							Мікро мінерали: {totalPriceData.microMinerals} грн.
						</div>
						<div className='final-plan__detail'>
							Інсектицид: {totalPriceData.insecticide} грн.
						</div>
						<div className='final-plan__detail'>
							Карбамід: {totalPriceData.urea} грн.
						</div>
						<div className='final-plan__detail'>
							Цинк: {totalPriceData.zinc} грн.
						</div>
					</div>
					<button className='final-plan__save' onClick={savePlan}>
						Зберегти план
					</button>
				</div>
			) : (
				<div className='final-plan__saved'>
					Ваш план збережено! <br /> Щоб переглянути, перейдіть у
					розділ "Ваші плани"
				</div>
			)}
		</div>
	);
}
