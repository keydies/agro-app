import { Route, Routes } from 'react-router-dom';
import { Handbook } from '../components/Handbook/Handbook';

import { Header } from '../components/Static/Header';

import '../scss/Home.scss';

export function Home() {
	return (
		<div className='home-page'>
			<Header />
			<Routes>
				<Route path='/handbook' element={<Handbook />} />
			</Routes>
		</div>
	);
}
