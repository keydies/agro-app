import { useEffect, FormEvent, useState } from 'react';
import { fetchRegions } from '../../asyncActions/fetchRegions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import {
	searchRegion,
	showAllRegionsAfterClearInput
} from '../../store/reducers/regionsSlice';
import { addRegion } from '../../store/reducers/areaSlice';

import '../../scss/CreatePlan.scss';
import { Link } from 'react-router-dom';

export function Region() {
	const dispatch = useAppDispatch();
	const regions = useAppSelector(state => state.regionsReducer.regions);
	const searchedRegion = useAppSelector(
		state => state.regionsReducer.searchedRegion
	);
	const searchActive = useAppSelector(
		state => state.regionsReducer.searchActive
	);
	const region = useAppSelector(state => state.areaReducer.region);

	useEffect(() => {
		dispatch(fetchRegions());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [search, setSearch] = useState('');
	const searchInputRegion = () => {
		if (!search) return;
		const searchedRegion = regions.filter(
			region => region.regionName === search
		);
		dispatch(searchRegion(searchedRegion));
	};

	useEffect(() => {
		if (!search) {
			dispatch(showAllRegionsAfterClearInput());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	const addRegionToList = (event: any) => {
		const regionTitle = event.currentTarget.textContent;
		dispatch(addRegion(regionTitle));
	};

	return (
		<div className='region'>
			<h2 className='region__title'>
				Виберіть регіон, де знаходиться ваша земельна ділянка
			</h2>
			<div className='region__search-field'>
				<input
					type='text'
					placeholder='Пошук'
					value={search}
					onChange={(event: FormEvent<HTMLInputElement>) =>
						setSearch(event.currentTarget.value)
					}
				/>
				<button className='region__button' onClick={searchInputRegion}>
					Знайти
				</button>
			</div>
			<div className='region__items'>
				{!searchActive
					? regions.map(region => (
							<div
								className='region__item'
								key={region._id}
								onClick={addRegionToList}
							>
								{region.regionName}
							</div>
					  ))
					: searchedRegion.map(region => (
							<div
								className='region__item'
								key={region._id}
								onClick={addRegionToList}
							>
								{region.regionName}
							</div>
					  ))}
			</div>
			{region ? (
				<div className='info next-page'>
					{`${region} додана до списку`}
					<Link to='/home/handbook/create-plan/agriculture'>
						Наступний крок
					</Link>
				</div>
			) : null}
		</div>
	);
}
