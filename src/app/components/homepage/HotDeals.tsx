'use client';

import Link from 'next/link';
import Title from '@/app/components/UI/Title';

import {
  TbHeart,
  TbShoppingBag,
  TbSearch,
  TbArrowsExchange2,
} from 'react-icons/tb/';
import { formattingPrice } from '@/app/helpers/formattingPrice';
import { useEffect, useState } from 'react';

const HotDeals = () => {
  const hotDeals = [
    {
      image: 'hot-deals/hot-deal-1.jpg',
      h3: 'Sữa Bột Cho Chó Con Beaphar Lactol Puppy Milk (500g)',
      currentPrice: 389500,
      salePrice: 450000,
      description:
        'Với công thức đặc biệt giúp chó có thể nạp dinh dưỡng trong sữa nhanh nhất có thể.',
    },
    {
      image: '/hot-deals/hot-deal-2.jpg',
      h3: 'Đồ chơi gậy cotton (21cm)',
      currentPrice: 156750,
      salePrice: 170000,
      description:
        'Đồ chơi xương cotton cho chó cưng của bạn. Sản phẩm chất lượng',
    },
  ];

  // Pass your cooldown hot deals hours to useState ( before * 3600 second )
  const [cooldown, setCooldown] = useState(26 * 3600);

  useEffect(() => {
    let cooldownInterval: any;

    if (cooldown > 0) {
      cooldownInterval = setInterval(() => {
        setCooldown((prevCooldown) => prevCooldown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(cooldownInterval);
    };
  }, [cooldown]);

  const formatTime = (timeInSeconds: number) => {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <section className="w-full h-auto bg-[#f2f2f2] py-12">
      <section className="container max-w-[1200px]">
        <Title label="Chất lượng tốt nhất" h2="Ưu đãi trong ngày" />
        <div className="repeater-box grid-cols-2">
          {hotDeals.map(
            ({ image, h3, currentPrice, salePrice, description }, index) => (
              <article
                key={index}
                className="repeater-item border-solid border-[#f5f4f5] border-2 rounded-md"
              >
                <div className="flex justify-around">
                  <div className="group w-[49%] h-auto p-4 border-solid overflow-hidden border-[#d0d0d0] border-[1px] relative">
                    <Link
                      href={'/'}
                      className={`bg-no-repeat bg-center bg-contain w-full h-0 top-0 left-0 block pb-[100%] hover:scale-110 duration-300`}
                      style={{ backgroundImage: `url(${image})` }}
                    />
                    <Link className="icon absolute top-5 right-5" href="">
                      <TbHeart className="text-4xl p-2 bg-gray-100 rounded-3xl hover:bg-primary hover:text-white"></TbHeart>
                    </Link>
                    <div className="listIcont absolute top-16 right-5 opacity-0 group-hover:opacity-100 ease-in-out transition duration-300">
                      <Link className="icon" href="">
                        <TbShoppingBag className="text-4xl p-2 bg-gray-100 rounded-3xl mb-2 hover:bg-primary hover:text-white"></TbShoppingBag>
                      </Link>
                      <Link className="icon" href="">
                        <TbSearch className="text-4xl p-2 bg-gray-100 rounded-3xl mb-2 hover:bg-primary hover:text-white"></TbSearch>
                      </Link>
                      <Link className="icon" href="">
                        <TbArrowsExchange2 className="text-4xl p-2 bg-gray-100 rounded-3xl mb-2 hover:bg-primary hover:text-white"></TbArrowsExchange2>
                      </Link>
                    </div>
                  </div>

                  <div className="w-[49%] h-auto px-4 relative">
                    <div className="align-middle items-center justify-center w-full h-auto bg-secondary rounded-[3px] py-[3px] mb-4 inline-flex">
                      <div className="text-primary font-medium tracking-widest">
                        {formatTime(cooldown)}
                      </div>
                    </div>
                    <h3 className="h-auto w-full text-base-200 text-lg mb-3 text-left leading-7 font-medium text-ellipsis whitespace-nowrap overflow-hidden hover:text-primary duration-300 cursor-pointer">
                      {h3}
                    </h3>
                    <div className=" flex items-center mb-4">
                      <div className="w-fit text-primary font-semibold text-lg mr-4">
                        {formattingPrice(salePrice)} đ
                      </div>
                      <div className="w-fit text-[#999] font-light line-through">
                        {formattingPrice(currentPrice)} đ
                      </div>
                    </div>
                    <div className="text-base-200 text-[15px]">
                      {description}.
                    </div>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </section>
    </section>
  );
};

export default HotDeals;
