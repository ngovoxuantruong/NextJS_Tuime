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
                      'group relative py-1',
                      currentPathname === metadata.slug ? 'text-secondary' : '',
                    )}
                  >
                    <Link
                      className="w-auto hover:text-secondary link:text-secondary focus:!text-secondary focus:!bg-primary font-normal pl-1"
                      href={metadata.slug ? metadata.slug : '/'}
                    >
                      {name}
                      {sub_categories.length > 1 && (
                        <BsChevronDown size="0.7rem" />
                      )}
                    </Link>
                    {sub_categories.length > 1 && (
                      <ul className="group-hover:block hidden w-fit p-2 bg-base-100 text-black rounded-none divide-y top-100% left-0 mt-10 absolute z-50">
                        {sub_categories.map(
                          ({ name, metadata }: any, index: any) => (
                            <li key={index}>
                              <Link
                                className="group-hover:block hidden whitespace-nowrap normal-case rounded-none hover:!text-primary focus:!text-primary focus:!bg-gray-200 "
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
          <button className="btn btn-ghost btn-circle">
            <LuSearch size={'1.2rem'} />
          </button>

          <button className="btn btn-ghost btn-circle">
            <LuUser size={'1.2rem'} />
          </button>

          <button className="btn btn-ghost btn-circle">
            <LuFileText size={'1.2rem'} />
          </button>

          <div className="indicator">
            <span className="indicator-item top-3 right-3 badge badge-secondary">
              9
            </span>
            <button className="btn btn-ghost btn-circle">
              <LuShoppingCart size={'1.2rem'} />
            </button>
          </div>

          <button className="btn btn-ghost btn-circle">
            <LuLanguages size={'1.2rem'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
