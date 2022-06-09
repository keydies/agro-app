import { Fragment } from 'react';
import { useAppSelector } from '../../hooks/redux';

export function Plan() {
	const { region, agriculture, squareSize, cadastralNumber } = useAppSelector(
		state => state.areaReducer
	);

	const firstTenNumbers = cadastralNumber.toString().slice(0, 10);
	const secondTwoNumbers = cadastralNumber.toString().slice(10, 12);
	const thirdTreeNumbers = cadastralNumber.toString().slice(12, 15);
	const fourthFourNumbers = cadastralNumber.toString().slice(15, 19);

	return (
		<Fragment>
			<div className='final-plan__region'>Регіон: {region}</div>
			<div className='final-plan__agriculture'>
				Агрокультура: {agriculture}
			</div>
			<div className='final-plan__square'>
				Площа ділянки: {squareSize} Га
			</div>
			<div className='final-plan__cadastral'>
				<span className='final-plan__cadastral-title'>
					Кадастровий номер:
				</span>
				{`${firstTenNumbers} : ${secondTwoNumbers} : ${thirdTreeNumbers} : ${fourthFourNumbers}`}
			</div>
		</Fragment>
	);
}
