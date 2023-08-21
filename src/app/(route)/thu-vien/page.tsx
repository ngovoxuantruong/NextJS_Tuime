import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Link from 'next/link';
import { FaRegImages } from 'react-icons/fa';

type imageLibrary = {
  image: string;
  title: string;
  src: string;
};

const page = () => {
  const imageLibrary: imageLibrary[] = [
    {
      image: '/library/cat1.jpg',
      title: 'Loại mèo nổi tiếng hiện nay',
      src: '',
    },
    {
      image: '/library/cat2.jpg',
      title: 'Những chú mèo đáng yêu nhất thế giới. P2',
      src: '',
    },
    { image: '/library/dog1.jpg', title: 'Các giống chó', src: '' },
    {
      image: '/library/other-pets.jpg',
      title: 'Các loài thú cưng hot',
      src: '',
    },
  ];

  return (
    <section>
      <Breadcrumb breadcrumbTitle={[{ title: 'Thư viện', src: '#!' }]} />
      <div className="container max-w-[1200px] h-auto py-14">
        <div className="repeater-box grid-cols-3 auto-rows-auto gap-5">
          {imageLibrary.map(({ image, title }, index) => (
            <article key={index} className="repeater-item group">
              <div className="w-full h-auto top-0 left-0 rounded-[5px] overflow-hidden mb-5 p relative">
                <Link
                  href={'#!'}
                  style={{ backgroundImage: `url(${image})` }}
                  className="background-widget hover:scale-110 hover:brightness-75"
                ></Link>
                <Link
                  href={'#!'}
                  className="w-10 white text-3xl text-center p-2 top-1/2 left-1/2 h-10 -translate-x-1/2 -translate-y-1/2 duration-300 scale-0 group-hover:scale-100 absolute inline-flex "
                >
                  <span
                    className="inline-flex items-center justify-center px-1"
                    title="Xem chi tiết"
                  >
                    <FaRegImages color="white" />
                  </span>
                </Link>
              </div>
              <h3 className="text-base-200 hover:text-primary duration-300 text-xl text-center font-medium pb-5">
                <a href="#!">{title}</a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
