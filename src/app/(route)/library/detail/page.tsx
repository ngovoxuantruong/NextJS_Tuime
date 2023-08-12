'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@/app/styles/swiper-image-button.css';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Title from '@/app/components/ui/Title';
import Link from 'next/link';
import { FaRegImages } from 'react-icons/fa';
import FacebookComment from '@/app/components/ui/FacebookComment';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share';

type imageLibrary = {
  image: string;
  title: string;
  src?: string;
};

const Page = () => {
  const imageLibrary: imageLibrary[] = [
    {
      image: '/library/cat1.jpg',
      title: 'Loại mèo nổi tiếng hiện nay',
      src: '',
    },
    {
      image: '/library/cat2.jpg',
      title: 'Những chú mèo đáng yêu nhất thế giới. P2',
      src: '',
    },
    { image: '/library/dog1.jpg', title: 'Các giống chó', src: '' },
    {
      image: '/library/other-pets.jpg',
      title: 'Các loài thú cưng hot',
      src: '',
    },
    {
      image: '/library/cat2.jpg',
      title: 'Những chú mèo đáng yêu nhất thế giới. P2',
      src: '',
    },
  ];

  const postUrl = 'https://localhost:3001';

  return (
    <section>
      <Breadcrumb
        breadcrumbTitle={[
          { title: 'Thư viện ảnh', src: '#!' },
          { title: 'Giống chó', src: '#!' },
        ]}
      />
      <div className="container max-w-[1200px] h-auto py-14">
        <Title label="Loại mèo nổi tiếng hiện nay" />

        {/* Detail pets */}
        <div className="repeater-box grid-cols-4 auto-rows-auto !gap-[10px] mb-5">
          {imageLibrary.map(({ image }, index) => (
            <article key={index} className="repeater-item group !p-[10px]">
              <div className="w-full h-auto top-0 left-0 rounded-[5px] overflow-hidden relative">
                <Link
                  href={'#!'}
                  style={{ backgroundImage: `url(${image})` }}
                  className="background-widget hover:scale-110 hover:brightness-75"
                ></Link>
                <Link
                  href={'#!'}
                  className="w-10 white text-3xl text-center p-2 top-1/2 left-1/2 h-10 -translate-x-1/2 -translate-y-1/2 duration-300 scale-0 group-hover:scale-100 absolute inline-flex "
                ></Link>
              </div>
            </article>
          ))}
        </div>

        {/* Facebook comment iframe */}
        <div className="fb:comment my-5">
          <FacebookComment url={postUrl} />
        </div>

        {/* Tagss and share */}
        <div className="w-full h-auto top-0 left-0 pt-5 pb-3 mb-8 ">
          <div className="flex items-center justify-between">
            {/* Tags */}
            <div className="w-1/2 h-auto flex justify-start">
              <div className="w-fit h-auto mr-4 font-medium">Tags:</div>
              <div className="bg-base-100">
                <Link href={'#!'} className="tag">
                  Mèo
                </Link>
              </div>
            </div>
            {/* Share */}
            <div className="w-1/2 h-auto flex items-center justify-end">
              <div className="w-fit h-auto mr-4 font-medium">Share:</div>
              <ul className="flex items-center">
                <li>
                  <FacebookShareButton url={'url'} className="mr-2">
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                </li>
                <li>
                  <TwitterShareButton url={'url'} title={'title'}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other library */}
        <div className="w-full h-auto relative">
          <Title label="Chất lượng tốt nhất" h2="Thư viện khác" />
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper sub-slider"
          >
            {imageLibrary.map(({ image, title }, index) => (
              <SwiperSlide key={index}>
                <article className="repeater-item group w-[366px] h-[388px]">
                  <div className="w-full h-auto top-0 left-0 rounded-[5px] overflow-hidden mb-5 p relative">
                    <Link
                      href={'#!'}
                      style={{ backgroundImage: `url(${image})` }}
                      className="background-widget hover:scale-110 hover:brightness-75"
                    />
                    <Link
                      href={'#!'}
                      className="w-10 white text-3xl text-center p-2 top-1/2 left-1/2 h-10 -translate-x-1/2 -translate-y-1/2 duration-300 scale-0 group-hover:scale-100 absolute inline-flex "
                    >
                      <span
                        className="inline-flex items-center justify-center px-1"
                        title="Xem chi tiết"
                      >
                        <FaRegImages color="white" />
                      </span>
                    </Link>
                  </div>
                  <div className="h-[60px] overflow-hidden">
                    <h3 className="text-base-200 hover:text-primary duration-300 text-xl text-center font-medium pb-5 line-clamp-2">
                      <a href="#!">{title}</a>
                    </h3>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Page;
