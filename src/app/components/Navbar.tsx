'use client';
import {
  LuSearch,
  LuUser,
  LuFileText,
  LuShoppingCart,
  LuLanguages,
} from 'react-icons/lu';
import { BsChevronDown } from 'react-icons/bs';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { formattingPrice } from '../helpers/formattingPrice';
import { FiTrash } from 'react-icons/fi';
import { Button } from './ui/Button';
import { useState } from 'react';

const Navbar = () => {
  const { data: navbarData } = useQuery({
    queryFn: async () => {
      const { data }: any = await axios.get(
        'https://petstore-api.code-hub.online/client/v1/navigation-menu',
      );

      return data;
    },
    queryKey: ['navbar'],
  });

  const [isCartHovered, setIsCartHovered] = useState(false);

  const handleMouseOver = () => {
    setIsCartHovered(true);
  };

  const handleMouseOut = () => {
    setIsCartHovered(false);
  };

  const currentPathname = usePathname();

  return (
    <div className="bg-primary text-white py-2 w-full">
      <div className="navbar mx-auto max-w-[1200px]">
        {/* Navbar start */}
        <div className="navbar-start">
          <div className="dropdown"></div>
          <Link href={'/'}>
            <Image
              src={'/logo-light.png'}
              alt="logo"
              width={160}
              height={160}
            />
          </Link>
        </div>

        {/* Navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[15px] font-light uppercase">
            {navbarData &&
              navbarData.map(
                ({ name, metadata, sub_categories }: any, index: any) => (
                  <li
                    key={index}
                    className={clsx(
                      'group/nav relative py-1',
                      currentPathname === metadata.slug ? 'text-secondary' : '',
                    )}
                  >
                    <Link
                      className="w-auto hover:text-secondary link:text-secondary focus:!text-secondary focus:!bg-primary font-normal pl-1"
                      href={metadata.slug ? `/${metadata.slug}` : '/'}
                    >
                      {name}
                      {sub_categories.length > 1 && (
                        <BsChevronDown size="0.7rem" />
                      )}
                    </Link>
                    {sub_categories.length > 1 && (
                      <ul className="group-hover/nav:block hidden w-fit p-2 bg-base-100 text-black rounded-none divide-y top-100% -left-1/4 mt-10 absolute z-50">
                        {sub_categories.map(
                          ({ name, metadata }: any, index: any) => (
                            <li key={index}>
                              <Link
                                className="group-hover/nav:block hidden whitespace-nowrap normal-case rounded-none hover:!text-primary focus:!text-primary focus:!bg-gray-200 "
                                href={metadata.slug}
                              >
                                {name}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </li>
                ),
              )}
          </ul>
        </div>

        {/* Navbar end */}
        <div className="navbar-end">
          <button className="btn btn-ghost hover:text-secondary duration-300 btn-circle">
            <LuSearch size={'1.2rem'} />
          </button>

          <button className="btn btn-ghost hover:text-secondary duration-300 btn-circle">
            <LuUser size={'1.2rem'} />
          </button>

          <button className="btn btn-ghost hover:text-secondary duration-300 btn-circle">
            <LuFileText size={'1.2rem'} />
          </button>

          <div className="indicator">
            <span className="indicator-item top-3 right-3 badge badge-secondary">
              9
            </span>
            <button
              className="btn btn-ghost  hover:text-secondary duration-300 btn-circle"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <LuShoppingCart size={'1.2rem'} />
            </button>
            <div
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="w-[350px]  bg-base-100 py-2 px-5 top-full left-0 -translate-x-1/2 shadow-md absolute z-50 duration-300 overflow-hidden"
              style={{ display: isCartHovered ? 'block' : 'none' }}
            >
              <div className="w-full max-h-[320px] !h-auto p-2 overflow-auto relative scrollbar scrollbar-thumbs scrollbar-track ">
                <div className="grid w-full !h-auto grid-cols-1 auto-rows-[120px] gap-1">
                  {/* Product & price & amount */}
                  <article className="py-4 border-b border-solid border-[#e5e5e5]">
                    <div className="w-full h-full relative">
                      <Link
                        href={'#!'}
                        className="w-24 h-24 top-1/2  left-0 bg-no-repeat bg-contain -translate-y-1/2 border border-solid border-[#ededed] hover:border-green-300 duration-100 absolute block"
                        style={{
                          backgroundImage: "url('/product/spnew4.jpg')",
                        }}
                      />
                      <div className="flex flex-col gap-0.5 w-[calc(100%-130px)] h-full top-1/2 left-[110px] -translate-y-1/2 absolute overflow-hidden text-base-200">
                        <Link
                          href={'#!'}
                          className="w-full h-auto text-base line-clamp-1 font-medium"
                        >
                          Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm
                        </Link>
                        <p className="text-sm">270ml</p>
                        <div className="flex items-start justify-between">
                          <p className="text-sm text-primary">
                            {formattingPrice(199500)}đ
                          </p>
                          <p className="text-sm text-gray-400 line-through">
                            {formattingPrice(210000)}đ
                          </p>
                        </div>
                        <p className="text-sm">x1</p>
                      </div>
                      <div className="w-4 h-4 top-1 left-[100%] -translate-x-full inline-flex absolute text-base-200">
                        <FiTrash />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              {/* Total amount */}
              <div className="w-full h-fit py-5 top-0 left-0  text-base-200 border-b border-solid border-[#e5e5e5] relative">
                <div className="w-full h-full flex items-center justify-between relative">
                  <p className="font-medium">Tổng tiền:</p>
                  <p className="font-semibold text-primary">
                    {formattingPrice(199500)}đ
                  </p>
                </div>
              </div>
              {/* Cart & Pay */}
              <div className="w-full h-auto py-5 top-0 left-0  text-base-200 relative">
                <div className="w-full h-full flex items-center justify-between relative">
                  <Button
                    size={'sm'}
                    variant={'primary'}
                    className="hover:bg-secondary hover:text-base-200 border-none"
                  >
                    Giỏ hàng
                  </Button>
                  <Button size={'sm'}>Thanh toán</Button>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-ghost hover:text-secondary duration-300 btn-circle">
            <LuLanguages size={'1.2rem'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
