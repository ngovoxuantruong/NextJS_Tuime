'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/swiper.css';

const Slider = () => {
  const slides = [
    { src: '/slider/slider-1.jpg' },
    { src: '/slider/slider-2.jpg' },
    { src: '/slider/slider-3.jpg' },
  ];

  return (
    <div className="w-full h-full relative">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map(({ src }, index) => (
          <SwiperSlide key={index} className="flex flex-col">
            <Image alt="slider" src={src} fill={true} />
            <div className="z-10 text-secondary uppercase text-xl font-light mb-4 ">
              Giảm tới 40%
            </div>

            <h2 className="z-10 text-5xl font-bold mb-5 text-white hover:text-secondary">
              Thức ăn tốt nhất cho thú cưng
            </h2>

            <a href="#!" className="z-10">
              <button className="btn btn-active btn-secondary rounded-2xl px-8 hover:bg-primary hover:border-primary hover:text-white">
                Sản phẩm
              </button>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
