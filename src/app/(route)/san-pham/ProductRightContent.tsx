import ItemProduct from '@/app/components/homepage/ItemProduct';
import { ProductType } from '@/app/lib/validators/products';
import { Pagination } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const ProductRightContent = () => {
  const allDataProducts: ProductType[] = [
    {
      id: '1',
      name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
      price: 195000,
      picture:
        'https://demo03@7127.web30s.vn/datafiles/34980/upload/images/product/thuc-an-jbl-novo-tab-thuc-an-ca-canh-1.jpg?t=1687253366',
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

  return (
    <div className="w-full h-full relative overflow-hidden max-w-[1200px]">
      {/* Product banner */}
      <div className="w-full h-auto relative mb-7">
        <Link
          href={'#!'}
          className="w-full bg-no-repeat bg-center bg-contain top-0 left-0 block relative hover:scale-105 duration-300 "
        >
          <Image
            alt="product-banner"
            src={'/product-banner.jpg'}
            width={900}
            height={250}
          />
        </Link>
        <div className="w-[45%] h-auto top-1/2 left-0 -translate-y-1/2 translate-x-0 pl-5 absolute">
          <div className="w-full h-full relative text-primary">
            <div className="text-xl leading-8 font-semibold mb-1">
              Giảm giá 25%
            </div>
            <h3 className="font-medium mb-3">Các Sản Phẩm Cho Thú Cưng</h3>
            <Link
              href={'#!'}
              className="uppercase font-semibold border-b border-solid border-primary"
            >
              Xem ngay
            </Link>
          </div>
        </div>
      </div>

      {/* Sort */}
      <div className="top-0 left-0 w-full relative">
        <div className="relative py-3 flex flex-wrap items-center">
          {/* Products show limit */}
          <div className="pr-4 inline-flex wrap justify-between items-center relative">
            <label className="mr-2">Hiển thị</label>
            <select className="border border-solid border-primary p-1 bg-base-100 outline-none">
              <option>Mặc định</option>
              <option value="9">9</option>
              <option value="18">18</option>
              <option value="27">27</option>
              <option value="36">36</option>
            </select>
          </div>
          {/* Products sort */}
          <div className="inline-flex wrap justify-between items-center relative">
            <label className="mr-2">Sắp xếp</label>
            <select className="border border-solid border-primary p-1 bg-base-100 outline-none">
              <option>Mặc định</option>
              <option value="1">Sắp xếp theo giá (Nhỏ -&#x3E; Lớn)</option>
              <option value="2">Sắp xếp theo giá (Lớn -&#x3E; Nhỏ)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="repeater-box grid-cols-3 gap-5">
        {allDataProducts.map((product, index) => (
          <div key={index}>
            <ItemProduct product={product} />
          </div>
        ))}
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default ProductRightContent;
