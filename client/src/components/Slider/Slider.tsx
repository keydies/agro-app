import { Navigation, A11y, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../../scss/Slider.scss';
import { UserPlans } from '../UserPlans/UserPlans';

const article = require('../../assets/Articles.jpg');
const region = require('../../assets/Region.jpg');
const regionSearch = require('../../assets/RegionSearch.jpg');
const agriculture = require('../../assets/Agriculture.jpg');
const confirmPlan = require('../../assets/ConfirmPlan.jpg');
const savePlan = require('../../assets/SavePlan.jpg');
const cadastral = require('../../assets/Cadastral.jpg');
const userPlans = require('../../assets/UserPlans.jpg');

export function Slider() {
	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			pagination={{ clickable: true }}
			onSwiper={swiper => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			<SwiperSlide>
				<h2>Сторінка з статтями</h2>
				<div>
					На сторінці з статтями, ви можете знайти інформацію, яка
					може знадобитись при обробці вашої земельної ділянки.
				</div>
				<img src={article} alt='Articles' />
			</SwiperSlide>
			<SwiperSlide>
				<h2>Початок роботи зі створення плану</h2>
				<div>
					При переході до створення плану, ви потрапите на сторінку,
					де необхідно вибрати область, де знаходиться ваша ділянка
				</div>
				<img src={region} alt='Region' />
			</SwiperSlide>
			<SwiperSlide>
				<h2>Пошук свого регіону</h2>
				<div>
					Також є можливість ввести назву своєї області, щоб
					пришвидшити процес
				</div>
				<img src={regionSearch} alt='Search Region' />
			</SwiperSlide>
			<SwiperSlide>
				<h2>Вибір агрокультури</h2>
				<div>
					Далі необхідно обрати агрокультуру, яку ви будете
					вирощувати.
				</div>
				<img src={agriculture} alt='Select Agriculture' />
			</SwiperSlide>
			<SwiperSlide>
				<h2>Введення даних про ділянку</h2>
				<div>
					На цій сторінці необхідно ввести кадастровий номер та площу
					вашої земельної ділянки
				</div>
				<img src={cadastral} alt='Cadastral' />
			</SwiperSlide>
			<SwiperSlide>
				<h2>Підтвердження плану</h2>
				<div>
					Вам буде наведено перелік даних для створення плану робіт на
					вашій земельній ділянці. Необхідно перевірити дані та
					підтвердити створення, якщо все правильно
				</div>
				<img src={confirmPlan} alt='Confirm Plan' />
			</SwiperSlide>
			<SwiperSlide>
				<h2>Збереження плану</h2>
				<div>
					Вам буде представлено план робіт для з детальними цінами
				</div>
				<img src={savePlan} alt='Save Plan' />
			</SwiperSlide>
			<SwiperSlide>
				<h2>Ваші плани</h2>
				<div>
					На сторінці представлений список створених вами планів
				</div>
				<img src={userPlans} alt='User plans' />
			</SwiperSlide>
		</Swiper>
	);
}
