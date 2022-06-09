import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import '../../scss/AboutArea.scss';
import {
	addAreaSquare,
	addCadastralNumber
} from '../../store/reducers/areaSlice';

export function AboutArea() {
	const [cadastral, setCadastral] = useState('');
	const [square, setSquare] = useState('');

	const dispatch = useAppDispatch();

	const addInfoAboutArea = () => {
		dispatch(addCadastralNumber(Number(cadastral)));
		dispatch(addAreaSquare(Number(square)));
		setCadastral('');
		setSquare('');
	};

	return (
		<div className='about-area'>
			<div className='about-area__inner'>
				<h2 className='about-area__title'>
					Введіть дані про вашу ділянку
				</h2>
				<div className='about-area__cadastral'>
					<label htmlFor='cadastral'>Введіть кадастровий номер</label>
					<input
						type='number'
						value={cadastral}
						onChange={(event: FormEvent<HTMLInputElement>) =>
							setCadastral(event.currentTarget.value)
						}
						name='cadastral'
						id='cadastral'
						placeholder='XXXXXXXXXX:XX:XXX:XXXX'
					/>
				</div>
				<div className='about-area__square'>
					<label htmlFor='square'>Введіть площу вашої ділянки</label>
					<input
						type='number'
						value={square}
						onChange={(event: FormEvent<HTMLInputElement>) =>
							setSquare(event.currentTarget.value)
						}
						name='square'
						id='square'
						placeholder='2 Га'
					/>
				</div>
				<div className='about-area__btns'>
					<div className='about-area__add-info'>
						<button onClick={addInfoAboutArea}>Додати дані</button>
					</div>
					<div className='about-area__next-page'>
						<Link to='/home/handbook/create-plan/confirm-plan'>
							Наступний крок
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
