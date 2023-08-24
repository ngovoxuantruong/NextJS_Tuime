'use client';

import Link from 'next/link';
import Title from '../ui/Title';

import ItemProduct from './ItemProduct';
import { useState } from 'react';
import clsx from 'clsx';
import { ProductType } from '@/app/lib/validators/products';

const allDataProducts: ProductType[] = [
  {
    id: '1',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '2',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: false,
  },
  {
    id: '3',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '4',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '5',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '6',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
];

const dogDataProducts: ProductType[] = [
  {
    id: '1',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '2',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: false,
  },
  {
    id: '3',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '4',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '5',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
];
const catDataProducts: ProductType[] = [
  {
    id: '1',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,

    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '2',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,

    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: false,
  },
  {
    id: '3',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,

    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '4',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,

    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
];

const birdDataProducts: ProductType[] = [
  {
    id: '1',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '2',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,

    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: false,
  },
  {
    id: '3',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
];
const fishDataProducts: ProductType[] = [
  {
    id: '1',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: true,
  },
  {
    id: '2',
    name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
    price: 195000,
    cost: 210000,
    picture:
      'https://demo037127.web30s.vn/datafiles/34980/upload/images/san-pham/spnew4.jpg?t=1687163523',
    sale: 5,
    status: false,
  },
];

interface menuMainProduct {
  id: string;
  name: string;
}

const allMenuMain: menuMainProduct[] = [
  { id: '1', name: 'Tất cả' },
  { id: '2', name: 'Đồ ăn cho chó' },
  { id: '3', name: 'Đồ ăn cho mèo' },
  { id: '4', name: 'Chim cảnh' },
  { id: '5', name: 'Cá cảnh' },
];

const MainProduct = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleClickActiveTab = (tabNumber: string) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="mainProduct">
      <div className="container max-w-[1200px]">
        {/* Top Main Product */}
        <div className="mpTop">
          <Title label="chất lượng tốt nhấT" h2="Sản Phẩm Chính"></Title>
        </div>
        <div className="mpBotom">
          {/* Menu main product */}
          <ul className="menuMP flex justify-center">
            {allMenuMain.map((item) => (
              <li
                className={clsx(
                  'mr-4 border-dashed border-2 border-transparent hover:border-primary box-border rounded-3xl',
                  activeTab === '1'
                    ? `[&:nth-child(1)]:border-primary`
                    : activeTab === '2'
                    ? `[&:nth-child(2)]:border-primary`
                    : activeTab === '3'
                    ? `[&:nth-child(3)]:border-primary`
                    : activeTab === '4'
                    ? `[&:nth-child(4)]:border-primary`
                    : activeTab === '5'
                    ? `[&:nth-child(5)]:border-primary`
                    : '',
                )}
                key={item.id}
              >
                {
                  <div
                    id="forcus"
                    onClick={() => handleClickActiveTab(item.id)}
                    className="pt-2 pb-2 pl-5 pr-5 text-xl cursor-pointer"
                  >
                    {item.name}
                  </div>
                }
              </li>
            ))}
          </ul>
          <div className="listProduct pt-10">
            <div className="selectListProduct">
              <div className="products grid grid-cols-4 grid-flow-row gap-4 ">
                {/* Product */}
                {activeTab === '1'
                  ? allDataProducts.map((product: ProductType) => (
                      <ItemProduct key={product.id} product={product} />
                    ))
                  : activeTab === '2'
                  ? dogDataProducts.map((product: ProductType) => (
                      <ItemProduct key={product.id} product={product} />
                    ))
                  : activeTab === '3'
                  ? catDataProducts.map((product: ProductType) => (
                      <ItemProduct key={product.id} product={product} />
                    ))
                  : activeTab == '4'
                  ? birdDataProducts.map((product: ProductType) => (
                      <ItemProduct key={product.id} product={product} />
                    ))
                  : fishDataProducts.map((product: ProductType) => (
                      <ItemProduct key={product.id} product={product} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
