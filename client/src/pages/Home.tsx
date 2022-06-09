import { Route, Routes } from 'react-router-dom';
import { Handbook } from '../components/Handbook/Handbook';
import { Article } from '../components/Handbook/Article';
import { Region } from '../components/CreatePlan/Region';
import { Header } from '../components/Static/Header';

import '../scss/Home.scss';
import { SelectAgriculture } from '../components/CreatePlan/SelectAgriculture';
import { AboutArea } from '../components/CreatePlan/AboutArea';
import { ConfirmPlan } from '../components/CreatePlan/ConfirmPlan';
import { FinalPlan } from '../components/CreatePlan/FinalPlan';
import { UserPlans } from '../components/UserPlans/UserPlans';
import { Slider } from '../components/Slider/Slider';

export function Home() {
	return (
		<div className='home-page'>
			<Header />
			<Routes>
				<Route path='handbook' element={<Handbook />} />
				<Route path='handbook/article' element={<Article />} />
				<Route
					path='handbook/create-plan/region'
					element={<Region />}
				/>
				<Route
					path='handbook/create-plan/agriculture'
					element={<SelectAgriculture />}
				/>
				<Route
					path='handbook/create-plan/about-area'
					element={<AboutArea />}
				/>
				<Route
					path='handbook/create-plan/confirm-plan'
					element={<ConfirmPlan />}
				/>
				<Route
					path='handbook/create-plan/final-plan'
					element={<FinalPlan />}
				/>
				<Route path='plans' element={<UserPlans />} />
				<Route path='guide' element={<Slider />} />
			</Routes>
		</div>
	);
}
