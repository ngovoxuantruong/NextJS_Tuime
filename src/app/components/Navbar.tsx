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

const Navbar = () => {
  interface MenuItem {
    label: string;
    pathName?: string;
    subMenu?: SubMenuItem[];
  }

  interface SubMenuItem {
    label: string;
    pathName: string;
  }

  // Main menu and subMenu
  const menuTitle: MenuItem[] = [
    { label: 'Trang chủ', pathName: '/' },
    { label: 'Giới thiệu', pathName: '/introduce' },
    {
      label: 'Sản phẩm',
      pathName: '/products',
      subMenu: [
        { label: 'Tất cả', pathName: '' },
        { label: 'Đồ cho chó', pathName: '' },
        { label: 'Đồ cho mèo', pathName: '' },
        { label: 'Chim cảnh', pathName: '' },
        { label: 'Cá cảnh', pathName: '' },
      ],
    },
    {
      label: 'Dịch vụ',
      pathName: '/service',
      subMenu: [
        { label: 'Dịch vụ phối giống', pathName: '/service' },
        { label: 'Dịch vụ khám sức khoẻ Pet', pathName: '/service' },
        { label: 'Dịch vụ chăm sóc Pet', pathName: '/service' },
      ],
    },
    {
      label: 'Tin tức',
      pathName: '/news',
      subMenu: [{ label: 'Kiến thức', pathName: '/news' }],
    },
    {
      label: 'Thư viện',
      pathName: '/library',
      subMenu: [
        { label: 'Thư viện ảnh', pathName: '/library' },
        { label: 'Thư viện video', pathName: '/library' },
      ],
    },
    { label: 'Liên hệ', pathName: '/contact' },
  ];

  const pathname = usePathname();

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
            {menuTitle.map(({ label, pathName, subMenu }, index) => (
              <li
                key={index}
                className={clsx(
                  'group relative py-1',
                  pathname === pathName ? 'text-secondary' : '',
                )}
              >
                <Link
                  className="w-auto hover:text-secondary link:text-secondary focus:!text-secondary focus:!bg-primary font-normal pl-1"
                  href={pathName ? pathName : '/'}
                >
                  {label}
                  {subMenu && <BsChevronDown size="0.7rem" />}
                </Link>
                {subMenu && (
                  <ul className="group-hover:block hidden w-fit p-2 bg-base-100 text-black rounded-none divide-y top-100% left-0 mt-10 absolute z-50">
                    {subMenu.map(({ label, pathName }, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          className="group-hover:block hidden whitespace-nowrap normal-case rounded-none hover:!text-primary focus:!text-primary focus:!bg-gray-200 "
                          href={pathName}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
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
