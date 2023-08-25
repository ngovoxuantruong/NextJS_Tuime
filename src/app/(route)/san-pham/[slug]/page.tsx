'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import '@/app/styles/swiper-image-button.css';
// import required modules
import { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper/modules';

import '@/app/styles/nav-tabs.css';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import { Button } from '@/app/components/ui/Button';
import { formattingPrice } from '@/app/helpers/formattingPrice';
import { FC, useState, Fragment } from 'react';
import { LuHeart } from 'react-icons/lu';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Tags from '@/app/components/ui/Tags';
import Shares from '@/app/components/ui/Shares';
import FacebookComment from '@/app/components/ui/FacebookComment';
import clsx from 'clsx';
import Title from '@/app/components/ui/Title';
import ItemProduct from '@/app/components/homepage/ItemProduct';
import { ProductType } from '@/app/lib/validators/products';

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const tagsInfo = [
    { label: 'Cám trộn 5 trong 1', slug: '#!' },
    { label: 'Thức ăn cho cá bảy màu', slug: '#!' },
    { label: 'Betta', slug: '#!' },
    { label: 'Thuỷ sinh miệng nhỏ', slug: '#!' },
    { label: 'Hỗ trợ tiêu hoá', slug: '#!' },
    { label: 'Lên màu đẹp', slug: '#!' },
  ];

  const allDataProducts: ProductType[] = [
    {
      id: '1',
      name: 'Bình xịt Tropiclean trị ve bọ chét trên chó và ổ nằm',
      price: 195000,

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

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const navTabs = [
    { tabName: 'Mô tả sản phẩm', id: '1' },
    { tabName: 'Bình luận', id: '2' },
  ];

  const [currentTab, setCurrentTab] = useState(1);

  return (
    <section>
      <Breadcrumb
        breadcrumbTitle={[
          { src: '#!', title: 'Sản phẩm' },
          { src: '#!', title: ' Cá cảnh' },
        ]}
      />

      <div className="container max-w-[1200px] flex h-auto py-14">
        {/* Product info */}
        <div className="w-full h-auto top-0 left-0 mb-12 relative">
          <div className="flex flex-wrap justify-between items-start">
            {/* Product info left content */}
            <div className="w-[48%] h-auto  relative">
              {/* Simple slider */}
              <Swiper
                spaceBetween={20}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, FreeMode, Thumbs]}
                className="mySwiper2 sub-slider"
              >
                <SwiperSlide>
                  <article className="w-[576px] h-[434px] border border-solid border-[#ddd] relative">
                    <div className="background-widget bg-[url('/product/cam1.jpg')]"></div>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="w-[576px] h-[434px] border border-solid border-[#ddd] relative">
                    <div className="background-widget bg-[url('/product/cam2.jpg')]"></div>
                  </article>
                </SwiperSlide>
              </Swiper>

              {/* Thumbs slider */}
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-3"
              >
                <SwiperSlide>
                  <article className="w-[107px] mr-3 relative">
                    <div className="bg-no-repeat bg-center bg-contain pb-[100%] bg-[url('/product/cam1.jpg')]"></div>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className="w-[107px] mr-3 relative">
                    <div className="bg-no-repeat bg-center bg-contain pb-[100%] bg-[url('/product/cam2.jpg')]"></div>
                  </article>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Product info right content */}
            <div className="w-[48%] h-auto relative">
              <div className="w-full h-full">
                <h1 className="text-base-200 text-[28px] leading-10  mb-3">
                  Cám trộn 5 trong 1, thức ăn cho cá bảy màu, betta, thuỷ sinh
                  miệng nhỏ, hỗ trợ tiêu hoá, lên màu đẹp
                </h1>
                <div className="w-full h-auto border-dashed border-[#929191] border-y py-[10px] mb-3 relative">
                  <div className="flex justify-start items-center">
                    <div className="w-1/2">Thương hiệu:</div>
                    <div className="w-1/2 flex flex-col">
                      <span>Mã sản phẩm:</span>
                      <span className="text-primary mt-2">
                        SKU-1687252830833
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-fit h-auto flex gap-5 items-center text-2xl mb-3 text-primary font-semibold leading-9">
                  {formattingPrice(75000)} đ
                  <div className="w-fit text-[#999] text-base font-light line-through">
                    {formattingPrice(79000)} đ
                  </div>
                </div>
                <p className="mb-3">
                  Hạt 3/5: thích hợp cho cá con và cá trưởng thành
                </p>
                <div className="w-full h-auto py-3 mb-3 flex gap-3">
                  <div className="max-w-[150px] w-[150px] h-[48px] border-solid border-[#ddd] border relative overflow-hidden">
                    <div className="w-1/2 h-full left-1/2 top-0 -translate-x-1/2 text-base-200 border border-solid border-[#f0f0f0] overflow-hidden absolute">
                      <input
                        className="block w-full h-full text-center"
                        type="text"
                        value={1}
                        placeholder="1"
                      />
                    </div>
                    <a className="w-1/4 h-full inline-flex items-center justify-center cursor-pointer border border-solid border-[#f0f0f0] left-0 top-0  bg-[#ddd] absolute">
                      <span>
                        <AiOutlineMinus />
                      </span>
                    </a>
                    <a className="w-1/4 h-full inline-flex items-center justify-center cursor-pointer border border-solid border-[#f0f0f0] left-full top-0 -translate-x-full bg-[#ddd] absolute">
                      <span>
                        <AiOutlinePlus />
                      </span>
                    </a>
                  </div>
                  <Button
                    className="rounded-sm text-md hover:bg-secondary hover:text-base-200 border-none"
                    variant={'primary'}
                  >
                    Thêm giỏ hàng
                  </Button>
                  <Button size={'sm'} className="rounded-md text-md">
                    <LuHeart />
                  </Button>
                  <Button size={'sm'} className="rounded-md text-md">
                    <LiaExchangeAltSolid />
                  </Button>
                </div>
                <div className="w-full h-auto top-0 left-0 py-5 mb-3 border-dashed border-t border-[#929191] relative">
                  <div className="w-full h-auto flex flex-wrap top-0 left-0 mb-3 relative">
                    <Tags tags={tagsInfo} />
                  </div>
                  <div className="w-full h-full flex top-0 left-0 relative">
                    <Shares />
                  </div>
                </div>
              </div>
            </div>

            {/* Product description */}
            <div className="flex flex-col w-full h-auto top-0 left-0 mb-12 relative">
              <nav className="nav">
                {navTabs.map(({ tabName, id }, index) => (
                  <Fragment key={id}>
                    <a
                      onClick={() => setCurrentTab(index)}
                      className={clsx(
                        'nav-link',
                        currentTab === index ? 'nav-link-active' : '',
                      )}
                    >
                      {tabName}
                    </a>
                  </Fragment>
                ))}
              </nav>

              {/* product info tab*/}
              <div
                className={clsx(
                  'flex flex-col gap-4 pt-5 w-full h-auto leading-7 relative',
                  currentTab === 1 ? '' : 'hidden',
                )}
              >
                <p>
                  Cám Inve Thái là thức ăn cho cá của hãng Inve Thái Lan. Đặc
                  tính của cám Inve là loại thức ăn hạt nổi, cực thơm, cám có
                  chứa các loại chất dinh dưỡng giúp vỗ béo cho cá, cá lớn
                  nhanh, khỏe mạnh, hỗ trợ lên màu, lên vây đẹp. Cám phù hợp cho
                  mọi loại cá, chiếm trên 55% hàm lượng đạm giúp cho cá phát
                  triển tốt hơn. Ngoài ra trong cám còn được trộn thêm 5 thành
                  phần như: men tiêu hoá, men vi sinh, vitamin tổng hợp, vitamin
                  C, tảo bột giúp cá hạn chế được tình trạng tóp bụng, bỏ ăn,
                  tăng cường sức đề kháng cho cá, tép.
                </p>
                <p>- Hạt 3/5: thích hợp cho cá con và cá trưởng thành</p>
                <p>* Xuất xứ: Thái Lan</p>
              </div>

              {/* product comments tab */}
              <div className={clsx('my-5', currentTab === 2 ? '' : 'hidden')}>
                <FacebookComment url="https://localhost:3001" />
              </div>
            </div>

            {/* Relative products */}
            <Title h2="Sản phẩm liên quan" label="Chất lượng tốt nhất" />
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper sub-slider"
            >
              {allDataProducts.map((product: ProductType, index) => (
                <SwiperSlide key={index}>
                  <ItemProduct key={product.id} product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
