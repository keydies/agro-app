import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { addAgriculture } from '../../store/reducers/areaSlice';

import '../../scss/SelectAgriculture.scss';

export function SelectAgriculture() {
	const dispatch = useAppDispatch();

	const getSelectedItem = (event: any) => {
		dispatch(addAgriculture(event.currentTarget.textContent));
	};

	return (
		<div className='select-agriculture'>
			<div className='select-agriculture__inner'>
				<h2 className='select-agriculture__title'>
					Оберіть агрокультуру
				</h2>
				<div className='select-agriculture__options'>
					<div className='select-agriculture__option'>
						<label htmlFor='wheat' onClick={getSelectedItem}>
							Пшениця
						</label>
						<span>
							<input type='radio' name='agriculture' id='wheat' />
							<span className='checkmark'></span>
						</span>
					</div>
					<div className='select-agriculture__option'>
						<label htmlFor='corn' onClick={getSelectedItem}>
							Кукурудза
						</label>
						<span>
							<input type='radio' name='agriculture' id='corn' />
							<span className='checkmark'></span>
						</span>
					</div>
					<div className='select-agriculture__option'>
						<label htmlFor='sunflower' onClick={getSelectedItem}>
							Соняшник
						</label>
						<span>
							<input
								type='radio'
								name='agriculture'
								id='sunflower'
							/>
							<span className='checkmark'></span>
						</span>
					</div>
					<div className='select-agriculture__option'>
						<label htmlFor='soy' onClick={getSelectedItem}>
							Соя
						</label>
						<span>
							<input type='radio' name='agriculture' id='soy' />
							<span className='checkmark'></span>
						</span>
					</div>
				</div>
				<div className='select-agriculture__next-page'>
					<Link to='/home/handbook/create-plan/about-area'>
						Наступний крок
					</Link>
				</div>
				<div className='select-agriculture__info'>
					Примітка: в залежності від вибору агрокультури, загальна
					вартість обробітку буде відрізнятись
				</div>
			</div>
		</div>
	);
}
