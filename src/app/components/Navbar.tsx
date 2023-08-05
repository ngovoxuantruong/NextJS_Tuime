import Image from 'next/image';
import Link from 'next/link';
import {
  LuSearch,
  LuUser,
  LuFileText,
  LuShoppingCart,
  LuLanguages,
} from 'react-icons/lu';

const Navbar = () => {
  interface MenuItem {
    label: string;
    url?: string;
    subMenu?: SubMenuItem[];
  }

  interface SubMenuItem {
    label: string;
    url: string;
  }

  // Main menu and subMenu
  const menuTitle: MenuItem[] = [
    { label: 'Trang chủ', url: '/' },
    { label: 'Giới thiệu', url: '/introduce' },
    {
      label: 'Sản phẩm',
      subMenu: [
        { label: 'Tất cả', url: '/products' },
        { label: 'Đồ cho chó', url: '' },
        { label: 'Đồ cho mèo', url: '' },
        { label: 'Chim cảnh', url: '' },
        { label: 'Cá cảnh', url: '' },
      ],
    },
    {
      label: 'Dịch vụ',
      subMenu: [
        { label: 'Dịch vụ phối giống', url: '/service' },
        { label: 'Dịch vụ khám sức khoẻ Pet', url: '/service' },
        { label: 'Dịch vụ chăm sóc Pet', url: '/service' },
      ],
    },
    { label: 'Tin tức', subMenu: [{ label: 'Kiến thức', url: '/news' }] },
    {
      label: 'Thư viện',
      subMenu: [
        { label: 'Thư viện ảnh', url: '/library' },
        { label: 'Thư viện video', url: '/library' },
      ],
    },
    { label: 'Liên hệ', url: '/contact' },
  ];

  return (
    <div className="bg-primary text-white p-3 w-full">
      <div className="navbar max-w-[1200px] mx-auto ">
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
            {menuTitle.map(({ label, url, subMenu }, index) => (
              <li
                key={index}
                className=" group first:text-secondary relative pb-1"
              >
                <Link
                  className="w-auto hover:text-secondary focus:!text-secondary focus:!bg-primary"
                  href={url ? url : '/'}
                >
                  {label}
                </Link>
                {subMenu && (
                  <ul className="group-hover:block hidden w-fit p-2 bg-base-100 text-black rounded-none divide-y top-100% left-0 mt-10 absolute z-10">
                    {subMenu.map(({ label, url }, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          className="group-hover:block hidden whitespace-nowrap normal-case rounded-none hover:!text-primary focus:!text-primary focus:!bg-gray-200 "
                          href={url}
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
