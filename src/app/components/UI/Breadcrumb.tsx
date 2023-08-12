import React, { FC, Fragment } from 'react';
import Link from 'next/link';

type Title = {
  title: string;
  src: string;
};

interface BreadcrumbProps {
  breadcrumbTitle: Title[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ breadcrumbTitle }) => {
  return (
    <section>
      <div className="breadcrumb bg-no-repeat bg-cover bg-center block  bg-[url('/breadcrumb/bg1.jpg')] h-auto py-[100px]">
        <div className="container max-w-[1200px]">
          <h2 className="text-[40px] font-bold mb-3">
            {breadcrumbTitle[0].title}
          </h2>
          <div className="breadcrumbLink flex uppercase">
            <Link href="" className="text-base ml-1 mr-1">
              Trang chủ
            </Link>
            {breadcrumbTitle.map(({ title, src }, index) => (
              <Fragment key={index}>
                <span className="text-base ml-1 mr-1">/</span>
                <Link
                  href={src}
                  className="text-base ml-1 mr-1 last:text-primary hover:text-primary"
                >
                  {title}
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
