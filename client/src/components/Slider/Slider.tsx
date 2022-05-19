import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import React from 'react';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

export function Slider() {
	return (
		<Swiper
			modules={[Navigation, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			onSwiper={swiper => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			<SwiperSlide className='slide'>Slide 1</SwiperSlide>
			<SwiperSlide className='slide'>Slide 2</SwiperSlide>
			<SwiperSlide className='slide'>Slide 3</SwiperSlide>
			<SwiperSlide className='slide'>Slide 4</SwiperSlide>
		</Swiper>
	);
}