import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import '../../scss/FinalPlan.scss';
import {
	calculateCornPrice,
	calculateSunflowerAndSoyPrice,
	calculateWheatPrice,
	showCornDetails,
	showSunflowerAndSoyDetails,
	showWheatDetails
} from '../../store/reducers/calculationsSlice';
import { Plan } from './Plan';

export function ConfirmPlan() {
	const { agriculture, squareSize } = useAppSelector(
		state => state.areaReducer
	);

	const dispatch = useAppDispatch();

	const calculatePlan = () => {
		if (agriculture === 'Пшениця') {
			dispatch(calculateWheatPrice(squareSize));
			dispatch(showWheatDetails(squareSize));
		}
		if (agriculture === 'Кукурудза') {
			dispatch(calculateCornPrice(squareSize));
			dispatch(showCornDetails(squareSize));
		}
		if (agriculture === 'Соняшник') {
			dispatch(calculateSunflowerAndSoyPrice(squareSize));
			dispatch(showSunflowerAndSoyDetails(squareSize));
		}
		if (agriculture === 'Соя') {
			dispatch(calculateSunflowerAndSoyPrice(squareSize));
			dispatch(showSunflowerAndSoyDetails(squareSize));
		}
	};
	return (
		<div className='final-plan'>
			<div className='final-plan__inner'>
				<h2 className='final-plan__title'>
					Створити план з наступними даними
				</h2>
				<Plan />
				<Link
					to='/home/handbook/create-plan/final-plan'
					className='final-plan__create-plan'
					onClick={calculatePlan}
				>
					Створити план
				</Link>
			</div>
		</div>
	);
}
