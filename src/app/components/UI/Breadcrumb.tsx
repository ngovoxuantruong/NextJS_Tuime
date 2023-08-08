import React from 'react';
import Image from 'next/image';
import bg1 from '../../../../public/breadcrumb/bg1.jpg';
import Link from 'next/link';
const Breadcrumb = () => {
  return (
    <div>
      <div className="breadcrumb relative ">
        <Image src={bg1} alt=""></Image>
        <div className=" container absolute top-1/4 left-0 w-full">
          <h2 className="text-[40px] font-bold mb-3">Giới thiệu</h2>
          <div className="breadcrumbLink flex">
            <Link href="" className="text-base ml-1 mr-1">
              Trang chủ
            </Link>
            <span className="text-base ml-1 mr-1">/</span>
            <Link href="" className="text-base ml-1 mr-1">
              Giới thiệu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
