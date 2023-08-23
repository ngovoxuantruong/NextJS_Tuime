import Link from 'next/link';
import React, { FC } from 'react';
import {
  TbHeart,
  TbShoppingBag,
  TbSearch,
  TbArrowsExchange2,
} from 'react-icons/tb/';
import { Products } from './MainProduct';
import { formattingPrice } from '@/app/helpers/formattingPrice';
import clsx from 'clsx';

interface ProductItemProps {
  product: Products;
}

const ItemProduct: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product w-full max-h-[402px] border-2 border-gray-100 rounded-sm group group-hover:opacity-100 ">
      {/* SelectTop Product */}
      <div className=" selectTopProduct p-[15px] ">
        <div className="topProduct relative">
          <div className="linkProduct relative">
            <Link
              className="background-widget"
              style={{ backgroundImage: 'url("/product/spnew4.jpg")' }}
              href=""
            />
            <Link className="icon absolute top-0 right-0" href="">
              <TbHeart className="text-4xl p-2 bg-gray-100 rounded-3xl hover:bg-primary hover:text-white"></TbHeart>
            </Link>
          </div>
          <div className="listIcont absolute top-12 right-0 opacity-0 group-hover:opacity-100 ease-in-out transition duration-300">
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
          <div className="statusProduct absolute top-0 left-0 bg-green-600 text-white text-sm pl-3 pr-3">
            {product.status === true ? <p>còn hàng</p> : <p>hết hàng</p>}
          </div>
          <div className="saleProduct absolute top-5 left-0 text-sm bg-primary text-white pl-3 pr-3 mt-2">
            {product.sale && <p>-{product.sale}%</p>}
          </div>
        </div>
      </div>
      {/* Select bottom*/}
      <div className="selectBotomProduct p-[15px]">
        <div className="childrenBP">
          <Link href="" className="nameProduct">
            <p className="text-center text-lg hover:text-primary duration-300">
              {product.name}
            </p>
          </Link>
          <div
            className={clsx(
              'priceCost flex mt-1 text-base font-bold',
              product.cost ? 'justify-between' : 'justify-center',
            )}
          >
            <div className="price text-primary">
              <p>{formattingPrice(product.price)}đ</p>
            </div>
            <div className="cost line-through text-gray-300">
              <p>{product.cost ? `${formattingPrice(product.cost)}đ` : ''}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
