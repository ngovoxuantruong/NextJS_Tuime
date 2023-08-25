import React, { FC } from 'react';
import Title from './Title';
import Image from 'next/image';
import { Button } from './Button';

interface SpecialProductProp {
  orderLeft: string;
  orderRight: string;
  isButton?: boolean;
  label: string;
  h2: string;
  picture: any;
  specialDes: any;
}

const SpecialProducts: FC<SpecialProductProp> = ({
  orderLeft,
  orderRight,
  isButton,
  label,
  h2,
  picture,
  specialDes,
}) => {
  return (
    <div className="specialProducts pt-[50px] pb-[50px] bg-gray-100">
      <div className="container max-w-[1200px]">
        <div className="selectSpecialProduct grid grid-cols-2 gap-10">
          {/* specialProductsLeft */}
          <div className={orderLeft}>
            <Title label={label} h2={h2}></Title>
            <div className="productIntroduction mb-5 text-base text-justify">
              <div
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: specialDes }}
              ></div>
            </div>
            {isButton && <Button>Xem ngay</Button>}
          </div>
          {/* specialProductsRight */}
          <div className={orderRight}>
            <Image src={picture} width={600} height={600} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
