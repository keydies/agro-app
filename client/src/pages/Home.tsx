import { Route, Routes } from 'react-router-dom';
import { Handbook } from '../components/Handbook/Handbook';
import { Article } from '../components/Handbook/Article';

import { Header } from '../components/Static/Header';

import '../scss/Home.scss';

export function Home() {
	return (
		<div className='home-page'>
			<Header />
			<Routes>
				<Route path='handbook' element={<Handbook />} />
				<Route path='handbook/article' element={<Article />} />
			</Routes>
		</div>
	);
}
