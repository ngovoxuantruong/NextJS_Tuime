import Image from 'next/image';
import { Button } from '../ui/Button';
import Link from 'next/link';

const PetDiscount = () => {
  const petDiscountImage = [
    { src: '/pet-discount-bg/cat.jpg', h3: 'Sản phẩm cho mèo' },
    { src: '/pet-discount-bg/dog.jpg', h3: 'Sản phẩm cho chó' },
  ];

  return (
    <section className="container max-w-[1200px] my-12">
      <div className="repeater-box grid-cols-2 auto-rows-auto gap-5">
        {petDiscountImage.map(({ src, h3 }, index) => (
          <article
            key={index}
            className="repeater-item top-0 left-0 block w-full h-full"
          >
            <Link href="#!">
              <Image
                className="hover:scale-110 duration-500"
                alt="cat"
                src={src}
                width={560}
                height={310}
              />
            </Link>
            <div className="w-[45%] h-auto top-[50%] left-full -translate-x-full -translate-y-1/2 pl-5 block absolute">
              <div className="w-full h-full relative">
                <div className="text-primary text-2xl font-semibold mb-[5px]">
                  Giảm 50%
                </div>
                <h3 className="text-primary text-4xl mb-5 text-left font-semibold uppercase leading-[45px]">
                  {h3}
                </h3>
                <Button variant={'primary'}>Xem ngay</Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PetDiscount;
