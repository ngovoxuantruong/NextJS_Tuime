'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/swiper.css';
import { Button } from '@/app/components/UI/Button';

const Slider = () => {
  const sliders = [
    {
      src: '/slider/slider-1.jpg',
      label: 'Giảm tới 40%',
      h2: 'Thức ăn tốt nhất cho thú cưng',
    },
    {
      src: '/slider/slider-2.jpg',
      label: '100% sản phẩm chính hãng',
      h2: 'Thức ăn tốt nhất cho thú cưng',
    },
    {
      src: '/slider/slider-3.jpg',
      label: 'Cung cấp kiến thức chăm sóc cho thú cưng bạn',
      h2: 'Kiến thức chăm sóc thú cưng',
    },
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
        {sliders.map(({ src, label, h2 }, index) => (
          <SwiperSlide className="flex flex-col" key={index}>
            <Image alt="slider" src={src} fill={true} />
            <div className="z-10 text-secondary uppercase text-xl font-light mb-4 ">
              {label}
            </div>

            <h2 className="z-10 text-5xl font-bold mb-5 text-white hover:text-secondary duration-500 cursor-pointer">
              {h2}
            </h2>

            <Button>Sản phẩm</Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
