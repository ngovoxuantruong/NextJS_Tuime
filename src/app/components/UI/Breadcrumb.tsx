'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import bg1 from '../../../../public/breadcrumb/bg1.jpg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathName = usePathname();
  const [breadcrumbTitle, setBreadcrumbTitle] = useState('');

  useEffect(() => {
    switch (pathName) {
      case '/introduce':
        setBreadcrumbTitle('Giới thiệu');
        break;
      case '/products':
        setBreadcrumbTitle('Sản phẩm');
        break;
      case '/service':
        setBreadcrumbTitle('Dịch vụ');
        break;
      case '/news':
        setBreadcrumbTitle('Tin tức');
        break;
      case '/library':
        setBreadcrumbTitle('Thư viện');
        break;
      case '/contact':
        setBreadcrumbTitle('Liên hệ');
        break;
      default:
        break;
    }
  }, [pathName]);

  return (
    <div>
      <div className="breadcrumb relative">
        <Image src={bg1} alt=""></Image>
        <div className=" container absolute top-1/4 left-0 w-full">
          <h2 className="text-[40px] font-bold mb-3">Giới thiệu</h2>
          <div className="breadcrumbLink flex uppercase">
            <Link
              href="/"
              className="text-base ml-1 mr-1 hover:text-primary duration-300"
            >
              Trang chủ
            </Link>
            <span className="text-base ml-1 mr-1">/</span>
            <Link href="" className="text-base ml-1 mr-1 text-primary">
              {breadcrumbTitle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
