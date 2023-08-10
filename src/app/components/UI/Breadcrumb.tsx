
import Image from 'next/image';
import bg1 from '../../../../public/breadcrumb/bg1.jpg';
import Link from 'next/link';
import React, { FC } from 'react';

interface BreadcrumbProps {
  h2: string;
  label: string;
}
const Breadcrumb: FC<BreadcrumbProps> = ({ h2, label }) => {
  return (
    <section>
      <div className="breadcrumb bg-no-repeat bg-cover bg-center block  bg-[url('/breadcrumb/bg1.jpg')] h-auto py-[100px]">
        <div className=" container">
          <div className='pl-32'>
            <h2 className="text-[40px] font-bold mb-3">{h2}</h2>
            <div className="breadcrumbLink flex">
              <Link href="" className="text-base ml-1 mr-1">
                Trang chủ
              </Link>
              <span className="text-base ml-1 mr-1">/</span>
              <Link href="" className="text-base ml-1 mr-1 hover:text-primary">
                {label}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
