'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/swiper.css';

const Slider = () => {
  return (
    <div className="w-full h-full relative">
      <Swiper
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col">
          <Image alt="slider" src={'/slider/slider-1.jpg'} fill={true} />
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

        <SwiperSlide className="flex flex-col">
          <Image alt="slider" src={'/slider/slider-2.jpg'} fill={true} />
          <div className="z-10 text-secondary uppercase text-xl font-light mb-4 ">
            Cung cấp các kiến thức chăm sóc cho thú cưng bạn
          </div>

          <h2 className="z-10 text-5xl font-bold mb-5 text-white hover:text-secondary">
            Kiến thức chăm sóc thú cưng
          </h2>

          <a href="#!" className="z-10">
            <button className="btn btn-active btn-secondary rounded-2xl px-8 hover:bg-primary hover:border-primary hover:text-white">
              Sản phẩm
            </button>
          </a>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <Image alt="slider" src={'/slider/slider-3.jpg'} fill={true} />
          <div className="z-10 text-secondary uppercase text-xl font-light mb-4 ">
            100% sản phẩm chính hãng
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
      </Swiper>
    </div>
  );
};

export default Slider;
