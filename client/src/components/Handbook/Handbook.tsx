import { useEffect } from 'react';

import { fetchArticles } from '../../asyncActions/fetchArticles';
import { useAppDispatch } from '../../hooks/redux';
import '../../scss/Handbook.scss';
import { Agriculture } from './Agriculture';

import { WorkTypes } from './WorkTypes';

export function Handbook() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchArticles());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='handbook'>
			<h2 className='handbook__title'>Актуальний список статей</h2>
			<div className='handbook__navigation'>
				<Agriculture />
				<WorkTypes />
			</div>
		</div>
	);
}
